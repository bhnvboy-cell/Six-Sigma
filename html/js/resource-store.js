(function (root) {
    "use strict";

    const BELTS = [
        { id: "white", name: "White Belt" },
        { id: "yellow", name: "Yellow Belt" },
        { id: "green", name: "Green Belt" },
        { id: "black", name: "Black Belt" },
        { id: "master-black", name: "Master Black Belt" }
    ];
    const PHASES = [
        { id: "Define", icon: "fa-bullseye", tone: "define" },
        { id: "Measure", icon: "fa-ruler-combined", tone: "measure" },
        { id: "Analyze", icon: "fa-magnifying-glass-chart", tone: "analyze" },
        { id: "Improve", icon: "fa-arrow-trend-up", tone: "improve" },
        { id: "Control", icon: "fa-sliders", tone: "control" }
    ];
    const STORAGE_KEY = "lss_user_resources";

    function catalog() {
        return root.RESOURCE_CATALOG || { templates: [] };
    }

    function templates() {
        return (catalog().templates || []).slice();
    }

    function templateById(id) {
        return templates().find(function (template) { return template.id === id; }) || null;
    }

    function beltIndex(value) {
        const normalized = String(value || "").toLowerCase();
        const index = BELTS.findIndex(function (belt) { return belt.id === normalized; });
        return index < 0 ? 0 : index;
    }

    function normalizeBelt(value) {
        return BELTS[beltIndex(value)].id;
    }

    function beltName(value) {
        return BELTS[beltIndex(value)].name;
    }

    function currentUser() {
        if (typeof root.getCurrentUser === "function") return root.getCurrentUser();
        try {
            return JSON.parse(localStorage.getItem("lss_user") || "null");
        } catch (error) {
            return null;
        }
    }

    function currentBelt() {
        const user = currentUser();
        if (user && user.beltLevel) return normalizeBelt(user.beltLevel);
        try {
            return normalizeBelt(localStorage.getItem("lss_belt_level") || "white");
        } catch (error) {
            return "white";
        }
    }

    function setBelt(value) {
        const belt = normalizeBelt(value);
        try {
            localStorage.setItem("lss_belt_level", belt);
        } catch (error) {
            return belt;
        }
        const user = currentUser();
        if (user && typeof root.saveUser === "function") {
            user.beltLevel = belt;
            root.saveUser(user);
        }
        return belt;
    }

    function isUnlocked(template, belt) {
        return beltIndex(belt || currentBelt()) >= beltIndex(template.minBelt);
    }

    function ownerKey() {
        const user = currentUser();
        return user ? user.userId : "";
    }

    function readStore() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
            return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
        } catch (error) {
            return {};
        }
    }

    function writeStore(store) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    }

    function listCopies() {
        const key = ownerKey();
        if (!key) return [];
        const copies = readStore()[key];
        if (!Array.isArray(copies)) return [];
        return copies.slice().sort(function (a, b) {
            return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
        });
    }

    function getCopy(id) {
        return listCopies().find(function (copy) { return copy.id === id; }) || null;
    }

    function newId() {
        if (root.crypto && typeof root.crypto.randomUUID === "function") return root.crypto.randomUUID();
        return "copy-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
    }

    function projectNameFrom(template, data) {
        const candidates = ["projectName", "processName", "problem", "problemStatement", "issue", "need"];
        for (let index = 0; index < candidates.length; index += 1) {
            const value = data && data[candidates[index]];
            if (value && String(value).trim()) return String(value).trim();
        }
        return template.title;
    }

    function saveCopy(templateId, id, copyName, data) {
        const user = currentUser();
        if (!user || !user.userId) throw new Error("Sign in to save this template.");
        const template = templateById(templateId);
        if (!template) throw new Error("The selected template is missing.");
        const now = new Date().toISOString();
        const store = readStore();
        const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
        const cleanName = String(copyName || "").trim() || projectNameFrom(template, data);
        const existing = id ? copies.find(function (copy) { return copy.id === id; }) : null;
        if (existing) {
            existing.copyName = cleanName;
            existing.projectName = projectNameFrom(template, data);
            existing.data = data;
            existing.updatedAt = now;
            existing.resourceId = templateId;
        } else {
            copies.push({
                id: newId(),
                resourceId: templateId,
                copyName: cleanName,
                projectName: projectNameFrom(template, data),
                status: "Draft",
                data: data,
                createdAt: now,
                updatedAt: now
            });
        }
        store[user.userId] = copies;
        writeStore(store);
        return existing || copies[copies.length - 1];
    }

    function deleteCopy(id) {
        const user = currentUser();
        if (!user || !user.userId) return false;
        const store = readStore();
        const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
        const next = copies.filter(function (copy) { return copy.id !== id; });
        if (next.length === copies.length) return false;
        store[user.userId] = next;
        writeStore(store);
        return true;
    }

    function fieldHasValue(field, value) {
        if (field.type === "table") {
            return Array.isArray(value) && value.some(function (row) {
                return Object.keys(row || {}).some(function (key) { return String(row[key] || "").trim() !== ""; });
            });
        }
        if (field.type === "checklist") {
            return Array.isArray(value) && value.some(Boolean);
        }
        return value !== undefined && value !== null && String(value).trim() !== "";
    }

    function completeness(template, data) {
        const required = (template.fields || []).filter(function (field) { return field.required; });
        if (!required.length) return 0;
        const done = required.filter(function (field) { return fieldHasValue(field, data && data[field.key]); }).length;
        return Math.round((done / required.length) * 100);
    }

    function statusFor(template, copy) {
        const percent = completeness(template, copy.data);
        if (percent >= 100) return { label: "Complete", className: "complete", percent: percent };
        if (percent > 0) return { label: "In progress", className: "progress", percent: percent };
        return { label: "Draft", className: "draft", percent: percent };
    }

    function copiesForTemplate(resourceId) {
        return listCopies().filter(function (copy) { return copy.resourceId === resourceId; });
    }

    function phaseInfo(id) {
        return PHASES.find(function (phase) { return phase.id === id; }) || { id: id, icon: "fa-folder", tone: "default" };
    }

    function escapeHtml(value) {
        return String(value === undefined || value === null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function deepClone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function formatDate(value) {
        if (!value) return "";
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return String(value);
        return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    }

    root.ResourceStore = {
        BELTS: BELTS,
        PHASES: PHASES,
        templates: templates,
        templateById: templateById,
        beltIndex: beltIndex,
        normalizeBelt: normalizeBelt,
        beltName: beltName,
        currentUser: currentUser,
        currentBelt: currentBelt,
        setBelt: setBelt,
        isUnlocked: isUnlocked,
        listCopies: listCopies,
        getCopy: getCopy,
        saveCopy: saveCopy,
        deleteCopy: deleteCopy,
        copiesForTemplate: copiesForTemplate,
        projectNameFrom: projectNameFrom,
        completeness: completeness,
        statusFor: statusFor,
        phaseInfo: phaseInfo,
        escapeHtml: escapeHtml,
        deepClone: deepClone,
        formatDate: formatDate
    };
}(typeof globalThis !== "undefined" ? globalThis : this));
