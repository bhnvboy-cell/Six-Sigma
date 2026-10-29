function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

const MODULE_BELT_THEMES = {
    white: {header: "bg-light text-dark", badge: "belt-badge white", button: "btn-outline-dark"},
    yellow: {header: "bg-warning text-dark", badge: "belt-badge yellow", button: "btn-warning"},
    green: {header: "bg-success text-white", badge: "belt-badge green", button: "btn-success"},
    black: {header: "bg-dark text-white", badge: "belt-badge black", button: "btn-dark"},
    master: {header: "bg-dark text-white", badge: "belt-badge master", button: "btn-dark"}
};

function moduleTheme(belt) {
    return MODULE_BELT_THEMES[belt.color] || MODULE_BELT_THEMES.white;
}

function allCurriculumModules() {
    const rows = [];
    curriculumData.belts.forEach(belt => {
        belt.modules.forEach(mod => rows.push({belt, mod}));
    });
    return rows;
}

function findCurriculumModule(param) {
    const rows = allCurriculumModules();
    if (!param) return rows[0];
    const byId = rows.find(row => String(row.mod.id) === String(param));
    if (byId) return byId;
    const numeric = parseInt(param, 10);
    if (!isNaN(numeric) && rows[numeric - 1]) return rows[numeric - 1];
    return null;
}

function lessonAnchor(id) {
    return String(id).replace(/[^a-zA-Z0-9_-]/g, "-");
}

function renderLessonTable(mod) {
    return `
        <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead>
                    <tr>
                        <th style="width: 90px;">Code</th>
                        <th>Lesson</th>
                        <th>Learning objective</th>
                        <th style="width: 120px;">Content</th>
                    </tr>
                </thead>
                <tbody>
                    ${mod.lessons.map(lesson => `
                        <tr id="lesson-${lessonAnchor(lesson.id)}">
                            <td><span class="badge bg-secondary">${escapeHtml(lesson.id)}</span></td>
                            <td class="fw-semibold">${escapeHtml(lesson.title)}</td>
                            <td class="small">${escapeHtml(lesson.objective)}</td>
                            <td>${lesson.content
                                ? `<a href="#lesson-content-${lessonAnchor(lesson.id)}" class="badge bg-success text-decoration-none">Full lesson</a>`
                                : '<span class="badge bg-light text-dark border">Plan</span>'}</td>
                        </tr>`).join("")}
                </tbody>
            </table>
        </div>`;
}

function renderLessonContent(lesson) {
    const content = lesson.content;
    if (!content) return "";
    return `
        <article class="card mb-4" id="lesson-content-${lessonAnchor(lesson.id)}">
            <div class="card-header bg-light">
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div><span class="badge bg-secondary me-2">${escapeHtml(lesson.id)}</span><strong>${escapeHtml(lesson.title)}</strong></div>
                    <span class="badge bg-success">Full lesson</span>
                </div>
            </div>
            <div class="card-body">
                <p class="text-muted small mb-3"><strong>Learning objective:</strong> ${escapeHtml(lesson.objective)}</p>
                <h6 class="text-uppercase text-muted small">Why it matters</h6>
                <p>${escapeHtml(content.why)}</p>
                <h6 class="text-uppercase text-muted small mt-3">What it is</h6>
                <p>${escapeHtml(content.what)}</p>
                <h6 class="text-uppercase text-muted small mt-3">How to do it</h6>
                <ol>${(content.how || []).map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
                <h6 class="text-uppercase text-muted small mt-3">Where to apply it</h6>
                <p>${escapeHtml(content.where)}</p>
                ${content.when_not ? `<div class="alert alert-warning py-2 small"><strong>When not to use it:</strong> ${escapeHtml(content.when_not)}</div>` : ""}
                <h6 class="text-uppercase text-muted small mt-3">Common mistakes</h6>
                <ul>${(content.common_mistakes || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                <h6 class="text-uppercase text-muted small mt-3">Quick check</h6>
                <div class="mb-3">
                    ${(content.quick_check || []).map((item, index) => `
                        <div class="mb-2">
                            <p class="mb-1"><strong>Q${index + 1}.</strong> ${escapeHtml(item.q)}</p>
                            <details class="small">
                                <summary class="text-primary">Show answer</summary>
                                <p class="mb-0"><strong>Answer:</strong> ${escapeHtml(item.answer)}<br><span class="text-muted">${escapeHtml(item.explanation)}</span></p>
                            </details>
                        </div>`).join("")}
                </div>
                <div class="alert alert-success mb-0">
                    <h6 class="alert-heading"><i class="fas fa-check-circle me-1"></i>Recap</h6>
                    <ul class="mb-0">${(content.recap || []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                </div>
            </div>
        </article>`;
}

