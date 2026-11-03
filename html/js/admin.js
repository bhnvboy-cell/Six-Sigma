(function (root) {
    "use strict";

    const state = {
        learners: [],
        exams: [],
        logins: [],
        query: ""
    };

    function tr(key, fallback) {
        return root.LssI18n ? root.LssI18n.t(key, fallback) : fallback;
    }

    function esc(value) {
        return String(value === undefined || value === null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function fmtDate(value) {
        if (!value) return "";
        let text = String(value);
        if (/^\d{4}-\d{2}-\d{2}T[\d:.]+$/.test(text)) text += "Z";
        const date = new Date(text);
        return isNaN(date.getTime()) ? String(value) : date.toLocaleString();
    }

    function beltName(value) {
        const names = {
            white: "White Belt",
            yellow: "Yellow Belt",
            green: "Green Belt",
            black: "Black Belt",
            "master-black": "Master Black Belt"
        };
        const key = String(value || "").toLowerCase();
        return names[key] ? tr("belt." + key, names[key]) : (value || "");
    }

    function matches(query, fields) {
        if (!query) return true;
        return fields.some(function (field) {
            return String(field === undefined || field === null ? "" : field).toLowerCase().includes(query);
        });
    }

    function status(message, tone) {
        const area = document.getElementById("adminStatus");
        if (!area) return;
        if (!message) {
            area.innerHTML = "";
            return;
        }
        area.innerHTML = '<div class="alert alert-' + (tone || "info") + ' py-2" role="alert">' +
            esc(message) + "</div>";
    }

    function statusHtml(html, tone) {
        const area = document.getElementById("adminStatus");
        if (!area) return;
        if (!html) {
            area.innerHTML = "";
            return;
        }
        area.innerHTML = '<div class="alert alert-' + (tone || "info") + ' py-2" role="alert">' +
            html + "</div>";
    }

    function apiData(path) {
        return root.LssApi.request(path).then(function (payload) {
            return payload && Object.prototype.hasOwnProperty.call(payload, "data") ? payload.data : payload;
        });
    }

    function renderSummary() {
        const area = document.getElementById("adminSummary");
        if (!area) return;
        const passed = state.exams.filter(function (exam) { return exam.passed; }).length;
        const successful = state.logins.filter(function (entry) { return entry.success; }).length;
        const cards = [
            { label: tr("admin.summaryLearners", "Learners"), value: state.learners.length, icon: "fa-users", tone: "primary" },
            { label: tr("admin.summaryAttempts", "Exam attempts"), value: state.exams.length, icon: "fa-file-pen", tone: "secondary" },
            { label: tr("admin.summaryPassed", "Passed exams"), value: passed, icon: "fa-circle-check", tone: "success" },
            { label: tr("admin.summaryLogins", "Successful sign-ins"), value: successful, icon: "fa-right-to-bracket", tone: "info" }
        ];
        area.innerHTML = cards.map(function (card) {
            return `
                <div class="col-6 col-lg-3">
                    <div class="card h-100 border-${card.tone}">
                        <div class="card-body">
                            <div class="text-muted small"><i class="fas ${card.icon} me-1"></i>${card.label}</div>
                            <div class="display-6 fw-bold">${card.value}</div>
                        </div>
                    </div>
                </div>`;
        }).join("");
    }

    function renderLearners() {
        const body = document.getElementById("learnersTable");
        if (!body) return;
        const rows = state.learners.filter(function (learner) {
            return matches(state.query, [learner.username, learner.email, learner.lastLoginIp, learner.firstName, learner.lastName]);
        });
        if (!rows.length) {
            body.innerHTML = '<tr><td colspan="7" class="text-muted p-3">' + esc(tr("admin.noLearners", "No learners match the filter.")) + "</td></tr>";
            return;
        }
        body.innerHTML = rows.map(function (learner) {
            const role = learner.role === "admin" ? ' <span class="badge bg-dark">admin</span>' : "";
            return `
                <tr>
                    <td><strong>${esc(learner.username)}</strong>${role}</td>
                    <td class="small">${esc(learner.email)}</td>
                    <td>${esc(beltName(learner.beltLevel))}</td>
                    <td class="text-end">${esc(learner.completedLessons)}</td>
                    <td class="text-end">${esc(learner.certificates)}</td>
                    <td class="small">${esc(fmtDate(learner.lastLogin))}</td>
                    <td class="small"><code>${esc(learner.lastLoginIp || "-")}</code></td>
                </tr>`;
        }).join("");
    }

    function renderExams() {
        const body = document.getElementById("examResultsTable");
        if (!body) return;
        const rows = state.exams.filter(function (exam) {
            return matches(state.query, [exam.username, exam.beltLevel]);
        });
        if (!rows.length) {
            body.innerHTML = '<tr><td colspan="7" class="text-muted p-3">' + esc(tr("admin.noExams", "No exam attempts match the filter.")) + "</td></tr>";
            return;
        }
        body.innerHTML = rows.map(function (exam) {
            const result = exam.passed
                ? '<span class="badge bg-success">' + esc(tr("admin.passed", "Passed")) + "</span>"
                : '<span class="badge bg-danger">' + esc(tr("admin.failed", "Failed")) + "</span>";
            return `
                <tr>
                    <td><strong>${esc(exam.username)}</strong></td>
                    <td>${esc(beltName(exam.beltLevel))}</td>
                    <td class="text-end">${esc(exam.attemptNumber)}</td>
                    <td class="text-end">${esc(exam.correctCount)} / ${esc(exam.questionCount)}</td>
                    <td class="text-end fw-semibold">${esc(exam.score)}%</td>
                    <td>${result}</td>
                    <td class="small">${esc(fmtDate(exam.completedAt))}</td>
                </tr>`;
        }).join("");
    }

    function renderLogins() {
        const body = document.getElementById("loginAuditTable");
        if (!body) return;
        const rows = state.logins.filter(function (entry) {
            return matches(state.query, [entry.username, entry.ipAddress, entry.userAgent]);
        });
        if (!rows.length) {
            body.innerHTML = '<tr><td colspan="5" class="text-muted p-3">' + esc(tr("admin.noLogins", "No sign-in activity matches the filter.")) + "</td></tr>";
            return;
        }
        body.innerHTML = rows.map(function (entry) {
            const result = entry.success
                ? '<span class="badge bg-success">' + esc(tr("admin.success", "Success")) + "</span>"
                : '<span class="badge bg-danger">' + esc(tr("admin.failed", "Failed")) + "</span>";
            const device = entry.userAgent || "";
            return `
                <tr>
                    <td class="small">${esc(fmtDate(entry.attemptedAt))}</td>
                    <td><strong>${esc(entry.username)}</strong></td>
                    <td class="small"><code>${esc(entry.ipAddress || "-")}</code></td>
                    <td>${result}</td>
                    <td class="small text-muted" title="${esc(device)}">${esc(device.length > 60 ? device.slice(0, 60) + "..." : device)}</td>
                </tr>`;
        }).join("");
    }

    function renderAll() {
        renderSummary();
        renderLearners();
        renderExams();
        renderLogins();
    }

    async function loadAll() {
        statusHtml('<span class="spinner-border spinner-border-sm me-1"></span>' + esc(tr("admin.loadingDashboard", "Loading dashboard...")), "light");
        try {
            const results = await Promise.all([
                apiData("/api/admin/learners"),
                apiData("/api/admin/exam-results"),
                apiData("/api/admin/login-audit?limit=1000")
            ]);
            state.learners = results[0] || [];
            state.exams = results[1] || [];
            state.logins = results[2] || [];
            renderAll();
            status("");
        } catch (error) {
            status(
                root.LssApi.isUnavailable(error)
                    ? tr("admin.apiUnavailable", "The API is unavailable. Start the Flask server and sign in as an administrator.")
                    : (error.message || "The dashboard could not be loaded."),
                "warning"
            );
        }
    }

    async function downloadCsv(path, filename) {
        try {
            const response = await root.fetch(root.LssApi.url(path), { credentials: "include" });
            if (!response.ok) {
                throw new Error(tr("admin.exportFailed", "Export failed") + " HTTP " + response.status + ".");
            }
            const blob = await response.blob();
            const url = root.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();
            root.URL.revokeObjectURL(url);
        } catch (error) {
            status(error.message || "The export could not be downloaded.", "danger");
        }
    }

    function bindExport(buttonId, path, filename) {
        const button = document.getElementById(buttonId);
        if (!button) return;
        button.addEventListener("click", function () {
            downloadCsv(path, filename);
        });
    }

    async function init() {
        if (!root.LssApi) {
            status(tr("admin.apiUnavailable", "The API client is unavailable."), "danger");
            return;
        }
        let user = null;
        try {
            const payload = await root.LssApi.me();
            user = payload && payload.user ? payload.user : payload;
        } catch (error) {
            statusHtml('<a href="login.html?return=admin.html">' +
                esc(tr("admin.signInRequired", "Please sign in with an administrator account.")) + "</a>", "warning");
            return;
        }
        if (!user || user.role !== "admin") {
            status(esc(tr("admin.adminRequired", "This page requires an administrator account.")) + " " +
                esc(user ? user.username : "unknown") + ".", "warning");
            return;
        }

        const search = document.getElementById("adminSearch");
        if (search) {
            search.addEventListener("input", function () {
                state.query = search.value.trim().toLowerCase();
                renderAll();
            });
        }

        bindExport("exportLearners", "/api/admin/export/learners.csv", "learners.csv");
        bindExport("exportExams", "/api/admin/export/exam-results.csv", "exam-results.csv");
        bindExport("exportLogins", "/api/admin/export/login-audit.csv", "login-audit.csv");

        const refresh = document.getElementById("refreshBtn");
        if (refresh) refresh.addEventListener("click", loadAll);

        await loadAll();
    }

    document.addEventListener("DOMContentLoaded", async function () {
        if (root.LssI18n && root.LssI18n.ready) {
            try { await root.LssI18n.ready; } catch (error) { /* keep English */ }
        }
        if (root.sessionReady) {
            try { await root.sessionReady; } catch (error) { /* handled by init */ }
        }
        init();
    });
}(typeof globalThis !== "undefined" ? globalThis : this));
