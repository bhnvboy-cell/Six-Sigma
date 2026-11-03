(function (root) {
    "use strict";

    const STORAGE_KEY = "lss_lang";
    const LANGUAGES = [
        { code: "en", name: "English", dir: "ltr", available: true },
        { code: "ar", name: "العربية", dir: "rtl", available: true },
        { code: "hi", name: "हिन्दी", dir: "ltr", available: true },
        { code: "ml", name: "മലയാളം", dir: "ltr", available: true },
        { code: "te", name: "తెలుగు", dir: "ltr", available: true },
        { code: "de", name: "Deutsch", dir: "ltr", available: true },
        { code: "fr", name: "Français", dir: "ltr", available: true }
    ];
    const NAV_KEYS = {
        "index.html": "nav.home",
        "modules.html": "nav.modules",
        "syllabus.html": "nav.syllabus",
        "calculators.html": "nav.calculators",
        "statistics.html": "nav.statistics",
        "quizzes.html": "nav.quizzes",
        "resources.html": "nav.resources",
        "my-project.html": "nav.myProject",
        "login.html": "nav.login",
        "profile.html": "nav.profile",
        "admin.html": "nav.admin"
    };
    const FONT_URLS = {
        ar: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;600;700&display=swap",
        hi: "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap",
        ml: "https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;600;700&display=swap",
        te: "https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600;700&display=swap"
    };

    const byCode = {};
    LANGUAGES.forEach(function (language) {
        byCode[language.code] = language;
    });

    let current = "en";
    let strings = {};
    let base = {};
    let resolveReady;
    const ready = new Promise(function (resolve) {
        resolveReady = resolve;
    });

    function normalize(value) {
        const code = String(value || "").toLowerCase().split("-")[0];
        return byCode[code] && byCode[code].available ? code : null;
    }

    function detect() {
        let code = null;
        try {
            code = normalize(new URLSearchParams(root.location.search).get("lang"));
        } catch (error) {
            code = null;
        }
        if (!code) {
            try {
                code = normalize(localStorage.getItem(STORAGE_KEY));
            } catch (error) {
                code = null;
            }
        }
        if (!code) {
            code = normalize(root.navigator && root.navigator.language) || "en";
        }
        return code;
    }

    function getPath(source, key) {
        return String(key).split(".").reduce(function (value, part) {
            if (value && typeof value === "object" && part in value) return value[part];
            return undefined;
        }, source);
    }

    function t(key, fallback) {
        const value = getPath(strings, key);
        if (typeof value === "string") return value;
        const english = getPath(base, key);
        if (typeof english === "string") return english;
        return fallback !== undefined ? fallback : key;
    }

    function setText(element, text) {
        if (!element || typeof text !== "string") return;
        if (!element.querySelector("*")) {
            element.textContent = text;
            return;
        }
        Array.from(element.childNodes).forEach(function (node) {
            if (node.nodeType === 3) element.removeChild(node);
        });
        element.appendChild(document.createTextNode((element.childNodes.length ? " " : "") + text));
    }

    function applyAttributes() {
        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            setText(element, t(element.getAttribute("data-i18n"), element.textContent));
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            element.setAttribute(
                "placeholder",
                t(element.getAttribute("data-i18n-placeholder"), element.getAttribute("placeholder") || "")
            );
        });
        document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
            element.setAttribute(
                "title",
                t(element.getAttribute("data-i18n-title"), element.getAttribute("title") || "")
            );
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            element.setAttribute(
                "aria-label",
                t(element.getAttribute("data-i18n-aria-label"), element.getAttribute("aria-label") || "")
            );
        });
    }

    function applyNav() {
        document.querySelectorAll(".navbar a.nav-link[href]").forEach(function (link) {
            const href = (link.getAttribute("href") || "").split("?")[0];
            const key = NAV_KEYS[href];
            if (!key) return;
            const english = getPath(base, key);
            if (typeof english !== "string") return;
            if (link.textContent.trim() !== english) return;
            setText(link, t(key, english));
        });
        document.querySelectorAll(".navbar button.nav-link").forEach(function (button) {
            const english = getPath(base, "common.logout");
            if (typeof english === "string" && button.textContent.trim() === english) {
                setText(button, t("common.logout", english));
            }
        });
    }

    function applyDirection() {
        const language = byCode[current] || byCode.en;
        document.documentElement.lang = current;
        document.documentElement.dir = language.dir;

        if (language.dir === "rtl") {
            document.querySelectorAll('link[rel="stylesheet"][href*="bootstrap"]').forEach(function (link) {
                if (!/bootstrap\.rtl/.test(link.href)) {
                    link.href = link.href.replace(/bootstrap(\.min)?\.css/, "bootstrap.rtl$1.css");
                }
            });
        }

        if (!document.getElementById("lssI18nCss")) {
            const css = document.createElement("link");
            css.id = "lssI18nCss";
            css.rel = "stylesheet";
            css.href = "css/i18n.css";
            document.head.appendChild(css);
        }

        if (FONT_URLS[current] && !document.getElementById("lssFont_" + current)) {
            const font = document.createElement("link");
            font.id = "lssFont_" + current;
            font.rel = "stylesheet";
            font.href = FONT_URLS[current];
            document.head.appendChild(font);
        }
    }

    function injectSwitcher() {
        if (document.querySelector("[data-language-switcher]")) return;
        const nav = document.querySelector(".navbar .navbar-nav");
        if (!nav) return;

        const active = byCode[current] || byCode.en;
        const isList = nav.tagName === "UL";
        const wrapper = document.createElement(isList ? "li" : "div");
        wrapper.className = "nav-item dropdown";
        wrapper.setAttribute("data-language-switcher", "true");

        const toggle = document.createElement("a");
        toggle.className = "nav-link dropdown-toggle";
        toggle.href = "#";
        toggle.setAttribute("role", "button");
        toggle.setAttribute("data-bs-toggle", "dropdown");
        toggle.setAttribute("aria-expanded", "false");
        toggle.innerHTML = '<i class="fas fa-globe me-1"></i>';
        toggle.appendChild(document.createTextNode(active.name));

        const menu = document.createElement(isList ? "ul" : "div");
        menu.className = "dropdown-menu dropdown-menu-end";

        LANGUAGES.forEach(function (language) {
            const item = document.createElement(isList ? "li" : "div");
            const link = document.createElement("a");
            link.className = "dropdown-item" + (language.available ? "" : " disabled");
            link.textContent = language.name + (language.available ? "" : " (" + t("common.soon", "soon") + ")");

            if (language.available) {
                const url = new URL(root.location.href);
                url.searchParams.set("lang", language.code);
                link.href = url.pathname.split("/").pop() + url.search + url.hash;
                link.addEventListener("click", function () {
                    try {
                        localStorage.setItem(STORAGE_KEY, language.code);
                    } catch (error) {
                        /* storage may be unavailable */
                    }
                });
                if (language.code === current) link.classList.add("active");
            } else {
                link.href = "#";
                link.setAttribute("aria-disabled", "true");
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                });
            }

            item.appendChild(link);
            menu.appendChild(item);
        });

        wrapper.appendChild(toggle);
        wrapper.appendChild(menu);
        nav.appendChild(wrapper);
    }

    async function loadJson(language) {
        const response = await root.fetch("i18n/" + language + ".json", { cache: "no-store" });
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
    }

    async function load() {
        try {
            base = await loadJson("en");
        } catch (error) {
            base = {};
        }
        if (current === "en") {
            strings = base;
            return;
        }
        try {
            strings = await loadJson(current);
        } catch (error) {
            console.warn("Translations for " + current + " could not be loaded; using English.");
            strings = {};
        }
    }

    function start() {
        load()
            .then(function () {
                applyAttributes();
                applyNav();
                injectSwitcher();
            })
            .catch(function () {
                /* keep English defaults */
            })
            .then(function () {
                resolveReady();
                try {
                    root.dispatchEvent(new CustomEvent("lss:language", { detail: { lang: current } }));
                } catch (error) {
                    /* CustomEvent may be unavailable in very old browsers */
                }
            });
    }

    current = detect();
    applyDirection();
    try {
        localStorage.setItem(STORAGE_KEY, current);
    } catch (error) {
        /* storage may be unavailable */
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }

    root.LssI18n = {
        languages: LANGUAGES,
        current: function () {
            return current;
        },
        dir: function () {
            return (byCode[current] || byCode.en).dir;
        },
        t: t,
        apply: function () {
            applyAttributes();
            applyNav();
        },
        setLanguage: function (code) {
            const next = normalize(code);
            if (!next || next === current) return;
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (error) {
                /* storage may be unavailable */
            }
            const url = new URL(root.location.href);
            url.searchParams.set("lang", next);
            root.location.href = url.toString();
        },
        ready: ready
    };
}(typeof globalThis !== "undefined" ? globalThis : this));
