/*
 * Statistics workbench UI core.
 * Depends on statistics-engine.js and Chart.js.
 */
(function () {
    "use strict";

    const E = window.StatsEngine;
    if (!E) {
        window.alert("The statistics engine could not be loaded.");
        return;
    }

    const state = {
        headers: [],
        rows: [],
        selectedColumn: -1,
        activeAnalysis: null,
        groups: [],
        charts: [],
        chartCounter: 0,
        lastFactorial: null,
        refreshTimer: null
    };

    const COLOR = {
        blue: "#0d6efd",
        blueSoft: "rgba(13, 110, 253, 0.18)",
        green: "#198754",
        greenSoft: "rgba(25, 135, 84, 0.16)",
        red: "#dc3545",
        redSoft: "rgba(220, 53, 69, 0.14)",
        amber: "#b58100",
        amberSoft: "rgba(255, 193, 7, 0.25)",
        slate: "#5f6f86",
        teal: "#0aa2c0",
        purple: "#6f42c1"
    };

    function $(selector, root) {
        return (root || document).querySelector(selector);
    }

    function $$(selector, root) {
        return Array.from((root || document).querySelectorAll(selector));
    }

    function escapeHtml(value) {
        return String(value === undefined || value === null ? "" : value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character];
        });
    }

    function escapeAttr(value) {
        return escapeHtml(value).replace(/`/g, "&#096;");
    }

    function round(value, digits) {
        const factor = Math.pow(10, digits === undefined ? 4 : digits);
        return Math.round(value * factor) / factor;
    }

    function formatNumber(value, digits) {
        const places = digits === undefined ? 4 : digits;
        if (!Number.isFinite(value)) {
            if (value === Infinity) return "\u221e";
            if (value === -Infinity) return "-\u221e";
            return "\u2014";
        }
        if (Object.is(value, -0)) value = 0;
        const absolute = Math.abs(value);
        if (absolute !== 0 && (absolute < Math.pow(10, -places) || absolute >= 1e10)) {
            return value.toExponential(Math.max(2, Math.min(6, places)));
        }
        return new Intl.NumberFormat(undefined, {
            maximumFractionDigits: places,
            minimumFractionDigits: 0
        }).format(value);
    }

    function formatP(value) {
        if (!Number.isFinite(value)) return "\u2014";
        if (value < 0.0001) return "< 0.0001";
        return value.toFixed(4);
    }

    function formatPercent(value, digits) {
        return formatNumber(value, digits === undefined ? 2 : digits) + "%";
    }

    function pBadge(value, alpha) {
        const threshold = alpha || 0.05;
        const significant = Number.isFinite(value) && value < threshold;
        return '<span class="p-value ' + (significant ? "sig-yes" : "sig-no") + '">' +
            escapeHtml(formatP(value)) + (significant ? " *" : "") + "</span>";
    }

    function decision(value, alpha) {
        const threshold = alpha || 0.05;
        if (!Number.isFinite(value)) return "A decision cannot be made from these data.";
        return value < threshold
            ? "Reject the null hypothesis at \u03b1 = " + formatNumber(threshold, 3) + "."
            : "Fail to reject the null hypothesis at \u03b1 = " + formatNumber(threshold, 3) + ".";
    }

    function fillArray(length, value) {
        return Array.from({ length: length }, function () { return value; });
    }

    function sum(values) {
        return values.reduce(function (total, value) { return total + value; }, 0);
    }

    function uniqueHeaders(headers) {
        const used = [];
        return headers.map(function (header, index) {
            const base = String(header === undefined || header === null ? "" : header).trim() || "Column " + (index + 1);
            let candidate = base;
            let suffix = 2;
            while (used.indexOf(candidate) !== -1) {
                candidate = base + " " + suffix;
                suffix += 1;
            }
            used.push(candidate);
            return candidate;
        });
    }

    function normalizeRows(headers, rows) {
        return (rows || []).map(function (row) {
            return headers.map(function (_, index) {
                return String(row[index] === undefined || row[index] === null ? "" : row[index]);
            });
        });
    }

    function columnIndex(name) {
        return state.headers.indexOf(name);
    }

    function rawColumn(name) {
        const index = columnIndex(name);
        if (index < 0) return [];
        return state.rows.map(function (row) { return row[index]; });
    }

    function numericColumn(name) {
        if (columnIndex(name) < 0) throw new Error("Select a valid numeric column.");
        const values = E.numbers(rawColumn(name));
        if (!values.length) throw new Error('Column "' + name + '" does not contain numeric values.');
        return values;
    }

    function isNumericColumn(name) {
        return E.inferType(rawColumn(name)) === "numeric";
    }

    function numericColumnNames() {
        return state.headers.filter(isNumericColumn);
    }

    function completeNumericRows(names) {
        const indexes = names.map(function (name) {
            const index = columnIndex(name);
            if (index < 0) throw new Error("Select valid columns.");
            return index;
        });
        const output = [];
        state.rows.forEach(function (row) {
            const values = indexes.map(function (index) { return parseFloat(row[index]); });
            if (values.every(Number.isFinite)) output.push(values);
        });
        return output;
    }

    function completePairs(firstName, secondName) {
        const rows = completeNumericRows([firstName, secondName]);
        return {
            first: rows.map(function (row) { return row[0]; }),
            second: rows.map(function (row) { return row[1]; })
        };
    }

    function rowObjects() {
        return state.rows.map(function (row) {
            const object = {};
            state.headers.forEach(function (header, index) { object[header] = row[index]; });
            return object;
        });
    }

    function requireNumber(value, label) {
        const number = typeof value === "number" ? value : parseFloat(value);
        if (!Number.isFinite(number)) throw new Error(label + " must be a number.");
        return number;
    }

    function requirePositive(value, label) {
        const number = requireNumber(value, label);
        if (number <= 0) throw new Error(label + " must be greater than zero.");
        return number;
    }

    function requireProbability(value, label) {
        const number = requireNumber(value, label);
        if (number < 0 || number > 1) throw new Error(label + " must be between 0 and 1.");
        return number;
    }

    function requireColumn(value, label, numeric) {
        if (!value) throw new Error("Select " + (label || "a column") + ".");
        if (columnIndex(value) < 0) throw new Error("The selected column is no longer available.");
        if (numeric && !isNumericColumn(value)) throw new Error('Column "' + value + '" must be numeric.');
        return value;
    }

    function splitList(value) {
        return String(value || "").split(",").map(function (item) { return item.trim(); }).filter(Boolean);
    }

    function setStatus(message, dirty) {
        const status = $("#worksheetStatus");
        if (!status) return;
        status.className = dirty ? "dirty" : "";
        status.innerHTML = '<i class="fas ' + (dirty ? "fa-pen" : "fa-circle-check") + ' me-1"></i>' + escapeHtml(message);
    }

    function markDirty() {
        setStatus("Worksheet modified", true);
        refreshFormOptionsSoon();
    }

    function toast(message, tone) {
        const container = $("#toastContainer");
        if (!container || typeof bootstrap === "undefined") return;
        const icon = tone === "danger" ? "fa-circle-exclamation" : tone === "warning" ? "fa-triangle-exclamation" : "fa-circle-check";
        const wrapper = document.createElement("div");
        wrapper.className = "toast align-items-center text-bg-" + (tone || "success") + " border-0";
        wrapper.setAttribute("role", "status");
        wrapper.setAttribute("aria-live", "polite");
        wrapper.setAttribute("aria-atomic", "true");
        wrapper.innerHTML = '<div class="d-flex"><div class="toast-body"><i class="fas ' + icon + ' me-2"></i>' +
            escapeHtml(message) + '</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button></div>';
        container.appendChild(wrapper);
        const instance = bootstrap.Toast.getOrCreateInstance(wrapper, { delay: 3200 });
        wrapper.addEventListener("hidden.bs.toast", function () { wrapper.remove(); });
        instance.show();
    }

    function sampleBottling() {
        const headers = ["Batch", "Line", "Operator", "Fill_ml", "Temperature_C", "Pressure_bar", "Defectives", "Inspected", "Pass", "Defect_Type"];
        const rows = [];
        const operators = ["Dana", "Eli", "Farah"];
        const defectTypes = ["Underfill", "Overfill", "Seal", "Label"];
        for (let index = 0; index < 30; index += 1) {
            const line = index < 15 ? "Line 1" : "Line 2";
            const temperature = 20 + (((index * 7) % 11) - 5) * 0.42 + ((index % 3) - 1) * 0.08;
            const pressure = 4 + (((index * 5) % 9) - 4) * 0.18 + ((index % 4) - 1.5) * 0.03;
            const fill = 500 + 0.85 * (temperature - 20) - 0.75 * (pressure - 4) +
                0.35 * Math.sin(index * 1.7) + (line === "Line 1" ? 0.18 : -0.22);
            const inspected = 120;
            const defectives = [1, 0, 2, 1, 3, 1, 0, 2, 1, 4][index % 10];
            const pass = fill >= 499.55 && fill <= 500.7 ? 1 : 0;
            rows.push([
                "B-" + String(index + 1).padStart(2, "0"),
                line,
                operators[index % operators.length],
                round(fill, 2).toFixed(2),
                round(temperature, 2).toFixed(2),
                round(pressure, 2).toFixed(2),
                String(defectives),
                String(inspected),
                String(pass),
                defectTypes[index % defectTypes.length]
            ]);
        }
        return { headers: headers, rows: rows, name: "Bottling line" };
    }

    function sampleGage() {
        const headers = ["Part", "Operator", "Trial", "Measurement"];
        const rows = [];
        const parts = ["P1", "P2", "P3", "P4", "P5"];
        const operators = { A: -0.12, B: 0.08, C: 0.2 };
        const trialOffsets = [-0.15, 0.15];
        parts.forEach(function (part, partIndex) {
            Object.keys(operators).forEach(function (operator, operatorIndex) {
                trialOffsets.forEach(function (offset, trialIndex) {
                    const base = 10 + partIndex * 1.5;
                    const measurement = base + operators[operator] + offset +
                        0.02 * Math.sin(partIndex * 3 + operatorIndex * 2 + trialIndex);
                    rows.push([part, operator, String(trialIndex + 1), round(measurement, 3).toFixed(3)]);
                });
            });
        });
        return { headers: headers, rows: rows, name: "Gage R&R study" };
    }

    function sampleDoe() {
        const factorial = E.fullFactorial([
            { name: "A", low: -1, high: 1 },
            { name: "B", low: -1, high: 1 },
            { name: "C", low: -1, high: 1 }
        ], 2, false);
        const headers = ["StdOrder", "RunOrder", "Replicate", "A", "B", "C", "Response"];
        const rows = factorial.rows.map(function (row, index) {
            const response = 52 + 2 * row.A + 2.5 * row.B + 3 * row.A * row.B +
                0.8 * row.C - 0.6 * row.A * row.C + 0.12 * Math.sin(index * 1.9);
            return [
                String(row.StdOrder),
                String(row.RunOrder),
                String(row.Replicate),
                String(row.A),
                String(row.B),
                String(row.C),
                round(response, 3).toFixed(3)
            ];
        });
        return { headers: headers, rows: rows, name: "2-level DOE" };
    }

    function sampleService() {
        const headers = ["Respondent", "Wait_Min", "Staff_Rating", "Satisfied", "Channel"];
        const rows = [];
        const channels = ["Web", "Phone", "In person"];
        for (let index = 0; index < 36; index += 1) {
            const wait = 5 + ((index * 7) % 40) + (index % 4) * 0.7;
            const rating = 1 + ((index * 5 + 2) % 5);
            const satisfied = (wait < 22 && rating >= 3) || (wait < 15 && rating >= 2) ? 1 : 0;
            rows.push([
                "R-" + String(index + 1).padStart(2, "0"),
                round(wait, 1).toFixed(1),
                String(rating),
                String(satisfied),
                channels[index % channels.length]
            ]);
        }
        return { headers: headers, rows: rows, name: "Service survey" };
    }

    const SAMPLES = {
        bottling: sampleBottling,
        gage: sampleGage,
        doe: sampleDoe,
        service: sampleService
    };

    function emptyWorksheet() {
        return {
            headers: ["Column 1", "Column 2", "Column 3"],
            rows: Array.from({ length: 10 }, function () { return ["", "", ""]; })
        };
    }

    function setWorksheet(headers, rows, message) {
        const cleanHeaders = uniqueHeaders(headers || []);
        if (!cleanHeaders.length) {
            const empty = emptyWorksheet();
            cleanHeaders.push.apply(cleanHeaders, empty.headers);
            rows = empty.rows;
        }
        state.headers = cleanHeaders;
        state.rows = normalizeRows(cleanHeaders, rows || []);
        if (!state.rows.length) {
            state.rows = [cleanHeaders.map(function () { return ""; })];
        }
        state.selectedColumn = -1;
        state.lastFactorial = null;
        destroyCharts();
        renderWorksheet();
        if (state.activeAnalysis) {
            refreshFormOptions();
            resetResultsMessage("The worksheet changed. Run the analysis again to refresh these results.");
        }
        setStatus(message || "Worksheet loaded", false);
        if (message) toast(message);
    }

    function renderWorksheet() {
        const container = $("#worksheetContainer");
        if (!container) return;
        if (!state.headers.length) {
            container.innerHTML = '<div class="empty-workbook"><i class="fas fa-table-cells fa-2x mb-2"></i>' +
                '<p class="mb-1">This worksheet is empty.</p><p class="small mb-0">Add a column or load an example dataset.</p></div>';
            updateWorksheetMeta();
            return;
        }
        let html = '<table class="worksheet-table"><thead><tr><th class="row-index">#</th>';
        state.headers.forEach(function (header, column) {
            const type = isNumericColumn(header) ? "numeric" : "text";
            html += '<th data-col="' + column + '" class="' + (column === state.selectedColumn ? "selected-column" : "") + '">' +
                '<div class="column-name" contenteditable="true" spellcheck="false" data-column-name="' + column + '" role="textbox" aria-label="Rename column">' +
                escapeHtml(header) + '</div><span class="column-type">' + type + "</span></th>";
        });
        html += "</tr></thead><tbody>";
        state.rows.forEach(function (row, rowIndex) {
            html += '<tr><td class="row-index">' + (rowIndex + 1) + "</td>";
            state.headers.forEach(function (_, column) {
                html += '<td class="cell-value ' + (column === state.selectedColumn ? "selected-column" : "") +
                    '" contenteditable="true" spellcheck="false" data-row="' + rowIndex + '" data-col="' + column +
                    '" data-cell-col="' + column + '" role="textbox">' + escapeHtml(row[column] === undefined ? "" : row[column]) + "</td>";
            });
            html += "</tr>";
        });
        html += "</tbody></table>";
        container.innerHTML = html;
        updateWorksheetMeta();
    }

    function updateWorksheetMeta() {
        const meta = $("#worksheetMeta");
        const selection = $("#worksheetSelection");
        if (!meta) return;
        const numeric = numericColumnNames().length;
        meta.textContent = state.rows.length + " rows \u00d7 " + state.headers.length + " columns \u00b7 " +
            numeric + " numeric \u00b7 " + (state.headers.length - numeric) + " text";
        if (selection) {
            selection.textContent = state.selectedColumn >= 0 && state.headers[state.selectedColumn]
                ? "Selected: " + state.headers[state.selectedColumn]
                : "No column selected";
        }
    }

    function selectColumn(column) {
        state.selectedColumn = column;
        $$(".worksheet-table thead th[data-col]").forEach(function (th) {
            th.classList.toggle("selected-column", Number(th.getAttribute("data-col")) === column);
        });
        $$(".worksheet-table td[data-cell-col]").forEach(function (td) {
            td.classList.toggle("selected-column", Number(td.getAttribute("data-cell-col")) === column);
        });
        updateWorksheetMeta();
    }

    function refreshColumnTypeLabels() {
        $$(".worksheet-table thead th[data-col]").forEach(function (th) {
            const header = state.headers[Number(th.getAttribute("data-col"))];
            const label = $(".column-type", th);
            if (label) label.textContent = isNumericColumn(header) ? "numeric" : "text";
        });
        updateWorksheetMeta();
    }

    function refreshFormOptionsSoon() {
        window.clearTimeout(state.refreshTimer);
        state.refreshTimer = window.setTimeout(function () {
            refreshColumnTypeLabels();
            if (state.activeAnalysis) refreshFormOptions();
        }, 180);
    }

    function addRow() {
        state.rows.push(state.headers.map(function () { return ""; }));
        renderWorksheet();
        markDirty();
        const scroll = $("#worksheetContainer");
        if (scroll) scroll.scrollTop = scroll.scrollHeight;
    }

    function addColumn() {
        let number = state.headers.length + 1;
        let name = "Column " + number;
        while (state.headers.indexOf(name) !== -1) {
            number += 1;
            name = "Column " + number;
        }
        state.headers.push(name);
        state.rows.forEach(function (row) { row.push(""); });
        state.selectedColumn = state.headers.length - 1;
        renderWorksheet();
        markDirty();
    }

    function deleteSelectedColumn() {
        if (state.headers.length <= 1) {
            toast("The worksheet must keep at least one column.", "warning");
            return;
        }
        if (state.selectedColumn < 0) {
            toast("Click a column header first, then delete it.", "warning");
            return;
        }
        const name = state.headers[state.selectedColumn];
        state.headers.splice(state.selectedColumn, 1);
        state.rows.forEach(function (row) { row.splice(state.selectedColumn, 1); });
        state.selectedColumn = -1;
        renderWorksheet();
        markDirty();
        toast('Deleted column "' + name + '".');
    }

    function clearWorksheet() {
        if (!window.confirm("Clear all worksheet values? The column names will remain.")) return;
        state.rows = Array.from({ length: 10 }, function () { return state.headers.map(function () { return ""; }); });
        renderWorksheet();
        markDirty();
        if (state.activeAnalysis) resetResultsMessage("The worksheet was cleared. Enter or import data, then run the analysis.");
        toast("Worksheet values cleared.");
    }

    function newWorksheet() {
        if (!window.confirm("Start a new worksheet? Current data will be replaced.")) return;
        const empty = emptyWorksheet();
        setWorksheet(empty.headers, empty.rows);
        setStatus("New worksheet ready", false);
    }

    function loadSample(key) {
        const factory = SAMPLES[key] || SAMPLES.bottling;
        const sample = factory();
        setWorksheet(sample.headers, sample.rows, sample.name + " loaded");
    }

    function importDelimited(text) {
        const parsed = E.parseDelimited(text);
        if (!parsed.headers.length) throw new Error("No columns were found in the pasted data.");
        setWorksheet(parsed.headers, parsed.rows, "Imported " + parsed.rows.length + " rows");
    }

    function exportCsv() {
        if (!state.headers.length) {
            toast("There is no worksheet to export.", "warning");
            return;
        }
        const csv = E.toCsv(state.headers, state.rows);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "statistics-worksheet.csv";
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
        toast("Worksheet exported as CSV.");
    }

    function renderMenu() {
        const container = $("#analysisMenu");
        if (!container) return;
        let html = "";
        state.groups.forEach(function (group, index) {
            html += '<details class="stats-menu-group" ' + (index === 0 ? "open" : "") + ">" +
                '<summary><i class="fas ' + group.icon + '"></i><span>' + escapeHtml(group.label) + "</span></summary>" +
                '<div class="menu-items">';
            group.items.forEach(function (analysis) {
                html += '<button type="button" class="analysis-link" data-analysis-id="' + analysis.id + '">' +
                    '<i class="fas ' + analysis.icon + '"></i><span>' + escapeHtml(analysis.label) + "</span></button>";
            });
            html += "</div></details>";
        });
        container.innerHTML = html;
    }

    function setActiveMenu(id) {
        $$(".analysis-link").forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("data-analysis-id") === id);
        });
    }

    function analysisById(id) {
        for (let groupIndex = 0; groupIndex < state.groups.length; groupIndex += 1) {
            const found = state.groups[groupIndex].items.find(function (analysis) { return analysis.id === id; });
            if (found) return found;
        }
        return null;
    }

    function renderWelcome() {
        state.activeAnalysis = null;
        setActiveMenu("");
        destroyCharts();
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
        }
        const workspace = $("#analysisWorkspace");
        if (!workspace) return;
        workspace.innerHTML =
            '<section class="analysis-card">' +
                '<div class="analysis-card-header">' +
                    '<span class="analysis-icon"><i class="fas fa-compass"></i></span>' +
                    '<div><h2>Start an analysis</h2><p>Choose a method from the menu or use a quick start below.</p></div>' +
                "</div>" +
                '<div class="analysis-form">' +
                    '<div class="report-note"><i class="fas fa-lightbulb"></i><span>The worksheet contains the <strong>Bottling line</strong> example. Edit the data or load another sample, then choose an analysis.</span></div>' +
                    '<div class="welcome-grid">' +
                        '<button type="button" class="welcome-action" data-open-analysis="descriptive"><span class="welcome-icon"><i class="fas fa-table-list"></i></span><strong>Summarize data</strong><span>Mean, median, spread, quartiles, and confidence intervals.</span></button>' +
                        '<button type="button" class="welcome-action" data-open-analysis="capability"><span class="welcome-icon"><i class="fas fa-gauge-high"></i></span><strong>Process capability</strong><span>Cp, Cpk, Pp, Ppk, and expected defects per million.</span></button>' +
                        '<button type="button" class="welcome-action" data-open-analysis="imr"><span class="welcome-icon"><i class="fas fa-wave-square"></i></span><strong>Control chart</strong><span>Monitor an I-MR chart and detect out-of-control signals.</span></button>' +
                        '<button type="button" class="welcome-action" data-open-analysis="regression"><span class="welcome-icon"><i class="fas fa-chart-line"></i></span><strong>Linear regression</strong><span>Model a numeric response from one or more predictors.</span></button>' +
                    "</div>" +
                "</div>" +
            "</section>";
    }

    function columnNamesFor(field) {
        return state.headers.filter(function (name) {
            return !field.numeric || isNumericColumn(name);
        });
    }

    function preferredOption(field, options) {
        if (field.prefer) {
            const wanted = String(field.prefer).toLowerCase();
            const found = options.find(function (option) { return option.toLowerCase() === wanted; });
            if (found) return found;
        }
        if (Number.isInteger(field.autoIndex) && options[field.autoIndex]) return options[field.autoIndex];
        if (field.autoFirst && options.length) return options[0];
        return "";
    }

    function initialSelection(field, options) {
        if (field.type === "columns") {
            if (Array.isArray(field.default)) {
                const kept = field.default.filter(function (name) { return options.indexOf(name) !== -1; });
                if (kept.length) return kept;
            }
            if (field.default === "all") return options.slice();
            const preferred = preferredOption(field, options);
            return preferred ? [preferred] : [];
        }
        if (field.default !== undefined && field.default !== null) return field.default;
        return preferredOption(field, options);
    }

    function optionMarkup(field, selected) {
        const options = field.type === "select" ? field.options.map(function (option) {
            return typeof option === "string" ? { value: option, label: option } : option;
        }) : columnNamesFor(field);
        const chosen = selected === undefined ? initialSelection(field, options) : selected;
        const chosenArray = Array.isArray(chosen) ? chosen : chosen === "" || chosen === null || chosen === undefined ? [] : [chosen];
        let html = field.type === "column" && !field.hideBlank ? '<option value="">Select a column...</option>' : "";
        options.forEach(function (option) {
            const value = typeof option === "string" ? option : option.value;
            const label = typeof option === "string" ? option : option.label;
            html += '<option value="' + escapeAttr(value) + '" ' + (chosenArray.indexOf(value) !== -1 ? "selected" : "") + ">" + escapeHtml(label) + "</option>";
        });
        return html;
    }

    function renderField(field) {
        const id = "field-" + field.name;
        const wide = field.wide ? " field-wide" : "";
        if (field.type === "checkbox") {
            return '<div class="field-check' + wide + '">' +
                '<div class="form-check mb-0">' +
                    '<input class="form-check-input" type="checkbox" id="' + id + '" data-field="' + field.name + '" ' + (field.default ? "checked" : "") + ">" +
                    '<label class="form-check-label" for="' + id + '">' + escapeHtml(field.label) + "</label>" +
                "</div>" + (field.help ? '<span class="field-help">' + escapeHtml(field.help) + "</span>" : "") + "</div>";
        }
        let control = "";
        if (field.type === "column") {
            control = '<select class="form-select" id="' + id + '" data-field="' + field.name + '">' + optionMarkup(field) + "</select>";
        } else if (field.type === "columns") {
            control = '<select class="form-select" id="' + id + '" data-field="' + field.name + '" multiple size="' +
                Math.min(7, Math.max(4, columnNamesFor(field).length)) + '">' + optionMarkup(field) + "</select>";
        } else if (field.type === "select") {
            control = '<select class="form-select" id="' + id + '" data-field="' + field.name + '">' + optionMarkup(field) + "</select>";
        } else if (field.type === "number") {
            const attributes = [
                'type="number"',
                'class="form-control"',
                'id="' + id + '"',
                'data-field="' + field.name + '"',
                'value="' + escapeAttr(field.default === undefined ? "" : field.default) + '"'
            ];
            if (field.step !== undefined) attributes.push('step="' + field.step + '"');
            if (field.min !== undefined) attributes.push('min="' + field.min + '"');
            if (field.max !== undefined) attributes.push('max="' + field.max + '"');
            if (field.placeholder) attributes.push('placeholder="' + escapeAttr(field.placeholder) + '"');
            control = "<input " + attributes.join(" ") + ">";
        } else {
            control = '<input type="text" class="form-control" id="' + id + '" data-field="' + field.name +
                '" value="' + escapeAttr(field.default === undefined ? "" : field.default) + '"' +
                (field.placeholder ? ' placeholder="' + escapeAttr(field.placeholder) + '"' : "") + ">";
        }
        return '<div class="stats-field' + wide + '">' +
            '<label class="form-label" for="' + id + '">' + escapeHtml(field.label) + "</label>" +
            control + (field.help ? '<span class="field-help">' + escapeHtml(field.help) + "</span>" : "") + "</div>";
    }

    function openAnalysis(id) {
        const analysis = analysisById(id);
        if (!analysis) {
            renderWelcome();
            return;
        }
        state.activeAnalysis = analysis;
        destroyCharts();
        setActiveMenu(analysis.id);
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", "#" + analysis.id);
        }
        const workspace = $("#analysisWorkspace");
        if (!workspace) return;
        workspace.innerHTML =
            '<section class="analysis-card">' +
                '<div class="analysis-card-header">' +
                    '<span class="analysis-icon"><i class="fas ' + analysis.icon + '"></i></span>' +
                    "<div><h2>" + escapeHtml(analysis.label) + "</h2><p>" + escapeHtml(analysis.description) + "</p></div>" +
                    '<button type="button" class="btn-close" id="closeAnalysisBtn" aria-label="Close analysis"></button>' +
                "</div>" +
                '<form class="analysis-form" id="analysisForm" novalidate>' +
                    '<div class="analysis-fields">' + analysis.fields.map(renderField).join("") + "</div>" +
                    '<div class="analysis-actions">' +
                        '<button type="submit" class="btn btn-primary btn-run"><i class="fas fa-play me-1"></i>' + escapeHtml(analysis.action || "Run analysis") + "</button>" +
                        '<span class="form-text">The report uses the current worksheet.</span>' +
                    "</div>" +
                "</form>" +
            "</section>" +
            '<section class="results-card" id="resultsCard">' +
                '<div class="results-card-header">' +
                    '<span class="analysis-icon"><i class="fas fa-chart-column"></i></span>' +
                    "<div><h2>Results</h2><p>Run the analysis to generate a report.</p></div>" +
                "</div>" +
                '<div class="results-body"><div class="analysis-empty">Choose the required columns and press <strong>' +
                    escapeHtml(analysis.action || "Run analysis") + "</strong>.</div></div>" +
            "</section>";
        $("#closeAnalysisBtn").addEventListener("click", renderWelcome);
        $("#analysisForm").addEventListener("submit", executeAnalysis);
    }

    function refreshFormOptions() {
        if (!state.activeAnalysis) return;
        const form = $("#analysisForm");
        if (!form) return;
        state.activeAnalysis.fields.forEach(function (field) {
            if (field.type !== "column" && field.type !== "columns") return;
            const control = form.querySelector('[data-field="' + field.name + '"]');
            if (!control) return;
            const selected = field.type === "columns"
                ? Array.from(control.selectedOptions).map(function (option) { return option.value; })
                : control.value;
            const available = columnNamesFor(field);
            if (field.type === "column") {
                if (selected && available.indexOf(selected) === -1) {
                    control.innerHTML = optionMarkup(field, "");
                } else {
                    control.innerHTML = optionMarkup(field, selected);
                }
            } else {
                const kept = selected.filter(function (name) { return available.indexOf(name) !== -1; });
                control.innerHTML = optionMarkup(field, kept);
                control.setAttribute("size", String(Math.min(7, Math.max(4, available.length))));
            }
        });
    }

    function readForm(form) {
        const values = {};
        state.activeAnalysis.fields.forEach(function (field) {
            const control = form.querySelector('[data-field="' + field.name + '"]');
            if (!control) return;
            if (field.type === "checkbox") values[field.name] = control.checked;
            else if (field.type === "columns") {
                values[field.name] = Array.from(control.selectedOptions).map(function (option) { return option.value; });
            } else if (field.type === "number") {
                values[field.name] = control.value.trim() === "" ? NaN : parseFloat(control.value);
            } else values[field.name] = control.value.trim();
        });
        return values;
    }

    function executeAnalysis(event) {
        event.preventDefault();
        if (!state.activeAnalysis) return;
        const analysis = state.activeAnalysis;
        const values = readForm(event.currentTarget);
        try {
            const report = analysis.run(values);
            if (!report) throw new Error("The analysis did not return a report.");
            renderReport(analysis, report);
            setStatus("Analysis complete", false);
            if (report.afterRender) report.afterRender();
        } catch (error) {
            renderError(analysis, error && error.message ? error.message : "The analysis could not be completed.");
            setStatus("Analysis needs attention", true);
        }
    }

    function resultHeader(analysis, subtitle) {
        return '<div class="results-card-header">' +
            '<span class="analysis-icon"><i class="fas ' + analysis.icon + '"></i></span>' +
            "<div><h2>" + escapeHtml(analysis.label) + "</h2><p>" + escapeHtml(subtitle || "Report") + "</p></div>" +
            '<button type="button" class="btn-close" id="clearResultsBtn" aria-label="Close results"></button>' +
        "</div>";
    }

    function renderReport(analysis, report) {
        destroyCharts();
        const card = $("#resultsCard");
        if (!card) return;
        card.innerHTML = resultHeader(analysis, "Report generated from " + state.rows.length + " worksheet rows") +
            '<div class="results-body">' + report.html + "</div>";
        attachClearResults();
        renderCharts(report.charts || []);
        if (window.innerWidth < 992) {
            window.setTimeout(function () { card.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
        }
    }

    function renderError(analysis, message) {
        destroyCharts();
        const card = $("#resultsCard");
        if (!card) return;
        card.innerHTML = resultHeader(analysis, "The analysis could not be completed") +
            '<div class="results-body"><div class="analysis-error"><i class="fas fa-circle-exclamation"></i><div><strong>Check the inputs</strong><br>' +
            escapeHtml(message) + "</div></div></div>";
        attachClearResults();
    }

    function resetResultsMessage(message) {
        destroyCharts();
        const card = $("#resultsCard");
        if (!card || !state.activeAnalysis) return;
        card.innerHTML = resultHeader(state.activeAnalysis, "Results are waiting for a new run") +
            '<div class="results-body"><div class="analysis-empty">' + escapeHtml(message) + "</div></div>";
        attachClearResults();
    }

    function attachClearResults() {
        const button = $("#clearResultsBtn");
        if (button) {
            button.addEventListener("click", function () {
                resetResultsMessage("Results cleared. Run the analysis again when ready.");
            });
        }
    }

    function metric(label, value, tone, hint) {
        let rendered;
        if (value && typeof value === "object" && value.html !== undefined) rendered = value.html;
        else rendered = escapeHtml(value);
        return '<div class="stat-metric ' + (tone || "") + '">' +
            '<div class="metric-label">' + escapeHtml(label) + "</div>" +
            '<div class="metric-value">' + rendered + "</div>" +
            (hint ? '<div class="metric-hint">' + escapeHtml(hint) + "</div>" : "") +
            "</div>";
    }

    function metricGrid(items) {
        return '<div class="metric-grid">' + items.map(function (item) {
            return metric(item.label, item.value, item.tone, item.hint);
        }).join("") + "</div>";
    }

    function reportBlock(title, body, options) {
        const opts = options || {};
        return '<section class="report-block">' +
            (title ? '<div class="report-block-title"><span>' + escapeHtml(title) + "</span>" +
                (opts.badge ? '<span class="muted-tiny">' + opts.badge + "</span>" : "") + "</div>" : "") +
            '<div class="report-block-body' + (opts.flush ? " flush" : "") + '">' + body + "</div>" +
        "</section>";
    }

    function cellHtml(value) {
        if (value && typeof value === "object") {
            return value.html !== undefined ? value.html : escapeHtml(value.text);
        }
        return escapeHtml(value);
    }

    function dataTable(headers, rows, options) {
        const opts = options || {};
        const numeric = opts.numeric || [];
        let html = '<div class="table-responsive"><table class="table stats-table">';
        if (opts.caption) html += "<caption>" + escapeHtml(opts.caption) + "</caption>";
        html += "<thead><tr>";
        headers.forEach(function (header, index) {
            html += '<th class="' + (numeric.indexOf(index) !== -1 ? "num" : "") + '">' + escapeHtml(header) + "</th>";
        });
        html += "</tr></thead><tbody>";
        rows.forEach(function (row) {
            html += "<tr>";
            row.forEach(function (value, index) {
                const classes = [];
                if (numeric.indexOf(index) !== -1) classes.push("num");
                if (index === 0 && opts.rowLabel !== false) classes.push("row-label");
                html += '<td class="' + classes.join(" ") + '">' + cellHtml(value) + "</td>";
            });
            html += "</tr>";
        });
        html += "</tbody></table></div>";
        return html;
    }

    function noteBlock(text, warning) {
        return '<div class="report-note' + (warning ? " warning" : "") + '"><i class="fas ' +
            (warning ? "fa-triangle-exclamation" : "fa-circle-info") + '"></i><span>' + text + "</span></div>";
    }

    function signalsBlock(signals) {
        if (!signals || !signals.length) {
            return noteBlock('<strong>No signals detected.</strong> All plotted points are inside the control limits and no runs were flagged.', false);
        }
        return noteBlock('<strong>' + signals.length + " signal" + (signals.length === 1 ? "" : "s") + " detected.</strong><br>" +
            signals.map(escapeHtml).join("<br>"), true);
    }

    function chartOptions(extra) {
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 300 },
            interaction: { mode: "index", intersect: false },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: { boxWidth: 10, usePointStyle: true, font: { size: 10 } }
                },
                tooltip: { padding: 8, titleFont: { size: 11 }, bodyFont: { size: 10 } }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 }, maxRotation: 0, autoSkip: true },
                    title: { display: false, text: "", font: { size: 10 } }
                },
                y: {
                    grid: { color: "rgba(33, 37, 41, 0.07)" },
                    ticks: { font: { size: 10 } },
                    title: { display: false, text: "", font: { size: 10 } },
                    beginAtZero: false
                }
            }
        };
        if (extra) {
            Object.keys(extra).forEach(function (key) {
                if (key === "scales") {
                    Object.keys(extra.scales).forEach(function (axis) {
                        options.scales[axis] = Object.assign(options.scales[axis] || {}, extra.scales[axis]);
                    });
                } else if (key === "plugins") {
                    options.plugins = Object.assign(options.plugins, extra.plugins);
                } else if (key === "xTitle") {
                    options.scales.x.title = { display: !!extra.xTitle, text: extra.xTitle, font: { size: 10 } };
                } else if (key === "yTitle") {
                    options.scales.y.title = { display: !!extra.yTitle, text: extra.yTitle, font: { size: 10 } };
                } else {
                    options[key] = extra[key];
                }
            });
        }
        return options;
    }

    function nextChartId() {
        state.chartCounter += 1;
        return "statsChart" + state.chartCounter;
    }

    function chartCard(id, title, subtitle, height) {
        return '<div class="chart-card"><div class="chart-card-title"><span>' + escapeHtml(title) + "</span>" +
            (subtitle ? '<span class="chart-subtitle">' + escapeHtml(subtitle) + "</span>" : "") + "</div>" +
            '<div class="chart-canvas-wrap" style="height:' + (height || 260) + 'px"><canvas id="' + id + '"></canvas></div></div>';
    }

    function chartSpec(type, title, subtitle, height, data, options, plugins) {
        const id = nextChartId();
        return {
            html: chartCard(id, title, subtitle, height),
            chart: { id: id, type: type, data: data, options: options, plugins: plugins || [] }
        };
    }

    function lineChart(title, subtitle, labels, datasets, extraOptions) {
        return chartSpec("line", title, subtitle, 260, { labels: labels, datasets: datasets }, chartOptions(extraOptions));
    }

    function barChart(title, subtitle, labels, datasets, extraOptions) {
        return chartSpec("bar", title, subtitle, 260, { labels: labels, datasets: datasets }, chartOptions(extraOptions));
    }

    function scatterChart(title, subtitle, datasets, extraOptions) {
        return chartSpec("scatter", title, subtitle, 280, { datasets: datasets }, chartOptions(Object.assign({
            interaction: { mode: "nearest", intersect: true },
            scales: {
                x: { type: "linear", grid: { color: "rgba(33, 37, 41, 0.07)" }, ticks: { font: { size: 10 } } },
                y: { grid: { color: "rgba(33, 37, 41, 0.07)" }, ticks: { font: { size: 10 } } }
            }
        }, extraOptions || {})));
    }

    function controlChart(title, subtitle, values, center, ucl, lcl, options) {
        const opts = options || {};
        const labels = values.map(function (_, index) { return String(index + 1); });
        const uclArray = Array.isArray(ucl) ? ucl : fillArray(values.length, ucl);
        const lclArray = Array.isArray(lcl) ? lcl : fillArray(values.length, lcl);
        const points = values.map(function (value, index) {
            return value > uclArray[index] || value < lclArray[index] ? COLOR.red : (opts.color || COLOR.blue);
        });
        const datasets = [
            {
                label: opts.label || "Value",
                data: values,
                borderColor: opts.color || COLOR.blue,
                backgroundColor: opts.color || COLOR.blue,
                pointBackgroundColor: points,
                pointBorderColor: points,
                pointRadius: 2.6,
                pointHoverRadius: 4,
                borderWidth: 1.6,
                tension: 0.08,
                fill: false
            },
            {
                label: "UCL",
                data: uclArray,
                borderColor: COLOR.red,
                borderDash: [6, 4],
                pointRadius: 0,
                borderWidth: 1.2,
                fill: false
            },
            {
                label: "Center",
                data: fillArray(values.length, center),
                borderColor: COLOR.green,
                borderDash: [2, 3],
                pointRadius: 0,
                borderWidth: 1.2,
                fill: false
            },
            {
                label: "LCL",
                data: lclArray,
                borderColor: COLOR.red,
                borderDash: [6, 4],
                pointRadius: 0,
                borderWidth: 1.2,
                fill: false
            }
        ];
        return chartSpec("line", title, subtitle, 250, { labels: labels, datasets: datasets }, chartOptions({
            yTitle: opts.yTitle || "",
            xTitle: opts.xTitle || "Observation"
        }));
    }

    function boxplotSvg(box) {
        const width = 720;
        const height = 210;
        const left = 44;
        const right = 24;
        const axisY = 154;
        const scaleMin = box.min;
        const scaleMax = box.max;
        const spread = scaleMax - scaleMin || 1;
        const low = scaleMin - spread * 0.08;
        const high = scaleMax + spread * 0.08;
        const x = function (value) {
            return left + (value - low) / (high - low) * (width - left - right);
        };
        const ticks = Array.from({ length: 5 }, function (_, index) {
            return low + (high - low) * index / 4;
        });
        let svg = '<div class="boxplot-wrap"><svg viewBox="0 0 ' + width + " " + height + '" role="img" aria-label="Boxplot">';
        svg += '<line x1="' + left + '" y1="' + axisY + '" x2="' + (width - right) + '" y2="' + axisY + '" stroke="#9aa8ba" stroke-width="1"/>';
        ticks.forEach(function (tick) {
            const tickX = x(tick);
            svg += '<line x1="' + tickX + '" y1="' + axisY + '" x2="' + tickX + '" y2="' + (axisY + 5) + '" stroke="#9aa8ba"/>';
            svg += '<text x="' + tickX + '" y="' + (axisY + 19) + '" text-anchor="middle" font-size="10" fill="#748299">' + escapeHtml(formatNumber(tick, 3)) + "</text>";
        });
        svg += '<line x1="' + x(box.lowWhisker) + '" y1="94" x2="' + x(box.highWhisker) + '" y2="94" stroke="#5f6f86" stroke-width="1.3"/>';
        svg += '<line x1="' + x(box.lowWhisker) + '" y1="76" x2="' + x(box.lowWhisker) + '" y2="112" stroke="#5f6f86" stroke-width="1.3"/>';
        svg += '<line x1="' + x(box.highWhisker) + '" y1="76" x2="' + x(box.highWhisker) + '" y2="112" stroke="#5f6f86" stroke-width="1.3"/>';
        svg += '<rect x="' + x(box.q1) + '" y="68" width="' + Math.max(1, x(box.q3) - x(box.q1)) + '" height="52" rx="3" fill="rgba(13, 110, 253, 0.18)" stroke="#0d6efd" stroke-width="1.4"/>';
        svg += '<line x1="' + x(box.median) + '" y1="68" x2="' + x(box.median) + '" y2="120" stroke="#0d6efd" stroke-width="2.4"/>';
        svg += '<text x="' + x(box.lowWhisker) + '" y="64" text-anchor="middle" font-size="9" fill="#6d7d92">' + escapeHtml(formatNumber(box.lowWhisker, 3)) + "</text>";
        svg += '<text x="' + x(box.highWhisker) + '" y="64" text-anchor="middle" font-size="9" fill="#6d7d92">' + escapeHtml(formatNumber(box.highWhisker, 3)) + "</text>";
        svg += '<text x="' + x(box.median) + '" y="132" text-anchor="middle" font-size="9" fill="#0d6efd">Median ' + escapeHtml(formatNumber(box.median, 3)) + "</text>";
        box.outliers.forEach(function (value) {
            svg += '<circle cx="' + x(value) + '" cy="94" r="3.2" fill="#dc3545" opacity="0.8"><title>Outlier: ' + escapeHtml(formatNumber(value, 4)) + "</title></circle>";
        });
        svg += "</svg></div>";
        return svg;
    }

    function destroyCharts() {
        state.charts.forEach(function (chart) {
            try { chart.destroy(); } catch (error) { /* already gone */ }
        });
        state.charts = [];
    }

    function renderCharts(specs) {
        if (!specs || !specs.length) return;
        if (typeof Chart === "undefined") {
            specs.forEach(function (spec) {
                const canvas = document.getElementById(spec.id);
                if (canvas && canvas.parentElement) {
                    canvas.parentElement.innerHTML = '<div class="chart-fallback">Chart.js is unavailable. The numeric report is still valid.</div>';
                }
            });
            return;
        }
        if (Chart.defaults && Chart.defaults.font) {
            Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            Chart.defaults.color = "#64748b";
        }
        specs.forEach(function (spec) {
            const canvas = document.getElementById(spec.id);
            if (!canvas) return;
            try {
                state.charts.push(new Chart(canvas.getContext("2d"), {
                    type: spec.type,
                    data: spec.data,
                    options: spec.options,
                    plugins: spec.plugins || []
                }));
            } catch (error) {
                if (canvas.parentElement) {
                    canvas.parentElement.innerHTML = '<div class="chart-fallback">This chart could not be rendered.</div>';
                }
            }
        });
    }

    function bindEvents() {
        const sampleSelect = $("#sampleSelect");
        const loadSampleBtn = $("#loadSampleBtn");
        const fileInput = $("#fileInput");
        const pasteText = $("#pasteText");

        if (loadSampleBtn) {
            loadSampleBtn.addEventListener("click", function () {
                loadSample(sampleSelect ? sampleSelect.value : "bottling");
            });
        }
        if ($("#importBtn") && fileInput) {
            $("#importBtn").addEventListener("click", function () { fileInput.click(); });
            fileInput.addEventListener("change", function () {
                const file = fileInput.files && fileInput.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function () {
                    try {
                        importDelimited(reader.result);
                    } catch (error) {
                        toast(error.message || "The file could not be imported.", "danger");
                    }
                    fileInput.value = "";
                };
                reader.onerror = function () {
                    toast("The file could not be read.", "danger");
                    fileInput.value = "";
                };
                reader.readAsText(file);
            });
        }
        if ($("#pasteBtn") && $("#pasteModal")) {
            $("#pasteBtn").addEventListener("click", function () {
                bootstrap.Modal.getOrCreateInstance($("#pasteModal")).show();
            });
        }
        if ($("#pasteImportBtn") && pasteText) {
            $("#pasteImportBtn").addEventListener("click", function () {
                try {
                    importDelimited(pasteText.value);
                    const modal = bootstrap.Modal.getInstance($("#pasteModal"));
                    if (modal) modal.hide();
                    pasteText.value = "";
                } catch (error) {
                    toast(error.message || "The pasted data could not be read.", "danger");
                }
            });
        }
        if ($("#exportBtn")) $("#exportBtn").addEventListener("click", exportCsv);
        if ($("#newBtn")) $("#newBtn").addEventListener("click", newWorksheet);
        if ($("#addRowBtn")) $("#addRowBtn").addEventListener("click", addRow);
        if ($("#addColumnBtn")) $("#addColumnBtn").addEventListener("click", addColumn);
        if ($("#deleteColumnBtn")) $("#deleteColumnBtn").addEventListener("click", deleteSelectedColumn);
        if ($("#clearBtn")) $("#clearBtn").addEventListener("click", clearWorksheet);

        const worksheet = $("#worksheetContainer");
        if (worksheet) {
            worksheet.addEventListener("click", function (event) {
                const header = event.target.closest("th[data-col]");
                if (header) selectColumn(Number(header.getAttribute("data-col")));
            });
            worksheet.addEventListener("input", function (event) {
                const columnName = event.target.closest(".column-name");
                if (columnName) {
                    const index = Number(columnName.getAttribute("data-column-name"));
                    state.headers[index] = columnName.textContent.trim() || "Column " + (index + 1);
                    markDirty();
                    return;
                }
                const cell = event.target.closest("td.cell-value");
                if (cell) {
                    const row = Number(cell.getAttribute("data-row"));
                    const column = Number(cell.getAttribute("data-col"));
                    if (state.rows[row]) state.rows[row][column] = cell.textContent;
                    markDirty();
                }
            });
            worksheet.addEventListener("focusout", function (event) {
                const columnName = event.target.closest(".column-name");
                if (columnName) {
                    if (!columnName.textContent.trim()) {
                        const index = Number(columnName.getAttribute("data-column-name"));
                        const fallback = "Column " + (index + 1);
                        columnName.textContent = fallback;
                        state.headers[index] = fallback;
                    }
                    refreshColumnTypeLabels();
                }
                const cell = event.target.closest("td.cell-value");
                if (cell) refreshColumnTypeLabels();
                if (state.activeAnalysis) refreshFormOptionsSoon();
            });
        }

        const menu = $("#analysisMenu");
        if (menu) {
            menu.addEventListener("click", function (event) {
                const link = event.target.closest("[data-analysis-id]");
                if (link) openAnalysis(link.getAttribute("data-analysis-id"));
            });
        }

        const workspace = $("#analysisWorkspace");
        if (workspace) {
            workspace.addEventListener("click", function (event) {
                const quick = event.target.closest("[data-open-analysis]");
                if (quick) {
                    openAnalysis(quick.getAttribute("data-open-analysis"));
                    return;
                }
                if (event.target.closest("#loadFactorialRuns") && state.lastFactorial) {
                    const data = state.lastFactorial;
                    setWorksheet(data.headers, data.rows, "Designed experiment loaded");
                    openAnalysis("factorialAnalyze");
                }
            });
        }
    }

    function init() {
        renderMenu();
        const sample = sampleBottling();
        setWorksheet(sample.headers, sample.rows);
        setStatus("Example worksheet ready", false);
        renderWelcome();
        bindEvents();
        const hash = window.location.hash ? window.location.hash.replace(/^#/, "") : "";
        if (hash && analysisById(hash)) {
            openAnalysis(hash);
        }
    }

    window.StatsApp = {
        E: E,
        state: state,
        COLOR: COLOR,
        $: $,
        $$: $$,
        escapeHtml: escapeHtml,
        escapeAttr: escapeAttr,
        round: round,
        formatNumber: formatNumber,
        formatP: formatP,
        formatPercent: formatPercent,
        pBadge: pBadge,
        decision: decision,
        fillArray: fillArray,
        sum: sum,
        columnIndex: columnIndex,
        rawColumn: rawColumn,
        numericColumn: numericColumn,
        isNumericColumn: isNumericColumn,
        numericColumnNames: numericColumnNames,
        completeNumericRows: completeNumericRows,
        completePairs: completePairs,
        rowObjects: rowObjects,
        requireNumber: requireNumber,
        requirePositive: requirePositive,
        requireProbability: requireProbability,
        requireColumn: requireColumn,
        splitList: splitList,
        metric: metric,
        metricGrid: metricGrid,
        reportBlock: reportBlock,
        dataTable: dataTable,
        noteBlock: noteBlock,
        signalsBlock: signalsBlock,
        chartCard: chartCard,
        chartSpec: chartSpec,
        chartOptions: chartOptions,
        lineChart: lineChart,
        barChart: barChart,
        scatterChart: scatterChart,
        controlChart: controlChart,
        boxplotSvg: boxplotSvg,
        toast: toast,
        setWorksheet: setWorksheet,
        setStatus: setStatus,
        renderWelcome: renderWelcome,
        openAnalysis: openAnalysis,
        registerGroups: function (groups) {
            state.groups = Array.isArray(groups) ? groups : [];
        }
    };

    window.addEventListener("DOMContentLoaded", init);
}());