function renderLessonContentSection(mod) {
    const withContent = mod.lessons.filter(lesson => lesson.content);
    if (!withContent.length) {
        return `<div class="alert alert-secondary"><i class="fas fa-hourglass-half me-1"></i><strong>Lesson content is not written yet.</strong> The lesson plan above is final. Full lessons for this module will arrive in a later batch.</div>`;
    }
    return `
        <div class="mb-4">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                <h4 class="mb-0"><i class="fas fa-book-open-reader me-1"></i>Full lessons</h4>
                <span class="badge bg-success">${withContent.length} of ${mod.lessons.length} written</span>
            </div>
            ${withContent.map(lesson => renderLessonContent(lesson)).join("")}
            ${withContent.length < mod.lessons.length ? `<p class="small text-muted">The remaining ${mod.lessons.length - withContent.length} lesson(s) in this module are scheduled for the next batch.</p>` : ""}
        </div>`;
}

function renderModuleCoverage(belt, mod) {
    const lessonIds = new Set(mod.lessons.map(lesson => lesson.id));
    const covered = belt.coverageChecklist.filter(item => item.lessons.some(id => lessonIds.has(id)));
    if (!covered.length) return "";
    return `
        <div class="card mb-4">
            <div class="card-header bg-light fw-semibold"><i class="fas fa-clipboard-check me-1"></i>Body of Knowledge coverage in this module</div>
            <div class="card-body">
                <div class="d-flex flex-wrap gap-2">
                    ${covered.map(item => `<span class="badge bg-success-subtle text-success-emphasis border border-success-subtle">${escapeHtml(item.topic)}</span>`).join("")}
                </div>
            </div>
        </div>`;
}

function renderLessonTemplateNote() {
    return `
        <div class="alert alert-info">
            <h6 class="alert-heading"><i class="fas fa-layer-group me-1"></i>How each lesson is structured</h6>
            <p class="mb-1 small">Every lesson follows the same seven-part template:</p>
            <ol class="mb-0 small">
                <li><strong>Why</strong> — why the topic matters.</li>
                <li><strong>What</strong> — a plain definition and the key idea.</li>
                <li><strong>How</strong> — step-by-step method with a worked example.</li>
                <li><strong>Where to apply</strong> — real situations plus one "when not to use it".</li>
                <li><strong>Common mistakes</strong> — two or three pitfalls.</li>
                <li><strong>Quick check</strong> — three questions with answers and explanations.</li>
                <li><strong>Recap</strong> — three takeaway bullets.</li>
            </ol>
        </div>`;
}

function renderModuleExtras(belt, mod) {
    const completed = getCompletedModules();
    const isComplete = completed.includes(mod.id);
    return `
        <div class="row g-3 mb-4">
            <div class="col-lg-6">
                <div class="card h-100">
                    <div class="card-header bg-light fw-semibold"><i class="fas fa-project-diagram me-1"></i>Belt mini-project</div>
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
                        <p class="mb-2 small">${escapeHtml(belt.exam.format)}</p>
                        <a href="quizzes.html?belt=${encodeURIComponent(belt.id)}" class="btn btn-sm ${moduleTheme(belt).button}">Open quiz bank</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mb-4">
            <button class="btn ${moduleTheme(belt).button} px-4" id="markCompleteBtn" onclick="markModuleComplete()">
                <i class="fas ${isComplete ? "fa-check-circle" : "fa-check"}"></i>
                ${isComplete ? "Completed" : "Mark module complete"}
            </button>
        </div>`;
}

function getCompletedModules() {
    try {
        return JSON.parse(localStorage.getItem("lss_completed_modules") || "[]");
    } catch (error) {
        return [];
    }
}

function markModuleComplete() {
    const params = new URLSearchParams(location.search);
    const found = findCurriculumModule(params.get("module") || params.get("id"));
    if (!found) return;
    const completed = getCompletedModules();
    if (!completed.includes(found.mod.id)) {
        completed.push(found.mod.id);
        localStorage.setItem("lss_completed_modules", JSON.stringify(completed));
    }
    const button = document.getElementById("markCompleteBtn");
    if (button) {
        button.innerHTML = '<i class="fas fa-check-circle"></i> Completed';
    }
}

