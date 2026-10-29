const glossaryTerms = [
    ["ANOVA", "Analysis of variance; a test that compares means across three or more groups."],
    ["Attribute data", "Data that count or classify, such as pass/fail or defect type."],
    ["Black Belt", "A full-time improvement leader who leads complex projects and coaches Green Belts."],
    ["Catchball", "The back-and-forth dialogue used to align Hoshin goals, resources, and measures."],
    ["Common cause", "Normal, inherent variation in a stable process."],
    ["COPQ", "Cost of poor quality: prevention, appraisal, internal failure, and external failure costs."],
    ["Cp", "Potential capability: specification width divided by six standard deviations."],
    ["Cpk", "Actual capability: how well the process mean sits between the specification limits."],
    ["CTQ", "Critical to quality: a customer requirement translated into a measurable characteristic."],
    ["DMAIC", "Define, Measure, Analyze, Improve, Control."],
    ["DMADV", "Define, Measure, Analyze, Design, Verify; used for designing new processes or products."],
    ["DPMO", "Defects per million opportunities."],
    ["FMEA", "Failure mode and effects analysis; a risk tool that scores severity, occurrence, and detection."],
    ["Gage R&R", "A measurement system study that estimates repeatability and reproducibility."],
    ["Hoshin Kanri", "Strategy deployment that cascades priorities through the organization."],
    ["Kano model", "A way to classify features as basic, performance, or delighter."],
    ["MSA", "Measurement system analysis; verifies that measurement variation is small enough."],
    ["Pareto", "The 80/20 principle: a few causes usually create most of the effect."],
    ["Poka-yoke", "Mistake-proofing that prevents errors or makes them obvious."],
    ["QFD", "Quality function deployment; translates customer needs into design requirements."],
    ["SIPOC", "Suppliers, Inputs, Process, Outputs, Customers."],
    ["SOP", "Standard operating procedure; the documented current best method."],
    ["Special cause", "Unusual variation from a specific, assignable source."],
    ["TPM", "Total productive maintenance; improves equipment reliability through shared ownership."],
    ["VOC", "Voice of the customer."],
    ["VSM", "Value stream mapping; shows material and information flow and lead time."]
];

function resourceEscape(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function renderCheatSheets() {
    const container = document.getElementById("cheatSheets");
    if (!container) return;
    container.innerHTML = `<div class="row g-3">${curriculumData.belts.map(belt => `
        <div class="col-lg-6">
            <div class="card h-100">
                <div class="card-header bg-light fw-semibold"><i class="fas ${belt.icon} me-1"></i>${resourceEscape(belt.name)} cheat sheet</div>
                <div class="card-body">
                    <ul class="mb-0">${belt.cheatSheet.map(item => `<li>${resourceEscape(item)}</li>`).join("")}</ul>
                </div>
            </div>
        </div>`).join("")}</div>`;
}

function renderGlossary() {
    const container = document.getElementById("glossary");
    if (!container) return;
    container.innerHTML = `
        <div class="accordion" id="glossaryAccordion">
            ${glossaryTerms.map((term, index) => `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}">
                            ${resourceEscape(term[0])}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse" data-bs-parent="#glossaryAccordion">
                        <div class="accordion-body">${resourceEscape(term[1])}</div>
                    </div>
                </div>`).join("")}
        </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    renderCheatSheets();
    renderGlossary();
});
