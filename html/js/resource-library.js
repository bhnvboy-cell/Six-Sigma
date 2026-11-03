(function (root) {
    "use strict";

    function accessBar() {
        const S = root.ResourceStore;
        const user = S.currentUser();
        const belt = S.currentBelt();
        const count = S.listCopies().length;
        return `
            <div class="resource-access">
                <div>
                    <span class="resource-access-label">Your resource access</span>
                    <span class="belt-badge ${S.beltIndex(belt) >= 3 ? "black" : S.beltIndex(belt) >= 2 ? "green" : S.beltIndex(belt) >= 1 ? "yellow" : "white"}">
                        <i class="fas fa-award me-1"></i>${S.escapeHtml(S.beltName(belt))}
                    </span>
                    ${user ? "" : '<span class="text-muted small ms-2">Viewing as White Belt. <a href="login.html?return=resources.html">Sign in</a> to save copies.</span>'}
                </div>
                <div class="d-flex flex-wrap align-items-center gap-2">
                    <span class="small text-muted"><i class="fas fa-folder-open me-1"></i>${count} saved ${count === 1 ? "copy" : "copies"}</span>
                    <a href="my-project.html" class="btn btn-sm btn-outline-primary"><i class="fas fa-diagram-project me-1"></i>My Project</a>
                    ${user ? '<a href="profile.html#beltLevel" class="btn btn-sm btn-outline-secondary">Change belt</a>' : ""}
                </div>
            </div>`;
    }

    function templateCard(template, belt) {
        const S = root.ResourceStore;
        const unlocked = S.isUnlocked(template, belt);
        const saved = S.copiesForTemplate(template.id).length;
        const phase = S.phaseInfo(template.phase);
        const editorLink = "resource-editor.html?template=" + encodeURIComponent(template.id);
        return `
            <div class="col-md-6 col-xl-4">
                <article class="resource-card ${unlocked ? "" : "locked"}">
                    <div class="resource-card-top">
                        <span class="resource-icon ${phase.tone}"><i class="fas ${S.escapeHtml(template.icon)}"></i></span>
                        <div class="resource-card-heading">
                            <h4>${S.escapeHtml(template.title)}</h4>
                            <div class="resource-card-meta">
                                <span><i class="fas fa-clock me-1"></i>${template.estimatedMinutes || 20} min</span>
                                <span><i class="fas fa-award me-1"></i>${S.escapeHtml(S.beltName(template.minBelt))}+</span>
                            </div>
                        </div>
                        ${unlocked ? "" : '<span class="resource-lock" title="Locked by belt level"><i class="fas fa-lock"></i></span>'}
                    </div>
                    <p class="resource-description">${S.escapeHtml(template.description)}</p>
                    <div class="resource-card-footer">
                        ${saved ? `<a href="my-project.html" class="saved-count"><i class="fas fa-folder-check me-1"></i>${saved} saved</a>` : '<span class="text-muted small">No saved copies</span>'}
                        ${unlocked
                            ? `<a class="btn btn-sm btn-primary" href="${editorLink}">${saved ? "New copy" : "Open template"}<i class="fas fa-arrow-right ms-1"></i></a>`
                            : S.isApiUser()
                                ? `<a class="btn btn-sm btn-outline-secondary" href="quizzes.html?belt=${encodeURIComponent(template.minBelt)}"><i class="fas fa-lock me-1"></i>Pass ${S.escapeHtml(S.beltName(template.minBelt))} exam</a>`
                                : `<a class="btn btn-sm btn-outline-secondary" href="profile.html#beltLevel"><i class="fas fa-lock me-1"></i>Unlock at ${S.escapeHtml(S.beltName(template.minBelt))}</a>`}
                    </div>
                </article>
            </div>`;
    }

    function renderResourceLibrary() {
        const container = document.getElementById("resourceLibrary");
        if (!container || !root.ResourceStore) return;
        const S = root.ResourceStore;
        const templates = S.templates();
        const belt = S.currentBelt();
        const phaseHtml = S.PHASES.map(function (phase) {
            const items = templates.filter(function (template) { return template.phase === phase.id; });
            if (!items.length) return "";
            const unlocked = items.filter(function (template) { return S.isUnlocked(template, belt); }).length;
            return `
                <section class="resource-phase" id="phase-${phase.id.toLowerCase()}">
                    <div class="resource-phase-heading">
                        <div>
                            <span class="resource-phase-icon ${phase.tone}"><i class="fas ${phase.icon}"></i></span>
                            <h3>${phase.id}</h3>
                            <span class="text-muted small">${items.length} templates</span>
                        </div>
                        <span class="badge text-bg-light border">${unlocked} of ${items.length} unlocked</span>
                    </div>
                    <div class="row g-3">${items.map(function (template) { return templateCard(template, belt); }).join("")}</div>
                </section>`;
        }).join("");

        container.innerHTML = accessBar() + phaseHtml;
    }

    root.renderResourceLibrary = renderResourceLibrary;
    document.addEventListener("DOMContentLoaded", async function () {
        if (root.sessionReady) await root.sessionReady;
        const S = root.ResourceStore;
        if (S && S.refreshCopies) {
            try {
                await S.refreshCopies();
            } catch (error) {
                console.warn(error.message);
            }
        }
        renderResourceLibrary();
    });
}(typeof globalThis !== "undefined" ? globalThis : this));
