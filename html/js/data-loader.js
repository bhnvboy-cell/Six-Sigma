(function (root) {
    "use strict";

    var script = document.currentScript;
    var base = script && script.getAttribute("data-src");
    if (!base) return;

    var lang = "en";
    try {
        if (root.LssI18n && typeof root.LssI18n.current === "function") {
            lang = root.LssI18n.current() || "en";
        }
    } catch (error) {
        lang = "en";
    }

    var src = "js/" + base + (lang && lang !== "en" ? "." + lang : "") + ".js";
    document.write('<script src="' + src + '"><\/script>');
}(typeof globalThis !== "undefined" ? globalThis : this));
