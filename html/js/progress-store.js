(function (root) {
    "use strict";

    const LESSON_KEY = "lss_lesson_progress";
    const MODULE_KEY = "lss_completed_modules";
    const SEED_KEY = "lss_lesson_progress_seeded_v1";
    let loaded = false;
    let lastError = null;
    let serverSynced = false;

    function currentUser() {
        if (typeof root.getCurrentUser === "function") return root.getCurrentUser();
        try {
            return JSON.parse(localStorage.getItem("lss_user") || "null");
        } catch (error) {
            return null;
        }
    }

    function isApiUser() {
        const user = currentUser();
        return Boolean(user && user.authMode === "api" && /^\d+$/.test(String(user.userId || "")));
    }

    function readLessons() {
        try {
            const parsed = JSON.parse(localStorage.getItem(LESSON_KEY) || "[]");
            return Array.isArray(parsed) ? parsed.map(function (value) { return String(value); }) : [];
        } catch (error) {
            return [];
        }
    }

    function writeLessons(values) {
        try {
            localStorage.setItem(LESSON_KEY, JSON.stringify(Array.from(values).sort()));
        } catch (error) {
            console.warn("Unable to save lessons to localStorage:", error);
        }
    }

    function readLegacyModules() {
        try {
            const parsed = JSON.parse(localStorage.getItem(MODULE_KEY) || "[]");
            return Array.isArray(parsed) ? parsed.map(function (value) { return parseInt(value, 10); }).filter(function (value) {
                return !Number.isNaN(value);
            }) : [];
        } catch (error) {
            return [];
        }
    }

    function writeLegacyModules(values) {
        try {
            localStorage.setItem(MODULE_KEY, JSON.stringify(Array.from(values).sort(function (a, b) { return a - b; })));
        } catch (error) {
            console.warn("Unable to save legacy modules to localStorage:", error);
        }
    }

    function modules(curriculum) {
        const rows = [];
        const data = curriculum || root.curriculumData;
        (data && data.belts ? data.belts : []).forEach(function (belt) {
            (belt.modules || []).forEach(function (module) { rows.push(module); });
        });
        return rows;
    }

    function moduleById(curriculum, moduleId) {
        return modules(curriculum).find(function (module) { return String(module.id) === String(moduleId); }) || null;
    }

    function moduleLessons(curriculum, moduleId) {
        const module = moduleById(curriculum, moduleId);
        return module ? (module.lessons || []).map(function (lesson) { return lesson.id; }) : [];
    }

    function ensureSeeded(curriculum) {
        let seeded = false;
        try {
            seeded = localStorage.getItem(SEED_KEY) === "1";
        } catch (error) {
            seeded = false;
        }
        if (seeded) return;
        const completed = new Set(readLessons());
        readLegacyModules().forEach(function (moduleId) {
            moduleLessons(curriculum, moduleId).forEach(function (lessonId) { completed.add(String(lessonId)); });
        });
        writeLessons(completed);
        syncLegacy(curriculum, completed);
        try {
            localStorage.setItem(SEED_KEY, "1");
        } catch (error) {
            // Storage quota or restriction; continue in memory
        }
    }

    function syncLegacy(curriculum, completed) {
        const doneModules = modules(curriculum).filter(function (module) {
            const lessons = module.lessons || [];
            return lessons.length > 0 && lessons.every(function (lesson) { return completed.has(String(lesson.id)); });
        }).map(function (module) { return module.id; });
        writeLegacyModules(doneModules);
        return doneModules;
    }

    function isLessonComplete(lessonId) {
        return readLessons().map(String).indexOf(String(lessonId)) >= 0;
    }

    function completedSet() {
        return new Set(readLessons());
    }

    function moduleStatus(curriculum, moduleId) {
        const ids = moduleLessons(curriculum, moduleId);
        const done = completedSet();
        const completed = ids.filter(function (id) { return done.has(String(id)); }).length;
        return {
            moduleId: moduleId,
            totalLessons: ids.length,
            completedLessons: completed,
            complete: ids.length > 0 && completed === ids.length
        };
    }

    function summary(curriculum) {
        const all = modules(curriculum).reduce(function (rows, module) {
            (module.lessons || []).forEach(function (lesson) { rows.push(lesson); });
            return rows;
        }, []);
        const done = completedSet();
        const completed = all.filter(function (lesson) { return done.has(String(lesson.id)); }).length;
        return {
            totalLessons: all.length,
            completedLessons: completed,
            percentComplete: all.length ? Math.round((completed / all.length) * 1000) / 10 : 0
        };
    }

    async function load(curriculum, options) {
        ensureSeeded(curriculum);
        loaded = true;
        lastError = null;
        serverSynced = false;
        const settings = options || {};
        if (!isApiUser() || !root.LssApi || settings.localOnly) {
            return { offline: true, api: isApiUser(), summary: summary(curriculum) };
        }
        try {
            const progress = await root.LssApi.getProgress();
            const completed = completedSet();
            (progress.lessons || []).forEach(function (lesson) {
                if (lesson.status === "Completed" && lesson.lessonCode) completed.add(String(lesson.lessonCode));
            });
            writeLessons(completed);
            syncLegacy(curriculum, completed);
            serverSynced = true;
            return {
                offline: false,
                api: true,
                summary: progress.summary || summary(curriculum),
                lessons: progress.lessons || []
            };
        } catch (error) {
            lastError = error;
            if (root.LssApi.isUnavailable(error)) {
                return {
                    offline: true,
                    api: true,
                    summary: summary(curriculum),
                    error: error
                };
            }
            throw error;
        }
    }

    async function setLesson(curriculum, moduleId, lessonId, completed) {
        ensureSeeded(curriculum);
        const before = completedSet();
        const next = new Set(before);
        if (completed) next.add(String(lessonId));
        else next.delete(String(lessonId));
        writeLessons(next);
        syncLegacy(curriculum, next);

        if (!isApiUser() || !root.LssApi) {
            return { offline: true, api: false, completed: completed, summary: summary(curriculum) };
        }
        try {
            await root.LssApi.setLessonProgress(
                lessonId,
                completed ? "Completed" : "Not Started",
                0
            );
            serverSynced = true;
            return { offline: false, api: true, completed: completed, summary: summary(curriculum) };
        } catch (error) {
            lastError = error;
            if (root.LssApi.isUnavailable(error)) {
                return { offline: true, api: true, completed: completed, summary: summary(curriculum), error: error };
            }
            writeLessons(before);
            syncLegacy(curriculum, before);
            throw error;
        }
    }

    async function completeModule(curriculum, moduleId) {
        ensureSeeded(curriculum);
        const before = completedSet();
        const next = new Set(before);
        moduleLessons(curriculum, moduleId).forEach(function (lessonId) { next.add(String(lessonId)); });
        writeLessons(next);
        syncLegacy(curriculum, next);

        if (!isApiUser() || !root.LssApi) {
            return { offline: true, api: false, summary: summary(curriculum) };
        }
        try {
            const result = await root.LssApi.completeModule(moduleId);
            serverSynced = true;
            return { offline: false, api: true, summary: result.summary || summary(curriculum) };
        } catch (error) {
            lastError = error;
            if (root.LssApi.isUnavailable(error)) {
                return { offline: true, api: true, summary: summary(curriculum), error: error };
            }
            writeLessons(before);
            syncLegacy(curriculum, before);
            throw error;
        }
    }

    function localMigrationPayload(curriculum) {
        ensureSeeded(curriculum);
        const completed = completedSet();
        const legacy = new Set(readLegacyModules());
        syncLegacy(curriculum, completed).forEach(function (moduleId) { legacy.add(moduleId); });
        const user = currentUser();
        let beltLevel = "white";
        try {
            beltLevel = (user && (user.offlineBeltLevel || user.beltLevel)) ||
                localStorage.getItem("lss_belt_level") || "white";
        } catch (error) {
            beltLevel = (user && (user.offlineBeltLevel || user.beltLevel)) || "white";
        }
        return {
            beltLevel: beltLevel,
            completedModules: Array.from(legacy),
            lessons: Array.from(completed)
        };
    }

    function hasLocalProgress() {
        ensureSeeded();
        return readLessons().length > 0 || readLegacyModules().length > 0;
    }

    root.ProgressStore = {
        load: load,
        setLesson: setLesson,
        completeModule: completeModule,
        isLessonComplete: isLessonComplete,
        moduleStatus: moduleStatus,
        summary: summary,
        localMigrationPayload: localMigrationPayload,
        hasLocalProgress: hasLocalProgress,
        isApiUser: isApiUser,
        modules: modules,
        lastError: function () { return lastError; },
        serverSynced: function () { return serverSynced; },
        loaded: function () { return loaded; }
    };
}(typeof globalThis !== "undefined" ? globalThis : this));
