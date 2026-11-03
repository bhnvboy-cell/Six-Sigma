const QUIZ_THEMES = {
    white: {button: "btn-outline-dark", badge: "belt-badge white"},
    yellow: {button: "btn-warning", badge: "belt-badge yellow"},
    green: {button: "btn-success", badge: "belt-badge green"},
    black: {button: "btn-dark", badge: "belt-badge black"},
    master: {button: "btn-dark", badge: "belt-badge master"}
};

let activeQuizBelt = "white";
let officialMode = false;
let examSummaries = null;
let officialExam = null;
let officialAttempts = [];
let officialStartedAt = null;

function quizTheme(belt) {
    return QUIZ_THEMES[belt.color] || QUIZ_THEMES.white;
}

function quizBankKey(beltId) {
    return beltId === "master-black" ? "master" : beltId;
}

function quizLang() {
    return window.LssI18n && typeof window.LssI18n.current === "function"
        ? window.LssI18n.current()
        : "en";
}

function quizEscape(value) {
    return String(value === undefined || value === null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function quizUser() {
    try {
        return JSON.parse(localStorage.getItem("lss_user") || "null");
    } catch (error) {
        return null;
    }
}

function isOfficialUser() {
    const user = quizUser();
    return Boolean(
        user &&
        user.authMode === "api" &&
        /^\d+$/.test(String(user.userId || "")) &&
        window.LssApi
    );
}

function storeOfficialBelt(beltLevel) {
    if (!beltLevel) return;
    try {
        const user = quizUser();
        if (user) {
            user.beltLevel = beltLevel;
            localStorage.setItem("lss_user", JSON.stringify(user));
        }
        localStorage.setItem("lss_belt_level", beltLevel);
    } catch (error) {
        console.warn("The belt level could not be stored.");
    }
}

function examSummary(beltId) {
    return (examSummaries || []).find(function (item) { return item.belt === beltId; }) || null;
}

async function refreshExamSummaries() {
    if (!isOfficialUser()) return;
    try {
        examSummaries = await window.LssApi.listExams(quizLang());
    } catch (error) {
        if (!window.LssApi.isUnavailable(error)) console.warn(error.message);
    }
}

function renderQuizNav() {
    const nav = document.getElementById("quizBeltNav");
    if (!nav) return;
    nav.innerHTML = curriculumData.belts.map(function (belt) {
        const theme = quizTheme(belt);
        const summary = examSummary(belt.id);
        const locked = officialMode && summary && !summary.unlocked;
        const passed = officialMode && summary && summary.passed;
        const active = belt.id === activeQuizBelt ? "" : "opacity-75";
        const icon = locked
            ? '<i class="fas fa-lock me-1"></i>'
            : passed
                ? '<i class="fas fa-circle-check me-1"></i>'
                : '<i class="fas ' + belt.icon + ' me-1"></i>';
        return '<button class="btn ' + theme.button + ' btn-sm rounded-pill px-3 ' + active + '"' +
            (locked ? " disabled" : "") +
            ' onclick="startQuiz(\'' + belt.id + '\')">' +
            icon + quizEscape(belt.name) + "</button>";
    }).join("");
}

function quizBelt(beltId) {
    return curriculumData.belts.find(function (item) { return item.id === beltId; }) || null;
}

async function startQuiz(beltId) {
    activeQuizBelt = beltId;
    renderQuizNav();
    const belt = quizBelt(beltId);
    const area = document.getElementById("quizArea");
    if (!belt) {
        area.innerHTML = '<div class="alert alert-danger">Belt quiz not found.</div>';
        return;
    }
    if (officialMode) {
        await startOfficialExam(belt);
        return;
    }
    startPracticeQuiz(belt);
}

function startPracticeQuiz(belt, notice) {
    const questions = quizBank[quizBankKey(belt.id)] || [];
    const area = document.getElementById("quizArea");
    if (!questions.length) {
        area.innerHTML = '<div class="alert alert-warning">No quiz questions found for this belt yet.</div>';
        return;
    }
    const theme = quizTheme(belt);
    const noticeHtml = notice
        ? '<div class="alert alert-warning py-2">' + quizEscape(notice) + "</div>"
        : "";

    area.innerHTML = noticeHtml + `
        <div class="card mb-4">
            <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div><span class="${theme.badge}">${quizEscape(belt.name)}</span> <span class="ms-2 text-muted small">${questions.length} questions</span></div>
                <span class="text-muted small">Practice mode · pass mark ${belt.exam.passingScore}%</span>
            </div>
            <div class="card-body">
                <p class="text-muted small">Sign in to take the official server-scored exam and earn a certificate.</p>
                <form id="quizForm">
                    ${questions.map((question, index) => `
                        <div class="mb-4 quiz-question" data-index="${index}">
                            <h6 class="mb-2">${index + 1}. ${quizEscape(question.q)}</h6>
                            ${question.options.map((option, optionIndex) => `
                                <label class="quiz-option d-block">
                                    <input type="radio" name="q${index}" value="${optionIndex}" class="form-check-input me-2">
                                    ${quizEscape(option)}
                                </label>`).join("")}
                            <div class="quiz-feedback small mt-2" id="feedback-${index}"></div>
                        </div>`).join("")}
                    <div class="d-flex flex-wrap gap-2">
                        <button type="submit" class="btn ${theme.button} px-4"><i class="fas fa-check me-1"></i>Submit answers</button>
                        <button type="button" class="btn btn-outline-secondary" onclick="startQuiz('${belt.id}')">Reset</button>
                    </div>
                </form>
                <div id="quizScore" class="mt-4"></div>
            </div>
        </div>`;

    document.getElementById("quizForm").addEventListener("submit", function (event) {
        event.preventDefault();
        gradePracticeQuiz(belt.id);
    });
}

function gradePracticeQuiz(beltId) {
    const questions = quizBank[quizBankKey(beltId)] || [];
    let correctCount = 0;
    questions.forEach(function (question, index) {
        const selected = document.querySelector('input[name="q' + index + '"]:checked');
        const feedback = document.getElementById("feedback-" + index);
        const options = document.querySelectorAll('input[name="q' + index + '"]');
        options.forEach(function (input) {
            input.disabled = true;
            const label = input.closest("label");
            label.classList.remove("selected");
            if (parseInt(input.value, 10) === question.correct) label.classList.add("correct");
            if (selected && parseInt(input.value, 10) === parseInt(selected.value, 10) && parseInt(input.value, 10) !== question.correct) {
                label.classList.add("incorrect");
            }
        });
        const isCorrect = selected && parseInt(selected.value, 10) === question.correct;
        if (isCorrect) correctCount += 1;
        feedback.innerHTML = `
            <div class="alert ${isCorrect ? "alert-success" : "alert-danger"} py-2 mb-0">
                <strong>${isCorrect ? "Correct." : "Not quite."}</strong>
                ${quizEscape(question.explanation)}
            </div>`;
    });

    const belt = quizBelt(beltId);
    const passingScore = belt && belt.exam ? belt.exam.passingScore : 80;
    const percent = Math.round((correctCount / questions.length) * 100);
    const passed = percent >= passingScore;
    document.getElementById("quizScore").innerHTML = `
        <div class="alert ${passed ? "alert-success" : "alert-info"}">
            <h5 class="alert-heading">Score: ${correctCount} / ${questions.length} (${percent}%)</h5>
            <p class="mb-0">${passed
                ? `You passed with ${percent}% (pass mark ${passingScore}%). Review any missed explanations, then apply the tools in your project.`
                : `You need ${passingScore}% to pass. Review the explanations above and retake the quiz when ready.`}</p>
        </div>`;
}

function renderAttemptHistory() {
    if (!officialAttempts.length) {
        return '<p class="text-muted small mb-0">No official attempts yet.</p>';
    }
    return `
        <div class="table-responsive">
            <table class="table table-sm align-middle mb-0">
                <thead><tr><th>Attempt</th><th>Date</th><th>Score</th><th>Result</th></tr></thead>
                <tbody>
                    ${officialAttempts.slice(0, 8).map(function (item) {
                        const when = item.completedAt ? new Date(item.completedAt).toLocaleString() : "";
                        return `<tr>
                            <td>${item.attemptNumber}</td>
                            <td class="small">${quizEscape(when)}</td>
                            <td>${Number(item.score).toFixed(1)}%</td>
                            <td>${item.passed
                                ? '<span class="badge bg-success">Passed</span>'
                                : '<span class="badge bg-secondary">Not passed</span>'}</td>
                        </tr>`;
                    }).join("")}
                </tbody>
            </table>
        </div>`;
}

function renderOfficialExam(belt, exam, attempts) {
    const area = document.getElementById("quizArea");
    const theme = quizTheme(belt);
    const summary = examSummary(belt.id);
    officialExam = exam;
    officialAttempts = attempts || [];
    officialStartedAt = new Date().toISOString();

    const passedBanner = summary && summary.passed
        ? `<div class="alert alert-success d-flex flex-wrap justify-content-between align-items-center gap-2">
                <span><i class="fas fa-circle-check me-1"></i>You have already passed this exam${summary.bestScore !== null ? " with a best score of " + Number(summary.bestScore).toFixed(1) + "%" : ""}.</span>
                <button type="button" class="btn btn-sm btn-success" id="issueCertificateExistingBtn">
                    <i class="fas fa-certificate me-1"></i>Get certificate
                </button>
           </div>
           <div id="certificateAreaExisting" class="mb-3"></div>`
        : "";

    area.innerHTML = `
        <div class="card mb-4">
            <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div>
                    <span class="${theme.badge}">${quizEscape(belt.name)}</span>
                    <span class="ms-2 text-muted small">${exam.questionCount} questions · pass mark ${exam.passPercent}%</span>
                </div>
                <span class="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle">
                    <i class="fas fa-cloud me-1"></i>Official exam
                </span>
            </div>
            <div class="card-body">
                <div class="alert alert-info py-2 small">
                    The server scores this attempt. You need ${exam.passPercent}% to pass and unlock the next belt.
                    Suggested time limit: ${exam.timeLimitMinutes} minutes.
                </div>
                ${passedBanner}
                <form id="officialExamForm">
                    ${exam.questions.map(function (question, index) {
                        return `
                            <div class="mb-4 quiz-question" data-index="${index}">
                                <h6 class="mb-2">${index + 1}. ${quizEscape(question.prompt)}</h6>
                                ${question.options.map(function (option) {
                                    return `
                                        <label class="quiz-option d-block">
                                            <input type="radio" name="oq${index}" value="${option.key}" class="form-check-input me-2">
                                            <strong class="me-1">${option.key}.</strong>${quizEscape(option.text)}
                                        </label>`;
                                }).join("")}
                            </div>`;
                    }).join("")}
                    <div id="officialExamNotice" class="mb-3"></div>
                    <div class="d-flex flex-wrap gap-2">
                        <button type="submit" class="btn ${theme.button} px-4" id="officialSubmitBtn">
                            <i class="fas fa-paper-plane me-1"></i>Submit official exam
                        </button>
                        <button type="button" class="btn btn-outline-secondary" onclick="startQuiz('${belt.id}')">Reset</button>
                    </div>
                </form>
                <div id="quizScore" class="mt-4"></div>
                <div class="card mt-4">
                    <div class="card-header bg-light fw-semibold"><i class="fas fa-clock-rotate-left me-1"></i>Attempt history</div>
                    <div class="card-body" id="officialHistory">${renderAttemptHistory()}</div>
                </div>
            </div>
        </div>`;

    document.getElementById("officialExamForm").addEventListener("submit", function (event) {
        event.preventDefault();
        submitOfficialExam(belt.id);
    });

    const existingCertificateButton = document.getElementById("issueCertificateExistingBtn");
    if (existingCertificateButton) {
        existingCertificateButton.addEventListener("click", function () {
            issueCertificate(belt, existingCertificateButton, "certificateAreaExisting");
        });
    }
}

async function submitOfficialExam(beltId) {
    if (!officialExam) return;
    const notice = document.getElementById("officialExamNotice");
    const button = document.getElementById("officialSubmitBtn");
    const answers = {};
    let unanswered = 0;
    officialExam.questions.forEach(function (question, index) {
        const selected = document.querySelector('input[name="oq' + index + '"]:checked');
        if (selected) answers[question.questionId] = selected.value;
        else unanswered += 1;
    });
    if (unanswered > 0) {
        notice.innerHTML = '<div class="alert alert-warning py-2">Answer all questions before submitting. ' +
            unanswered + " remaining.</div>";
        return;
    }
    notice.innerHTML = "";
    button.disabled = true;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Scoring...';
    try {
        const result = await window.LssApi.submitExamAttempt(beltId, answers, officialStartedAt, quizLang());
        storeOfficialBelt(result.userBeltLevel);
        document.querySelectorAll("#officialExamForm input").forEach(function (input) {
            input.disabled = true;
        });
        button.disabled = true;
        renderOfficialResult(beltId, result);
        await refreshExamSummaries();
        renderQuizNav();
        try {
            officialAttempts = await window.LssApi.listExamAttempts(beltId);
        } catch (error) {
            officialAttempts = [];
        }
        const history = document.getElementById("officialHistory");
        if (history) history.innerHTML = renderAttemptHistory();
    } catch (error) {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-paper-plane me-1"></i>Submit official exam';
        notice.innerHTML = '<div class="alert alert-danger py-2">' +
            quizEscape(error.message || "The exam could not be scored.") + "</div>";
        if (error.code === "BELT_LOCKED") await refreshExamSummaries();
    }
}

function renderOfficialResult(beltId, result) {
    const belt = quizBelt(beltId);
    const score = document.getElementById("quizScore");
    const promoted = result.promoted
        ? '<p class="mb-0 mt-2"><strong>Congratulations.</strong> Your belt level is now ' +
            quizEscape(result.userBeltLevel) + ".</p>"
        : "";
    const certificate = result.passed
        ? `<div class="mt-3">
                <button type="button" class="btn btn-success" id="issueCertificateBtn">
                    <i class="fas fa-certificate me-1"></i>Get certificate
                </button>
                <div id="certificateArea" class="mt-3"></div>
           </div>`
        : "";
    score.innerHTML = `
        <div class="alert ${result.passed ? "alert-success" : "alert-warning"}">
            <h5 class="alert-heading">${result.passed ? "Passed" : "Not passed"}: ${Number(result.score).toFixed(1)}%</h5>
            <p class="mb-0">${result.correctCount} of ${result.questionCount} correct · pass mark ${result.passingScore}%.</p>
            ${promoted}
        </div>
        ${certificate}
        <details class="mt-3">
            <summary class="fw-semibold">Review answers</summary>
            <div class="mt-3">
                ${result.results.map(function (item, index) {
                    const question = officialExam.questions.find(function (entry) {
                        return entry.questionId === item.questionId;
                    });
                    return `<div class="border rounded p-2 mb-2 ${item.isCorrect ? "border-success-subtle" : "border-danger-subtle"}">
                        <p class="mb-1"><strong>${index + 1}.</strong> ${quizEscape(question ? question.prompt : item.questionId)}</p>
                        <p class="mb-1 small">Your answer: <strong>${quizEscape(item.selected || "Not answered")}</strong> ·
                            Correct answer: <strong>${quizEscape(item.correctOption)}</strong></p>
                        <p class="mb-0 small text-muted">${quizEscape(item.explanation || "")}</p>
                    </div>`;
                }).join("")}
            </div>
        </details>`;

    const certificateButton = document.getElementById("issueCertificateBtn");
    if (certificateButton) {
        certificateButton.addEventListener("click", function () {
            issueCertificate(belt, certificateButton);
        });
    }
}

async function issueCertificate(belt, button, areaId) {
    if (!belt) return;
    const area = document.getElementById(areaId || "certificateArea");
    if (!area) return;
    button.disabled = true;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Issuing...';
    try {
        const certificate = await window.LssApi.issueCertificate(belt.id);
        area.innerHTML = `
            <div class="card border-success">
                <div class="card-body">
                    <h5 class="card-title"><i class="fas fa-award text-success me-1"></i>${quizEscape(belt.name)} Certificate</h5>
                    <p class="mb-1">Awarded to <strong>${quizEscape(certificate.learnerName)}</strong></p>
                    <p class="mb-1 small">Certificate number: <strong>${quizEscape(certificate.certificateNumber)}</strong></p>
                    <p class="mb-0 small">Verification ID: <code>${quizEscape(certificate.verificationId)}</code></p>
                    ${window.CertificateStudio
                        ? '<button type="button" class="btn btn-success btn-sm mt-3" data-open-certificate><i class="fas fa-pen-ruler me-1"></i>Customize &amp; print certificate</button>'
                        : ""}
                </div>
            </div>`;
        const openCertificate = area.querySelector("[data-open-certificate]");
        if (openCertificate) {
            openCertificate.addEventListener("click", function () {
                window.CertificateStudio.open(certificate, belt.name);
            });
            window.CertificateStudio.open(certificate, belt.name);
        }
        button.style.display = "none";
    } catch (error) {
        area.innerHTML = '<div class="alert alert-danger py-2">' +
            quizEscape(error.message || "The certificate could not be issued.") + "</div>";
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-certificate me-1"></i>Get certificate';
    }
}

async function startOfficialExam(belt) {
    const area = document.getElementById("quizArea");
    const summary = examSummary(belt.id);
    if (summary && !summary.unlocked) {
        area.innerHTML = `
            <div class="alert alert-warning">
                <h5 class="alert-heading"><i class="fas fa-lock me-1"></i>${quizEscape(belt.name)} exam locked</h5>
                <p class="mb-0">Pass the previous belt exam to unlock this one. Your current belt is shown on the profile page.</p>
            </div>`;
        return;
    }
    area.innerHTML = '<div class="text-center py-5"><span class="spinner-border text-primary"></span><p class="mt-3 text-muted">Loading official exam...</p></div>';
    try {
        const results = await Promise.all([
            window.LssApi.getExam(belt.id, quizLang()),
            window.LssApi.listExamAttempts(belt.id).catch(function () { return []; })
        ]);
        renderOfficialExam(belt, results[0], results[1]);
    } catch (error) {
        if (window.LssApi.isUnavailable(error)) {
            officialMode = false;
            startPracticeQuiz(belt, "The exam server is unavailable. Showing the practice quiz instead.");
            return;
        }
        area.innerHTML = '<div class="alert alert-danger">' +
            quizEscape(error.message || "The official exam could not be loaded.") + "</div>";
    }
}

async function openCertificateStudioPreview() {
    if (!window.CertificateStudio) return;
    if (isOfficialUser()) {
        try {
            const certificates = await window.LssApi.listCertificates();
            if (certificates && certificates.length) {
                const latest = certificates[0];
                const latestBelt = quizBelt(latest.beltLevel);
                window.CertificateStudio.open(latest, latestBelt ? latestBelt.name : latest.beltLevel);
                return;
            }
        } catch (error) {
            /* fall back to a preview */
        }
    }
    const user = quizUser() || {};
    let storedBelt = "";
    try {
        storedBelt = localStorage.getItem("lss_belt_level") || "";
    } catch (error) {
        storedBelt = "";
    }
    const beltId = user.beltLevel || storedBelt || activeQuizBelt || "white";
    const belt = quizBelt(beltId) || quizBelt(activeQuizBelt);
    window.CertificateStudio.openPreview({
        user: user,
        beltLevel: belt ? belt.id : beltId,
        beltName: belt ? belt.name : ""
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    if (window.sessionReady) await window.sessionReady;
    const params = new URLSearchParams(location.search);
    const requested = params.get("belt");
    if (requested && curriculumData.belts.some(function (belt) { return belt.id === requested; })) {
        activeQuizBelt = requested;
    }

    const studioButton = document.getElementById("openCertificateStudioBtn");
    if (studioButton) {
        studioButton.addEventListener("click", openCertificateStudioPreview);
    }

    if (isOfficialUser()) {
        try {
            examSummaries = await window.LssApi.listExams(quizLang());
            officialMode = true;
        } catch (error) {
            officialMode = false;
            if (!window.LssApi.isUnavailable(error)) console.warn(error.message);
        }
    }

    renderQuizNav();
    await startQuiz(activeQuizBelt);
});
