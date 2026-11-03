const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataDir = path.join(root, "data");
const i18nDir = path.join(dataDir, "i18n");
const cacheDir = path.join(i18nDir, ".cache");
const uiDir = path.join(root, "html", "i18n");

const TARGETS = ["ar", "hi", "ml", "te", "de", "fr"];
const SKIP_KEYS = new Set([
    "id", "key", "color", "icon", "level", "minBelt", "phase", "type",
    "correct", "estimatedMinutes", "number", "order", "questions",
    "passingScore", "belt", "beltLevel", "href", "url", "slug", "version",
    "source", "updated", "minRows", "rows", "wide", "required", "min", "max",
    "step", "unit"
]);
const CODE_VALUES = new Set([
    "white", "yellow", "green", "black", "master", "master-black",
    "define", "measure", "analyze", "improve", "control", "text", "textarea",
    "select", "date", "number", "table", "checkbox", "radio", "true", "false",
    "ltr", "rtl"
]);

const CACHE = {};
const MAX_BATCH_CHARS = 4500;
const MAX_BATCH_ITEMS = 50;
const CONCURRENCY = 4;

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, value) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
}

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

function shouldTranslate(key, value) {
    if (typeof value !== "string") return false;
    const text = value.trim();
    if (!text) return false;
    if (SKIP_KEYS.has(key)) return false;
    if (CODE_VALUES.has(text.toLowerCase())) return false;
    if (!/\p{L}/u.test(text)) return false;
    if (/^[A-Z][A-Z0-9 &+./-]{0,14}$/.test(text)) return false;
    if (/^[A-Z]\d+(\.\d+)?$/.test(text)) return false;
    if (/^\d{4}-\d{2}-\d{2}/.test(text)) return false;
    if (/^\d{1,2}:\d{2}/.test(text)) return false;
    if (/^(https?:|mailto:|\/|#)/.test(text)) return false;
    if (/^[\w.-]+\.(html|js|json|css)$/.test(text)) return false;
    if (/^[\w.+-]+@[\w.-]+\.\w+$/.test(text)) return false;
    if (/^(fa-|fas |far |fab |btn-|text-|bg-|border-|d-|ms-|me-|mt-|mb-|p-|m-)/.test(text)) return false;
    return true;
}

function collectStrings(value, key, out) {
    if (typeof value === "string") {
        if (shouldTranslate(key, value)) out.add(value);
        return;
    }
    if (Array.isArray(value)) {
        value.forEach(function (item) {
            collectStrings(item, key, out);
        });
        return;
    }
    if (value && typeof value === "object") {
        Object.keys(value).forEach(function (childKey) {
            collectStrings(value[childKey], childKey, out);
        });
    }
}

function translateTree(value, key, cache) {
    if (typeof value === "string") {
        if (!shouldTranslate(key, value)) return value;
        const translated = cache[value];
        return typeof translated === "string" && translated.trim() ? translated : value;
    }
    if (Array.isArray(value)) {
        return value.map(function (item) {
            return translateTree(item, key, cache);
        });
    }
    if (value && typeof value === "object") {
        const result = {};
        Object.keys(value).forEach(function (childKey) {
            result[childKey] = translateTree(value[childKey], childKey, cache);
        });
        return result;
    }
    return value;
}

function cachePath(lang) {
    return path.join(cacheDir, lang + ".json");
}

function loadCache(lang) {
    if (CACHE[lang]) return CACHE[lang];
    try {
        CACHE[lang] = readJson(cachePath(lang));
    } catch (error) {
        CACHE[lang] = {};
    }
    return CACHE[lang];
}

function saveCache(lang, updates) {
    const cache = loadCache(lang);
    Object.assign(cache, updates);
    writeJson(cachePath(lang), cache);
}

function batchesFor(strings) {
    const batches = [];
    let current = [];
    let chars = 0;
    strings.forEach(function (text) {
        if (current.length >= MAX_BATCH_ITEMS || (chars + text.length > MAX_BATCH_CHARS && current.length)) {
            batches.push(current);
            current = [];
            chars = 0;
        }
        current.push(text);
        chars += text.length;
    });
    if (current.length) batches.push(current);
    return batches;
}

async function requestBatch(strings, lang) {
    const body = new URLSearchParams();
    strings.forEach(function (text) {
        body.append("q", text);
    });
    const controller = new AbortController();
    const timer = setTimeout(function () {
        controller.abort();
    }, 45000);
    let response;
    try {
        response = await fetch(
            "https://translate.googleapis.com/translate_a/t?client=gtx&sl=en&tl=" + encodeURIComponent(lang),
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
                signal: controller.signal
            }
        );
    } finally {
        clearTimeout(timer);
    }
    if (!response.ok) {
        throw new Error("Translate HTTP " + response.status);
    }
    const data = await response.json();
    if (!Array.isArray(data) || data.length !== strings.length) {
        throw new Error("Translate response mismatch: expected " + strings.length + ", got " + (Array.isArray(data) ? data.length : typeof data));
    }
    return data;
}

async function translateMissing(strings, lang) {
    const cache = loadCache(lang);
    const missing = strings.filter(function (text) {
        return typeof cache[text] !== "string" || !cache[text].trim();
    });
    if (!missing.length) return cache;

    const batches = batchesFor(missing);
    console.log("  " + lang + ": " + missing.length + " strings in " + batches.length + " batches");
    let completed = 0;

    async function worker() {
        while (batches.length) {
            const batch = batches.shift();
            let attempt = 0;
            while (true) {
                try {
                    const translations = await requestBatch(batch, lang);
                    const updates = {};
                    batch.forEach(function (text, index) {
                        updates[text] = translations[index];
                    });
                    saveCache(lang, updates);
                    completed += batch.length;
                    if (completed % 250 < batch.length) {
                        console.log("  " + lang + ": " + completed + "/" + missing.length);
                    }
                    break;
                } catch (error) {
                    attempt += 1;
                    if (attempt >= 5) {
                        console.error("  " + lang + ": batch failed after " + attempt + " attempts: " + error.message);
                        throw error;
                    }
                    const wait = 1500 * attempt * attempt;
                    console.warn("  " + lang + ": retry " + attempt + " in " + wait + "ms (" + error.message + ")");
                    await sleep(wait);
                }
            }
            await sleep(120);
        }
    }

    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    return loadCache(lang);
}

function loadSources() {
    const curriculum = readJson(path.join(dataDir, "curriculum.json"));
    const quizzes = readJson(path.join(dataDir, "quizzes.json"));
    const resources = readJson(path.join(dataDir, "resources.json"));
    const ui = readJson(path.join(uiDir, "en.json"));

    const lessonsDir = path.join(dataDir, "lessons");
    const lessons = {};
    fs.readdirSync(lessonsDir)
        .filter(function (name) { return name.endsWith(".json"); })
        .forEach(function (name) {
            lessons[name] = readJson(path.join(lessonsDir, name));
        });

    return { curriculum: curriculum, quizzes: quizzes, resources: resources, ui: ui, lessons: lessons };
}

function collectAll(sources) {
    const out = new Set();
    collectStrings(sources.curriculum, "curriculum", out);
    collectStrings(sources.quizzes, "quizzes", out);
    collectStrings(sources.resources, "resources", out);
    collectStrings(sources.ui, "ui", out);
    Object.keys(sources.lessons).forEach(function (name) {
        collectStrings(sources.lessons[name], "lessons", out);
    });
    return out;
}

function writeLocalized(sources, lang, cache) {
    const langDir = path.join(i18nDir, lang);
    writeJson(path.join(langDir, "curriculum.json"), translateTree(sources.curriculum, "curriculum", cache));
    writeJson(path.join(langDir, "quizzes.json"), translateTree(sources.quizzes, "quizzes", cache));
    writeJson(path.join(langDir, "resources.json"), translateTree(sources.resources, "resources", cache));

    const lessonsDir = path.join(langDir, "lessons");
    fs.mkdirSync(lessonsDir, { recursive: true });
    Object.keys(sources.lessons).forEach(function (name) {
        writeJson(path.join(lessonsDir, name), translateTree(sources.lessons[name], "lessons", cache));
    });

    if (lang !== "ar") {
        writeJson(path.join(uiDir, lang + ".json"), translateTree(sources.ui, "ui", cache));
    }
}

async function main() {
    const args = process.argv.slice(2);
    const force = args.includes("--force");
    const langArgIndex = args.indexOf("--lang");
    const selected = langArgIndex >= 0 && args[langArgIndex + 1]
        ? [args[langArgIndex + 1]]
        : TARGETS;

    selected.forEach(function (lang) {
        if (TARGETS.indexOf(lang) === -1) {
            throw new Error("Unknown language: " + lang);
        }
    });

    const sources = loadSources();
    const allStrings = Array.from(collectAll(sources)).sort();
    console.log("Translatable strings: " + allStrings.length);

    if (force) {
        selected.forEach(function (lang) {
            try { fs.unlinkSync(cachePath(lang)); } catch (error) { /* no cache */ }
            CACHE[lang] = {};
        });
    }

    for (const lang of selected) {
        console.log("Translating " + lang + "...");
        const cache = await translateMissing(allStrings, lang);
        writeLocalized(sources, lang, cache);
        console.log("Wrote " + lang + " content and UI files.");
    }
}

main().catch(function (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exit(1);
});
