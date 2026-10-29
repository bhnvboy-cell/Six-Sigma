function loginReturnTarget() {
    const requested = new URLSearchParams(window.location.search).get("return") || "profile.html";
    return /^[a-z0-9][a-z0-9_.-]*\.html(?:\?[a-z0-9_=&%.-]*)?(?:#[a-z0-9_-]*)?$/i.test(requested)
        ? requested
        : "profile.html";
}

function renderLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;
    if (getCurrentUser()) {
        window.location.href = loginReturnTarget();
        return;
    }
    const beltSelect = document.getElementById("beltLevel");
    if (beltSelect) {
        try {
            beltSelect.value = localStorage.getItem("lss_belt_level") || "white";
        } catch (error) {
            beltSelect.value = "white";
        }
    }
    form.addEventListener("submit", event => {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value.trim();
        const email = document.getElementById("email").value.trim();
        if (!firstName || !email) return;
        const beltLevel = beltSelect ? beltSelect.value : "white";
        const user = {
            userId: email.toLowerCase(),
            username: email.toLowerCase(),
            firstName,
            email,
            beltLevel
        };
        saveUser(user);
        try {
            localStorage.setItem("lss_belt_level", beltLevel);
        } catch (error) {
            console.warn("Belt preference could not be stored.");
        }
        window.location.href = loginReturnTarget();
    });
}

function renderProfile() {
    const area = document.getElementById("profileArea");
    if (!area) return;
    const user = getCurrentUser();
    if (!user) {
        area.innerHTML = '<div class="alert alert-info">Please <a href="login.html">log in</a> to track your progress.</div>';
        return;
    }

    let completed = [];
    try {
        completed = JSON.parse(localStorage.getItem("lss_completed_modules") || "[]");
    } catch (error) {
        completed = [];
    }

    const rows = [];
    curriculumData.belts.forEach(belt => {
        belt.modules.forEach(mod => rows.push({belt, mod}));
    });

    const total = rows.length;
    const done = rows.filter(row => completed.includes(row.mod.id)).length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    const resourceStore = window.ResourceStore;
    const beltLevel = resourceStore ? resourceStore.currentBelt() : (user.beltLevel || "white");
    const beltTone = resourceStore && resourceStore.beltIndex(beltLevel) === 4 ? "master" : beltLevel;
    const beltOptions = (resourceStore ? resourceStore.BELTS : [
        { id: "white", name: "White Belt" },
        { id: "yellow", name: "Yellow Belt" },
        { id: "green", name: "Green Belt" },
        { id: "black", name: "Black Belt" },
        { id: "master-black", name: "Master Black Belt" }
    ]).map(belt => `<option value="${belt.id}"${belt.id === beltLevel ? " selected" : ""}>${escapeProfile(belt.name)}</option>`).join("");

    area.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div>
                        <h4 class="mb-1">Welcome, ${escapeProfile(user.firstName || user.username)}</h4>
                        <p class="text-muted mb-0">${escapeProfile(user.email || "")}</p>
                    </div>
                    <div class="text-end">
                        <div class="display-6 fw-bold text-success">${percent}%</div>
                        <div class="text-muted small">${done} of ${total} modules complete</div>
                    </div>
                </div>
                <div class="progress mt-3" style="height: 12px;">
                    <div class="progress-bar" style="width: ${percent}%"></div>
                </div>
            </div>
        </div>
        <div class="card mb-4" id="beltLevel">
            <div class="card-header bg-light fw-semibold"><i class="fas fa-award me-1"></i>Resource library access</div>
            <div class="card-body">
                <div class="row align-items-center g-3">
                    <div class="col-lg-7">
                        <p class="mb-1">Your current access is <span id="profileBeltBadge" class="belt-badge ${beltTone}"><i class="fas fa-award me-1"></i>${escapeProfile(resourceStore ? resourceStore.beltName(beltLevel) : beltLevel)}</span></p>
                        <p class="text-muted small mb-0">White Belt unlocks 3 templates, Yellow unlocks 4 more, and Green unlocks the remaining 5. Black and Master Black Belt keep the full library open.</p>
                    </div>
                    <div class="col-lg-5">
                        <label for="profileBeltSelect" class="form-label small fw-semibold">Set your belt level</label>
                        <div class="d-flex gap-2">
                            <select class="form-select" id="profileBeltSelect">${beltOptions}</select>
                            <button type="button" class="btn btn-primary" id="saveBeltBtn">Save</button>
                        </div>
                        <div id="beltSaveStatus" class="small mt-2" role="status"></div>
                    </div>
                </div>
            </div>
        </div>
        ${curriculumData.belts.map(belt => `
            <div class="card mb-3">
                <div class="card-header bg-light fw-semibold"><i class="fas ${belt.icon} me-1"></i>${escapeProfile(belt.name)}</div>
                <div class="card-body">
                    <div class="row g-2">
                        ${belt.modules.map(mod => `
                            <div class="col-md-6">
                                <a href="module-detail.html?module=${encodeURIComponent(mod.id)}" class="d-flex justify-content-between align-items-center border rounded p-2 text-decoration-none text-dark">
                                    <span>${mod.number}. ${escapeProfile(mod.title)}</span>
                                    <span class="badge ${completed.includes(mod.id) ? "bg-success" : "bg-secondary"}">${completed.includes(mod.id) ? "Done" : "Open"}</span>
                                </a>
                            </div>`).join("")}
                    </div>
                </div>
            </div>`).join("")}`;

    const beltSelect = document.getElementById("profileBeltSelect");
    const saveBeltButton = document.getElementById("saveBeltBtn");
    if (resourceStore && beltSelect && saveBeltButton) {
        saveBeltButton.addEventListener("click", () => {
            const saved = resourceStore.setBelt(beltSelect.value);
            const badge = document.getElementById("profileBeltBadge");
            const status = document.getElementById("beltSaveStatus");
            const tone = resourceStore.beltIndex(saved) === 4 ? "master" : saved;
            badge.className = `belt-badge ${tone}`;
            badge.innerHTML = `<i class="fas fa-award me-1"></i>${escapeProfile(resourceStore.beltName(saved))}`;
            status.className = "small mt-2 text-success";
            status.textContent = "Belt level saved. Resource access updated.";
        });
    }
}

function escapeProfile(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
    renderLogin();
    renderProfile();
});
