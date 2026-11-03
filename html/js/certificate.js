(function (root) {
    "use strict";

    const STORAGE_KEY = "lss_certificate_settings";
    const MODAL_ID = "certificateStudioModal";
    const MAX_LOGO_BYTES = 512 * 1024;
    const DEFAULTS = {
        companyName: "NR LAB",
        companyAddress: "",
        logo: "",
        trainerName: "",
        trainerTitle: "Lead Trainer",
        managerName: "",
        managerTitle: "Program Manager"
    };

    let settings = normalize(readSettings());
    let current = null;

    function normalize(value) {
        const result = Object.assign({}, DEFAULTS);
        if (value && typeof value === "object") {
            Object.keys(DEFAULTS).forEach(function (key) {
                if (typeof value[key] === "string") result[key] = value[key];
            });
        }
        result.logo = safeLogo(result.logo) ? result.logo : "";
        return result;
    }

    function readSettings() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        } catch (error) {
            return null;
        }
    }

    function saveSettings() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            return true;
        } catch (error) {
            return false;
        }
    }

    function safeLogo(value) {
        return /^(data:image\/|https?:\/\/)/i.test(String(value || ""));
    }

    function escapeHtml(value) {
        return String(value === undefined || value === null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function formatDate(value) {
        if (!value) return "";
        const date = new Date(value);
        if (isNaN(date.getTime())) return "";
        return date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    function verificationUrl(certificate) {
        const id = certificate && certificate.verificationId;
        if (!id) return "";
        try {
            if (root.location && /^https?:$/.test(root.location.protocol)) {
                return root.location.origin +
                    root.location.pathname.replace(/[^/]*$/, "") +
                    "verify.html?id=" + encodeURIComponent(id);
            }
        } catch (error) {
            return "";
        }
        return "";
    }

    function qrMarkup(url) {
        if (!url || typeof root.qrcode !== "function") return "";
        try {
            const qr = root.qrcode(0, "M");
            qr.addData(url);
            qr.make();
            return qr.createSvgTag({
                cellSize: 4,
                margin: 1,
                scalable: true,
                alt: "Certificate verification QR code",
                title: "Scan to verify this certificate"
            });
        } catch (error) {
            return "";
        }
    }

    function signature(name, title) {
        return `
            <div class="certificate-signature">
                <div class="certificate-signature-line"></div>
                <div class="certificate-signature-name">${escapeHtml(name) || "&nbsp;"}</div>
                <div class="certificate-signature-title">${escapeHtml(title)}</div>
            </div>`;
    }

    function certificateMarkup(certificate, beltName, details) {
        const companyName = escapeHtml(details.companyName);
        const companyAddress = escapeHtml(details.companyAddress);
        const logo = safeLogo(details.logo)
            ? `<div class="certificate-logo"><img src="${escapeHtml(details.logo)}" alt="${companyName || "Company"} logo"></div>`
            : "";
        const company = (details.companyName || details.companyAddress)
            ? `<div class="certificate-company">
                    ${details.companyName ? `<div class="certificate-company-name">${companyName}</div>` : ""}
                    ${details.companyAddress ? `<div class="certificate-company-address">${companyAddress}</div>` : ""}
               </div>`
            : "";
        const head = (logo || company) ? `<div class="certificate-head">${logo}${company}</div>` : "";
        const learner = escapeHtml(certificate && certificate.learnerName);
        const belt = escapeHtml(beltName || (certificate && certificate.beltLevel) || "");
        const number = escapeHtml(certificate && certificate.certificateNumber);
        const verification = escapeHtml(certificate && certificate.verificationId);
        const issued = escapeHtml(formatDate(certificate && certificate.issuedAt));
        const qr = qrMarkup(verificationUrl(certificate));
        const qrBlock = qr
            ? `<div class="certificate-qr-block">
                    ${qr}
                    <div class="certificate-qr-caption">Scan to verify</div>
               </div>`
            : (verification ? "" : `<div class="certificate-qr-block certificate-qr-preview">
                    <div class="certificate-qr-placeholder">QR</div>
                    <div class="certificate-qr-caption">Appears when issued</div>
               </div>`);

        return `
            <div class="certificate-sheet">
                <div class="certificate-frame">
                    ${head}
                    <div class="certificate-main">
                        <div class="certificate-kicker">Certificate of Achievement</div>
                        <p class="certificate-presented">This is to certify that</p>
                        <div class="certificate-name">${learner}</div>
                        <p class="certificate-completion">has successfully completed the</p>
                        <div class="certificate-award">${belt ? "Lean Six Sigma " + belt : "Lean Six Sigma Training"}</div>
                        <p class="certificate-statement">This certifies successful completion of the Lean Six Sigma training program and its assessment requirements.</p>
                        <div class="certificate-meta">
                            ${number ? `<span>Certificate No. <strong>${number}</strong></span>` : ""}
                            ${issued ? `<span>Issued <strong>${issued}</strong></span>` : ""}
                            ${verification ? `<span>Verification ID <strong>${verification}</strong></span>` : ""}
                        </div>
                    </div>
                    <div class="certificate-bottom">
                        <div class="certificate-signatures">
                            ${signature(details.trainerName, details.trainerTitle)}
                            ${signature(details.managerName, details.managerTitle)}
                        </div>
                        ${qrBlock}
                    </div>
                </div>
            </div>`;
    }

    function formMarkup() {
        return `
            <div class="certificate-controls">
                <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <div>
                        <h6 class="mb-0"><i class="fas fa-pen-ruler me-1"></i>Certificate details</h6>
                        <p class="text-muted small mb-0">Saved in this browser and printed on every certificate.</p>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-secondary" data-cert-reset>Reset</button>
                </div>
                <div class="mb-2">
                    <label class="form-label small fw-semibold" for="certCompanyName">Company name</label>
                    <input type="text" class="form-control form-control-sm" id="certCompanyName" data-cert-field="companyName" maxlength="120">
                </div>
                <div class="mb-2">
                    <label class="form-label small fw-semibold" for="certCompanyAddress">Company address</label>
                    <textarea class="form-control form-control-sm" id="certCompanyAddress" data-cert-field="companyAddress" rows="2" maxlength="300"></textarea>
                </div>
                <div class="mb-3">
                    <label class="form-label small fw-semibold" for="certLogoFile">Company logo</label>
                    <input type="file" class="form-control form-control-sm" id="certLogoFile" accept="image/png,image/jpeg,image/gif,image/webp,image/svg+xml">
                    <div class="d-flex align-items-center gap-2 mt-2">
                        <img class="certificate-logo-thumb" id="certLogoThumb" alt="Company logo preview">
                        <button type="button" class="btn btn-sm btn-outline-danger" id="certLogoRemove">Remove logo</button>
                    </div>
                    <div class="form-text">PNG, JPG, GIF, WebP, or SVG up to 512 KB.</div>
                </div>
                <div class="row g-2">
                    <div class="col-sm-6">
                        <label class="form-label small fw-semibold" for="certTrainerName">Trainer name</label>
                        <input type="text" class="form-control form-control-sm" id="certTrainerName" data-cert-field="trainerName" maxlength="120">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label small fw-semibold" for="certTrainerTitle">Trainer title</label>
                        <input type="text" class="form-control form-control-sm" id="certTrainerTitle" data-cert-field="trainerTitle" maxlength="120">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label small fw-semibold" for="certManagerName">Manager name</label>
                        <input type="text" class="form-control form-control-sm" id="certManagerName" data-cert-field="managerName" maxlength="120">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label small fw-semibold" for="certManagerTitle">Manager title</label>
                        <input type="text" class="form-control form-control-sm" id="certManagerTitle" data-cert-field="managerTitle" maxlength="120">
                    </div>
                </div>
                <div id="certificateSaveNote" class="small mt-2" role="status"></div>
            </div>`;
    }

    function ensureModal() {
        if (document.getElementById(MODAL_ID)) return;
        const wrapper = document.createElement("div");
        wrapper.className = "modal fade certificate-studio";
        wrapper.id = MODAL_ID;
        wrapper.tabIndex = -1;
        wrapper.setAttribute("aria-labelledby", MODAL_ID + "Label");
        wrapper.setAttribute("aria-hidden", "true");
        wrapper.innerHTML = `
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${MODAL_ID}Label"><i class="fas fa-certificate me-1"></i>Certificate</h5>
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-success btn-sm" id="certPrintBtn"><i class="fas fa-print me-1"></i>Print / Save PDF</button>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="row g-3">
                            <div class="col-lg-8">
                                <div id="certificatePreview"></div>
                            </div>
                            <div class="col-lg-4">${formMarkup()}</div>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(wrapper);

        wrapper.querySelectorAll("[data-cert-field]").forEach(function (input) {
            input.addEventListener("input", function () {
                settings[input.getAttribute("data-cert-field")] = input.value;
                showSaveNote(saveSettings());
                renderPreview();
            });
        });

        const fileInput = wrapper.querySelector("#certLogoFile");
        fileInput.addEventListener("change", function () {
            const file = fileInput.files && fileInput.files[0];
            if (!file) return;
            if (!/^image\//i.test(file.type) || file.size > MAX_LOGO_BYTES) {
                showSaveNote(false, !/^image\//i.test(file.type)
                    ? "Choose an image file for the company logo."
                    : "The logo must be 512 KB or smaller.");
                fileInput.value = "";
                return;
            }
            const reader = new FileReader();
            reader.onload = function () {
                settings.logo = String(reader.result || "");
                showSaveNote(saveSettings());
                updateLogoThumb();
                renderPreview();
            };
            reader.onerror = function () {
                showSaveNote(false, "The logo could not be read.");
            };
            reader.readAsDataURL(file);
        });

        wrapper.querySelector("#certLogoRemove").addEventListener("click", function () {
            settings.logo = "";
            fileInput.value = "";
            showSaveNote(saveSettings());
            updateLogoThumb();
            renderPreview();
        });

        wrapper.querySelector("[data-cert-reset]").addEventListener("click", function () {
            settings = normalize(DEFAULTS);
            showSaveNote(saveSettings());
            syncForm();
            updateLogoThumb();
            renderPreview();
        });

        wrapper.querySelector("#certPrintBtn").addEventListener("click", printCertificate);
    }

    function showSaveNote(saved, message) {
        const note = document.getElementById("certificateSaveNote");
        if (!note) return;
        if (saved) {
            note.className = "small mt-2 text-success";
            note.textContent = "Saved in this browser.";
            return;
        }
        note.className = "small mt-2 text-warning";
        note.textContent = message || "Details are shown here but could not be saved in this browser.";
    }

    function syncForm() {
        document.querySelectorAll("[data-cert-field]").forEach(function (input) {
            input.value = settings[input.getAttribute("data-cert-field")] || "";
        });
        updateLogoThumb();
    }

    function updateLogoThumb() {
        const thumb = document.getElementById("certLogoThumb");
        const remove = document.getElementById("certLogoRemove");
        if (!thumb) return;
        if (safeLogo(settings.logo)) {
            thumb.src = settings.logo;
            thumb.classList.add("is-visible");
            if (remove) remove.disabled = false;
        } else {
            thumb.removeAttribute("src");
            thumb.classList.remove("is-visible");
            if (remove) remove.disabled = true;
        }
    }

    function renderPreview() {
        const preview = document.getElementById("certificatePreview");
        if (!preview || !current) return;
        preview.innerHTML = certificateMarkup(current.certificate, current.beltName, settings);
    }

    function open(certificate, beltName) {
        ensureModal();
        current = { certificate: certificate || {}, beltName: beltName || "" };
        settings = normalize(readSettings());
        syncForm();
        renderPreview();

        const modalElement = document.getElementById(MODAL_ID);
        if (root.bootstrap && root.bootstrap.Modal) {
            root.bootstrap.Modal.getOrCreateInstance(modalElement).show();
        } else {
            modalElement.classList.add("show");
            modalElement.style.display = "block";
        }
    }

    function openPreview(options) {
        const opts = options || {};
        const user = opts.user || {};
        const learnerName = opts.learnerName ||
            [user.firstName, user.lastName].filter(Boolean).join(" ") ||
            user.username ||
            "Learner Name";
        open(
            {
                learnerName: learnerName,
                beltLevel: opts.beltLevel || "",
                certificateNumber: "",
                verificationId: "",
                issuedAt: ""
            },
            opts.beltName || opts.beltLevel || "Lean Six Sigma"
        );
    }

    function printCertificate() {
        if (!current) return;
        const existing = document.querySelector(".certificate-print-root");
        if (existing) existing.remove();

        const printRoot = document.createElement("div");
        printRoot.className = "certificate-print-root";
        printRoot.innerHTML = certificateMarkup(current.certificate, current.beltName, settings);
        document.body.appendChild(printRoot);
        document.body.classList.add("certificate-printing");

        let cleaned = false;
        function cleanup() {
            if (cleaned) return;
            cleaned = true;
            document.body.classList.remove("certificate-printing");
            if (printRoot.parentNode) printRoot.parentNode.removeChild(printRoot);
        }

        root.addEventListener("afterprint", cleanup, { once: true });
        root.setTimeout(cleanup, 5000);
        root.print();
    }

    root.CertificateStudio = {
        open: open,
        openPreview: openPreview,
        print: printCertificate,
        render: function (certificate, beltName, custom) {
            return certificateMarkup(certificate, beltName, normalize(custom || settings));
        },
        settings: function () {
            return Object.assign({}, settings);
        }
    };
}(typeof globalThis !== "undefined" ? globalThis : this));
