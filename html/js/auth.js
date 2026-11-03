let profileCertificates = [];

function loginReturnTarget() {
    const requested = new URLSearchParams(window.location.search).get("return") || "profile.html";
    return /^[a-z0-9][a-z0-9_.-]*\.html(?:\?[a-z0-9_=&%.-]*)?(?:#[a-z0-9_-]*)?$/i.test(requested)
        ? requested
        : "profile.html";
}

function escapeProfile(value) {
    return String(value === undefined || value === null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function authT(key, fallback) {
    return window.LssI18n ? window.LssI18n.t(key, fallback) : fallback;
}

function authMessage(message, tone) {
    const area = document.getElementById("authMessage");
    if (!area) return;
    if (!message) {
        area.innerHTML = "";
        return;
    }
    area.innerHTML = '<div class="alert alert-' + (tone || "info") + ' py-2 mb-0" role="alert">' +
        escapeProfile(message) + "</div>";
}

function hasLocalBrowserData() {
    function hasEntries(value) {
        return Boolean(value && typeof value === "object" && Object.keys(value).length);
    }
    try {
        const modules = JSON.parse(localStorage.getItem("lss_completed_modules") || "[]");
        const progress = JSON.parse(localStorage.getItem("lss_progress") || "{}");
        const lessons = JSON.parse(localStorage.getItem("lss_lesson_progress") || "{}");
        const resources = JSON.parse(localStorage.getItem("lss_user_resources") || "{}");
        return (Array.isArray(modules) && modules.length > 0) ||
            hasEntries(progress) || hasEntries(lessons) || hasEntries(resources);
    } catch (error) {
        return false;
    }
}

function saveApiSession(serverUser) {
    const previous = getCurrentUser() || {};
    const user = Object.assign({}, serverUser, { authMode: "api" });
    const offlineId = previous.authMode === "offline" ? previous.userId : previous.offlineUserId;
    if (offlineId) user.offlineUserId = offlineId;
    if (previous.pendingMigration || previous.authMode === "offline" || hasLocalBrowserData()) {
        user.pendingMigration = true;
    }
    let offlineBelt = previous.offlineBeltLevel;
    if (previous.authMode === "offline" && previous.beltLevel) offlineBelt = previous.beltLevel;
    try {
        const storedBelt = localStorage.getItem("lss_belt_level");
        if (storedBelt && offlineId && !offlineBelt) offlineBelt = storedBelt;
        localStorage.setItem("lss_belt_level", user.beltLevel || storedBelt || "white");
    } catch (error) {
        console.warn("The belt preference could not be stored.");
    }
    if (offlineBelt) user.offlineBeltLevel = offlineBelt;
    saveUser(user);
    return user;
}

function setButtonBusy(button, busy, busyHtml) {
    if (!button) return;
    if (busy) {
        button.dataset.originalHtml = button.innerHTML;
        button.disabled = true;
        button.innerHTML = busyHtml || '<span class="spinner-border spinner-border-sm me-1"></span>Working...';
    } else {
        button.disabled = false;
        if (button.dataset.originalHtml) button.innerHTML = button.dataset.originalHtml;
    }
}

function renderLogin() {
    const signinForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const offlineForm = document.getElementById("offlineForm");
    if (!signinForm && !registerForm && !offlineForm) return;

    const current = getCurrentUser();
    if (current && current.authMode === "api") {
        window.location.href = loginReturnTarget();
        return;
    }

    let beltLevel = "white";
    try {
        beltLevel = localStorage.getItem("lss_belt_level") || (current && current.beltLevel) || "white";
    } catch (error) {
        beltLevel = (current && current.beltLevel) || "white";
    }
    const offlineBelt = document.getElementById("offlineBeltLevel");
    if (offlineBelt) offlineBelt.value = beltLevel;

    if (current && current.authMode === "offline") {
        const note = document.getElementById("offlineSessionNote");
        if (note) {
            note.innerHTML = '<div class="alert alert-info py-2 small">Currently using the offline demo as <strong>' +
                escapeProfile(current.firstName || current.email) +
                "</strong>. Sign in above to create a server-backed session; your browser data can then be migrated from your profile.</div>";
        }
        const firstName = document.getElementById("firstName");
        const email = document.getElementById("email");
        if (firstName && !firstName.value) firstName.value = current.firstName || "";
        if (email && !email.value) email.value = current.email || "";
    }

    if (signinForm) {
        signinForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const identifier = document.getElementById("loginUsername").value.trim();
            const password = document.getElementById("loginPassword").value;
            const button = document.getElementById("loginSubmit");
            if (!identifier || !password) {
                authMessage(authT("login.enterCredentials", "Enter your username or email and password."), "warning");
                return;
            }
            setButtonBusy(button, true, '<span class="spinner-border spinner-border-sm me-1"></span>Signing in...');
            authMessage("");
            try {
                const result = await LssApi.login(identifier, password);
                saveApiSession(result.user);
                window.location.href = loginReturnTarget();
            } catch (error) {
                authMessage(
                    LssApi.isUnavailable(error)
                        ? authT("login.apiUnavailable", "The API is unavailable. Start the Flask server, or continue with the offline demo below.")
                        : error.message,
                    "danger"
                );
                setButtonBusy(button, false);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            if (!registerForm.reportValidity()) return;
            const password = document.getElementById("regPassword").value;
            const confirmation = document.getElementById("regConfirm").value;
            if (password !== confirmation) {
                authMessage(authT("login.passwordMismatch", "The two passwords do not match."), "warning");
                return;
            }
            const button = document.getElementById("registerSubmit");
            setButtonBusy(button, true, '<span class="spinner-border spinner-border-sm me-1"></span>Creating...');
            authMessage("");
            try {
                const result = await LssApi.register({
                    firstName: document.getElementById("regFirstName").value.trim(),
                    lastName: document.getElementById("regLastName").value.trim(),
                    username: document.getElementById("regUsername").value.trim(),
                    email: document.getElementById("regEmail").value.trim(),
                    password: password
                });
                saveApiSession(result.user);
                window.location.href = loginReturnTarget();
            } catch (error) {
                const details = error.details || {};
                if (details.field) {
                    const field = document.getElementById(details.field === "username" ? "regUsername" :
                        details.field === "email" ? "regEmail" :
                        details.field === "password" ? "regPassword" : "");
                    if (field) field.focus();
                }
                authMessage(
                    LssApi.isUnavailable(error)
                        ? authT("login.apiUnavailable", "The API is unavailable. Start the Flask server, or continue with the offline demo below.")
                        : error.message,
                    "danger"
                );
                setButtonBusy(button, false);
            }
        });
    }

    if (offlineForm) {
        offlineForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!offlineForm.reportValidity()) return;
            const firstName = document.getElementById("firstName").value.trim();
            const email = document.getElementById("email").value.trim();
            const belt = offlineBelt ? offlineBelt.value : "white";
            const user = {
                userId: email.toLowerCase(),
                username: email.toLowerCase(),
                firstName: firstName,
                email: email,
                beltLevel: belt,
                authMode: "offline"
            };
            saveUser(user);
            try {
                localStorage.setItem("lss_belt_level", belt);
            } catch (error) {
                console.warn("The belt preference could not be stored.");
            }
            window.location.href = loginReturnTarget();
        });
    }
}

