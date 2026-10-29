(function (root) {
    "use strict";

    function byId(id) {
        return document.getElementById(id);
    }

    function store() {
        return root.ResourceStore;
    }

    function loginReturnUrl() {
        return "login.html?return=" + encodeURIComponent("my-project.html");
    }

    function uniqueProjects(copies) {
        const names = {};
        copies.forEach(function (copy) {
            const name = String(copy.projectName || copy.copyName || "").trim().toLowerCase();
            if (name) names[name] = true;
        });
        return Object.keys(names).length;
    }

    function statCard(value, label, icon) {
        return '<div class="project-stat"><strong><i class="fas ' + icon + ' me-1 text-primary"></i>' + value +
            "</strong><span>" + label + "</span></div>";
    }

    function heroHtml(user) {
        const S = store();
        return `
            <section class="project-hero">
                <div>
                    <h1><i class="fas fa-folder-open me-2 text-primary"></i>My Project</h1>
                    <p>${user ? "Resume saved DMAIC templates, track completeness, and export project-ready PDFs." : "Sign in to save fillable templates and organize them by DMAIC phase."}</p>
                </div>
                <div class="d-flex flex-wrap align-items-center gap-2">
                    <span class="belt-badge ${S.beltIndex(S.currentBelt()) >= 3 ? "black" : S.beltIndex(S.currentBelt()) >= 2 ? "green" : S.beltIndex(S.currentBelt()) >= 1 ? "yellow" : "white"}">
                        <i class="fas fa-award me-1"></i>${S.escapeHtml(S.beltName(S.currentBelt()))}
                    </span>
                    <a href="resources.html#templates" class="btn btn-primary"><i class="fas fa-layer-group me-1"></i>Browse templates</a>
                    ${user ? '<a href="profile.html#beltLevel" class="btn btn-outline-secondary"><i class="fas fa-sliders me-1"></i>Change belt</a>' : ""}
                </div>
            </section>
            <div id="projectNotice" class="mt-3"></div>`;
    }

    function signedOutHtml() {
        return `
            <div class="project-empty mt-3">
                <i class="fas fa-user-lock"></i>
                <h2>Sign in to open My Project</h2>
                <p>Your saved copies stay in this browser and are linked to your learner profile. The editor still works without an account for filling templates and exporting PDFs.</p>
                <a href="${loginReturnUrl()}" class="btn btn-primary"><i class="fas fa-right-to-bracket me-1"></i>Sign in</a>
                <a href="resources.html#templates" class="btn btn-outline-secondary">Browse templates</a>
            </div>`;
    }

    function emptyHtml() {
        return `
            <div class="project-empty mt-3">
                <i class="fas fa-file-circle-plus"></i>
                <h2>No saved copies yet</h2>
                <p>Open a template, fill in your project details, and choose <strong>Save copy</strong>. It will appear here grouped by DMAIC phase.</p>
                <a href="resources.html#templates" class="btn btn-primary"><i class="fas fa-arrow-right me-1"></i>Choose a template</a>
            </div>`;
    }

    function copyCard(copy, template) {
        const S = store();
        const status = S.statusFor(template, copy);
        const phase = S.phaseInfo(template.phase);
        const openUrl = "resource-editor.html?copy=" + encodeURIComponent(copy.id);
        const printUrl = openUrl + "&print=1";
        return `
            <div class="col-md-6 col-xl-4">
                <article class="project-card">
                    <div class="project-card-top">
                        <span class="resource-icon ${phase.tone}"><i class="fas ${S.escapeHtml(template.icon)}"></i></span>
                        <div class="flex-grow-1 min-w-0">
                            <h4>${S.escapeHtml(copy.copyName)}</h4>
                            <div class="project-template-name">${S.escapeHtml(template.title)}</div>
                        </div>
                        <span class="project-status ${status.className}">${status.label}</span>
                    </div>
                    <div class="project-name"><i class="fas fa-diagram-project me-1"></i>${S.escapeHtml(copy.projectName || "Project not named")}</div>
                    <div class="project-progress progress"><div class="progress-bar" style="width:${status.percent}%"></div></div>
                    <div class="project-card-meta">
                        <span><i class="far fa-clock me-1"></i>Updated ${S.escapeHtml(S.formatDate(copy.updatedAt))}</span>
                        <span>${status.percent}% required fields</span>
                    </div>
                    <div class="project-card-actions">
                        <a href="${openUrl}" class="btn btn-sm btn-primary"><i class="fas fa-pen me-1"></i>Open</a>
                        <a href="${printUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary"><i class="fas fa-file-pdf me-1"></i>PDF</a>
                        <button type="button" class="btn btn-sm btn-outline-danger ms-auto" data-delete-copy="${S.escapeHtml(copy.id)}"><i class="fas fa-trash-can"></i><span class="visually-hidden">Delete copy</span></button>
                    </div>
                </article>
            </div>`;
    }

    function groupHtml(copies, templateMap) {
        const S = store();
        return S.PHASES.map(function (phase) {
            const items = copies.filter(function (copy) {
                const template = templateMap[copy.resourceId];
                return template && template.phase === phase.id;
            });
            if (!items.length) return "";
            return `
                <section class="project-phase" id="project-${phase.id.toLowerCase()}">
                    <div class="resource-phase-heading">
                        <div>
                            <span class="resource-phase-icon ${phase.tone}"><i class="fas ${phase.icon}"></i></span>
                            <h3>${phase.id}</h3>
                            <span class="text-muted small">${items.length} ${items.length === 1 ? "copy" : "copies"}</span>
                        </div>
                        <a href="resources.html#templates" class="small text-decoration-none">Add template <i class="fas fa-arrow-right ms-1"></i></a>
                    </div>
                    <div class="row g-3">${items.map(function (copy) {
                        return copyCard(copy, templateMap[copy.resourceId]);
                    }).join("")}</div>
                </section>`;
        }).join("");
    }

    function render() {
        const area = byId("myProjectArea");
        const S = store();
        if (!area || !S) return;
        const user = S.currentUser();
        if (!user) {
            area.innerHTML = heroHtml(null) + signedOutHtml();
            return;
        }
        const copies = S.listCopies();
        const templateMap = {};
        S.templates().forEach(function (template) { templateMap[template.id] = template; });
        const visibleCopies = copies.filter(function (copy) { return templateMap[copy.resourceId]; });
        const completed = visibleCopies.filter(function (copy) {
            return S.statusFor(templateMap[copy.resourceId], copy).percent >= 100;
        }).length;
        area.innerHTML = heroHtml(user) + `
            <div class="project-stats">
                ${statCard(copies.length, "Saved copies", "fa-file-lines")}
                ${statCard(uniqueProjects(copies), "Projects", "fa-diagram-project")}
                ${statCard(completed, "Complete", "fa-circle-check")}
                ${statCard(S.beltName(S.currentBelt()), "Resource access", "fa-award")}
            </div>
            ${visibleCopies.length ? groupHtml(visibleCopies, templateMap) : emptyHtml()}`;
    }

    function notice(message, tone) {
        const container = byId("projectNotice");
        if (!container) return;
        container.innerHTML = '<div class="alert alert-' + tone + ' alert-dismissible fade show py-2" role="alert">' +
            store().escapeHtml(message) + '<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>';
    }

    function bindEvents() {
        byId("myProjectArea").addEventListener("click", function (event) {
            const button = event.target.closest("[data-delete-copy]");
            if (!button) return;
            const S = store();
            const copy = S.getCopy(button.getAttribute("data-delete-copy"));
            if (!copy) return;
            if (!root.confirm('Delete "' + copy.copyName + '"? This cannot be undone.')) return;
            if (S.deleteCopy(copy.id)) {
                render();
                notice('Deleted "' + copy.copyName + '".', "success");
            } else {
                notice("That copy could not be deleted.", "danger");
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        render();
        bindEvents();
    });
}(typeof globalThis !== "undefined" ? globalThis : this));
