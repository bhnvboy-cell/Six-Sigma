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

    function isApiUser() {
        const user = currentUser();
        return Boolean(
            user &&
            user.authMode === "api" &&
            /^\d+$/.test(String(user.userId || "")) &&
            root.LssApi
        );
    }

    async function setBelt(value) {
        const belt = normalizeBelt(value);
        if (isApiUser()) {
            throw new Error("Belt levels are awarded by passing official exams.");
        }
        try {
            localStorage.setItem("lss_belt_level", belt);
        } catch (error) {
            console.warn("Belt preference could not be stored.");
        }
        const user = currentUser();
        if (user && typeof root.saveUser === "function") {
            user.beltLevel = belt;
            root.saveUser(user);
        }
        return { belt: belt, offline: true };
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

    function copyStatus(template, data) {
        const percent = completeness(template, data);
        if (percent >= 100) return "Complete";
        if (percent > 0) return "In Progress";
        return "Draft";
    }

    function saveLocalCopy(templateId, id, copyName, data) {
        const user = currentUser();
        if (!user || !user.userId) throw new Error("Sign in to save this template.");
        const template = templateById(templateId);
        if (!template) throw new Error("The selected template is missing.");
        const now = new Date().toISOString();
        const store = readStore();
        const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
        const cleanName = String(copyName || "").trim() || projectNameFrom(template, data);
        const existing = id ? copies.find(function (copy) { return copy.id === id; }) : null;
        let saved;
        if (existing) {
            existing.copyName = cleanName;
            existing.projectName = projectNameFrom(template, data);
            existing.data = data;
            existing.status = copyStatus(template, data);
            existing.updatedAt = now;
            existing.resourceId = templateId;
            saved = existing;
        } else {
            saved = {
                id: newId(),
                resourceId: templateId,
                copyName: cleanName,
                projectName: projectNameFrom(template, data),
                status: copyStatus(template, data),
                data: data,
                createdAt: now,
                updatedAt: now
            };
            copies.push(saved);
        }
        store[user.userId] = copies;
        writeStore(store);
        return saved;
    }

    function serverCopyToLocal(copy) {
        return {
            id: copy.clientId || "remote-" + copy.userResourceId,
            remoteId: copy.userResourceId,
            resourceId: copy.resourceId,
            copyName: copy.copyName,
            projectName: copy.projectName || "",
            status: copy.status || "Draft",
            data: copy.data || {},
            createdAt: copy.createdAt,
            updatedAt: copy.updatedAt
        };
    }

    function applyServerCopy(copy, localId) {
        const user = currentUser();
        if (!user || !user.userId) return copy;
        const mapped = serverCopyToLocal(copy);
        mapped.id = localId || mapped.id;
        const store = readStore();
        const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
        const index = copies.findIndex(function (item) {
            return item.id === mapped.id || (mapped.remoteId && String(item.remoteId) === String(mapped.remoteId));
        });
        if (index >= 0) {
            copies[index] = Object.assign({}, copies[index], mapped);
        } else {
            copies.push(mapped);
        }
        store[user.userId] = copies;
        writeStore(store);
        return mapped;
    }

    async function saveCopy(templateId, id, copyName, data) {
        const local = saveLocalCopy(templateId, id, copyName, data);
        if (!isApiUser()) return { copy: local, offline: true };
        const body = {
            resourceId: local.resourceId,
            copyName: local.copyName,
            projectName: local.projectName,
            status: local.status,
            data: local.data
        };
        try {
            let remote;
            if (local.remoteId) {
                try {
                    remote = await root.LssApi.updateCopy(local.remoteId, body);
                } catch (error) {
                    if (error.status !== 404) throw error;
                    remote = await root.LssApi.createCopy(Object.assign({ clientId: local.id }, body));
                }
            } else {
                remote = await root.LssApi.createCopy(Object.assign({ clientId: local.id }, body));
            }
            return { copy: applyServerCopy(remote, local.id), offline: false };
        } catch (error) {
            if (root.LssApi.isUnavailable(error)) {
                return { copy: local, offline: true, error: error };
            }
            throw error;
        }
    }

    async function deleteCopy(id) {
        const user = currentUser();
        if (!user || !user.userId) return { deleted: false, offline: true };
        const store = readStore();
        const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
        const removed = copies.find(function (copy) { return copy.id === id; });
        if (!removed) return { deleted: false, offline: false };
        store[user.userId] = copies.filter(function (copy) { return copy.id !== id; });
        writeStore(store);
        if (!isApiUser() || !removed.remoteId) {
            return { deleted: true, offline: !isApiUser() };
        }
        try {
            await root.LssApi.deleteCopy(removed.remoteId);
            return { deleted: true, offline: false };
        } catch (error) {
            if (root.LssApi.isUnavailable(error)) {
                return { deleted: true, offline: true, error: error };
            }
            if (error.status !== 404) {
                const restored = readStore();
                const current = Array.isArray(restored[user.userId]) ? restored[user.userId] : [];
                current.push(removed);
                restored[user.userId] = current;
                writeStore(restored);
                throw error;
            }
            return { deleted: true, offline: false };
        }
    }

    async function refreshCopies() {
        if (!isApiUser()) return listCopies();
        try {
            const remoteCopies = await root.LssApi.listCopies();
            const user = currentUser();
            const store = readStore();
            const copies = Array.isArray(store[user.userId]) ? store[user.userId] : [];
            const serverClientIds = new Set(remoteCopies.map(function (copy) { return copy.clientId; }).filter(Boolean));
            const unsynced = copies.filter(function (copy) {
                return !copy.remoteId && !serverClientIds.has(copy.id);
            });
            const merged = unsynced.concat(remoteCopies.map(serverCopyToLocal));
            merged.sort(function (a, b) {
                return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
            });
            store[user.userId] = merged;
            writeStore(store);
            return listCopies();
        } catch (error) {
            if (root.LssApi.isUnavailable(error)) return listCopies();
            throw error;
        }
    }

    function localMigrationPayload() {
        const store = readStore();
        const seen = {};
        const items = [];
        Object.keys(store).forEach(function (key) {
            const copies = store[key];
            if (!Array.isArray(copies)) return;
            copies.forEach(function (copy) {
                if (!copy || !copy.id || copy.remoteId || seen[copy.id]) return;
                if (!templateById(copy.resourceId)) return;
                seen[copy.id] = true;
                items.push({
                    clientId: copy.id,
                    resourceId: copy.resourceId,
                    copyName: copy.copyName,
                    projectName: copy.projectName || "",
                    status: copy.status || "Draft",
                    data: copy.data || {}
                });
            });
        });
        return items;
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
        isApiUser: isApiUser,
        currentBelt: currentBelt,
        setBelt: setBelt,
        isUnlocked: isUnlocked,
        listCopies: listCopies,
        getCopy: getCopy,
        saveCopy: saveCopy,
        deleteCopy: deleteCopy,
        refreshCopies: refreshCopies,
        localMigrationPayload: localMigrationPayload,
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