function moduleProgressBadge(status) {
    if (status.complete) return '<span class="badge bg-success">Done</span>';
    if (status.completedLessons > 0) {
        return '<span class="badge bg-warning text-dark">' +
            status.completedLessons + "/" + status.totalLessons + "</span>";
    }
    return '<span class="badge bg-secondary">Open</span>';
}

function migrationCard(show) {
    if (!show) return "";
    return `
        <div class="card mb-4 border-warning" id="migrationCard">
            <div class="card-header bg-warning-subtle fw-semibold"><i class="fas fa-cloud-arrow-up me-1"></i>Migrate browser data</div>
            <div class="card-body">
                <p class="mb-2">Your earlier offline lesson progress and saved project copies can be copied into your account. The migration is repeat-safe and keeps the browser copy as a fallback. Belt levels are not migrated because they are awarded by official exams.</p>
                <button type="button" class="btn btn-warning" id="migrateLocalBtn"><i class="fas fa-cloud-arrow-up me-1"></i>Upload browser data</button>
                <div id="migrationStatus" class="small mt-2" role="status"></div>
            </div>
        </div>`;
}

function openCertificateStudioPreview(user, resourceStore) {
    if (!window.CertificateStudio) return;
    const latest = profileCertificates[0];
    if (latest) {
        const latestBelt = resourceStore ? resourceStore.beltName(latest.beltLevel) : latest.beltLevel;
        window.CertificateStudio.open(latest, latestBelt);
        return;
    }
    const beltLevel = (user && user.beltLevel) || "white";
    const beltName = resourceStore ? resourceStore.beltName(beltLevel) : beltLevel;
    window.CertificateStudio.openPreview({
        user: user || {},
        beltLevel: beltLevel,
        beltName: beltName
    });
}

