(function (root) {
    "use strict";

    class ApiError extends Error {
        constructor(status, code, message, details) {
            super(message || "The request could not be completed.");
            this.name = "ApiError";
            this.status = Number(status) || 0;
            this.code = code || "REQUEST_FAILED";
            this.details = details || null;
            this.offline = this.status === 0;
        }
    }

    function configuredBase() {
        if (typeof root.LSS_API_BASE === "string" && root.LSS_API_BASE.trim()) {
            return root.LSS_API_BASE.trim().replace(/\/+$/, "");
        }
        const meta = document.querySelector('meta[name="lss-api-base"]');
        if (meta && meta.content.trim()) return meta.content.trim().replace(/\/+$/, "");
        try {
            const stored = localStorage.getItem("lss_api_base");
            if (stored && stored.trim()) return stored.trim().replace(/\/+$/, "");
        } catch (error) {
            console.warn("The API base setting could not be read.");
        }
        if (root.location.protocol === "http:" || root.location.protocol === "https:") {
            return root.location.protocol + "//" + root.location.hostname + ":5000";
        }
        return "http://127.0.0.1:5000";
    }

    function apiUrl(path) {
        if (/^https?:\/\//i.test(path)) return path;
        return configuredBase() + (path.charAt(0) === "/" ? path : "/" + path);
    }

    async function request(path, options) {
        const settings = options || {};
        const timeout = Number(settings.timeout) || 6000;
        const headers = { Accept: "application/json" };
        const fetchOptions = {
            method: settings.method || "GET",
            credentials: "include",
            headers: headers
        };
        if (settings.body !== undefined) {
            headers["Content-Type"] = "application/json";
            fetchOptions.body = JSON.stringify(settings.body);
        }

        let timer = null;
        let controller = null;
        if (typeof root.AbortController === "function") {
            controller = new root.AbortController();
            fetchOptions.signal = controller.signal;
            timer = root.setTimeout(function () { controller.abort(); }, timeout);
        }

        let response;
        try {
            response = await root.fetch(apiUrl(path), fetchOptions);
        } catch (error) {
            throw new ApiError(
                0,
                error && error.name === "AbortError" ? "API_TIMEOUT" : "API_OFFLINE",
                "The API server is unavailable. Offline mode is still available."
            );
        } finally {
            if (timer !== null) root.clearTimeout(timer);
        }

        const text = await response.text();
        let payload = null;
        if (text) {
            try {
                payload = JSON.parse(text);
            } catch (error) {
                if (response.ok) {
                    throw new ApiError(response.status, "INVALID_RESPONSE", "The API returned an invalid response.");
                }
            }
        }

        if (!response.ok) {
            const detail = payload && payload.error ? payload.error : {};
            throw new ApiError(
                response.status,
                detail.code,
                detail.message || "The request could not be completed.",
                detail.details
            );
        }
        return payload;
    }

    function data(response) {
        return response && Object.prototype.hasOwnProperty.call(response, "data") ? response.data : response;
    }

    root.LssApi = {
        ApiError: ApiError,
        baseUrl: configuredBase,
        url: apiUrl,
        request: request,
        isUnavailable: function (error) {
            return !error || error.status === 0 || error.status === 503;
        },
        health: async function (options) {
            return data(await request("/api/health", options));
        },
        healthDb: async function () {
            return data(await request("/api/health/db"));
        },
        me: async function () {
            return data(await request("/api/auth/me", { timeout: 1500 }));
        },
        login: async function (username, password) {
            return data(await request("/api/auth/login", {
                method: "POST",
                body: { username: username, password: password }
            }));
        },
        register: async function (payload) {
            return data(await request("/api/auth/register", {
                method: "POST",
                body: payload
            }));
        },
        logout: async function () {
            return request("/api/auth/logout", { method: "POST" });
        },
        getProgress: async function () {
            return data(await request("/api/progress"));
        },
        setLessonProgress: async function (lessonCode, status, minutes) {
            return data(await request("/api/progress/lessons/" + encodeURIComponent(lessonCode), {
                method: "PUT",
                body: {
                    status: status,
                    timeSpentMinutes: Number(minutes) || 0
                }
            }));
        },
        completeModule: async function (moduleId) {
            return data(await request("/api/progress/modules/" + encodeURIComponent(moduleId), {
                method: "PUT",
                body: { status: "Completed" }
            }));
        },
        getBelt: async function () {
            return data(await request("/api/progress/belt"));
        },
        updateBelt: async function (beltLevel) {
            return data(await request("/api/progress/belt", {
                method: "PUT",
                body: { beltLevel: beltLevel }
            }));
        },
        migrateProgress: async function (payload) {
            return data(await request("/api/progress/migrate-local", {
                method: "POST",
                body: payload
            }));
        },
        listCopies: async function () {
            return data(await request("/api/resources/copies"));
        },
        createCopy: async function (payload) {
            return data(await request("/api/resources/copies", {
                method: "POST",
                body: payload
            }));
        },
        updateCopy: async function (copyId, payload) {
            return data(await request("/api/resources/copies/" + encodeURIComponent(copyId), {
                method: "PUT",
                body: payload
            }));
        },
        deleteCopy: async function (copyId) {
            return request("/api/resources/copies/" + encodeURIComponent(copyId), {
                method: "DELETE"
            });
        },
        migrateResources: async function (resources) {
            return data(await request("/api/resources/migrate-local", {
                method: "POST",
                body: { resources: resources }
            }));
        },
        listExams: async function (lang) {
            const query = lang ? "?lang=" + encodeURIComponent(lang) : "";
            return data(await request("/api/exams" + query));
        },
        getExam: async function (belt, lang) {
            const query = lang ? "?lang=" + encodeURIComponent(lang) : "";
            return data(await request("/api/exams/" + encodeURIComponent(belt) + query));
        },
        listExamAttempts: async function (belt) {
            return data(await request("/api/exams/" + encodeURIComponent(belt) + "/attempts"));
        },
        submitExamAttempt: async function (belt, answers, startedAt, lang) {
            return data(await request("/api/exams/" + encodeURIComponent(belt) + "/attempts", {
                method: "POST",
                body: { answers: answers, startedAt: startedAt || null, lang: lang || null }
            }));
        },
        listCertificates: async function () {
            return data(await request("/api/certificates"));
        },
        issueCertificate: async function (belt) {
            return data(await request("/api/certificates/" + encodeURIComponent(belt), {
                method: "POST"
            }));
        },
        verifyCertificate: async function (verificationId) {
            return data(await request("/api/certificates/verify/" + encodeURIComponent(verificationId)));
        }
    };
}(typeof globalThis !== "undefined" ? globalThis : this));
