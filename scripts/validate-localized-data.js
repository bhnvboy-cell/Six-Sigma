const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const i18nDir = path.join(dataDir, "i18n");
const uiDir = path.join(root, "html", "i18n");
const TARGETS = ["ar", "hi", "ml", "te", "de", "fr"];

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function fail(message) {
    throw new Error(message);
}

function sameKeys(label, base, other) {
    const baseKeys = Object.keys(base).sort();
    const otherKeys = Object.keys(other).sort();
    if (baseKeys.join("|") !== otherKeys.join("|")) {
        fail(label + " keys differ.\n  base: " + baseKeys.join(", ") + "\n  other: " + otherKeys.join(", "));
    }
}

function checkCurriculum(lang, base, other) {
    sameKeys("curriculum", base, other);
    if (base.belts.length !== other.belts.length) fail("curriculum belt count differs for " + lang);
    base.belts.forEach(function (belt, index) {
        const translated = other.belts[index];
        const label = lang + " belt " + belt.id;
        if (belt.id !== translated.id) fail(label + " id changed to " + translated.id);
        if (belt.modules.length !== translated.modules.length) fail(label + " module count differs");
        if (belt.exam.questions !== translated.exam.questions) fail(label + " exam.questions changed");
        if (belt.exam.passingScore !== translated.exam.passingScore) fail(label + " exam.passingScore changed");
        if (belt.coverageChecklist.length !== translated.coverageChecklist.length) fail(label + " coverageChecklist length differs");
        belt.coverageChecklist.forEach(function (item, itemIndex) {
            const t = translated.coverageChecklist[itemIndex];
            if (item.lessons.length !== t.lessons.length) fail(label + " coverageChecklist[" + itemIndex + "] lessons length differs");
        });
        belt.modules.forEach(function (mod, moduleIndex) {
            const tMod = translated.modules[moduleIndex];
            if (mod.id !== tMod.id) fail(label + " module " + mod.id + " id changed");
            if (mod.number !== tMod.number) fail(label + " module " + mod.id + " number changed");
            if (mod.lessons.length !== tMod.lessons.length) fail(label + " module " + mod.id + " lesson count differs");
            mod.lessons.forEach(function (lesson, lessonIndex) {
                const tLesson = tMod.lessons[lessonIndex];
                if (lesson.id !== tLesson.id) fail(label + " lesson " + lesson.id + " id changed");
                if (lesson.order !== tLesson.order) fail(label + " lesson " + lesson.id + " order changed");
            });
        });
    });
}

function checkLessons(lang, base, other, name) {
    sameKeys(lang + " lesson file " + name, base, other);
    Object.keys(base).forEach(function (code) {
        const a = base[code];
        const b = other[code];
        sameKeys(lang + " lesson " + code, a, b);
        Object.keys(a).forEach(function (field) {
            const av = a[field];
            const bv = b[field];
            if (Array.isArray(av)) {
                if (!Array.isArray(bv) || av.length !== bv.length) {
                    fail(lang + " lesson " + code + " field " + field + " array length differs");
                }
                if (av.length && typeof av[0] === "object") {
                    av.forEach(function (item, index) {
                        sameKeys(lang + " lesson " + code + " " + field + "[" + index + "]", item, bv[index]);
                    });
                }
            } else if (av && typeof av === "object") {
                sameKeys(lang + " lesson " + code + " field " + field, av, bv);
            } else if (typeof av !== typeof bv) {
                fail(lang + " lesson " + code + " field " + field + " type differs");
            }
        });
    });
}

function checkQuizzes(lang, base, other) {
    sameKeys("quizzes", base, other);
    Object.keys(base).forEach(function (belt) {
        if (base[belt].length !== other[belt].length) fail(lang + " quiz " + belt + " count differs");
        base[belt].forEach(function (question, index) {
            const t = other[belt][index];
            sameKeys(lang + " quiz " + belt + " " + (index + 1), question, t);
            if (question.correct !== t.correct) fail(lang + " quiz " + belt + " " + (index + 1) + " correct index changed");
            if (question.options.length !== t.options.length) fail(lang + " quiz " + belt + " " + (index + 1) + " option count differs");
        });
    });
}

function checkResources(lang, base, other) {
    sameKeys("resources", base, other);
    if (base.templates.length !== other.templates.length) fail(lang + " template count differs");
    base.templates.forEach(function (template, index) {
        const t = other.templates[index];
        if (template.id !== t.id) fail(lang + " template " + template.id + " id changed");
        if (template.fields.length !== t.fields.length) fail(lang + " template " + template.id + " field count differs");
        template.fields.forEach(function (field, fieldIndex) {
            const tField = t.fields[fieldIndex];
            if (field.key !== tField.key) fail(lang + " template " + template.id + " field " + field.key + " key changed");
            if (field.type !== tField.type) fail(lang + " template " + template.id + " field " + field.key + " type changed");
            if (Array.isArray(field.columns)) {
                if (!Array.isArray(tField.columns) || field.columns.length !== tField.columns.length) {
                    fail(lang + " template " + template.id + " field " + field.key + " columns differ");
                }
                field.columns.forEach(function (column, columnIndex) {
                    if (column.key !== tField.columns[columnIndex].key) {
                        fail(lang + " template " + template.id + " field " + field.key + " column key changed");
                    }
                });
            }
            if (Array.isArray(field.options)) {
                if (!Array.isArray(tField.options) || field.options.length !== tField.options.length) {
                    fail(lang + " template " + template.id + " field " + field.key + " options differ");
                }
            }
        });
        sameKeys(lang + " template " + template.id + " example", template.example, t.example);
    });
}

function checkUi(lang, base, other) {
    sameKeys(lang + " UI", base, other);
    Object.keys(base).forEach(function (key) {
        if (typeof base[key] === "object") {
            checkUi(lang + "." + key, base[key], other[key]);
        } else if (typeof other[key] !== "string" || !other[key].trim()) {
            fail(lang + " UI " + key + " is empty or not a string");
        }
    });
}

function main() {
    const curriculum = readJson(path.join(dataDir, "curriculum.json"));
    const quizzes = readJson(path.join(dataDir, "quizzes.json"));
    const resources = readJson(path.join(dataDir, "resources.json"));
    const ui = readJson(path.join(uiDir, "en.json"));
    const lessonFiles = fs.readdirSync(path.join(dataDir, "lessons"))
        .filter(function (name) { return name.endsWith(".json"); });

    TARGETS.forEach(function (lang) {
        console.log("Validating " + lang + "...");
        checkCurriculum(lang, curriculum, readJson(path.join(i18nDir, lang, "curriculum.json")));
        checkQuizzes(lang, quizzes, readJson(path.join(i18nDir, lang, "quizzes.json")));
        checkResources(lang, resources, readJson(path.join(i18nDir, lang, "resources.json")));
        lessonFiles.forEach(function (name) {
            checkLessons(lang, readJson(path.join(dataDir, "lessons", name)), readJson(path.join(i18nDir, lang, "lessons", name)), name);
        });
        if (lang !== "ar") {
            checkUi(lang, ui, readJson(path.join(uiDir, lang + ".json")));
        }
        console.log("  OK");
    });
    console.log("All localized data passed structural validation.");
}

try {
    main();
} catch (error) {
    console.error("Validation failed: " + error.message);
    process.exit(1);
}
