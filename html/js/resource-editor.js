(function (root) {
    "use strict";

    const state = {
        template: null,
        copyId: "",
        dirty: false,
        printAfterLoad: false
    };

    function byId(id) {
        return document.getElementById(id);
    }

    function store() {
        return root.ResourceStore;
    }

    function queryValue(name) {
        return new URLSearchParams(root.location.search).get(name) || "";
    }

    function loginReturnUrl() {
        return "login.html?return=" + encodeURIComponent(root.location.pathname.split("/").pop() + root.location.search);
    }

    function setStatus(message, tone) {
        const status = byId("editorStatus");
        if (!status) return;
        status.className = "resource-editor-status " + (tone || "");
        status.innerHTML = message ? '<i class="fas ' + (tone === "danger" ? "fa-circle-exclamation" : tone === "warning" ? "fa-triangle-exclamation" : tone === "saved" ? "fa-circle-check" : "fa-pen") + ' me-1"></i>' + message : "";
    }

    function markDirty() {
        state.dirty = true;
        setStatus("Unsaved changes", "warning");
    }

    function optionsFor(column) {
        return (column.options || []).map(function (option) {
            return typeof option === "string" ? { value: option, label: option } : option;
        });
    }

    function optionHtml(column, current) {
        const options = optionsFor(column);
        return '<option value="">Select...</option>' + options.map(function (option) {
            return '<option value="' + store().escapeHtml(option.value) + '"' +
                (String(option.value) === String(current || "") ? " selected" : "") + ">" +
                store().escapeHtml(option.label) + "</option>";
        }).join("");
    }

    function controlHtml(column, value) {
        const S = store();
        if (column.compute) {
            return '<input type="text" class="form-control form-control-sm resource-computed" data-col="' +
                S.escapeHtml(column.key) + '" readonly tabindex="-1" aria-label="' + S.escapeHtml(column.label) + '">';
        }
        if (column.type === "select") {
            return '<select class="form-select form-select-sm" data-col="' + S.escapeHtml(column.key) + '">' +
                optionHtml(column, value) + "</select>";
        }
        const type = column.type === "number" ? "number" : column.type === "date" ? "date" : "text";
        const attributes = ['type="' + type + '"', 'class="form-control form-control-sm"', 'data-col="' + S.escapeHtml(column.key) + '"'];
        if (column.min !== undefined) attributes.push('min="' + column.min + '"');
        if (column.max !== undefined) attributes.push('max="' + column.max + '"');
        if (column.step !== undefined) attributes.push('step="' + column.step + '"');
        if (column.placeholder) attributes.push('placeholder="' + S.escapeHtml(column.placeholder) + '"');
        attributes.push('value="' + S.escapeHtml(value === undefined || value === null ? "" : value) + '"');
        return "<input " + attributes.join(" ") + ">";
    }

    function tableRowHtml(field, row) {
        const S = store();
        const cells = field.columns.map(function (column) {
            const width = column.width ? ' style="min-width:' + S.escapeHtml(column.width) + '"' : "";
            return "<td" + width + ">" + controlHtml(column, row && row[column.key]) + "</td>";
        }).join("");
        return "<tr>" + cells +
            '<td class="resource-row-action"><button type="button" class="btn btn-sm btn-link text-danger" data-remove-row="' +
            S.escapeHtml(field.key) + '" title="Delete row" aria-label="Delete row"><i class="fas fa-trash-can"></i></button></td></tr>';
    }

    function tableBodyHtml(field, rows) {
        return rows.map(function (row) { return tableRowHtml(field, row); }).join("");
    }

    function initialRows(field, data) {
        const hasData = data && Object.prototype.hasOwnProperty.call(data, field.key);
        if (hasData && Array.isArray(data[field.key])) return data[field.key];
        if (hasData) return [];
        return Array.from({ length: field.minRows || 1 }, function () { return {}; });
    }

    function tableHtml(field, data) {
        const S = store();
        const rows = initialRows(field, data);
        const columns = field.columns.map(function (column) {
            const style = column.width ? ' style="min-width:' + S.escapeHtml(column.width) + '"' : "";
            const computed = column.compute ? " resource-th-computed" : "";
            return "<th" + style + ' class="' + computed.trim() + '">' + S.escapeHtml(column.label) + "</th>";
        }).join("");
        return `
            <div class="resource-table-panel">
                <div class="resource-table-toolbar">
                    <span class="small text-muted">${rows.length ? rows.length + " row" + (rows.length === 1 ? "" : "s") : "No rows yet"}</span>
                    <div class="d-flex gap-2">
                        ${field.sortBy ? `<button type="button" class="btn btn-sm btn-outline-secondary" data-sort-table="${S.escapeHtml(field.key)}"><i class="fas fa-arrow-down-wide-short me-1"></i>${S.escapeHtml(field.sortLabel || "Sort")}</button>` : ""}
                        <button type="button" class="btn btn-sm btn-outline-primary" data-add-row="${S.escapeHtml(field.key)}"><i class="fas fa-plus me-1"></i>Add row</button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-sm resource-table" data-table-field="${S.escapeHtml(field.key)}">
                        <thead><tr>${columns}<th class="resource-row-action"></th></tr></thead>
                        <tbody>${tableBodyHtml(field, rows)}</tbody>
                    </table>
                </div>
            </div>`;
    }

    function checklistHtml(field, data) {
        const S = store();
        const values = Array.isArray(data && data[field.key]) ? data[field.key] : [];
        return '<div class="resource-checklist">' + field.items.map(function (item, index) {
            return `<label class="resource-check-item">
                <input type="checkbox" class="form-check-input" data-check-index="${index}"${values[index] ? " checked" : ""}>
                <span>${S.escapeHtml(item)}</span>
            </label>`;
        }).join("") + "</div>";
    }

    function fieldHtml(field, data) {
        const S = store();
        const value = data ? data[field.key] : undefined;
        const wide = field.wide || field.type === "table" || field.type === "checklist";
        let body;
        if (field.type === "table") {
            body = tableHtml(field, data || {});
        } else if (field.type === "checklist") {
            body = checklistHtml(field, data || {});
        } else if (field.type === "textarea") {
            body = `<textarea class="form-control" rows="${field.rows || 3}" data-field-key="${S.escapeHtml(field.key)}"` +
                (field.placeholder ? ` placeholder="${S.escapeHtml(field.placeholder)}"` : "") + ">" +
                S.escapeHtml(value === undefined || value === null ? "" : value) + "</textarea>";
        } else if (field.type === "select") {
            body = `<select class="form-select" data-field-key="${S.escapeHtml(field.key)}">${optionHtml(field, value)}</select>`;
        } else {
            const type = field.type === "number" ? "number" : field.type === "date" ? "date" : "text";
            const attributes = ['type="' + type + '"', 'class="form-control"', 'data-field-key="' + S.escapeHtml(field.key) + '"'];
            if (field.min !== undefined) attributes.push('min="' + field.min + '"');
            if (field.max !== undefined) attributes.push('max="' + field.max + '"');
            if (field.step !== undefined) attributes.push('step="' + field.step + '"');
            if (field.placeholder) attributes.push('placeholder="' + S.escapeHtml(field.placeholder) + '"');
            attributes.push('value="' + S.escapeHtml(value === undefined || value === null ? "" : value) + '"');
            body = "<input " + attributes.join(" ") + ">";
        }
        return `
            <div class="resource-editor-field${wide ? " wide" : ""}" data-field-wrap="${S.escapeHtml(field.key)}">
                <div class="resource-field-label">
                    <label>${S.escapeHtml(field.label)}${field.required ? ' <span class="required-mark">Required</span>' : ""}</label>
                    ${field.help ? '<div class="form-text">' + S.escapeHtml(field.help) + "</div>" : ""}
                </div>
                ${body}
            </div>`;
    }

    function renderForm(data) {
        const S = store();
        const area = byId("resourceFormArea");
        const sections = [];
        const sectionMap = {};
        state.template.fields.forEach(function (field) {
            const name = field.section || "Template";
            if (!sectionMap[name]) {
                sectionMap[name] = [];
                sections.push(name);
            }
            sectionMap[name].push(field);
        });
        area.innerHTML = `
            <form id="resourceForm" novalidate>
                ${sections.map(function (name, index) {
                    return `<section class="resource-editor-section">
                        <div class="resource-section-heading">
                            <span>${String(index + 1).padStart(2, "0")}</span>
                            <h2>${S.escapeHtml(name)}</h2>
                        </div>
                        <div class="resource-fields-grid">${sectionMap[name].map(function (field) { return fieldHtml(field, data || {}); }).join("")}</div>
                    </section>`;
                }).join("")}
                <div class="resource-bottom-actions">
                    <span class="text-muted small"><i class="fas fa-lock me-1"></i>Copies are saved to this browser under your learner profile.</span>
                    <button type="button" class="btn btn-primary" data-save-copy><i class="fas fa-floppy-disk me-1"></i>Save copy</button>
                </div>
            </form>`;
        recalcAllTables();
    }

    function tableField(key) {
        return state.template.fields.find(function (field) { return field.type === "table" && field.key === key; });
    }

    function readTableRow(field, row) {
        const values = {};
        field.columns.forEach(function (column) {
            if (column.compute) return;
            const input = row.querySelector('[data-col="' + column.key + '"]');
            const raw = input ? input.value : "";
            if (column.type === "number") {
                values[column.key] = raw === "" ? "" : Number(raw);
            } else {
                values[column.key] = raw;
            }
        });
        return values;
    }

    function numericValue(value) {
        if (value === "" || value === null || value === undefined) return NaN;
        return Number(value);
    }

    function computedValue(column, row, rows, totals, cumulative) {
        const compute = column.compute;
        if (!compute) return "";
        if (compute.op === "multiply") {
            const values = compute.fields.map(function (key) { return numericValue(row[key]); });
            if (values.some(function (value) { return !Number.isFinite(value); })) return "";
            return values.reduce(function (product, value) { return product * value; }, 1);
        }
        if (compute.op === "sum") {
            const values = compute.fields.map(function (key) { return numericValue(row[key]); }).filter(Number.isFinite);
            return values.length ? values.reduce(function (total, value) { return total + value; }, 0) : "";
        }
        const source = numericValue(row[compute.field]);
        if (!Number.isFinite(source)) return "";
        if (compute.op === "percentOfTotal") {
            return totals[compute.field] ? source / totals[compute.field] * 100 : "";
        }
        if (compute.op === "cumulativePercent") {
            cumulative[compute.field] = (cumulative[compute.field] || 0) + source;
            return totals[compute.field] ? cumulative[compute.field] / totals[compute.field] * 100 : "";
        }
        return "";
    }

    function computeRows(field, rows) {
        const totals = {};
        field.columns.forEach(function (column) {
            if (!column.compute || (column.compute.op !== "percentOfTotal" && column.compute.op !== "cumulativePercent")) return;
            const source = column.compute.field;
            totals[source] = rows.reduce(function (total, row) {
                const value = numericValue(row[source]);
                return total + (Number.isFinite(value) ? value : 0);
            }, 0);
        });
        const cumulative = {};
        return rows.map(function (row) {
            const computed = Object.assign({}, row);
            field.columns.forEach(function (column) {
                if (column.compute) computed[column.key] = computedValue(column, row, rows, totals, cumulative);
            });
            return computed;
        });
    }

    function formattedComputed(column, value) {
        if (value === "" || value === null || value === undefined || !Number.isFinite(Number(value))) return "";
        if (column.compute.op === "percentOfTotal" || column.compute.op === "cumulativePercent") {
            return Number(value).toFixed(1) + "%";
        }
        return String(Math.round(Number(value) * 100) / 100);
    }

    function scoreClass(column, value) {
        if (!column.thresholds || !Number.isFinite(Number(value))) return "";
        const high = Number(value) >= column.thresholds.high;
        const medium = Number(value) >= column.thresholds.medium;
        if (!high && !medium) return "";
        if (column.tone === "good") return high ? "resource-score-high" : "resource-score-medium";
        return high ? "resource-risk-high" : "resource-risk-medium";
    }

    function recalcTable(table) {
        const field = tableField(table.getAttribute("data-table-field"));
        if (!field) return;
        const rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
        const dataRows = rows.map(function (row) { return readTableRow(field, row); });
        const computedRows = computeRows(field, dataRows);
        rows.forEach(function (row, rowIndex) {
            field.columns.forEach(function (column) {
                if (!column.compute) return;
                const input = row.querySelector('[data-col="' + column.key + '"]');
                if (!input) return;
                const value = computedRows[rowIndex][column.key];
                input.value = formattedComputed(column, value);
                const cell = input.closest("td");
                cell.classList.remove("resource-risk-high", "resource-risk-medium", "resource-score-high", "resource-score-medium");
                const className = scoreClass(column, value);
                if (className) cell.classList.add(className);
            });
        });
        const toolbar = table.closest(".resource-table-panel").querySelector(".resource-table-toolbar span");
        if (toolbar) {
            const count = dataRows.filter(function (row) {
                return field.columns.some(function (column) {
                    if (column.compute) return false;
                    return String(row[column.key] === undefined || row[column.key] === null ? "" : row[column.key]).trim() !== "";
                });
            }).length;
            toolbar.textContent = count + " row" + (count === 1 ? "" : "s");
        }
    }

    function recalcAllTables() {
        document.querySelectorAll(".resource-table[data-table-field]").forEach(recalcTable);
    }

    function collectTable(field, table) {
        const rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
        return rows.map(function (row) { return readTableRow(field, row); }).filter(function (row) {
            return field.columns.some(function (column) {
                if (column.compute) return false;
                return String(row[column.key] === undefined || row[column.key] === null ? "" : row[column.key]).trim() !== "";
            });
        });
    }

    function collectData() {
        const data = {};
        state.template.fields.forEach(function (field) {
            if (field.type === "table") {
                const table = document.querySelector('.resource-table[data-table-field="' + field.key + '"]');
                data[field.key] = table ? collectTable(field, table) : [];
            } else if (field.type === "checklist") {
                data[field.key] = Array.prototype.map.call(document.querySelectorAll('[data-check-index]'), function (input) {
                    return input.checked;
                });
            } else {
                const input = document.querySelector('[data-field-key="' + field.key + '"]');
                const value = input ? input.value : "";
                data[field.key] = field.type === "number" && value !== "" ? Number(value) : value;
            }
        });
        return data;
    }

    function populateData(data) {
        renderForm(data || {});
        state.dirty = false;
        setStatus("Ready", "");
    }

    function renderHeading() {
        const S = store();
        const template = state.template;
        const phase = S.phaseInfo(template.phase);
        byId("resourceHeading").innerHTML = `
            <div class="resource-heading-main">
                <span class="resource-heading-icon ${phase.tone}"><i class="fas ${S.escapeHtml(template.icon)}"></i></span>
                <div>
                    <div class="resource-heading-badges">
                        <span class="resource-phase-badge ${phase.tone}">${S.escapeHtml(template.phase)}</span>
                        <span class="badge text-bg-light border"><i class="fas fa-award me-1"></i>${S.escapeHtml(S.beltName(template.minBelt))}+</span>
                        <span class="badge text-bg-light border"><i class="fas fa-clock me-1"></i>${template.estimatedMinutes || 20} min</span>
                    </div>
                    <h1>${S.escapeHtml(template.title)}</h1>
                    <p>${S.escapeHtml(template.description)}</p>
                </div>
            </div>`;
        byId("resourceToolbar").classList.remove("d-none");
    }

    function renderLoginNotice() {
        const S = store();
        if (S.currentUser()) {
            byId("loginNotice").innerHTML = "";
            return;
        }
        byId("loginNotice").innerHTML = '<div class="alert alert-warning py-2 mb-0 small">' +
            '<i class="fas fa-user-lock me-1"></i>Sign in to save copies to My Project. You can still fill the template, load the example, and export a PDF. ' +
            '<a href="' + loginReturnUrl() + '" class="alert-link">Sign in</a></div>';
    }

    function renderLocked() {
        const S = store();
        const template = state.template;
        byId("resourceHeading").innerHTML = `
            <div class="resource-heading-main">
                <span class="resource-heading-icon"><i class="fas fa-lock"></i></span>
                <div><h1>${S.escapeHtml(template.title)}</h1><p>${S.escapeHtml(template.description)}</p></div>
            </div>`;
        byId("resourceFormArea").innerHTML = '<div class="resource-locked-panel">' +
            '<i class="fas fa-lock"></i>' +
            '<h2>Unlocks at ' + S.escapeHtml(S.beltName(template.minBelt)) + '</h2>' +
            '<p>Your current resource level is ' + S.escapeHtml(S.beltName(S.currentBelt())) + '. Update your belt level in your profile to open this template.</p>' +
            '<a href="profile.html#beltLevel" class="btn btn-primary"><i class="fas fa-award me-1"></i>Update belt level</a> ' +
            '<a href="resources.html" class="btn btn-outline-secondary">Back to Resources</a></div>';
    }

    function renderMissing(message) {
        byId("resourceHeading").innerHTML = "<h1>Template unavailable</h1>";
        byId("resourceFormArea").innerHTML = '<div class="alert alert-danger">' + store().escapeHtml(message) +
            ' <a href="resources.html" class="alert-link">Return to Resources</a></div>';
    }

    function addRow(fieldKey) {
        const field = tableField(fieldKey);
        if (!field) return;
        const table = document.querySelector('.resource-table[data-table-field="' + fieldKey + '"]');
        const body = table.querySelector("tbody");
        body.insertAdjacentHTML("beforeend", tableRowHtml(field, {}));
        recalcTable(table);
        markDirty();
    }

    function removeRow(button) {
        const row = button.closest("tr");
        const table = row.closest("table");
        row.remove();
        recalcTable(table);
        markDirty();
    }

    function sortTable(fieldKey) {
        const field = tableField(fieldKey);
        const table = document.querySelector('.resource-table[data-table-field="' + fieldKey + '"]');
        if (!field || !table) return;
        const body = table.querySelector("tbody");
        const rows = Array.prototype.slice.call(body.querySelectorAll("tr"));
        rows.sort(function (a, b) {
            const aInput = a.querySelector('[data-col="' + field.sortBy + '"]');
            const bInput = b.querySelector('[data-col="' + field.sortBy + '"]');
            const aValue = aInput ? numericValue(aInput.value) : NaN;
            const bValue = bInput ? numericValue(bInput.value) : NaN;
            return (Number.isFinite(bValue) ? bValue : -Infinity) - (Number.isFinite(aValue) ? aValue : -Infinity);
        });
        rows.forEach(function (row) { body.appendChild(row); });
        recalcTable(table);
        markDirty();
    }

    function loadExample() {
        if (state.dirty && !root.confirm("Replace the current entries with the completed example?")) return;
        const S = store();
        populateData(S.deepClone(state.template.example || {}));
        const project = S.projectNameFrom(state.template, state.template.example || {});
        if (!byId("copyNameInput").value.trim()) byId("copyNameInput").value = project;
        state.dirty = true;
        setStatus("Example loaded. Review the content, then save your own copy.", "warning");
    }

    function clearForm() {
        if (state.dirty && !root.confirm("Clear all entries in this template?")) return;
        populateData({});
        state.dirty = true;
        setStatus("Template cleared", "warning");
    }

    function saveCopy() {
        const S = store();
        if (!S.currentUser()) {
            root.location.href = loginReturnUrl();
            return;
        }
        const data = collectData();
        const copyName = byId("copyNameInput").value.trim() || S.projectNameFrom(state.template, data);
        try {
            const saved = S.saveCopy(state.template.id, state.copyId, copyName, data);
            state.copyId = saved.id;
            byId("copyNameInput").value = saved.copyName;
            state.dirty = false;
            const url = "resource-editor.html?copy=" + encodeURIComponent(saved.id);
            try {
                if (root.location.search.indexOf("copy=" + saved.id) === -1) root.history.replaceState({}, "", url);
            } catch (error) {
                console.warn("The editor URL could not be updated.");
            }
            setStatus("Saved to My Project on " + S.formatDate(saved.updatedAt) + ".", "saved");
        } catch (error) {
            setStatus(S.escapeHtml(error.message), "danger");
        }
    }

    function multiline(value) {
        return store().escapeHtml(value === undefined || value === null ? "" : value).replace(/\n/g, "<br>");
    }

    function printField(field, data) {
        const S = store();
        if (field.type === "table") {
            const rows = Array.isArray(data[field.key]) ? data[field.key] : [];
            const computedRows = computeRows(field, rows);
            if (!computedRows.length) return '<p class="print-empty">No rows entered.</p>';
            return '<table class="print-table"><thead><tr>' + field.columns.map(function (column) {
                return "<th>" + S.escapeHtml(column.label) + "</th>";
            }).join("") + "</tr></thead><tbody>" + computedRows.map(function (row) {
                return "<tr>" + field.columns.map(function (column) {
                    const value = column.compute ? formattedComputed(column, row[column.key]) : row[column.key];
                    return "<td>" + multiline(value) + "</td>";
                }).join("") + "</tr>";
            }).join("") + "</tbody></table>";
        }
        if (field.type === "checklist") {
            const values = Array.isArray(data[field.key]) ? data[field.key] : [];
            return '<ul class="print-checklist">' + field.items.map(function (item, index) {
                return "<li>" + (values[index] ? "&#9745;" : "&#9744;") + " " + S.escapeHtml(item) + "</li>";
            }).join("") + "</ul>";
        }
        const value = data[field.key];
        return '<div class="print-value">' + (String(value || "").trim() ? multiline(value) : '<span class="print-empty">Not entered</span>') + "</div>";
    }

    function buildPrintSheet() {
        const S = store();
        const data = collectData();
        const copyName = byId("copyNameInput").value.trim() || S.projectNameFrom(state.template, data);
        const sections = [];
        const sectionMap = {};
        state.template.fields.forEach(function (field) {
            const name = field.section || "Template";
            if (!sectionMap[name]) {
                sectionMap[name] = [];
                sections.push(name);
            }
            sectionMap[name].push(field);
        });
        byId("printSheet").innerHTML = `
            <header class="print-header">
                <div class="print-eyebrow">Lean Six Sigma Project Resource</div>
                <h1>${S.escapeHtml(copyName)}</h1>
                <div class="print-meta">${S.escapeHtml(state.template.title)} | ${S.escapeHtml(state.template.phase)} phase | ${S.escapeHtml(S.beltName(state.template.minBelt))}+ | Exported ${S.escapeHtml(S.formatDate(new Date().toISOString()))}</div>
            </header>
            ${sections.map(function (name) {
                return '<section class="print-section"><h2>' + S.escapeHtml(name) + "</h2>" +
                    sectionMap[name].map(function (field) {
                        return '<div class="print-field"><h3>' + S.escapeHtml(field.label) + "</h3>" + printField(field, data) + "</div>";
                    }).join("") + "</section>";
            }).join("")}
            <footer class="print-footer">Generated from the Lean Six Sigma Training Course resource library.</footer>`;
    }

    function exportPdf() {
        if (!state.template || byId("resourceFormArea").querySelector(".resource-locked-panel")) return;
        buildPrintSheet();
        const originalTitle = document.title;
        const copyName = byId("copyNameInput").value.trim() || state.template.title;
        document.title = copyName + " - Lean Six Sigma";
        document.body.classList.add("resource-printing");
        const cleanup = function () {
            document.body.classList.remove("resource-printing");
            document.title = originalTitle;
        };
        root.addEventListener("afterprint", cleanup, { once: true });
        root.setTimeout(function () {
            root.print();
            root.setTimeout(cleanup, 500);
        }, 80);
    }

    function bindEvents() {
        const area = byId("resourceFormArea");
        area.addEventListener("input", function (event) {
            const table = event.target.closest(".resource-table");
            if (table) recalcTable(table);
            markDirty();
        });
        area.addEventListener("change", function (event) {
            const table = event.target.closest(".resource-table");
            if (table) recalcTable(table);
            markDirty();
        });
        area.addEventListener("click", function (event) {
            const add = event.target.closest("[data-add-row]");
            if (add) {
                addRow(add.getAttribute("data-add-row"));
                return;
            }
            const remove = event.target.closest("[data-remove-row]");
            if (remove) {
                removeRow(remove);
                return;
            }
            const sort = event.target.closest("[data-sort-table]");
            if (sort) {
                sortTable(sort.getAttribute("data-sort-table"));
                return;
            }
            if (event.target.closest("[data-save-copy]")) saveCopy();
        });
        byId("loadExampleBtn").addEventListener("click", loadExample);
        byId("clearBtn").addEventListener("click", clearForm);
        byId("printBtn").addEventListener("click", exportPdf);
        byId("saveBtn").addEventListener("click", saveCopy);
        byId("copyNameInput").addEventListener("input", markDirty);
        root.addEventListener("beforeunload", function (event) {
            if (!state.dirty) return;
            event.preventDefault();
            event.returnValue = "";
        });
    }

    function init() {
        const S = store();
        if (!S) {
            renderMissing("The resource library did not load.");
            return;
        }
        const copyId = queryValue("copy");
        const templateId = queryValue("template");
        state.printAfterLoad = queryValue("print") === "1";
        if (copyId) {
            if (!S.currentUser()) {
                renderMissing("Sign in to open this saved copy.");
                return;
            }
            const copy = S.getCopy(copyId);
            if (!copy) {
                renderMissing("This saved copy was not found in your My Project library.");
                return;
            }
            state.template = S.templateById(copy.resourceId);
            state.copyId = copy.id;
            if (!state.template) {
                renderMissing("The template for this saved copy is no longer available.");
                return;
            }
            renderHeading();
            renderLoginNotice();
            byId("copyNameInput").value = copy.copyName || "";
            populateData(copy.data || {});
            setStatus("Last saved " + S.formatDate(copy.updatedAt) + ".", "saved");
        } else if (templateId) {
            state.template = S.templateById(templateId);
            if (!state.template) {
                renderMissing("The selected template was not found.");
                return;
            }
            if (!S.isUnlocked(state.template)) {
                renderLocked();
                return;
            }
            renderHeading();
            renderLoginNotice();
            populateData({});
            byId("copyNameInput").value = "";
        } else {
            renderMissing("Choose a template from the Resources library.");
            return;
        }
        bindEvents();
        recalcAllTables();
        if (state.printAfterLoad) root.setTimeout(exportPdf, 450);
    }

    document.addEventListener("DOMContentLoaded", init);
}(typeof globalThis !== "undefined" ? globalThis : this));