function renderPreviousNext(found) {
    const rows = allCurriculumModules();
    const index = rows.findIndex(row => row.mod.id === found.mod.id);
    const prev = rows[index - 1];
    const next = rows[index + 1];
    return `
        <div class="d-flex flex-wrap justify-content-between gap-2 mb-4">
            <div>
                ${prev ? `<a href="module-detail.html?module=${encodeURIComponent(prev.mod.id)}" class="btn btn-outline-secondary">
                    <i class="fas fa-arrow-left me-1"></i>${escapeHtml(prev.mod.title)}
                </a>` : ""}
            </div>
            <div>
                ${next ? `<a href="module-detail.html?module=${encodeURIComponent(next.mod.id)}" class="btn btn-outline-secondary">
                    ${escapeHtml(next.mod.title)}<i class="fas fa-arrow-right ms-1"></i>
                </a>` : ""}
            </div>
        </div>`;
}

function loadModuleFromDB() {
    const params = new URLSearchParams(location.search);
    const found = findCurriculumModule(params.get("module") || params.get("id"));

    if (!found) {
        document.getElementById("moduleContent").innerHTML = '<div class="alert alert-danger">Module content not found. <a href="modules.html">Return to modules</a>.</div>';
        return;
    }

    const {belt, mod} = found;
    const theme = moduleTheme(belt);
    const lessonCount = mod.lessons.length;

    document.title = `${mod.title} - ${belt.name} - Lean Six Sigma Training`;
    document.getElementById("moduleTitle").textContent = `Module ${mod.number}: ${mod.title}`;
    document.getElementById("moduleInfo").innerHTML = `
        <span class="${theme.badge} me-2"><i class="fas ${belt.icon} me-1"></i>${escapeHtml(belt.name)}</span>
        <span class="badge bg-light text-dark me-2"><i class="fas fa-clock me-1"></i>${escapeHtml(mod.duration)}</span>
        <span class="badge bg-light text-dark"><i class="fas fa-book-open me-1"></i>${lessonCount} lessons</span>`;
    if (document.getElementById("moduleDesc")) {
        document.getElementById("moduleDesc").textContent = mod.summary;
    }

    document.getElementById("moduleTitleHeader").className = `card-header ${theme.header}`;
    document.getElementById("moduleHeader").className = `card-header ${theme.header}`;

    const nav = document.getElementById("moduleNav");
    nav.innerHTML = mod.lessons.map(lesson => `
        <a href="${lesson.content ? "#lesson-content-" + lessonAnchor(lesson.id) : "#lesson-" + lessonAnchor(lesson.id)}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center gap-2">
            <span><span class="badge bg-secondary me-2">${escapeHtml(lesson.id)}</span>${escapeHtml(lesson.title)}</span>
            ${lesson.content ? '<span class="badge bg-success">Full</span>' : '<span class="badge bg-light text-dark border">Plan</span>'}
        </a>`).join("");

    let html = `
        <div class="alert alert-primary">
            <h5 class="alert-heading"><i class="fas fa-info-circle me-1"></i>Module overview</h5>
            <p class="mb-0">${escapeHtml(mod.summary)}</p>
        </div>
        <div class="row mb-4">
            <div class="col-md-4 mb-2"><div class="card bg-light h-100"><div class="card-body text-center"><h6><i class="fas fa-graduation-cap me-1"></i>Belt</h6><p class="mb-0">${escapeHtml(belt.name)}</p></div></div></div>
            <div class="col-md-4 mb-2"><div class="card bg-light h-100"><div class="card-body text-center"><h6><i class="fas fa-layer-group me-1"></i>Lessons</h6><p class="mb-0">${lessonCount}</p></div></div></div>
            <div class="col-md-4 mb-2"><div class="card bg-light h-100"><div class="card-body text-center"><h6><i class="fas fa-clock me-1"></i>Duration</h6><p class="mb-0">${escapeHtml(mod.duration)}</p></div></div></div>
        </div>
        <div class="card mb-4">
            <div class="card-header bg-light fw-semibold"><i class="fas fa-list-check me-1"></i>Lesson plan</div>
            <div class="card-body">${renderLessonTable(mod)}</div>
        </div>
        ${renderLessonTemplateNote()}
        ${renderLessonContentSection(mod)}
        ${renderModuleCoverage(belt, mod)}
        ${renderModuleExtras(belt, mod)}
        ${renderPreviousNext(found)}
        <div class="text-center mt-4 mb-5">
            <a href="modules.html#${belt.id}" class="btn btn-secondary me-2"><i class="fas fa-arrow-left me-1"></i>Back to ${escapeHtml(belt.name)}</a>
            <a href="syllabus.html#${belt.id}" class="btn btn-outline-secondary"><i class="fas fa-scroll me-1"></i>View full syllabus</a>
        </div>`;

    document.getElementById("moduleContent").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", loadModuleFromDB);
