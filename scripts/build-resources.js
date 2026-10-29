const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "data", "resources.json");
const jsPath = path.join(root, "html", "js", "resource-catalog-data.js");
const sqlPath = path.join(root, "sql", "scripts", "seed_resources.sql");

const validPhases = ["Define", "Measure", "Analyze", "Improve", "Control"];
const validBelts = ["white", "yellow", "green", "black", "master-black"];
const validFieldTypes = ["text", "textarea", "date", "select", "number", "table", "checklist"];
const validComputeOps = ["multiply", "sum", "percentOfTotal", "cumulativePercent"];
const requiredFields = ["id", "title", "phase", "minBelt", "icon", "description", "fields", "example"];

function fail(message) {
    console.error("Resource build failed: " + message);
    process.exit(1);
}

function sqlString(value) {
    return "N'" + String(value).replace(/'/g, "''") + "'";
}

function sqlJson(value) {
    return "CAST(" + sqlString(JSON.stringify(value)) + " AS NVARCHAR(MAX))";
}

const catalog = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
if (!Array.isArray(catalog.templates) || !catalog.templates.length) {
    fail("data/resources.json must contain a non-empty templates array.");
}

const ids = new Set();
catalog.templates.forEach(function (template, index) {
    requiredFields.forEach(function (key) {
        if (!(key in template)) fail("Template " + index + " is missing " + key + ".");
    });
    if (ids.has(template.id)) fail("Duplicate template id: " + template.id);
    ids.add(template.id);
    if (validPhases.indexOf(template.phase) === -1) fail("Invalid phase for " + template.id + ".");
    if (validBelts.indexOf(template.minBelt) === -1) fail("Invalid minimum belt for " + template.id + ".");
    if (!/^fa-[a-z0-9-]+$/.test(template.icon)) fail("Template " + template.id + " has an invalid Font Awesome icon.");
    if (!Number.isFinite(template.estimatedMinutes) || template.estimatedMinutes <= 0) {
        fail("Template " + template.id + " needs a positive estimatedMinutes value.");
    }
    if (!Array.isArray(template.fields) || !template.fields.length) fail("Template " + template.id + " has no fields.");
    const fieldKeys = new Set();
    template.fields.forEach(function (field) {
        if (!field.key || !field.label || !field.type) fail("Template " + template.id + " has an incomplete field.");
        if (validFieldTypes.indexOf(field.type) === -1) fail("Template " + template.id + " has invalid field type " + field.type + ".");
        if (fieldKeys.has(field.key)) fail("Template " + template.id + " has duplicate field " + field.key + ".");
        fieldKeys.add(field.key);
        if (field.type === "select" && (!Array.isArray(field.options) || !field.options.length)) {
            fail("Select field " + field.key + " needs options.");
        }
        if (field.type === "table") {
            if (!Array.isArray(field.columns) || !field.columns.length) fail("Table " + field.key + " has no columns.");
            const columnKeys = new Set();
            field.columns.forEach(function (column) {
                if (!column.key || !column.label) fail("Table " + field.key + " has an incomplete column.");
                if (columnKeys.has(column.key)) fail("Table " + field.key + " has duplicate column " + column.key + ".");
                columnKeys.add(column.key);
            });
            field.columns.forEach(function (column) {
                if (!column.compute) return;
                const compute = column.compute;
                if (validComputeOps.indexOf(compute.op) === -1) fail("Computed column " + column.key + " has invalid op.");
                const sources = compute.op === "multiply" || compute.op === "sum" ? compute.fields : [compute.field];
                if (!Array.isArray(sources) || !sources.length) fail("Computed column " + column.key + " needs source fields.");
                sources.forEach(function (source) {
                    if (!columnKeys.has(source)) fail("Computed column " + column.key + " references missing column " + source + ".");
                    if (source === column.key) fail("Computed column " + column.key + " cannot reference itself.");
                });
            });
            if (field.sortBy && !columnKeys.has(field.sortBy)) {
                fail("Table " + field.key + " sortBy references missing column " + field.sortBy + ".");
            }
            field.columnKeys = columnKeys;
        }
        if (field.type === "checklist") {
            if (!Array.isArray(field.items) || !field.items.length) fail("Checklist " + field.key + " needs items.");
            if (field.items.some(function (item) { return !String(item || "").trim(); })) {
                fail("Checklist " + field.key + " has an empty item.");
            }
        }
    });
    if (!template.example || typeof template.example !== "object" || Array.isArray(template.example)) {
        fail("Template " + template.id + " needs an example object.");
    }
    Object.keys(template.example).forEach(function (key) {
        if (!fieldKeys.has(key)) fail("Example for " + template.id + " has unknown field " + key + ".");
    });
    template.fields.forEach(function (field) {
        if (!Object.prototype.hasOwnProperty.call(template.example, field.key)) return;
        const value = template.example[field.key];
        if (field.type === "table") {
            if (!Array.isArray(value)) fail("Example field " + field.key + " must be an array.");
            value.forEach(function (row, rowIndex) {
                if (!row || typeof row !== "object" || Array.isArray(row)) fail("Example row " + rowIndex + " in " + field.key + " must be an object.");
                Object.keys(row).forEach(function (key) {
                    if (!field.columnKeys.has(key)) fail("Example row in " + field.key + " has unknown column " + key + ".");
                });
            });
        } else if (field.type === "checklist") {
            if (!Array.isArray(value) || value.length !== field.items.length || value.some(function (item) { return typeof item !== "boolean"; })) {
                fail("Example checklist " + field.key + " must have one boolean per item.");
            }
        } else if (field.type === "select") {
            const options = field.options.map(function (option) { return typeof option === "string" ? option : option.value; });
            if (String(value || "") && options.indexOf(value) === -1) fail("Example field " + field.key + " has an invalid select value.");
        } else if (field.type === "number" && value !== "" && !Number.isFinite(Number(value))) {
            fail("Example field " + field.key + " must be numeric.");
        }
    });
});

const js = "(function (root) {\n" +
    "    \"use strict\";\n" +
    "    var catalog = " + JSON.stringify(catalog, null, 4).replace(/\n/g, "\n    ") + ";\n" +
    "    if (typeof module === \"object\" && module.exports) module.exports = catalog;\n" +
    "    root.RESOURCE_CATALOG = catalog;\n" +
    "}(typeof globalThis !== \"undefined\" ? globalThis : this));\n";
fs.writeFileSync(jsPath, js, "utf8");

const columns = "(ResourceId, Title, DMAICPhase, MinBelt, Icon, EstimatedMinutes, Description, FieldsJson, ExampleJson, SortOrder)";
const values = catalog.templates.map(function (template, index) {
    return "    (" + [
        sqlString(template.id),
        sqlString(template.title),
        sqlString(template.phase),
        sqlString(template.minBelt),
        sqlString(template.icon),
        Number.isFinite(template.estimatedMinutes) ? String(template.estimatedMinutes) : "NULL",
        sqlString(template.description),
        sqlJson(template.fields),
        sqlJson(template.example),
        String((index + 1) * 10)
    ].join(", ") + ")";
}).join(",\n");

const sql = "USE LeanSixSigmaTraining;\nGO\n\n" +
    "-- Generated by scripts/build-resources.js. Do not edit by hand.\n" +
    "MERGE Resources AS target\n" +
    "USING (VALUES\n" + values + "\n) AS source " + columns + "\n" +
    "ON target.ResourceId = source.ResourceId\n" +
    "WHEN MATCHED THEN UPDATE SET\n" +
    "    Title = source.Title,\n" +
    "    DMAICPhase = source.DMAICPhase,\n" +
    "    MinBelt = source.MinBelt,\n" +
    "    Icon = source.Icon,\n" +
    "    EstimatedMinutes = source.EstimatedMinutes,\n" +
    "    Description = source.Description,\n" +
    "    FieldsJson = source.FieldsJson,\n" +
    "    ExampleJson = source.ExampleJson,\n" +
    "    SortOrder = source.SortOrder,\n" +
    "    IsActive = 1\n" +
    "WHEN NOT MATCHED THEN INSERT " + columns + "\n" +
    "VALUES (source.ResourceId, source.Title, source.DMAICPhase, source.MinBelt, source.Icon,\n" +
    "    source.EstimatedMinutes, source.Description, source.FieldsJson, source.ExampleJson, source.SortOrder);\nGO\n";
fs.writeFileSync(sqlPath, sql, "utf8");

console.log("Built " + catalog.templates.length + " resource templates.");
console.log("- " + path.relative(root, jsPath));
console.log("- " + path.relative(root, sqlPath));

