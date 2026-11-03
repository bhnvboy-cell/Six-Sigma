(function () {
    "use strict";

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

    function beltName(value) {
        const names = {
            white: "White Belt",
            yellow: "Yellow Belt",
            green: "Green Belt",
            black: "Black Belt",
            "master-black": "Master Black Belt"
        };
        return names[value] || value || "";
    }

    function show(html) {
        const area = document.getElementById("verifyResult");
        if (area) area.innerHTML = html;
    }

    function showLoading() {
        show('<div class="text-muted"><span class="spinner-border spinner-border-sm me-1"></span>Checking certificate...</div>');
    }

    async function verify(id) {
        const code = String(id || "").trim();
        if (!code) {
            show('<div class="alert alert-warning py-2 mb-0">Enter a verification ID to continue.</div>');
            return;
        }
        if (!window.LssApi) {
            show('<div class="alert alert-danger py-2 mb-0">The verification service is not available on this page.</div>');
            return;
        }
        showLoading();
        try {
            const result = await window.LssApi.verifyCertificate(code);
            if (!result || !result.valid) {
                show(`
                    <div class="alert alert-danger mb-0">
                        <h5 class="alert-heading"><i class="fas fa-circle-xmark me-1"></i>Certificate not valid</h5>
                        <p class="mb-0">This certificate has been revoked. Contact the issuing company for help.</p>
                    </div>`);
                return;
            }
            const issued = formatDate(result.issuedAt);
            show(`
                <div class="alert alert-success">
                    <h5 class="alert-heading"><i class="fas fa-circle-check me-1"></i>Certificate verified</h5>
                    <p class="mb-2">This certificate is valid and was issued by the training provider.</p>
                    <dl class="row mb-0 small">
                        <dt class="col-sm-4">Learner</dt>
                        <dd class="col-sm-8">${escapeHtml(result.learnerName)}</dd>
                        <dt class="col-sm-4">Belt</dt>
                        <dd class="col-sm-8">${escapeHtml(beltName(result.beltLevel))}</dd>
                        <dt class="col-sm-4">Certificate number</dt>
                        <dd class="col-sm-8">${escapeHtml(result.certificateNumber)}</dd>
                        <dt class="col-sm-4">Issued</dt>
                        <dd class="col-sm-8">${escapeHtml(issued)}</dd>
                        <dt class="col-sm-4">Verification ID</dt>
                        <dd class="col-sm-8"><code>${escapeHtml(result.verificationId)}</code></dd>
                    </dl>
                </div>`);
        } catch (error) {
            if (window.LssApi.isUnavailable(error)) {
                show('<div class="alert alert-warning py-2 mb-0">The verification server is unreachable. Check your connection and try again.</div>');
                return;
            }
            if (error.status === 404) {
                show('<div class="alert alert-danger py-2 mb-0">No certificate was found with that verification ID.</div>');
                return;
            }
            show('<div class="alert alert-danger py-2 mb-0">' +
                escapeHtml(error.message || "The certificate could not be verified.") + "</div>");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("verifyForm");
        const input = document.getElementById("verificationId");
        if (form) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                verify(input ? input.value : "");
            });
        }

        const requested = new URLSearchParams(window.location.search).get("id");
        if (requested) {
            if (input) input.value = requested;
            verify(requested);
        }
    });
}());
