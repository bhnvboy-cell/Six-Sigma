const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "data", "quizzes.json");
const curriculumPath = path.join(root, "data", "curriculum.json");
const jsPath = path.join(root, "html", "js", "quiz-data.js");

const bankKeys = ["white", "yellow", "green", "black", "master"];

function fail(message) {
    console.error("Quiz build failed: " + message);
    process.exit(1);
}

function bankKey(beltId) {
    return beltId === "master-black" ? "master" : beltId;
}

const bank = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const curriculum = JSON.parse(fs.readFileSync(curriculumPath, "utf8"));

const expected = new Map();
curriculum.belts.forEach(function (belt) {
    expected.set(bankKey(belt.id), belt);
});

bankKeys.forEach(function (key) {
    if (!Array.isArray(bank[key]) || !bank[key].length) {
        fail("data/quizzes.json needs a non-empty " + key + " array.");
    }
    if (!expected.has(key)) {
        fail("Quiz bank key " + key + " does not match a curriculum belt.");
    }
});

Object.keys(bank).forEach(function (key) {
    if (bankKeys.indexOf(key) === -1) {
        fail("Unknown quiz bank key: " + key);
    }
});

const allPrompts = new Map();
bankKeys.forEach(function (key) {
    const belt = expected.get(key);
    const questions = bank[key];
    const prompts = new Set();
    questions.forEach(function (question, index) {
        const label = key + " question " + (index + 1);
        if (!question || typeof question.q !== "string" || !question.q.trim()) {
            fail(label + " needs a non-empty q value.");
        }
        if (prompts.has(question.q)) {
            fail(label + " duplicates an earlier prompt in the same bank.");
        }
        prompts.add(question.q);
        const normalizedPrompt = question.q.trim().toLowerCase();
        if (allPrompts.has(normalizedPrompt)) {
            fail(label + " duplicates prompt from " + allPrompts.get(normalizedPrompt) + ".");
        }
        allPrompts.set(normalizedPrompt, label);
        if (!Array.isArray(question.options) || question.options.length !== 4) {
            fail(label + " needs exactly four options.");
        }
        const options = new Set();
        question.options.forEach(function (option) {
            if (typeof option !== "string" || !option.trim()) {
                fail(label + " has an empty option.");
            }
            if (options.has(option)) fail(label + " has duplicate options.");
            options.add(option);
        });
        if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) {
            fail(label + " has an invalid correct index.");
        }
        if (typeof question.explanation !== "string" || !question.explanation.trim()) {
            fail(label + " needs a non-empty explanation.");
        }
    });
    const distribution = [0, 0, 0, 0];
    questions.forEach(function (question) {
        distribution[question.correct] += 1;
    });
    const highestShare = Math.max.apply(null, distribution) / questions.length;
    if (questions.length >= 20 && highestShare > 0.4) {
        fail(key + " answer key is skewed: " + distribution.join("/") +
            ". Rebalance the correct option positions before building.");
    }

    const requiredCount = belt.exam && Number(belt.exam.questions);
    if (Number.isFinite(requiredCount) && questions.length < requiredCount) {
        fail(
            key + " bank has " + questions.length + " questions but the curriculum exam requires " +
            requiredCount + "."
        );
    }
});

const js = "// Auto-generated from data/quizzes.json. Do not edit by hand.\n" +
    "// Run: node scripts/build-quizzes.js\n" +
    "const quizBank = " + JSON.stringify(bank, null, 2) + ";\n";
fs.writeFileSync(jsPath, js, "utf8");

const counts = bankKeys.map(function (key) {
    return key + " " + bank[key].length;
});
console.log("Generated quiz-data.js with " + counts.join(", ") + " questions.");
