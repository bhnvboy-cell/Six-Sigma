const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const i18nDir = path.join(dataDir, "i18n");
const jsDir = path.join(root, "html", "js");
const TARGETS = ["ar", "hi", "ml", "te", "de", "fr"];

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function safeJson(value) {
    return JSON.stringify(value, null, 2).replace(/<\/script/gi, "<\\/script");
}

function buildCurriculum(lang) {
    const curriculum = readJson(path.join(i18nDir, lang, "curriculum.json"));
    const lessonsDir = path.join(i18nDir, lang, "lessons");
    const lessonContent = {};
    fs.readdirSync(lessonsDir)
        .filter(function (name) { return name.endsWith(".json"); })
        .forEach(function (name) {
            Object.assign(lessonContent, readJson(path.join(lessonsDir, name)));
        });

    let contentCount = 0;
    curriculum.belts.forEach(function (belt) {
        belt.modules.forEach(function (mod) {
            mod.lessons.forEach(function (lesson) {
                if (lessonContent[lesson.id]) {
                    lesson.content = lessonContent[lesson.id];
                    contentCount += 1;
                }
            });
        });
    });

    const js = "// Auto-generated from data/i18n/" + lang + "/curriculum.json and lessons/*.json. Do not edit by hand.\n" +
        "// Run: node scripts/build-localized-data.js\n" +
        "const curriculumData = " + safeJson(curriculum) + ";\n\n" +
        "window.curriculumData = curriculumData;\n";
    fs.writeFileSync(path.join(jsDir, "curriculum-data." + lang + ".js"), js, "utf8");
    return contentCount;
}

function buildQuizzes(lang) {
    const bank = readJson(path.join(i18nDir, lang, "quizzes.json"));
    const js = "// Auto-generated from data/i18n/" + lang + "/quizzes.json. Do not edit by hand.\n" +
        "// Run: node scripts/build-localized-data.js\n" +
        "const quizBank = " + safeJson(bank) + ";\n";
    fs.writeFileSync(path.join(jsDir, "quiz-data." + lang + ".js"), js, "utf8");
    return Object.keys(bank).reduce(function (total, key) {
        return total + (Array.isArray(bank[key]) ? bank[key].length : 0);
    }, 0);
}

function buildResources(lang) {
    const catalog = readJson(path.join(i18nDir, lang, "resources.json"));
    const js = "// Auto-generated from data/i18n/" + lang + "/resources.json. Do not edit by hand.\n" +
        "// Run: node scripts/build-localized-data.js\n" +
        "(function (root) {\n" +
        "    \"use strict\";\n" +
        "    var catalog = " + safeJson(catalog) + ";\n" +
        "    if (typeof module === \"object\" && module.exports) module.exports = catalog;\n" +
        "    root.RESOURCE_CATALOG = catalog;\n" +
        "}(typeof globalThis !== \"undefined\" ? globalThis : this));\n";
    fs.writeFileSync(path.join(jsDir, "resource-catalog-data." + lang + ".js"), js, "utf8");
    return catalog.templates.length;
}

TARGETS.forEach(function (lang) {
    const lessonCount = buildCurriculum(lang);
    const questionCount = buildQuizzes(lang);
    const templateCount = buildResources(lang);
    console.log(lang + ": curriculum (" + lessonCount + " lessons), " + questionCount + " questions, " + templateCount + " templates");
});

console.log("Localized bundles generated in html/js/.");
