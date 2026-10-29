const BELT_THEMES = {
    white: {
        badge: "belt-badge white",
        border: "#adb5bd",
        button: "btn-outline-dark",
        soft: "bg-light"
    },
    yellow: {
        badge: "belt-badge yellow",
        border: "#ffc107",
        button: "btn-warning",
        soft: "bg-warning bg-opacity-10"
    },
    green: {
        badge: "belt-badge green",
        border: "#198754",
        button: "btn-success",
        soft: "bg-success bg-opacity-10"
    },
    black: {
        badge: "belt-badge black",
        border: "#212529",
        button: "btn-dark",
        soft: "bg-dark bg-opacity-10"
    },
    master: {
        badge: "belt-badge master",
        border: "#000000",
        button: "btn-dark",
        soft: "bg-dark bg-opacity-10"
    }
};

function beltTheme(belt) {
    return BELT_THEMES[belt.color] || BELT_THEMES.white;
}

function beltLessonCount(belt) {
    return belt.modules.reduce((total, mod) => total + mod.lessons.length, 0);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderQuickNav() {
    const nav = document.getElementById("beltQuickNav");
    if (!nav) return;
    nav.innerHTML = curriculumData.belts.map(belt => {
        const theme = beltTheme(belt);
        return `<a href="#${belt.id}" class="btn ${theme.button} btn-sm rounded-pill px-3">
            <i class="fas ${belt.icon} me-1"></i>${escapeHtml(belt.name)}
        </a>`;
    }).join("");
}

function renderBeltOverview(belt) {
    return `
        <div class="card mb-4">
            <div class="card-body">
                <div class="row g-4">
                    <div class="col-md-4">
                        <h6 class="text-uppercase text-muted small">Who it is for</h6>
                        <p class="mb-0">${escapeHtml(belt.audience)}</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-uppercase text-muted small">Prerequisites</h6>
                        <p class="mb-0">${escapeHtml(belt.prerequisites)}</p>
                        <h6 class="text-uppercase text-muted small mt-3">Study time</h6>
                        <p class="mb-0">${escapeHtml(belt.studyTime)}</p>
                    </div>
                    <div class="col-md-4">
                        <h6 class="text-uppercase text-muted small">What you can do after this belt</h6>
                        <ul class="mb-0 ps-3">
                            ${belt.outcomes.map(outcome => `<li>${escapeHtml(outcome)}</li>`).join("")}
                        </ul>
                    </div>
                    <div class="col-12">
                        <div class="alert alert-light border mb-0">
                            <strong>Previous belt recap:</strong> ${escapeHtml(belt.previousRecap)}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function renderModuleCard(belt, mod) {
    const theme = beltTheme(belt);
    const lessons = mod.lessons.map(lesson => `
        <li><span class="text-muted me-1">${escapeHtml(lesson.id)}</span>${escapeHtml(lesson.title)}</li>
    `).join("");

    return `
        <div class="col-lg-6 mb-4">
            <div class="card module-card h-100" style="border-left-color: ${theme.border};">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                        <h5 class="card-title mb-0">${mod.number}. ${escapeHtml(mod.title)}</h5>
                        <span class="badge ${theme.soft} text-dark border">${escapeHtml(mod.duration)}</span>
                    </div>
                    <p class="card-text">${escapeHtml(mod.summary)}</p>
                    <h6 class="text-uppercase text-muted small mt-2">Lessons (${mod.lessons.length})</h6>
                    <ol class="small lesson-list mb-3">${lessons}</ol>
                    <div class="mt-auto">
                        <a href="module-detail.html?module=${encodeURIComponent(mod.id)}" class="btn ${theme.button} w-100">
                            <i class="fas fa-book-open me-1"></i>Open Module
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
}

function renderCoverageChecklist(belt) {
    return `
        <details class="mb-3">
            <summary class="fw-semibold text-muted">
                <i class="fas fa-clipboard-check me-1"></i>Body of Knowledge coverage checklist
            </summary>
            <div class="table-responsive mt-2">
                <table class="table table-sm align-middle mb-0">
                    <thead><tr><th>Required topic</th><th>Covered by</th><th class="text-end">Status</th></tr></thead>
                    <tbody>
                        ${belt.coverageChecklist.map(item => `
                            <tr>
                                <td>${escapeHtml(item.topic)}</td>
                                <td>${item.lessons.map(escapeHtml).join(", ")}</td>
                                <td class="text-end"><span class="badge bg-success">Covered</span></td>
                            </tr>`).join("")}
                    </tbody>
                </table>
            </div>
        </details>`;
}

function renderBeltExtras(belt) {
    return `
        <div class="row g-3 mb-4">
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header bg-light fw-semibold"><i class="fas fa-project-diagram me-1"></i>Mini-project</div>
                    <div class="card-body">
                        <h6>${escapeHtml(belt.project.title)}</h6>
                        <p class="mb-0 small">${escapeHtml(belt.project.brief)}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header bg-light fw-semibold"><i class="fas fa-clipboard-question me-1"></i>Belt exam</div>
                    <div class="card-body">
                        <p class="mb-1"><strong>${belt.exam.questions} questions</strong> · ${belt.exam.passingScore}% to pass</p>
                        <p class="mb-0 small">${escapeHtml(belt.exam.format)}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-3 mb-3">
            <div class="col-lg-6">
                <details class="card h-100">
                    <summary class="card-header bg-light fw-semibold"><i class="fas fa-note-sticky me-1"></i>Cheat sheet</summary>
                    <div class="card-body">
                        <ul class="mb-0 small">${belt.cheatSheet.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                    </div>
                </details>
            </div>
            <div class="col-lg-6">
                <details class="card h-100">
                    <summary class="card-header bg-light fw-semibold"><i class="fas fa-arrow-right me-1"></i>Ready for the next belt?</summary>
                    <div class="card-body">
                        <ul class="mb-0 small">${belt.nextChecklist.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                    </div>
                </details>
            </div>
        </div>`;
}

function renderBeltSection(belt) {
    const theme = beltTheme(belt);
    const lessonCount = beltLessonCount(belt);
    const moduleCards = belt.modules.map(mod => renderModuleCard(belt, mod)).join("");

    return `
        <section id="${belt.id}" class="belt-section mb-5 pt-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                <h2 class="mb-0">
                    <span class="${theme.badge}"><i class="fas ${belt.icon} me-1"></i>${escapeHtml(belt.name)}</span>
                </h2>
                <div class="text-muted small">
                    Level ${belt.level} · ${belt.modules.length} modules · ${lessonCount} lessons · ${escapeHtml(belt.studyTime)}
                </div>
            </div>
            ${renderBeltOverview(belt)}
            ${renderCoverageChecklist(belt)}
            <div class="row">${moduleCards}</div>
            ${renderBeltExtras(belt)}
        </section>`;
}

function renderModulesPage() {
    const container = document.getElementById("beltSections");
    if (!container) return;
    renderQuickNav();
    container.innerHTML = curriculumData.belts.map(renderBeltSection).join("");
}

document.addEventListener("DOMContentLoaded", renderModulesPage);