async function loadCertificates(resourceStore) {
    const area = document.getElementById("certificatesArea");
    if (!area || !window.LssApi) return;
    try {
        const certificates = await LssApi.listCertificates();
        profileCertificates = certificates;
        if (!certificates.length) {
            area.innerHTML = `
                <p class="text-muted small mb-2">No certificates yet. Pass a belt exam, then issue the certificate from the quizzes page.</p>
                <a class="btn btn-sm btn-outline-primary" href="quizzes.html"><i class="fas fa-graduation-cap me-1"></i>Go to belt exams</a>`;
            return;
        }
        area.innerHTML = certificates.map(function (certificate, index) {
            const beltName = resourceStore ? resourceStore.beltName(certificate.beltLevel) : certificate.beltLevel;
            const issued = certificate.issuedAt ? new Date(certificate.issuedAt).toLocaleDateString() : "";
            return `
                <div class="border rounded p-3 mb-2">
                    <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <strong><i class="fas fa-award text-success me-1"></i>${escapeProfile(beltName)}</strong>
                        <div class="d-flex align-items-center gap-2">
                            ${certificate.isRevoked
                                ? '<span class="badge bg-danger">Revoked</span>'
                                : '<span class="badge bg-success">Valid</span>'}
                            ${window.CertificateStudio
                                ? `<button type="button" class="btn btn-sm btn-outline-success" data-certificate-index="${index}"><i class="fas fa-eye me-1"></i>View certificate</button>`
                                : ""}
                        </div>
                    </div>
                    <div class="small text-muted mt-2">Issued ${escapeProfile(issued)} · Certificate ${escapeProfile(certificate.certificateNumber)}</div>
                    <div class="small text-muted">Verification ID: <code>${escapeProfile(certificate.verificationId)}</code></div>
                </div>`;
        }).join("");
        area.querySelectorAll("[data-certificate-index]").forEach(function (button) {
            button.addEventListener("click", function () {
                const certificate = certificates[Number(button.getAttribute("data-certificate-index"))];
                if (!certificate) return;
                const beltName = resourceStore ? resourceStore.beltName(certificate.beltLevel) : certificate.beltLevel;
                window.CertificateStudio.open(certificate, beltName);
            });
        });
    } catch (error) {
        area.innerHTML = '<div class="alert alert-warning py-2 mb-0 small">' +
            escapeProfile(LssApi.isUnavailable(error)
                ? "Certificates are unavailable while the API is offline."
                : (error.message || "Certificates could not be loaded.")) + "</div>";
    }
}

async function migrateLocalData(button, user) {
    const status = document.getElementById("migrationStatus");
    if (!button || !status) return;
    if (!window.ProgressStore || !window.ResourceStore) return;
    button.disabled = true;
    status.className = "small mt-2 text-muted";
    status.textContent = "Migrating browser data...";
    const progressPayload = ProgressStore.localMigrationPayload(curriculumData);
    const resourcePayload = ResourceStore.localMigrationPayload();
    try {
        const progressResult = await LssApi.migrateProgress(progressPayload);
        const resourceResult = await LssApi.migrateResources(resourcePayload);
        const migrationKey = "lss_migration_done:" + user.userId;
        try {
            localStorage.setItem(migrationKey, new Date().toISOString());
        } catch (error) {
            console.warn("The migration marker could not be stored.");
        }
        const latest = getCurrentUser() || user;
        latest.migrationDoneAt = new Date().toISOString();
        latest.pendingMigration = false;
        if (progressResult.beltLevel) {
            latest.beltLevel = progressResult.beltLevel;
            localStorage.setItem("lss_belt_level", progressResult.beltLevel);
        }
        delete latest.offlineBeltLevel;
        saveUser(latest);
        await ProgressStore.load(curriculumData, { force: true });
        await ResourceStore.refreshCopies();
        renderProfile({
            message: "Migration complete: " + progressResult.importedLessons +
                " lessons and " + resourceResult.importedCount +
                " saved copies added. Existing records were left in place.",
            tone: "success"
        });
    } catch (error) {
        status.className = "small mt-2 text-danger";
        status.textContent = LssApi.isUnavailable(error)
            ? "The API is unavailable. Your browser data is unchanged."
            : (error.message || "The migration could not be completed.");
        button.disabled = false;
    }
}

