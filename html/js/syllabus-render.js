const SYLLABUS_THEMES = {
    white: {badge: "belt-badge white", border: "#adb5bd", button: "btn-outline-dark"},
    yellow: {badge: "belt-badge yellow", border: "#ffc107", button: "btn-warning"},
    green: {badge: "belt-badge green", border: "#198754", button: "btn-success"},
    black: {badge: "belt-badge black", border: "#212529", button: "btn-dark"},
    master: {badge: "belt-badge master", border: "#000000", button: "btn-dark"}
};

function syllabusTheme(belt) {
    return SYLLABUS_THEMES[belt.color] || SYLLABUS_THEMES.white;
}

function syllabusEscape(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function syllabusLessonCount(belt) {
    return belt.modules.reduce((total, mod) => total + mod.lessons.length, 0);
}

function renderSyllabusSummary() {
    const summary = document.getElementById("syllabusSummary");
    if (!summary) return;
    const totalModules = curriculumData.belts.reduce((n, belt) => n + belt.modules.length, 0);
    const totalLessons = curriculumData.belts.reduce((n, belt) => n + syllabusLessonCount(belt), 0);
    summary.innerHTML = `
        <div class="row g-3">
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body">
                    <div class="display-6 fw-bold text-primary">${curriculumData.belts.length}</div>
                    <div class="text-muted">Belts</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body">
                    <div class="display-6 fw-bold text-primary">${totalModules}</div>
                    <div class="text-muted">Modules</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body">
                    <div class="display-6 fw-bold text-primary">${totalLessons}</div>
                    <div class="text-muted">Lessons</div>
                </div></div>
            </div>
            <div class="col-md-3">
                <div class="card text-center h-100"><div class="card-body">
                    <div class="display-6 fw-bold text-primary">3</div>
                    <div class="text-muted">Bodies of Knowledge</div>
                </div></div>
            </div>
        </div>`;
}

function renderSyllabusNav() {
    const nav = document.getElementById("syllabusNav");
    if (!nav) return;
    nav.innerHTML = curriculumData.belts.map(belt => {
        const theme = syllabusTheme(belt);
        return `<a href="#${belt.id}" class="btn ${theme.button} btn-sm rounded-pill px-3">
            <i class="fas ${belt.icon} me-1"></i>${syllabusEscape(belt.name)}
        </a>`;
    }).join("");
}

function renderCoverageTable(belt) {
    return `
        <div class="table-responsive mb-4">
            <table class="table table-sm align-middle">
                <thead>
                    <tr><th>Required topic</th><th>Lesson(s)</th><th class="text-end">Status</th></tr>
                </thead>
                <tbody>
                    ${belt.coverageChecklist.map(item => `
                        <tr>
                            <td>${syllabusEscape(item.topic)}</td>
                            <td>${item.lessons.map(syllabusEscape).join(", ")}</td>
                            <td class="text-end"><span class="badge bg-success">Covered</span></td>
                        </tr>`).join("")}
                </tbody>
            </table>
        </div>`;
}

function renderSyllabusBelt(belt) {
    const theme = syllabusTheme(belt);
    const lessonCount = syllabusLessonCount(belt);
    return `
        <section id="${belt.id}" class="belt-section mb-5 pt-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                <h2 class="mb-0"><span class="${theme.badge}"><i class="fas ${belt.icon} me-1"></i>${syllabusEscape(belt.name)}</span></h2>
                <div class="text-muted small">${belt.modules.length} modules · ${lessonCount} lessons · target ${syllabusEscape(belt.lessonTarget)} · ${syllabusEscape(belt.studyTime)}</div>
            </div>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <h6 class="text-uppercase text-muted small">Who it is for</h6>
                            <p>${syllabusEscape(belt.audience)}</p>
                            <h6 class="text-uppercase text-muted small">Prerequisites</h6>
                            <p class="mb-0">${syllabusEscape(belt.prerequisites)}</p>
                        </div>
                        <div class="col-md-6">
                            <h6 class="text-uppercase text-muted small">Outcomes</h6>
                            <ul class="mb-0">${belt.outcomes.map(item => `<li>${syllabusEscape(item)}</li>`).join("")}</ul>
                        </div>
                        <div class="col-12">
                            <div class="alert alert-light border mb-0">
                                <strong>Previous belt recap:</strong> ${syllabusEscape(belt.previousRecap)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="mb-2">Coverage checklist</h4>
            ${renderCoverageTable(belt)}
            <h4 class="mb-3">Modules and lessons</h4>
            ${belt.modules.map(mod => `
                <div class="card mb-3" style="border-left: 4px solid ${theme.border};">
                    <div class="card-body">
                        <div class="d-flex flex-wrap justify-content-between align-items-start gap-2">
                            <div>
                                <h5 class="mb-1">Module ${mod.number}: ${syllabusEscape(mod.title)}</h5>
                                <p class="text-muted mb-2">${syllabusEscape(mod.summary)}</p>
                            </div>
                            <span class="badge bg-light text-dark border">${syllabusEscape(mod.duration)}</span>
                        </div>
                        <ol class="mb-3">
                            ${mod.lessons.map(lesson => `
                                <li class="mb-2">
                                    <strong>${syllabusEscape(lesson.id)} — ${syllabusEscape(lesson.title)}</strong>
                                    <div class="small text-muted">${syllabusEscape(lesson.objective)}</div>
                                </li>`).join("")}
                        </ol>
                        <a href="module-detail.html?module=${encodeURIComponent(mod.id)}" class="btn btn-sm ${theme.button}">
                            <i class="fas fa-book-open me-1"></i>Open module
                        </a>
                    </div>
                </div>`).join("")}
            <div class="row g-3 mb-3">
                <div class="col-lg-6">
                    <div class="card h-100"><div class="card-body">
                        <h6><i class="fas fa-project-diagram me-1"></i>Mini-project</h6>
                        <p class="fw-semibold mb-1">${syllabusEscape(belt.project.title)}</p>
                        <p class="small mb-0">${syllabusEscape(belt.project.brief)}</p>
                    </div></div>
                </div>
                <div class="col-lg-6">
                    <div class="card h-100"><div class="card-body">
                        <h6><i class="fas fa-clipboard-question me-1"></i>Belt exam</h6>
                        <p class="mb-1">${belt.exam.questions} questions · ${belt.exam.passingScore}% to pass</p>
                        <p class="small mb-0">${syllabusEscape(belt.exam.format)}</p>
                    </div></div>
                </div>
            </div>
        </section>`;
}

function renderSyllabusPage() {
    const container = document.getElementById("syllabusContent");
    if (!container) return;
    renderSyllabusSummary();
    renderSyllabusNav();
    container.innerHTML = curriculumData.belts.map(renderSyllabusBelt).join("");
}

document.addEventListener("DOMContentLoaded", renderSyllabusPage);
