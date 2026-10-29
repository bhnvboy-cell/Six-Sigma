const QUIZ_THEMES = {
    white: {button: "btn-outline-dark", badge: "belt-badge white"},
    yellow: {button: "btn-warning", badge: "belt-badge yellow"},
    green: {button: "btn-success", badge: "belt-badge green"},
    black: {button: "btn-dark", badge: "belt-badge black"},
    master: {button: "btn-dark", badge: "belt-badge master"}
};

let activeQuizBelt = "white";

function quizTheme(belt) {
    return QUIZ_THEMES[belt.color] || QUIZ_THEMES.white;
}

function quizBankKey(beltId) {
    return beltId === "master-black" ? "master" : beltId;
}

function quizEscape(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderQuizNav() {
    const nav = document.getElementById("quizBeltNav");
    if (!nav) return;
    nav.innerHTML = curriculumData.belts.map(belt => {
        const theme = quizTheme(belt);
        const active = belt.id === activeQuizBelt ? "" : "opacity-75";
        return `<button class="btn ${theme.button} btn-sm rounded-pill px-3 ${active}" onclick="startQuiz('${belt.id}')">
            <i class="fas ${belt.icon} me-1"></i>${quizEscape(belt.name)}
        </button>`;
    }).join("");
}

function startQuiz(beltId) {
    activeQuizBelt = beltId;
    renderQuizNav();
    const belt = curriculumData.belts.find(item => item.id === beltId);
    const questions = quizBank[quizBankKey(beltId)] || [];
    const area = document.getElementById("quizArea");
    if (!belt || !questions.length) {
        area.innerHTML = '<div class="alert alert-warning">No quiz questions found for this belt yet.</div>';
        return;
    }
    const theme = quizTheme(belt);

    area.innerHTML = `
        <div class="card mb-4">
            <div class="card-header d-flex flex-wrap justify-content-between align-items-center gap-2">
                <div><span class="${theme.badge}">${quizEscape(belt.name)}</span> <span class="ms-2 text-muted small">${questions.length} questions</span></div>
                <span class="text-muted small">${questions.length >= belt.exam.questions
                    ? `Full exam length · pass mark ${belt.exam.passingScore}%`
                    : `Starter bank · full exam: ${belt.exam.questions} questions`}</span>
            </div>
            <div class="card-body">
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
                        <button type="button" class="btn btn-outline-secondary" onclick="startQuiz('${beltId}')">Reset</button>
                    </div>
                </form>
                <div id="quizScore" class="mt-4"></div>
            </div>
        </div>`;

    document.getElementById("quizForm").addEventListener("submit", event => {
        event.preventDefault();
        gradeQuiz(beltId);
    });
}

function gradeQuiz(beltId) {
    const questions = quizBank[quizBankKey(beltId)] || [];
    let correctCount = 0;
    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        const feedback = document.getElementById(`feedback-${index}`);
        const options = document.querySelectorAll(`input[name="q${index}"]`);
        options.forEach(input => {
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

    const belt = curriculumData.belts.find(item => item.id === beltId);
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

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const requested = params.get("belt");
    if (requested && curriculumData.belts.some(belt => belt.id === requested)) {
        activeQuizBelt = requested;
    }
    renderQuizNav();
    startQuiz(activeQuizBelt);
});