async function renderProfile(notice) {
    const area = document.getElementById("profileArea");
    if (!area) return;
    const user = getCurrentUser();
    if (!user) {
        area.innerHTML = '<div class="alert alert-info">Please <a href="login.html">log in</a> to track your progress.</div>';
        return;
    }

    const resourceStore = window.ResourceStore;
    const progressStore = window.ProgressStore;
    let progressOffline = false;
    if (resourceStore && resourceStore.refreshCopies) {
        try {
            await resourceStore.refreshCopies();
        } catch (error) {
            progressOffline = true;
        }
    }
    if (progressStore) {
        try {
            const loaded = await progressStore.load(curriculumData, { force: true });
            progressOffline = progressOffline || loaded.offline;
        } catch (error) {
            progressOffline = true;
        }
    }

    const summary = progressStore ? progressStore.summary(curriculumData) : { totalLessons: 0, completedLessons: 0, percentComplete: 0 };
    const rows = [];
    curriculumData.belts.forEach(function (belt) {
        belt.modules.forEach(function (module) { rows.push({ belt: belt, mod: module }); });
    });
    const modulesDone = rows.filter(function (row) {
        return progressStore && progressStore.moduleStatus(curriculumData, row.mod.id).complete;
    }).length;
    const percent = summary.totalLessons ? Math.round((summary.completedLessons / summary.totalLessons) * 100) : 0;
    const beltLevel = resourceStore ? resourceStore.currentBelt() : (user.beltLevel || "white");
    const beltTone = resourceStore && resourceStore.beltIndex(beltLevel) === 4 ? "master" : beltLevel;
    const belts = resourceStore ? resourceStore.BELTS : [
        { id: "white", name: "White Belt" },
        { id: "yellow", name: "Yellow Belt" },
        { id: "green", name: "Green Belt" },
        { id: "black", name: "Black Belt" },
        { id: "master-black", name: "Master Black Belt" }
    ];
    const beltOptions = belts.map(function (belt) {
        return '<option value="' + belt.id + '"' + (belt.id === beltLevel ? " selected" : "") + ">" +
            escapeProfile(belt.name) + "</option>";
    }).join("");
    const apiUser = progressStore ? progressStore.isApiUser() : false;
    let migrated = false;
    try {
        migrated = Boolean(localStorage.getItem("lss_migration_done:" + user.userId));
    } catch (error) {
        migrated = false;
    }
    const needsMigration = apiUser && !migrated && Boolean(user.pendingMigration || user.offlineUserId);
    const modeBadge = apiUser
        ? '<span class="badge bg-success-subtle text-success-emphasis border border-success-subtle"><i class="fas fa-cloud me-1"></i>Server account</span>'
        : '<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle"><i class="fas fa-wifi me-1"></i>Offline demo</span>';

    const noticeHtml = notice && notice.message
        ? '<div class="alert alert-' + (notice.tone || "info") + ' py-2">' + escapeProfile(notice.message) + "</div>"
        : "";
    area.innerHTML = noticeHtml + `
        <div class="card mb-4">
            <div class="card-body">
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div>
                        <h4 class="mb-1">Welcome, ${escapeProfile(user.firstName || user.username)}</h4>
                        <p class="text-muted mb-1">${escapeProfile(user.email || "")}</p>
                        ${modeBadge}
                        ${progressOffline && apiUser ? '<span class="badge bg-secondary ms-1">Offline cache</span>' : ""}
                        ${apiUser && user.role === "admin" ? '<div class="mt-2"><a class="btn btn-sm btn-outline-dark" href="admin.html"><i class="fas fa-shield-halved me-1"></i>Administrator dashboard</a></div>' : ""}
                    </div>
                    <div class="text-end">
                        <div class="display-6 fw-bold text-success">${percent}%</div>
                        <div class="text-muted small">${summary.completedLessons} of ${summary.totalLessons} lessons complete</div>
                        <div class="text-muted small">${modulesDone} of ${rows.length} modules complete</div>
                    </div>
                </div>
                <div class="progress mt-3" style="height: 12px;">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
            </div>
        </div>
        ${needsMigration ? migrationCard(true) : ""}
        <div class="card mb-4" id="beltLevel">
            <div class="card-header bg-light fw-semibold"><i class="fas fa-award me-1"></i>Belt and resource library access</div>
            <div class="card-body">
                <div class="row align-items-center g-3">
                    <div class="col-lg-7">
                        <p class="mb-1">Your current belt is <span id="profileBeltBadge" class="belt-badge ${beltTone}"><i class="fas fa-award me-1"></i>${escapeProfile(resourceStore ? resourceStore.beltName(beltLevel) : beltLevel)}</span></p>
                        <p class="text-muted small mb-0">White Belt unlocks 3 templates, Yellow unlocks 4 more, and Green unlocks the remaining 5. Black and Master Black Belt keep the full library open.</p>
                    </div>
                    <div class="col-lg-5">
                        ${apiUser ? `
                            <div class="alert alert-info py-2 small">Belt levels are awarded by passing official exams. They cannot be selected manually.</div>
                            <a class="btn btn-primary" href="quizzes.html"><i class="fas fa-graduation-cap me-1"></i>Take belt exams</a>
                        ` : `
                            <label for="profileBeltSelect" class="form-label small fw-semibold">Set your belt level</label>
                            <div class="d-flex gap-2">
                                <select class="form-select" id="profileBeltSelect">${beltOptions}</select>
                                <button type="button" class="btn btn-primary" id="saveBeltBtn">Save</button>
                            </div>
                            <div id="beltSaveStatus" class="small mt-2" role="status"></div>
                        `}
                    </div>
                </div>
            </div>
        </div>
        ${apiUser ? `
            <div class="card mb-4">
                <div class="card-header bg-light fw-semibold d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <span><i class="fas fa-certificate me-1"></i>Certificates</span>
                    <button type="button" class="btn btn-sm btn-outline-success" id="openCertificateStudioProfile"><i class="fas fa-pen-ruler me-1"></i>Certificate studio</button>
                </div>
                <div class="card-body" id="certificatesArea">
                    <div class="text-muted small"><span class="spinner-border spinner-border-sm me-1"></span>Loading certificates...</div>
                </div>
            </div>` : ""}
        ${curriculumData.belts.map(function (belt) {
            return `
                <div class="card mb-3">
                    <div class="card-header bg-light fw-semibold"><i class="fas ${belt.icon} me-1"></i>${escapeProfile(belt.name)}</div>
                    <div class="card-body">
                        <div class="row g-2">
                            ${belt.modules.map(function (mod) {
                                const status = progressStore ? progressStore.moduleStatus(curriculumData, mod.id) : { complete: false, completedLessons: 0, totalLessons: mod.lessons.length };
                                return `
                                    <div class="col-md-6">
                                        <a href="module-detail.html?module=${encodeURIComponent(mod.id)}" class="d-flex justify-content-between align-items-center border rounded p-2 text-decoration-none text-dark">
                                            <span>${mod.number}. ${escapeProfile(mod.title)}</span>
                                            ${moduleProgressBadge(status)}
                                        </a>
                                    </div>`;
                            }).join("")}
                        </div>
                    </div>
                </div>`;
        }).join("")}`;

    const beltSelect = document.getElementById("profileBeltSelect");
    const saveBeltButton = document.getElementById("saveBeltBtn");
    if (resourceStore && beltSelect && saveBeltButton) {
        saveBeltButton.addEventListener("click", async function () {
            const status = document.getElementById("beltSaveStatus");
            saveBeltButton.disabled = true;
            status.className = "small mt-2 text-muted";
            status.textContent = "Saving...";
            try {
                const result = await resourceStore.setBelt(beltSelect.value);
                const badge = document.getElementById("profileBeltBadge");
                const tone = resourceStore.beltIndex(result.belt) === 4 ? "master" : result.belt;
                badge.className = "belt-badge " + tone;
                badge.innerHTML = '<i class="fas fa-award me-1"></i>' + escapeProfile(resourceStore.beltName(result.belt));
                status.className = "small mt-2 " + (result.offline ? "text-warning" : "text-success");
                status.textContent = result.offline
                    ? "Belt level saved in this browser. Server sync is unavailable."
                    : "Belt level saved. Resource access updated.";
            } catch (error) {
                status.className = "small mt-2 text-danger";
                status.textContent = error.message || "The belt level could not be saved.";
            } finally {
                saveBeltButton.disabled = false;
            }
        });
    }

    const migrateButton = document.getElementById("migrateLocalBtn");
    if (migrateButton) {
        migrateButton.addEventListener("click", function () {
            migrateLocalData(migrateButton, user);
        });
    }

    const studioButton = document.getElementById("openCertificateStudioProfile");
    if (studioButton) {
        studioButton.addEventListener("click", function () {
            openCertificateStudioPreview(user, resourceStore);
        });
    }

    if (apiUser) {
        await loadCertificates(resourceStore);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    if (window.LssI18n && window.LssI18n.ready) {
        try { await window.LssI18n.ready; } catch (error) { /* keep English */ }
    }
    if (window.sessionReady) await window.sessionReady;
    renderLogin();
    await renderProfile();
});
