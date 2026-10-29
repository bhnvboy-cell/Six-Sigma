/*
 * Statistics workbench analyses and reports.
 * Depends on statistics.js and statistics-engine.js.
 */
(function () {
    "use strict";

    const App = window.StatsApp;
    if (!App) {
        window.alert("The statistics workbench core could not be loaded.");
        return;
    }

    const E = App.E;
    const state = App.state;
    const COLOR = App.COLOR;

    function alphaValue(value) {
        const alpha = App.requireNumber(value, "Alpha");
        if (!(alpha > 0 && alpha < 1)) throw new Error("Alpha must be between 0 and 1.");
        return alpha;
    }

    function powerValue(value) {
        const power = App.requireNumber(value, "Power");
        if (!(power > 0 && power < 1)) throw new Error("Power must be between 0 and 1.");
        return power;
    }

    function integerValue(value, label, minimum) {
        const number = App.requireNumber(value, label);
        if (!Number.isInteger(number) || number < minimum) {
            throw new Error(label + " must be a whole number of at least " + minimum + ".");
        }
        return number;
    }

    function probabilityValue(value, label) {
        const probability = App.requireNumber(value, label);
        if (!(probability >= 0 && probability <= 1)) throw new Error(label + " must be between 0 and 1.");
        return probability;
    }

    function selectedColumns(value, label, minimum) {
        const columns = Array.isArray(value) ? value.filter(Boolean) : [];
        if (columns.length < (minimum || 1)) {
            throw new Error("Select at least " + (minimum || 1) + " " + label + ".");
        }
        return columns;
    }

    function completeValues(name) {
        return App.completeNumericRows([name]).map(function (row) { return row[0]; });
    }

    function groupedValues(responseName, groupName) {
        const responseIndex = App.columnIndex(responseName);
        const groupIndex = App.columnIndex(groupName);
        if (responseIndex < 0 || groupIndex < 0) throw new Error("Select a response column and a grouping column.");
        const groups = new Map();
        state.rows.forEach(function (row) {
            const label = String(row[groupIndex] === undefined ? "" : row[groupIndex]).trim();
            const value = parseFloat(row[responseIndex]);
            if (!label || !Number.isFinite(value)) return;
            if (!groups.has(label)) groups.set(label, []);
            groups.get(label).push(value);
        });
        return Array.from(groups.entries()).map(function (entry) {
            return { name: entry[0], values: entry[1] };
        });
    }

    function pairedRows(firstName, secondName) {
        const pairs = App.completePairs(firstName, secondName);
        return { first: pairs.first, second: pairs.second, n: pairs.first.length };
    }

    function uniqueLevels(name) {
        const index = App.columnIndex(name);
        if (index < 0) return [];
        const levels = [];
        state.rows.forEach(function (row) {
            const value = String(row[index] === undefined ? "" : row[index]).trim();
            if (value && levels.indexOf(value) === -1) levels.push(value);
        });
        return levels;
    }

    function splitValues(text, label) {
        const items = String(text || "").split(/[,\n;]+/).map(function (item) { return item.trim(); }).filter(Boolean);
        if (!items.length) throw new Error("Enter at least one " + label + ".");
        return items;
    }

    function round(value, digits) {
        return App.round(value, digits);
    }

    function number(value, digits) {
        return App.formatNumber(value, digits === undefined ? 4 : digits);
    }

    function pValue(value, alpha) {
        return App.pBadge(value, alpha);
    }

    function percent(value, digits) {
        return App.formatPercent(value, digits === undefined ? 2 : digits);
    }

    function axisLabel(text) {
        return { title: { display: true, text: text, font: { size: 10 } } };
    }

    function withAxisLabels(extra, xText, yText) {
        const options = Object.assign({}, extra || {});
        options.scales = Object.assign({}, options.scales || {});
        options.scales.x = Object.assign({}, options.scales.x || {}, axisLabel(xText));
        options.scales.y = Object.assign({}, options.scales.y || {}, axisLabel(yText));
        return options;
    }

    function chartGrid(charts) {
        if (!charts || !charts.length) return "";
        return '<div class="report-grid">' + charts.map(function (chart) { return chart.html; }).join("") + "</div>";
    }

    function chartsOf(charts) {
        return (charts || []).map(function (chart) { return chart.chart; });
    }

    function ciText(ci) {
        if (!ci || !Number.isFinite(ci.low) || !Number.isFinite(ci.high)) return "\u2014";
        return number(ci.low, 4) + " to " + number(ci.high, 4);
    }

    function hypothesis(result, alpha, nullText, alternativeText) {
        return App.noteBlock(
            "<strong>" + App.escapeHtml(nullText) + "</strong><br>" +
            (alternativeText ? App.escapeHtml(alternativeText) + "<br>" : "") +
            "Test statistic = <strong>" + number(result.t !== undefined ? result.t : (result.z !== undefined ? result.z : result.f), 4) +
            "</strong>, p-value = " + pValue(result.p, alpha) + "<br>" +
            App.escapeHtml(App.decision(result.p, alpha)),
            Number.isFinite(result.p) && result.p < alpha
        );
    }

    function table(headers, rows, numeric, caption) {
        return App.dataTable(headers, rows, { numeric: numeric || [], caption: caption });
    }

    function metricItems(items) {
        return App.metricGrid(items);
    }

    function histogramChart(values, title, binCount, options) {
        const opts = options || {};
        const histogram = E.histogram(values, binCount);
        const labels = histogram.bins.map(function (bin) {
            return number(bin.low, 3) + " to " + number(bin.high, 3);
        });
        const counts = histogram.bins.map(function (bin) { return bin.count; });
        const chart = App.barChart(title, "n = " + values.length + ", " + histogram.count + " bins", labels, [{
            label: opts.label || "Frequency",
            data: counts,
            backgroundColor: opts.color || COLOR.blueSoft,
            borderColor: opts.border || COLOR.blue,
            borderWidth: 1
        }], withAxisLabels({ scales: { y: { beginAtZero: true } } }, opts.xTitle || "", "Frequency"));
        return { html: chart.html, chart: chart.chart, histogram: histogram };
    }

    function boxplotPanel(values, title) {
        return '<div class="chart-card"><div class="chart-card-title"><span>' + App.escapeHtml(title) +
            '</span><span class="chart-subtitle">Five-number summary</span></div>' +
            App.boxplotSvg(E.boxStats(values)) + "</div>";
    }

    function errorNote(text) {
        return App.noteBlock(App.escapeHtml(text), true);
    }

    function significanceText(p, alpha) {
        if (!Number.isFinite(p)) return "No p-value is available.";
        return p < alpha ? "Statistically significant at alpha = " + number(alpha, 3) + "." : "Not statistically significant at alpha = " + number(alpha, 3) + ".";
    }

    function runDescriptive(values) {
        const data = completeValues(values.column);
        if (data.length < 2) throw new Error("At least two numeric observations are required.");
        const alpha = alphaValue(values.alpha);
        const summary = E.summarize(data, alpha);
        const hist = histogramChart(data, "Distribution of " + values.column, Math.max(5, Math.min(20, Math.ceil(Math.sqrt(data.length)))), {
            xTitle: values.column
        });
        const metrics = metricItems([
            { label: "Count", value: number(summary.count, 0) },
            { label: "Mean", value: number(summary.mean, 4) },
            { label: "Median", value: number(summary.median, 4) },
            { label: "Std. deviation", value: number(summary.sd, 4) },
            { label: "Minimum", value: number(summary.min, 4) },
            { label: "Maximum", value: number(summary.max, 4) }
        ]);
        const rows = [
            ["Count", number(summary.count, 0)],
            ["Mean", number(summary.mean, 4)],
            ["Median", number(summary.median, 4)],
            ["Mode", summary.mode.length ? summary.mode.map(function (value) { return number(value, 4); }).join(", ") : "No repeated value"],
            ["Standard deviation", number(summary.sd, 4)],
            ["Variance", number(summary.variance, 4)],
            ["Standard error of mean", number(summary.seMean, 4)],
            ["Coefficient of variation", percent(summary.cv, 2)],
            ["Minimum", number(summary.min, 4)],
            ["Q1", number(summary.q1, 4)],
            ["Q3", number(summary.q3, 4)],
            ["Maximum", number(summary.max, 4)],
            ["Range", number(summary.range, 4)],
            ["Interquartile range", number(summary.iqr, 4)],
            ["Skewness", number(summary.skewness, 3)],
            ["Kurtosis", number(summary.kurtosis, 3)],
            ["Sum", number(summary.sum, 4)],
            ["Confidence interval", summary.ci ? ciText(summary.ci) : "\u2014"]
        ];
        const box = boxplotPanel(data, "Boxplot of " + values.column);
        const notes = App.noteBlock("The confidence interval uses the t distribution with " +
            number(summary.count - 1, 0) + " degrees of freedom at alpha = " + number(alpha, 3) + ".", false);
        return {
            html: metrics +
                App.reportBlock("Summary statistics", table(["Statistic", "Estimate"], rows, [1]), { badge: number(summary.count, 0) + " observations" }) +
                '<div class="report-grid">' + hist.html + box + "</div>" +
                notes,
            charts: [hist.chart]
        };
    }

    function runHistogram(values) {
        const data = completeValues(values.column);
        if (!data.length) throw new Error("The selected column has no numeric values.");
        const bins = integerValue(values.bins, "Number of bins", 3);
        if (bins > 40) throw new Error("Use 40 or fewer bins.");
        const hist = histogramChart(data, "Histogram of " + values.column, bins, { xTitle: values.column });
        const rows = hist.histogram.bins.map(function (bin) {
            return [number(bin.low, 4) + " to " + number(bin.high, 4), number(bin.count, 0), percent(bin.count / data.length * 100, 1)];
        });
        return {
            html: metricItems([
                { label: "Observations", value: number(hist.histogram.n, 0) },
                { label: "Bins", value: number(hist.histogram.count, 0) },
                { label: "Bin width", value: number(hist.histogram.width, 4) },
                { label: "Minimum", value: number(hist.histogram.min, 4) },
                { label: "Maximum", value: number(hist.histogram.max, 4) }
            ]) + App.reportBlock("Bin frequencies", table(["Bin", "Count", "Percent"], rows, [1, 2]), { flush: true }) +
                hist.html,
            charts: [hist.chart]
        };
    }

    function runBoxplot(values) {
        const data = completeValues(values.column);
        if (!data.length) throw new Error("The selected column has no numeric values.");
        const box = E.boxStats(data);
        return {
            html: metricItems([
                { label: "Observations", value: number(data.length, 0) },
                { label: "Median", value: number(box.median, 4) },
                { label: "IQR", value: number(box.iqr, 4) },
                { label: "Lower whisker", value: number(box.lowWhisker, 4) },
                { label: "Upper whisker", value: number(box.highWhisker, 4) },
                { label: "Outliers", value: number(box.outliers.length, 0), tone: box.outliers.length ? "warning" : "" }
            ]) +
                App.reportBlock("Five-number summary", table(["Statistic", "Value"], [
                    ["Minimum", number(box.min, 4)],
                    ["Q1", number(box.q1, 4)],
                    ["Median", number(box.median, 4)],
                    ["Q3", number(box.q3, 4)],
                    ["Maximum", number(box.max, 4)],
                    ["Lower fence", number(box.q1 - 1.5 * box.iqr, 4)],
                    ["Upper fence", number(box.q3 + 1.5 * box.iqr, 4)]
                ], [1])) +
                boxplotPanel(data, "Boxplot of " + values.column) +
                (box.outliers.length
                    ? App.noteBlock("Outlier values: " + box.outliers.map(function (value) { return number(value, 4); }).join(", "), true)
                    : App.noteBlock("No values fall outside the 1.5 \u00d7 IQR fences.", false)),
            charts: []
        };
    }

    function runPareto(values) {
        const categories = App.rawColumn(values.category).filter(function (value) { return String(value).trim() !== ""; });
        if (!categories.length) throw new Error("The selected column has no categories.");
        const items = E.pareto(categories);
        const labels = items.map(function (item) { return item.label; });
        const counts = items.map(function (item) { return item.count; });
        const cumulative = items.map(function (item) { return round(item.cumulative, 2); });
        const spec = App.chartSpec("bar", "Pareto chart", categories.length + " observations", 300, {
            labels: labels,
            datasets: [
                {
                    label: "Count",
                    data: counts,
                    backgroundColor: COLOR.blueSoft,
                    borderColor: COLOR.blue,
                    borderWidth: 1,
                    yAxisID: "y"
                },
                {
                    type: "line",
                    label: "Cumulative percent",
                    data: cumulative,
                    borderColor: COLOR.red,
                    backgroundColor: COLOR.red,
                    pointRadius: 2,
                    borderWidth: 1.5,
                    tension: 0.15,
                    yAxisID: "y1"
                }
            ]
        }, App.chartOptions({
            scales: {
                y: { beginAtZero: true, title: { display: true, text: "Count" } },
                y1: {
                    position: "right",
                    min: 0,
                    max: 100,
                    grid: { drawOnChartArea: false },
                    ticks: { callback: function (value) { return value + "%"; } },
                    title: { display: true, text: "Cumulative percent" }
                }
            }
        }));
        const top = items.slice(0, 25);
        const rows = top.map(function (item, index) {
            return [(index + 1) + ". " + item.label, number(item.count, 0), percent(item.percent, 2), percent(item.cumulative, 2)];
        });
        const eighty = items.find(function (item) { return item.cumulative >= 80; });
        return {
            html: metricItems([
                { label: "Categories", value: number(items.length, 0) },
                { label: "Observations", value: number(categories.length, 0) },
                { label: "Top category", value: items[0].label, hint: number(items[0].count, 0) + " occurrences" },
                { label: "Categories to 80%", value: eighty ? number(items.indexOf(eighty) + 1, 0) : "\u2014" }
            ]) + spec.html +
                App.reportBlock("Category frequency", table(["Category", "Count", "Percent", "Cumulative"], rows, [1, 2, 3]),
                    { badge: items.length > top.length ? "Showing top 25" : "" }),
            charts: [spec.chart]
        };
    }

    function runRunChart(values) {
        const data = completeValues(values.column);
        if (data.length < 2) throw new Error("At least two observations are required.");
        const center = E.mean(data);
        const sigma = E.sd(data);
        const outside = data.filter(function (value) { return value > center + 3 * sigma || value < center - 3 * sigma; }).length;
        const labels = data.map(function (_, index) { return String(index + 1); });
        const spec = App.lineChart("Run chart of " + values.column, data.length + " observations", labels, [
            {
                label: values.column,
                data: data,
                borderColor: COLOR.blue,
                backgroundColor: COLOR.blue,
                pointRadius: 2.2,
                borderWidth: 1.5,
                tension: 0.08
            },
            {
                label: "Mean",
                data: App.fillArray(data.length, center),
                borderColor: COLOR.green,
                borderDash: [5, 4],
                pointRadius: 0,
                borderWidth: 1.2
            }
        ], withAxisLabels({}, "Observation", values.column));
        return {
            html: metricItems([
                { label: "Observations", value: number(data.length, 0) },
                { label: "Mean", value: number(center, 4) },
                { label: "Std. deviation", value: number(sigma, 4) },
                { label: "Beyond 3 sigma", value: number(outside, 0), tone: outside ? "warning" : "success" }
            ]) + spec.html +
                App.noteBlock("A run chart shows the sequence of observations around the mean. Use an I-MR chart when formal control limits are needed.", false),
            charts: [spec.chart]
        };
    }

    function runProbabilityPlot(values) {
        const data = completeValues(values.column);
        if (data.length < 3) throw new Error("At least three observations are required.");
        const result = E.normalProbabilityPlot(data);
        const points = result.points.map(function (point) { return { x: point.value, y: point.z }; });
        const minimum = Math.min.apply(null, data);
        const maximum = Math.max.apply(null, data);
        const spec = App.scatterChart("Normal probability plot", "Points should follow the fitted line", [
            {
                label: values.column,
                data: points,
                backgroundColor: COLOR.blue,
                borderColor: COLOR.blue,
                pointRadius: 3
            },
            {
                type: "line",
                label: "Normal fit",
                data: [
                    { x: minimum, y: result.intercept + result.slope * minimum },
                    { x: maximum, y: result.intercept + result.slope * maximum }
                ],
                borderColor: COLOR.red,
                backgroundColor: COLOR.red,
                pointRadius: 0,
                borderWidth: 1.4
            }
        ], withAxisLabels({}, values.column, "Standard normal quantile (z)"));
        return {
            html: metricItems([
                { label: "Observations", value: number(data.length, 0) },
                { label: "Correlation with normal", value: number(result.correlation, 4) },
                { label: "Fitted slope", value: number(result.slope, 4) },
                { label: "Fitted intercept", value: number(result.intercept, 4) }
            ]) + spec.html +
                App.noteBlock("A strong linear pattern indicates the data are reasonably consistent with a normal distribution. Formal tests and process knowledge should also be considered.", false),
            charts: [spec.chart]
        };
    }

    function runCorrelation(values) {
        const columns = selectedColumns(values.columns, "numeric columns", 2);
        const data = App.completeNumericRows(columns);
        if (data.length < 3) throw new Error("At least three complete rows are required.");
        const alpha = alphaValue(values.alpha);
        const matrix = columns.map(function (rowName, rowIndex) {
            return [rowName].concat(columns.map(function (columnName, columnIndex) {
                if (rowIndex === columnIndex) return "1.000";
                const first = data.map(function (row) { return row[rowIndex]; });
                const second = data.map(function (row) { return row[columnIndex]; });
                const correlation = E.correlation(first, second);
                if (!Number.isFinite(correlation)) return "\u2014";
                const t = correlation * Math.sqrt((data.length - 2) / Math.max(1e-12, 1 - correlation * correlation));
                const p = 2 * (1 - E.tCdf(Math.abs(t), data.length - 2));
                return {
                    html: number(correlation, 3) + (p < alpha ? ' <span class="sig-yes">*</span>' : "")
                };
            }));
        });
        const first = data.map(function (row) { return row[0]; });
        const second = data.map(function (row) { return row[1]; });
        const spec = App.scatterChart(columns[0] + " vs " + columns[1], "Pearson correlation", [
            {
                label: columns[0] + " vs " + columns[1],
                data: first.map(function (value, index) { return { x: value, y: second[index] }; }),
                backgroundColor: COLOR.blue,
                borderColor: COLOR.blue,
                pointRadius: 3
            }
        ], withAxisLabels({}, columns[0], columns[1]));
        return {
            html: metricItems([
                { label: "Complete rows", value: number(data.length, 0) },
                { label: "Columns", value: number(columns.length, 0) },
                { label: "Alpha", value: number(alpha, 3) },
                { label: "First pair r", value: number(E.correlation(first, second), 4) }
            ]) +
                App.reportBlock("Correlation matrix", table(["Variable"].concat(columns), matrix, columns.map(function (_, index) { return index + 1; }),
                    "Pearson r; * indicates p < alpha")) +
                spec.html +
                App.noteBlock("Correlation measures linear association only. It does not establish causation, and a strong correlation can still be caused by a lurking variable.", false),
            charts: [spec.chart]
        };
    }

    function runOneSampleT(values) {
        const data = completeValues(values.column);
        if (data.length < 2) throw new Error("At least two numeric observations are required.");
        const target = App.requireNumber(values.target, "Target mean");
        const alpha = alphaValue(values.alpha);
        const result = E.oneSampleT(data, target, alpha, values.alternative);
        const alternativeText = values.alternative === "greater"
            ? "HA: mean > " + number(target, 4)
            : values.alternative === "less"
                ? "HA: mean < " + number(target, 4)
                : "HA: mean \u2260 " + number(target, 4);
        return {
            html: metricItems([
                { label: "Sample mean", value: number(result.mean, 4) },
                { label: "Target", value: number(result.target, 4) },
                { label: "Difference", value: number(result.difference, 4), tone: result.difference === 0 ? "" : "warning" },
                { label: "t statistic", value: number(result.t, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "df", value: number(result.df, 0) },
                { label: "95% CI", value: ciText(result.ci) },
                { label: "Std. deviation", value: number(result.sd, 4) }
            ]) +
                App.reportBlock("Test details", table(["Term", "Value"], [
                    ["Method", result.test],
                    ["Alternative", values.alternative || "two-sided"],
                    ["Alpha", number(alpha, 4)],
                    ["Standard error", number(result.se, 4)],
                    ["Confidence interval", ciText(result.ci)]
                ], [1])) +
                hypothesis(result, alpha, "H0: mean = " + number(target, 4), alternativeText) +
                boxplotPanel(data, "Observed values"),
            charts: []
        };
    }

    function runTwoSampleT(values) {
        let first;
        let second;
        let firstName;
        let secondName;
        if (values.groupColumn && values.response) {
            const groups = groupedValues(values.response, values.groupColumn);
            if (groups.length !== 2) throw new Error("The grouping column must contain exactly two groups.");
            groups.sort(function (a, b) { return b.values.length - a.values.length; });
            first = groups[0].values;
            second = groups[1].values;
            firstName = groups[0].name;
            secondName = groups[1].name;
        } else {
            if (!values.column1 || !values.column2) throw new Error("Select two numeric columns or a response and grouping column.");
            const pairs = pairedRows(values.column1, values.column2);
            first = pairs.first;
            second = pairs.second;
            firstName = values.column1;
            secondName = values.column2;
        }
        if (first.length < 2 || second.length < 2) throw new Error("Each sample needs at least two observations.");
        const alpha = alphaValue(values.alpha);
        const result = E.twoSampleT(first, second, alpha, values.equalVariance);
        return {
            html: metricItems([
                { label: firstName + " mean", value: number(result.mean1, 4), hint: "n = " + number(result.n1, 0) },
                { label: secondName + " mean", value: number(result.mean2, 4), hint: "n = " + number(result.n2, 0) },
                { label: "Difference", value: number(result.difference, 4) },
                { label: "t statistic", value: number(result.t, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "df", value: number(result.df, 2) },
                { label: "Confidence interval", value: ciText(result.ci) },
                { label: "Method", value: result.test }
            ]) +
                App.reportBlock("Sample summary", table(["Group", "n", "Mean", "SD"], [
                    [firstName, number(result.n1, 0), number(result.mean1, 4), number(result.sd1, 4)],
                    [secondName, number(result.n2, 0), number(result.mean2, 4), number(result.sd2, 4)]
                ], [1, 2, 3])) +
                hypothesis(result, alpha, "H0: mean(" + firstName + ") = mean(" + secondName + ")",
                    "HA: the two means differ") +
                '<div class="report-grid">' + boxplotPanel(first, firstName) + boxplotPanel(second, secondName) + "</div>",
            charts: []
        };
    }

    function runPairedT(values) {
        if (!values.first || !values.second) throw new Error("Select both paired columns.");
        const pairs = pairedRows(values.first, values.second);
        if (pairs.n < 2) throw new Error("At least two complete pairs are required.");
        const alpha = alphaValue(values.alpha);
        const result = E.pairedT(pairs.first, pairs.second, alpha);
        const minimum = Math.min.apply(null, pairs.first.concat(pairs.second));
        const maximum = Math.max.apply(null, pairs.first.concat(pairs.second));
        const spec = App.scatterChart("Paired observations", values.first + " vs " + values.second, [
            {
                label: "Pairs",
                data: pairs.first.map(function (value, index) { return { x: value, y: pairs.second[index] }; }),
                backgroundColor: COLOR.blue,
                borderColor: COLOR.blue,
                pointRadius: 3
            },
            {
                type: "line",
                label: "Equal values",
                data: [{ x: minimum, y: minimum }, { x: maximum, y: maximum }],
                borderColor: COLOR.red,
                borderDash: [5, 4],
                pointRadius: 0,
                borderWidth: 1.2
            }
        ], withAxisLabels({}, values.first, values.second));
        return {
            html: metricItems([
                { label: "Complete pairs", value: number(result.n, 0) },
                { label: "Mean difference", value: number(result.meanDifference, 4) },
                { label: "SD of differences", value: number(result.sdDifference, 4) },
                { label: "t statistic", value: number(result.t, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "df", value: number(result.df, 0) },
                { label: "Confidence interval", value: ciText(result.ci) },
                { label: "Standard error", value: number(result.se, 4) }
            ]) +
                hypothesis(result, alpha, "H0: mean difference = 0", "HA: mean difference \u2260 0") +
                spec.html +
                App.noteBlock("The paired t-test analyzes the differences within each row. Confirm that row pairing is meaningful before interpreting the result.", false),
            charts: [spec.chart]
        };
    }

    function runOneProportion(values) {
        const successes = integerValue(values.successes, "Successes", 0);
        const trials = integerValue(values.trials, "Trials", 1);
        if (successes > trials) throw new Error("Successes cannot exceed trials.");
        const target = probabilityValue(values.target, "Target proportion");
        const alpha = alphaValue(values.alpha);
        const result = E.oneProportion(successes, trials, target, alpha);
        const spec = App.barChart("Observed vs target", "One-proportion z test", ["Observed", "Target"], [{
            label: "Proportion",
            data: [result.proportion, target],
            backgroundColor: [COLOR.blueSoft, COLOR.amberSoft],
            borderColor: [COLOR.blue, COLOR.amber],
            borderWidth: 1
        }], withAxisLabels({ scales: { y: { beginAtZero: true, max: 1 } } }, "", "Proportion"));
        return {
            html: metricItems([
                { label: "Successes", value: number(result.successes, 0) },
                { label: "Trials", value: number(result.trials, 0) },
                { label: "Observed proportion", value: number(result.proportion, 4) },
                { label: "Target proportion", value: number(result.target, 4) },
                { label: "z statistic", value: number(result.z, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "Wilson interval", value: ciText(result.ci) },
                { label: "Alpha", value: number(alpha, 3) }
            ]) + spec.html +
                hypothesis(result, alpha, "H0: p = " + number(target, 4), "HA: p \u2260 " + number(target, 4)),
            charts: [spec.chart]
        };
    }

    function runTwoProportion(values) {
        const x1 = integerValue(values.x1, "Successes in sample 1", 0);
        const n1 = integerValue(values.n1, "Sample size 1", 1);
        const x2 = integerValue(values.x2, "Successes in sample 2", 0);
        const n2 = integerValue(values.n2, "Sample size 2", 1);
        if (x1 > n1 || x2 > n2) throw new Error("Successes cannot exceed the sample size.");
        const alpha = alphaValue(values.alpha);
        const result = E.twoProportion(x1, n1, x2, n2, alpha);
        const spec = App.barChart("Sample proportions", "Two-proportion z test", ["Sample 1", "Sample 2"], [{
            label: "Proportion",
            data: [result.p1, result.p2],
            backgroundColor: [COLOR.blueSoft, COLOR.teal],
            borderColor: [COLOR.blue, COLOR.teal],
            borderWidth: 1
        }], withAxisLabels({ scales: { y: { beginAtZero: true, max: 1 } } }, "", "Proportion"));
        return {
            html: metricItems([
                { label: "Sample 1", value: number(result.p1, 4), hint: x1 + " / " + n1 },
                { label: "Sample 2", value: number(result.p2, 4), hint: x2 + " / " + n2 },
                { label: "Difference", value: number(result.difference, 4) },
                { label: "Pooled proportion", value: number(result.pooled, 4) },
                { label: "z statistic", value: number(result.z, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "Confidence interval", value: ciText(result.ci) },
                { label: "Alpha", value: number(alpha, 3) }
            ]) + spec.html +
                hypothesis(result, alpha, "H0: p1 = p2", "HA: p1 \u2260 p2"),
            charts: [spec.chart]
        };
    }

    function runChiSquare(values) {
        const rowColumn = values.rowColumn;
        const columnColumn = values.columnColumn;
        if (!rowColumn || !columnColumn) throw new Error("Select both categorical columns.");
        if (rowColumn === columnColumn) throw new Error("Select two different categorical columns.");
        const rowValues = App.rawColumn(rowColumn);
        const columnValues = App.rawColumn(columnColumn);
        const result = E.chiSquareColumns(rowValues, columnValues);
        if (result.table.length < 2 || result.columnLabels.length < 2) {
            throw new Error("Each variable needs at least two non-empty categories.");
        }
        const alpha = alphaValue(values.alpha);
        const observedRows = result.rowLabels.map(function (label, rowIndex) {
            return [label].concat(result.table[rowIndex]).concat([result.rowTotals[rowIndex]]);
        });
        const expectedRows = result.rowLabels.map(function (label, rowIndex) {
            return [label].concat(result.expected[rowIndex].map(function (value) { return number(value, 2); }));
        });
        const headers = ["Category"].concat(result.columnLabels).concat(["Total"]);
        const numeric = result.columnLabels.map(function (_, index) { return index + 1; });
        const lowExpected = result.minExpected < 5;
        return {
            html: metricItems([
                { label: "Chi-square", value: number(result.chiSquare, 4) },
                { label: "df", value: number(result.df, 0) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "Cramer's V", value: number(result.cramersV, 4) },
                { label: "Total count", value: number(result.total, 0) },
                { label: "Minimum expected", value: number(result.minExpected, 2), tone: lowExpected ? "warning" : "" }
            ]) +
                App.reportBlock("Observed counts", table(headers, observedRows, numeric.concat([numeric.length + 1]))) +
                App.reportBlock("Expected counts", table(headers.slice(0, -1), expectedRows, numeric)) +
                App.noteBlock("<strong>H0:</strong> the two variables are independent.<br>p-value = " + pValue(result.p, alpha) +
                    "<br>" + App.escapeHtml(App.decision(result.p, alpha)) +
                    (lowExpected ? "<br>Some expected counts are below 5. Interpret the chi-square approximation with caution." : ""), lowExpected) +
                App.noteBlock("Cramer's V ranges from 0 to 1 and describes the strength of association. Values near 0 indicate little association.", false),
            charts: []
        };
    }

    function runAnova(values) {
        if (!values.response || !values.groupColumn) throw new Error("Select a numeric response and a grouping column.");
        const groups = groupedValues(values.response, values.groupColumn).filter(function (group) { return group.values.length > 0; });
        if (groups.length < 2) throw new Error("At least two groups with numeric observations are required.");
        const alpha = alphaValue(values.alpha);
        const result = E.oneWayAnova(groups, alpha);
        const groupRows = result.groups.map(function (group) {
            return [group.name, number(group.n, 0), number(group.mean, 4), number(group.sd, 4), number(group.se, 4)];
        });
        const anovaRows = [
            ["Between groups", number(result.dfBetween, 0), number(result.ssBetween, 4), number(result.msBetween, 4), number(result.f, 4), pValue(result.p, alpha)],
            ["Within groups", number(result.dfWithin, 0), number(result.ssWithin, 4), number(result.msWithin, 4), "", ""],
            ["Total", number(result.dfBetween + result.dfWithin, 0), number(result.ssTotal, 4), "", "", ""]
        ];
        const comparisonRows = result.comparisons.map(function (comparison) {
            return [comparison.first + " vs " + comparison.second, number(comparison.difference, 4),
                number(comparison.ciLow, 4) + " to " + number(comparison.ciHigh, 4), pValue(comparison.p, alpha)];
        });
        const spec = App.barChart("Group means", values.response + " by " + values.groupColumn,
            result.groups.map(function (group) { return group.name; }), [{
                label: "Mean",
                data: result.groups.map(function (group) { return group.mean; }),
                backgroundColor: COLOR.blueSoft,
                borderColor: COLOR.blue,
                borderWidth: 1
            }], withAxisLabels({}, values.groupColumn, values.response));
        return {
            html: metricItems([
                { label: "Groups", value: number(result.groups.length, 0) },
                { label: "Observations", value: number(result.groups.reduce(function (total, group) { return total + group.n; }, 0), 0) },
                { label: "F statistic", value: number(result.f, 4) },
                { label: "p-value", value: pValue(result.p, alpha) },
                { label: "Eta squared", value: number(result.etaSquared, 4) },
                { label: "Within SD", value: number(Math.sqrt(result.msWithin), 4) }
            ]) + spec.html +
                App.reportBlock("Group summary", table(["Group", "n", "Mean", "SD", "SE"], groupRows, [1, 2, 3, 4])) +
                App.reportBlock("ANOVA table", table(["Source", "df", "SS", "MS", "F", "p"], anovaRows, [1, 2, 3, 4, 5])) +
                App.reportBlock("Pairwise comparisons", table(["Comparison", "Difference", "Family CI", "Adjusted p"], comparisonRows, [1, 3]),
                    { badge: "Bonferroni adjustment" }) +
                hypothesis(result, alpha, "H0: all group means are equal", "HA: at least one group mean differs"),
            charts: [spec.chart]
        };
    }

    function regressionEquation(terms) {
        return terms.map(function (term, index) {
            const sign = term.coefficient < 0 ? " - " : (index === 0 ? "" : " + ");
            const coefficient = number(Math.abs(term.coefficient), 4);
            if (index === 0) return (term.coefficient < 0 ? "-" : "") + coefficient;
            return sign + coefficient + " " + term.term;
        }).join("");
    }

    function runRegression(values) {
        const predictors = selectedColumns(values.predictors, "predictors", 1);
        if (!values.response) throw new Error("Select a numeric response column.");
        if (predictors.indexOf(values.response) !== -1) {
            throw new Error("The response cannot also be a predictor.");
        }
        const rows = App.completeNumericRows([values.response].concat(predictors));
        if (rows.length < 4) throw new Error("At least four complete rows are required.");
        const response = rows.map(function (row) { return row[0]; });
        const xColumns = predictors.map(function (_, index) {
            return rows.map(function (row) { return row[index + 1]; });
        });
        const alpha = alphaValue(values.alpha);
        const result = E.regression(response, xColumns, predictors, { interactions: !!values.interactions });
        const coefficientRows = result.terms.map(function (term, index) {
            const vif = index > 0 && index <= result.vif.length ? number(result.vif[index - 1], 3) : "";
            return [term.term, number(term.coefficient, 5), number(term.se, 5), number(term.t, 3), pValue(term.p, alpha), vif];
        });
        const labels = response.map(function (_, index) { return String(index + 1); });
        const actualFitted = App.lineChart("Observed and fitted", values.response, labels, [
            {
                label: "Observed",
                data: response,
                borderColor: COLOR.slate,
                backgroundColor: COLOR.slate,
                pointRadius: 2,
                borderWidth: 1.2
            },
            {
                label: "Fitted",
                data: result.fitted,
                borderColor: COLOR.blue,
                backgroundColor: COLOR.blue,
                pointRadius: 2,
                borderWidth: 1.5
            }
        ], withAxisLabels({}, "Observation", values.response));
        const minFitted = Math.min.apply(null, result.fitted);
        const maxFitted = Math.max.apply(null, result.fitted);
        const residualChart = App.scatterChart("Residuals vs fitted", "Look for random scatter around zero", [
            {
                label: "Residual",
                data: result.fitted.map(function (value, index) { return { x: value, y: result.residuals[index] }; }),
                backgroundColor: COLOR.blue,
                borderColor: COLOR.blue,
                pointRadius: 3
            },
            {
                type: "line",
                label: "Zero",
                data: [{ x: minFitted, y: 0 }, { x: maxFitted, y: 0 }],
                borderColor: COLOR.red,
                borderDash: [5, 4],
                pointRadius: 0,
                borderWidth: 1.1
            }
        ], withAxisLabels({}, "Fitted value", "Residual"));
        const highVif = result.vif.filter(function (value) { return value > 5; });
        return {
            html: metricItems([
                { label: "Observations", value: number(result.n, 0) },
                { label: "R-squared", value: number(result.r2, 4) },
                { label: "Adjusted R-squared", value: number(result.adjustedR2, 4) },
                { label: "Model F", value: number(result.f, 4) },
                { label: "Model p-value", value: pValue(result.p, alpha) },
                { label: "Residual SD", value: number(Math.sqrt(result.mse), 4) },
                { label: "Durbin-Watson", value: number(result.durbinWatson, 3) },
                { label: "Predictors", value: number(predictors.length, 0) }
            ]) +
                App.noteBlock("<strong>Fitted equation:</strong> " + App.escapeHtml(values.response + " = " + regressionEquation(result.terms)), false) +
                App.reportBlock("Coefficients", table(["Term", "Coefficient", "Std. error", "t", "p", "VIF"], coefficientRows, [1, 2, 3, 5]),
                    { badge: values.interactions ? "Includes 2-way interactions" : "" }) +
                App.reportBlock("Model summary", table(["Source", "df", "SS", "MS", "F", "p"], [
                    ["Regression", number(result.dfModel, 0), number(result.ssr, 4), number(result.ssr / result.dfModel, 4), number(result.f, 4), pValue(result.p, alpha)],
                    ["Residual", number(result.dfResidual, 0), number(result.sse, 4), number(result.mse, 4), "", ""],
                    ["Total", number(result.dfModel + result.dfResidual, 0), number(result.sst, 4), "", "", ""]
                ], [1, 2, 3, 4, 5])) +
                '<div class="report-grid">' + actualFitted.html + residualChart.html + "</div>" +
                (highVif.length
                    ? App.noteBlock("At least one VIF exceeds 5. Check for multicollinearity before interpreting individual coefficients.", true)
                    : App.noteBlock("No VIF exceeds 5. Multicollinearity is not a major concern in this model.", false)),
            charts: [actualFitted.chart, residualChart.chart]
        };
    }

    function runLogistic(values) {
        const predictors = selectedColumns(values.predictors, "predictors", 1);
        if (!values.response) throw new Error("Select a response column coded 0 or 1.");
        if (predictors.indexOf(values.response) !== -1) throw new Error("The response cannot also be a predictor.");
        const rows = App.completeNumericRows([values.response].concat(predictors));
        if (rows.length < 5) throw new Error("At least five complete rows are required.");
        const response = rows.map(function (row) { return row[0]; });
        const successes = response.filter(function (value) { return value === 1; }).length;
        if (successes === 0 || successes === response.length) {
            throw new Error("Logistic regression requires at least one success and one failure.");
        }
        const xColumns = predictors.map(function (_, index) {
            return rows.map(function (row) { return row[index + 1]; });
        });
        const alpha = alphaValue(values.alpha);
        const result = E.logisticRegression(response, xColumns, predictors, alpha);
        const termRows = result.terms.map(function (term) {
            return [term.term, number(term.coefficient, 5), number(term.se, 5), number(term.z, 3), pValue(term.p, alpha),
                number(term.oddsRatio, 4), number(term.orLow, 4) + " to " + number(term.orHigh, 4)];
        });
        let correct = 0;
        let truePositive = 0;
        let falsePositive = 0;
        let trueNegative = 0;
        let falseNegative = 0;
        result.probabilities.forEach(function (probability, index) {
            const predicted = probability >= 0.5 ? 1 : 0;
            if (predicted === response[index]) correct += 1;
            if (predicted === 1 && response[index] === 1) truePositive += 1;
            if (predicted === 1 && response[index] === 0) falsePositive += 1;
            if (predicted === 0 && response[index] === 0) trueNegative += 1;
            if (predicted === 0 && response[index] === 1) falseNegative += 1;
        });
        const roc = [];
        for (let step = 0; step <= 100; step += 1) {
            const threshold = step / 100;
            let tp = 0;
            let fp = 0;
            let positives = 0;
            let negatives = 0;
            result.probabilities.forEach(function (probability, index) {
                if (response[index] === 1) positives += 1;
                else negatives += 1;
                if (probability >= threshold) {
                    if (response[index] === 1) tp += 1;
                    else fp += 1;
                }
            });
            roc.push({ fpr: negatives ? fp / negatives : 0, tpr: positives ? tp / positives : 0 });
        }
        roc.sort(function (a, b) { return a.fpr - b.fpr; });
        const rocSpec = App.lineChart("ROC curve", "AUC = " + number(result.auc, 4), roc.map(function (point) { return number(point.fpr, 2); }), [
            {
                label: "Model",
                data: roc.map(function (point) { return point.tpr; }),
                borderColor: COLOR.blue,
                backgroundColor: COLOR.blueSoft,
                pointRadius: 0,
                borderWidth: 2,
                fill: true
            },
            {
                label: "Chance",
                data: roc.map(function (point) { return point.fpr; }),
                borderColor: COLOR.slate,
                borderDash: [5, 4],
                pointRadius: 0,
                borderWidth: 1.1
            }
        ], withAxisLabels({ scales: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } } }, "False positive rate", "True positive rate"));
        return {
            html: metricItems([
                { label: "Observations", value: number(result.n, 0) },
                { label: "Pseudo R-squared", value: number(result.pseudoR2, 4) },
                { label: "AUC", value: number(result.auc, 4) },
                { label: "Accuracy", value: percent(correct / result.n * 100, 2) },
                { label: "Sensitivity", value: percent(truePositive / Math.max(1, truePositive + falseNegative) * 100, 2) },
                { label: "Specificity", value: percent(trueNegative / Math.max(1, trueNegative + falsePositive) * 100, 2) },
                { label: "Log likelihood", value: number(result.logLikelihood, 3) },
                { label: "Base rate", value: percent(E.mean(response) * 100, 2) }
            ]) +
                App.reportBlock("Coefficients and odds ratios", table(["Term", "Coefficient", "SE", "z", "p", "Odds ratio", "OR CI"], termRows, [1, 2, 3, 5, 6]),
                    { badge: "Logit link" }) +
                App.reportBlock("Classification at 0.50", table(["", "Predicted 0", "Predicted 1"], [
                    ["Actual 0", number(trueNegative, 0), number(falsePositive, 0)],
                    ["Actual 1", number(falseNegative, 0), number(truePositive, 0)]
                ], [1, 2], "Rows are actual outcomes; columns are predicted outcomes")) +
                rocSpec.html +
                App.noteBlock("An odds ratio above 1 means the predictor is associated with higher odds of the response. The AUC summarizes discrimination across all thresholds.", false),
            charts: [rocSpec.chart]
        };
    }

    function optionalNumber(value, label) {
        if (value === undefined || value === null || String(value).trim() === "") return NaN;
        return App.requireNumber(value, label);
    }

    function runImr(values) {
        const data = completeValues(values.column);
        if (data.length < 2) throw new Error("At least two observations are required.");
        const result = E.individualsChart(data);
        const iChart = App.controlChart("Individuals chart", values.column, result.values, result.center, result.ucl, result.lcl, {
            label: values.column,
            yTitle: values.column
        });
        const mrChart = App.controlChart("Moving range chart", "MR bar = " + number(result.mrCenter, 4), result.movingRanges,
            result.mrCenter, result.mrUcl, result.mrLcl, { label: "Moving range", color: COLOR.teal, yTitle: "Moving range" });
        return {
            html: metricItems([
                { label: "Observations", value: number(data.length, 0) },
                { label: "Center line", value: number(result.center, 4) },
                { label: "Within sigma", value: number(result.sigma, 4) },
                { label: "UCL", value: number(result.ucl, 4) },
                { label: "LCL", value: number(result.lcl, 4) },
                { label: "MR bar", value: number(result.mrCenter, 4) },
                { label: "Signals", value: number(result.signals.length, 0), tone: result.signals.length ? "danger" : "success" }
            ]) + App.signalsBlock(result.signals) +
                '<div class="report-grid">' + iChart.html + mrChart.html + "</div>",
            charts: [iChart.chart, mrChart.chart]
        };
    }

    function runXbarR(values) {
        const data = completeValues(values.column);
        const size = integerValue(values.subgroupSize, "Subgroup size", 2);
        if (size > 10) throw new Error("Subgroup sizes from 2 to 10 are supported.");
        if (data.length < size * 2) throw new Error("At least two complete subgroups are required.");
        const subgroups = [];
        for (let index = 0; index + size <= data.length; index += size) {
            subgroups.push(data.slice(index, index + size));
        }
        const unused = data.length % size;
        const result = E.xbarRChart(subgroups);
        const labels = result.xbars.map(function (_, index) { return String(index + 1); });
        const xChart = App.controlChart("X-bar chart", "Subgroup size = " + size, result.xbars, result.center, result.ucl, result.lcl, {
            label: "Subgroup mean",
            yTitle: values.column + " mean"
        });
        const rChart = App.controlChart("R chart", "R bar = " + number(result.rCenter, 4), result.ranges, result.rCenter, result.rUcl, result.rLcl, {
            label: "Subgroup range",
            color: COLOR.teal,
            yTitle: "Range"
        });
        return {
            html: metricItems([
                { label: "Subgroups", value: number(subgroups.length, 0) },
                { label: "Subgroup size", value: number(size, 0) },
                { label: "Grand mean", value: number(result.center, 4) },
                { label: "Average range", value: number(result.rCenter, 4) },
                { label: "Within sigma", value: number(result.sigma, 4) },
                { label: "Signals", value: number(result.signals.length, 0), tone: result.signals.length ? "danger" : "success" }
            ]) + App.signalsBlock(result.signals) +
                '<div class="report-grid">' + xChart.html + rChart.html + "</div>" +
                (unused ? App.noteBlock("The last " + unused + " observations were not used because they do not form a complete subgroup.", true) : ""),
            charts: [xChart.chart, rChart.chart]
        };
    }

    function runPChart(values) {
        if (!values.defectives || !values.sizes) throw new Error("Select the defective-count and sample-size columns.");
        const rows = App.completeNumericRows([values.defectives, values.sizes]);
        if (rows.length < 2) throw new Error("At least two complete rows are required.");
        const defects = rows.map(function (row) { return row[0]; });
        const sizes = rows.map(function (row) { return row[1]; });
        if (sizes.some(function (value) { return value <= 0; })) throw new Error("Every sample size must be positive.");
        if (defects.some(function (value, index) { return value < 0 || value > sizes[index]; })) {
            throw new Error("Each defective count must be between zero and its sample size.");
        }
        const result = E.pChart(defects, sizes);
        const chart = App.controlChart("P chart", "Average proportion = " + percent(result.center * 100, 2),
            result.proportions.map(function (value) { return value * 100; }),
            result.center * 100,
            result.points.map(function (point) { return point.ucl * 100; }),
            result.points.map(function (point) { return point.lcl * 100; }),
            { label: "Defective %", yTitle: "Percent defective" });
        const tableRows = defects.map(function (count, index) {
            return [String(index + 1), number(count, 0), number(sizes[index], 0), percent(result.proportions[index] * 100, 2),
                percent(result.points[index].ucl * 100, 2), percent(result.points[index].lcl * 100, 2)];
        });
        return {
            html: metricItems([
                { label: "Lots", value: number(defects.length, 0) },
                { label: "Total inspected", value: number(E.sum(sizes), 0) },
                { label: "Total defective", value: number(E.sum(defects), 0) },
                { label: "Center proportion", value: percent(result.center * 100, 2) },
                { label: "Signals", value: number(result.signals.length, 0), tone: result.signals.length ? "danger" : "success" }
            ]) + chart.html + App.signalsBlock(result.signals) +
                App.reportBlock("Lot details", table(["Lot", "Defective", "Inspected", "Proportion", "UCL", "LCL"], tableRows, [1, 2, 3, 4, 5]),
                    { flush: true }),
            charts: [chart.chart]
        };
    }

    function runCapability(values) {
        const data = completeValues(values.column);
        if (data.length < 2) throw new Error("At least two observations are required.");
        const lsl = optionalNumber(values.lsl, "LSL");
        const usl = optionalNumber(values.usl, "USL");
        if (!Number.isFinite(lsl) && !Number.isFinite(usl)) throw new Error("Enter a lower specification limit, an upper specification limit, or both.");
        if (Number.isFinite(lsl) && Number.isFinite(usl) && lsl >= usl) throw new Error("The LSL must be less than the USL.");
        const result = E.capability(data, lsl, usl);
        const hist = histogramChart(data, "Process distribution", Math.max(6, Math.min(20, Math.ceil(Math.sqrt(data.length)))), {
            xTitle: values.column
        });
        const grrTone = result.cpk >= 1.33 ? "success" : result.cpk >= 1 ? "warning" : "danger";
        return {
            html: metricItems([
                { label: "Mean", value: number(result.mean, 4) },
                { label: "Within sigma", value: number(result.withinSd, 4) },
                { label: "Overall sigma", value: number(result.overallSd, 4) },
                { label: "Cp", value: number(result.cp, 3) },
                { label: "Cpk", value: number(result.cpk, 3), tone: grrTone },
                { label: "Pp", value: number(result.pp, 3) },
                { label: "Ppk", value: number(result.ppk, 3), tone: result.ppk >= 1.33 ? "success" : result.ppk >= 1 ? "warning" : "danger" },
                { label: "Expected PPM", value: number(result.expectedPpm, 1), tone: result.expectedPpm > 1350 ? "warning" : "success" },
                { label: "Observed PPM", value: number(result.observedPpm, 1) },
                { label: "Observed outside", value: number(result.observedOut, 0) }
            ]) +
                App.reportBlock("Specification limits", table(["Limit", "Value"], [
                    ["LSL", Number.isFinite(lsl) ? number(lsl, 4) : "Not specified"],
                    ["USL", Number.isFinite(usl) ? number(usl, 4) : "Not specified"],
                    ["Below LSL (expected PPM)", number(result.belowPpm, 1)],
                    ["Above USL (expected PPM)", number(result.abovePpm, 1)]
                ], [1])) +
                hist.html +
                App.noteBlock("Cp and Cpk use within-subgroup variation; Pp and Ppk use overall variation. Cpk values of 1.33 or higher are commonly required for an established process.", result.cpk < 1),
            charts: [hist.chart]
        };
    }

    function runGage(values) {
        if (!values.part || !values.operator || !values.measurement) {
            throw new Error("Select the part, operator, and measurement columns.");
        }
        const result = E.gageRR(App.rowObjects(), values.part, values.operator, values.measurement);
        const studyGrr = result.percentStudy.grr;
        const tone = studyGrr < 10 ? "success" : studyGrr <= 30 ? "warning" : "danger";
        const anovaRows = result.anova.map(function (row) {
            return [row.source, number(row.df, 0), number(row.ss, 4), number(row.ms, 4),
                Number.isFinite(row.f) ? number(row.f, 3) : "", Number.isFinite(row.p) ? pValue(row.p, 0.05) : ""];
        });
        const componentRows = [
            ["Repeatability", number(result.components.repeatability, 6), percent(result.percentContribution.repeatability, 2), percent(result.percentStudy.repeatability, 2)],
            ["Reproducibility", number(result.components.reproducibility + result.components.interaction, 6), percent(result.percentContribution.reproducibility, 2), percent(result.percentStudy.reproducibility, 2)],
            ["Gage R&R total", number(result.components.grr, 6), percent(result.percentContribution.grr, 2), percent(result.percentStudy.grr, 2)],
            ["Part variation", number(result.components.part, 6), percent(result.percentContribution.part, 2), percent(result.percentStudy.part, 2)],
            ["Total variation", number(result.components.total, 6), "100.00%", "100.00%"]
        ];
        const componentChart = App.barChart("Gage R&R components", "Percent of total variation",
            ["Repeatability", "Reproducibility", "Part variation"],
            [{
                label: "% contribution",
                data: [result.percentContribution.repeatability, result.percentContribution.reproducibility, result.percentContribution.part],
                backgroundColor: [COLOR.blueSoft, COLOR.amberSoft, COLOR.greenSoft],
                borderColor: [COLOR.blue, COLOR.amber, COLOR.green],
                borderWidth: 1
            }], withAxisLabels({ scales: { y: { beginAtZero: true } } }, "", "Percent of total variation"));
        return {
            html: metricItems([
                { label: "Parts", value: number(result.parts.length, 0) },
                { label: "Operators", value: number(result.operators.length, 0) },
                { label: "Trials", value: number(result.trials, 0) },
                { label: "%Study GRR", value: percent(studyGrr, 2), tone: tone },
                { label: "%Contribution GRR", value: percent(result.percentContribution.grr, 2) },
                { label: "ndc", value: Number.isFinite(result.ndc) ? number(result.ndc, 2) : "\u221e" },
                { label: "Repeatability", value: percent(result.percentStudy.repeatability, 2) },
                { label: "Reproducibility", value: percent(result.percentStudy.reproducibility, 2) }
            ]) +
                App.reportBlock("Variance components", table(["Component", "Variance", "% Contribution", "% Study"], componentRows, [1, 2, 3])) +
                App.reportBlock("ANOVA table", table(["Source", "df", "SS", "MS", "F", "p"], anovaRows, [1, 2, 3, 4, 5]), { flush: true }) +
                componentChart.html +
                App.noteBlock("<strong>Interpretation:</strong> %Study GRR below 10% is generally acceptable; 10% to 30% may be acceptable depending on the application; above 30% is usually unacceptable. The number of distinct categories (ndc) should be at least 5.", tone === "danger") ,
            charts: [componentChart.chart]
        };
    }

    function runFactorialDesign(values) {
        const names = splitValues(values.factors, "factor name");
        const lows = splitValues(values.low, "low level");
        const highs = splitValues(values.high, "high level");
        if (lows.length !== names.length || highs.length !== names.length) {
            throw new Error("Provide one low level and one high level for each factor.");
        }
        const reserved = ["StdOrder", "RunOrder", "Replicate", "Response"];
        const seen = Object.create(null);
        names.forEach(function (name) {
            const key = name.toLowerCase();
            if (reserved.some(function (item) { return item.toLowerCase() === key; })) {
                throw new Error('"' + name + '" is reserved. Choose another factor name.');
            }
            if (seen[key]) throw new Error("Factor names must be unique.");
            seen[key] = true;
        });
        const factors = names.map(function (name, index) {
            const low = App.requireNumber(lows[index], "Low level for " + name);
            const high = App.requireNumber(highs[index], "High level for " + name);
            if (low === high) throw new Error("Factor " + name + " must have different low and high levels.");
            return { name: name, low: low, high: high };
        });
        const replicates = integerValue(values.replicates, "Replicates", 1);
        const result = E.fullFactorial(factors, replicates, !!values.randomize);
        const headers = ["StdOrder", "RunOrder", "Replicate"].concat(names).concat(["Response"]);
        const rows = result.rows.map(function (row) {
            return headers.map(function (header) {
                return header === "Response" ? "" : String(row[header]);
            });
        });
        state.lastFactorial = { headers: headers, rows: rows };
        const displayRows = result.rows.slice(0, 100).map(function (row) {
            return headers.map(function (header) { return header === "Response" ? "" : String(row[header]); });
        });
        return {
            html: metricItems([
                { label: "Factors", value: number(factors.length, 0) },
                { label: "Runs per replicate", value: number(Math.pow(2, factors.length), 0) },
                { label: "Replicates", value: number(replicates, 0) },
                { label: "Total runs", value: number(result.runs, 0) },
                { label: "Randomized", value: values.randomize ? "Yes" : "No" }
            ]) +
                App.reportBlock("Design matrix", table(headers, displayRows, Array.from({ length: names.length }, function (_, index) { return index + 3; }),
                    result.runs > 100 ? "Showing the first 100 runs" : ""), { flush: true }) +
                App.reportBlock("Next step", '<button type="button" class="btn btn-sm btn-primary" id="loadFactorialRuns"><i class="fas fa-table-cells-large me-1"></i>Load design into worksheet</button>' +
                    '<span class="field-help ms-2">Enter the response values in the worksheet, then run the factorial analysis.</span>') +
                App.noteBlock("Use numeric coded levels, such as -1 and +1, so the design can be analyzed directly. The response column is intentionally left blank.", false),
            charts: []
        };
    }

    function runFactorialAnalyze(values) {
        if (!values.response) throw new Error("Select the response column.");
        const factors = selectedColumns(values.factors, "factors", 2);
        const alpha = alphaValue(values.alpha);
        const result = E.analyzeFactorial(App.rowObjects(), values.response, factors);
        const effects = result.effects.slice().sort(function (a, b) { return b.effect - a.effect; });
        const chartEffects = result.effects.slice().sort(function (a, b) { return Math.abs(a.effect) - Math.abs(b.effect); });
        const effectChart = App.barChart("Factor effects", "Largest absolute effects at the top",
            chartEffects.map(function (effect) { return effect.term; }),
            [{
                label: "Effect",
                data: chartEffects.map(function (effect) { return effect.effect; }),
                backgroundColor: chartEffects.map(function (effect) { return effect.effect < 0 ? COLOR.redSoft : COLOR.blueSoft; }),
                borderColor: chartEffects.map(function (effect) { return effect.effect < 0 ? COLOR.red : COLOR.blue; }),
                borderWidth: 1
            }], withAxisLabels({
                indexAxis: "y",
                scales: { x: { beginAtZero: true, title: { display: true, text: "Effect on response" } } }
            }, "", ""));
        const effectRows = effects.map(function (effect) {
            return [effect.term, number(effect.effect, 4), pValue(effect.p, alpha), effect.p < alpha ? "Significant" : "Not significant"];
        });
        const coefficientRows = result.terms.map(function (term) {
            return [term.term, number(term.coefficient, 5), number(term.se, 5), number(term.t, 3), pValue(term.p, alpha)];
        });
        const minFitted = Math.min.apply(null, result.fitted);
        const maxFitted = Math.max.apply(null, result.fitted);
        const residualChart = App.scatterChart("Residuals vs fitted", "Check for random scatter", [
            {
                label: "Residual",
                data: result.fitted.map(function (value, index) { return { x: value, y: result.residuals[index] }; }),
                backgroundColor: COLOR.blue,
                borderColor: COLOR.blue,
                pointRadius: 3
            },
            {
                type: "line",
                label: "Zero",
                data: [{ x: minFitted, y: 0 }, { x: maxFitted, y: 0 }],
                borderColor: COLOR.red,
                borderDash: [5, 4],
                pointRadius: 0,
                borderWidth: 1.1
            }
        ], withAxisLabels({}, "Fitted response", "Residual"));
        const significant = effects.filter(function (effect) { return effect.p < alpha; });
        return {
            html: metricItems([
                { label: "Runs analyzed", value: number(result.runs, 0) },
                { label: "R-squared", value: number(result.r2, 4) },
                { label: "Adjusted R-squared", value: number(result.adjustedR2, 4) },
                { label: "Model p-value", value: pValue(result.p, alpha) },
                { label: "Residual SD", value: number(Math.sqrt(result.mse), 4) },
                { label: "Significant effects", value: number(significant.length, 0), tone: significant.length ? "success" : "warning" }
            ]) + effectChart.html +
                App.reportBlock("Effect estimates", table(["Term", "Effect", "p-value", "Decision"], effectRows, [1, 2])) +
                App.reportBlock("Regression coefficients", table(["Term", "Coefficient", "SE", "t", "p"], coefficientRows, [1, 2, 3, 4])) +
                residualChart.html +
                App.noteBlock(significant.length
                    ? "<strong>Significant effects:</strong> " + significant.map(function (effect) { return App.escapeHtml(effect.term); }).join(", ") + "."
                    : "No effects are statistically significant at the selected alpha. Consider effect size and practical importance before removing terms.", !significant.length),
            charts: [effectChart.chart, residualChart.chart]
        };
    }

    function runSampleSizeMeans(values) {
        const delta = Math.abs(App.requireNumber(values.delta, "Difference to detect"));
        const sigma = App.requireNumber(values.sigma, "Standard deviation");
        const alpha = alphaValue(values.alpha);
        const power = powerValue(values.power);
        if (delta === 0) throw new Error("The difference to detect must be greater than zero.");
        if (sigma <= 0) throw new Error("The standard deviation must be positive.");
        const result = E.sampleSizeMeans(delta, sigma, alpha, power, !!values.twoSided, !!values.twoSample);
        return {
            html: metricItems([
                { label: "Difference", value: number(result.delta, 4) },
                { label: "Sigma", value: number(result.sigma, 4) },
                { label: "Alpha", value: number(result.alpha, 3) },
                { label: "Power", value: percent(result.power * 100, 1) },
                { label: "n per group", value: number(result.nPerGroup, 0), tone: "success" },
                { label: "Total observations", value: number(result.total, 0) }
            ]) +
                App.reportBlock("Assumptions", table(["Setting", "Value"], [
                    ["Test", values.twoSample ? "Two-sample means" : "One-sample mean"],
                    ["Sides", values.twoSided ? "Two-sided" : "One-sided"],
                    ["Effect size (delta / sigma)", number(result.delta / result.sigma, 4)]
                ], [1])) +
                App.noteBlock("This normal approximation is a planning estimate. Use the larger of this result and any minimum sample size required by the study design.", false),
            charts: []
        };
    }

    function runPowerMeans(values) {
        const n = integerValue(values.n, "Sample size", 2);
        const delta = Math.abs(App.requireNumber(values.delta, "Difference to detect"));
        const sigma = App.requireNumber(values.sigma, "Standard deviation");
        const alpha = alphaValue(values.alpha);
        if (delta === 0) throw new Error("The difference to detect must be greater than zero.");
        if (sigma <= 0) throw new Error("The standard deviation must be positive.");
        const result = E.powerMeans(n, delta, sigma, alpha, !!values.twoSided, !!values.twoSample);
        return {
            html: metricItems([
                { label: "Power", value: percent(result.power * 100, 2), tone: result.power >= 0.8 ? "success" : "warning" },
                { label: "n per group", value: number(result.nPerGroup, 0) },
                { label: "Difference", value: number(result.delta, 4) },
                { label: "Sigma", value: number(result.sigma, 4) },
                { label: "Alpha", value: number(result.alpha, 3) },
                { label: "Effect size", value: number(result.delta / result.sigma, 4) }
            ]) +
                App.noteBlock(result.power >= 0.8
                    ? "The study has approximately 80% or greater power for the specified effect."
                    : "Power is below 80%. Consider a larger sample, a larger effect, or reduced variation.", result.power < 0.8),
            charts: []
        };
    }

    function runSampleSizeProportions(values) {
        const p1 = probabilityValue(values.p1, "Proportion 1");
        const p2 = probabilityValue(values.p2, "Proportion 2");
        const alpha = alphaValue(values.alpha);
        const power = powerValue(values.power);
        if (p1 === p2) throw new Error("The two proportions must differ.");
        const result = E.sampleSizeProportions(p1, p2, alpha, power);
        return {
            html: metricItems([
                { label: "Proportion 1", value: number(result.p1, 4) },
                { label: "Proportion 2", value: number(result.p2, 4) },
                { label: "Difference", value: number(result.p1 - result.p2, 4) },
                { label: "Alpha", value: number(result.alpha, 3) },
                { label: "Power", value: percent(result.power * 100, 1) },
                { label: "n per group", value: number(result.nPerGroup, 0), tone: "success" },
                { label: "Total observations", value: number(result.total, 0) }
            ]) +
                App.noteBlock("Use this planning estimate with the normal approximation for two independent proportions. Round up and confirm against your sampling plan.", false),
            charts: []
        };
    }

    function runSampleSizeOneProportion(values) {
        const p0 = probabilityValue(values.p0, "Null proportion");
        const p1 = probabilityValue(values.p1, "Alternative proportion");
        const alpha = alphaValue(values.alpha);
        const power = powerValue(values.power);
        if (p0 === p1) throw new Error("The null and alternative proportions must differ.");
        const result = E.sampleSizeOneProportion(p0, p1, alpha, power);
        return {
            html: metricItems([
                { label: "Null proportion", value: number(result.p0, 4) },
                { label: "Alternative", value: number(result.p1, 4) },
                { label: "Difference", value: number(result.p1 - result.p0, 4) },
                { label: "Alpha", value: number(result.alpha, 3) },
                { label: "Power", value: percent(result.power * 100, 1) },
                { label: "Required n", value: number(result.n, 0), tone: "success" }
            ]) +
                App.noteBlock("This is a normal-approximation planning estimate for a single proportion.", false),
            charts: []
        };
    }

    function probability(value) {
        return App.formatNumber(value, 6);
    }

    function curveChart(title, subtitle, xValues, yValues, xText, yText) {
        const points = xValues.map(function (value) { return number(value, 4); });
        const chart = App.lineChart(title, subtitle, points, [{
            label: "Density",
            data: yValues,
            borderColor: COLOR.blue,
            backgroundColor: COLOR.blueSoft,
            pointRadius: 0,
            borderWidth: 1.8,
            fill: true,
            tension: 0.1
        }], withAxisLabels({ scales: { y: { beginAtZero: true } } }, xText, yText));
        return chart;
    }

    function runNormal(values) {
        const x = App.requireNumber(values.x, "x");
        const mean = App.requireNumber(values.mean, "Mean");
        const sigma = App.requireNumber(values.sigma, "Standard deviation");
        if (sigma <= 0) throw new Error("The standard deviation must be positive.");
        const pdf = E.normalPdf(x, mean, sigma);
        const cdf = E.normalCdf(x, mean, sigma);
        const xs = [];
        const ys = [];
        for (let index = 0; index <= 160; index += 1) {
            const point = mean - 4 * sigma + 8 * sigma * index / 160;
            xs.push(point);
            ys.push(E.normalPdf(point, mean, sigma));
        }
        const chart = curveChart("Normal distribution", "Mean = " + number(mean, 3) + ", sigma = " + number(sigma, 3),
            xs, ys, "x", "Density");
        return {
            html: metricItems([
                { label: "x", value: number(x, 4) },
                { label: "Mean", value: number(mean, 4) },
                { label: "Sigma", value: number(sigma, 4) },
                { label: "z-score", value: number((x - mean) / sigma, 4) },
                { label: "Density f(x)", value: probability(pdf) },
                { label: "P(X <= x)", value: probability(cdf) },
                { label: "P(X > x)", value: probability(1 - cdf) },
                { label: "P(X <= x), percent", value: percent(cdf * 100, 3) }
            ]) + chart.html +
                App.reportBlock("Central probability interval", table(["Interval", "Probability"], [
                    ["Mean \u00b1 1 sigma", percent((E.normalCdf(mean + sigma, mean, sigma) - E.normalCdf(mean - sigma, mean, sigma)) * 100, 3)],
                    ["Mean \u00b1 2 sigma", percent((E.normalCdf(mean + 2 * sigma, mean, sigma) - E.normalCdf(mean - 2 * sigma, mean, sigma)) * 100, 3)],
                    ["Mean \u00b1 3 sigma", percent((E.normalCdf(mean + 3 * sigma, mean, sigma) - E.normalCdf(mean - 3 * sigma, mean, sigma)) * 100, 3)]
                ], [1])),
            charts: [chart.chart]
        };
    }

    function runBinomial(values) {
        const n = integerValue(values.n, "Number of trials", 1);
        const k = integerValue(values.k, "Successes", 0);
        const p = probabilityValue(values.p, "Probability of success");
        if (n > 200) throw new Error("Use 200 or fewer trials so the distribution chart stays readable.");
        if (k > n) throw new Error("Successes cannot exceed the number of trials.");
        const pmf = E.binomialPmf(k, n, p);
        const cdf = E.binomialCdf(k, n, p);
        const upper = k === 0 ? 1 : 1 - E.binomialCdf(k - 1, n, p);
        const labels = Array.from({ length: n + 1 }, function (_, index) { return String(index); });
        const probabilities = labels.map(function (_, index) { return E.binomialPmf(index, n, p); });
        const chart = App.barChart("Binomial distribution", "n = " + n + ", p = " + number(p, 4), labels, [{
            label: "P(X = k)",
            data: probabilities,
            backgroundColor: COLOR.blueSoft,
            borderColor: COLOR.blue,
            borderWidth: 1
        }], withAxisLabels({ scales: { y: { beginAtZero: true } } }, "Successes", "Probability"));
        return {
            html: metricItems([
                { label: "k", value: number(k, 0) },
                { label: "n", value: number(n, 0) },
                { label: "p", value: number(p, 4) },
                { label: "P(X = k)", value: probability(pmf) },
                { label: "P(X <= k)", value: probability(cdf) },
                { label: "P(X >= k)", value: probability(upper) },
                { label: "Mean", value: number(n * p, 4) },
                { label: "Standard deviation", value: number(Math.sqrt(n * p * (1 - p)), 4) }
            ]) + chart.html,
            charts: [chart.chart]
        };
    }

    function runPoisson(values) {
        const k = integerValue(values.k, "Event count", 0);
        const lambda = App.requireNumber(values.lambda, "Average rate");
        if (lambda <= 0) throw new Error("The average rate must be positive.");
        const pmf = E.poissonPmf(k, lambda);
        const cdf = E.poissonCdf(k, lambda);
        const upper = k === 0 ? 1 : 1 - E.poissonCdf(k - 1, lambda);
        const maxX = Math.min(80, Math.max(10, k + 4, Math.ceil(lambda + 4 * Math.sqrt(lambda))));
        const labels = Array.from({ length: maxX + 1 }, function (_, index) { return String(index); });
        const probabilities = labels.map(function (_, index) { return E.poissonPmf(index, lambda); });
        const chart = App.barChart("Poisson distribution", "lambda = " + number(lambda, 4), labels, [{
            label: "P(X = k)",
            data: probabilities,
            backgroundColor: COLOR.teal + "33",
            borderColor: COLOR.teal,
            borderWidth: 1
        }], withAxisLabels({ scales: { y: { beginAtZero: true } } }, "Event count", "Probability"));
        return {
            html: metricItems([
                { label: "k", value: number(k, 0) },
                { label: "Lambda", value: number(lambda, 4) },
                { label: "P(X = k)", value: probability(pmf) },
                { label: "P(X <= k)", value: probability(cdf) },
                { label: "P(X >= k)", value: probability(upper) },
                { label: "Mean", value: number(lambda, 4) },
                { label: "Standard deviation", value: number(Math.sqrt(lambda), 4) }
            ]) + chart.html,
            charts: [chart.chart]
        };
    }

    function runExponential(values) {
        const x = App.requireNumber(values.x, "x");
        const rate = App.requireNumber(values.rate, "Rate");
        if (x < 0) throw new Error("x must be zero or greater.");
        if (rate <= 0) throw new Error("The rate must be positive.");
        const pdf = E.exponentialPdf(x, rate);
        const cdf = E.exponentialCdf(x, rate);
        const maxX = Math.max(x * 1.5, 5 / rate);
        const xs = [];
        const ys = [];
        for (let index = 0; index <= 120; index += 1) {
            const point = maxX * index / 120;
            xs.push(point);
            ys.push(E.exponentialPdf(point, rate));
        }
        const chart = curveChart("Exponential distribution", "Rate = " + number(rate, 4), xs, ys, "x", "Density");
        return {
            html: metricItems([
                { label: "x", value: number(x, 4) },
                { label: "Rate", value: number(rate, 4) },
                { label: "Density f(x)", value: probability(pdf) },
                { label: "P(X <= x)", value: probability(cdf) },
                { label: "P(X > x)", value: probability(1 - cdf) },
                { label: "Mean", value: number(1 / rate, 4) },
                { label: "Standard deviation", value: number(1 / rate, 4) },
                { label: "Median", value: number(Math.log(2) / rate, 4) }
            ]) + chart.html,
            charts: [chart.chart]
        };
    }

    function runWeibull(values) {
        const x = App.requireNumber(values.x, "x");
        const shape = App.requireNumber(values.shape, "Shape");
        const scale = App.requireNumber(values.scale, "Scale");
        if (x < 0) throw new Error("x must be zero or greater.");
        if (shape <= 0 || scale <= 0) throw new Error("Shape and scale must be positive.");
        const pdf = E.weibullPdf(x, shape, scale);
        const cdf = E.weibullCdf(x, shape, scale);
        const median = scale * Math.pow(Math.log(2), 1 / shape);
        const maxX = Math.max(x * 1.5, scale * 2.5);
        const xs = [];
        const ys = [];
        for (let index = 0; index <= 160; index += 1) {
            const point = maxX * index / 160;
            xs.push(point);
            ys.push(E.weibullPdf(point, shape, scale));
        }
        const chart = curveChart("Weibull distribution", "Shape = " + number(shape, 3) + ", scale = " + number(scale, 3),
            xs, ys, "x", "Density");
        return {
            html: metricItems([
                { label: "x", value: number(x, 4) },
                { label: "Shape", value: number(shape, 3) },
                { label: "Scale", value: number(scale, 3) },
                { label: "Density f(x)", value: probability(pdf) },
                { label: "P(X <= x)", value: probability(cdf) },
                { label: "P(X > x)", value: probability(1 - cdf) },
                { label: "Median", value: number(median, 4) }
            ]) + chart.html +
                App.noteBlock("Shape values below 1 indicate a decreasing hazard rate, values near 1 resemble an exponential distribution, and values above 1 indicate an increasing hazard rate.", false),
            charts: [chart.chart]
        };
    }

    function alphaField() {
        return {
            name: "alpha",
            type: "number",
            label: "Significance level (alpha)",
            default: 0.05,
            step: 0.01,
            min: 0.001,
            max: 0.2,
            help: "Common choices are 0.05 and 0.01."
        };
    }

    function numericColumn(name, label, options) {
        return Object.assign({
            name: name,
            type: "column",
            label: label,
            numeric: true,
            help: "Numeric column from the current worksheet."
        }, options || {});
    }

    function numberField(name, label, defaultValue, options) {
        return Object.assign({
            name: name,
            type: "number",
            label: label,
            default: defaultValue,
            step: "any"
        }, options || {});
    }

    const CATALOG = [
        {
            label: "Summarize",
            icon: "fa-chart-simple",
            items: [
                {
                    id: "descriptive",
                    label: "Descriptive statistics",
                    icon: "fa-table-list",
                    description: "Summarize a numeric column with location, spread, shape, quantiles, and a confidence interval.",
                    action: "Summarize column",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true }), alphaField()],
                    run: runDescriptive
                },
                {
                    id: "histogram",
                    label: "Histogram",
                    icon: "fa-chart-column",
                    description: "Show the distribution of a numeric column with adjustable bins.",
                    action: "Draw histogram",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true }),
                        numberField("bins", "Number of bins", 10, { step: 1, min: 3, max: 40 })],
                    run: runHistogram
                },
                {
                    id: "boxplot",
                    label: "Boxplot",
                    icon: "fa-box",
                    description: "Show the median, quartiles, whiskers, and potential outliers.",
                    action: "Draw boxplot",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true })],
                    run: runBoxplot
                },
                {
                    id: "pareto",
                    label: "Pareto chart",
                    icon: "fa-chart-simple",
                    description: "Rank categories by frequency and track the cumulative percentage.",
                    action: "Build Pareto chart",
                    fields: [{ name: "category", type: "column", label: "Category column", numeric: false, autoFirst: true,
                        help: "Text or numeric labels; blanks are ignored." }],
                    run: runPareto
                },
                {
                    id: "runChart",
                    label: "Run chart",
                    icon: "fa-chart-line",
                    description: "Plot observations in time order with a center line.",
                    action: "Draw run chart",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true })],
                    run: runRunChart
                },
                {
                    id: "probabilityPlot",
                    label: "Normal probability plot",
                    icon: "fa-chart-scatter",
                    description: "Assess whether a numeric column is approximately normally distributed.",
                    action: "Build probability plot",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true })],
                    run: runProbabilityPlot
                },
                {
                    id: "correlation",
                    label: "Correlation matrix",
                    icon: "fa-diagram-project",
                    description: "Calculate Pearson correlations among two or more numeric columns.",
                    action: "Calculate correlations",
                    fields: [{ name: "columns", type: "columns", label: "Numeric columns", numeric: true, wide: true,
                        help: "Select at least two columns. Rows with missing values are excluded listwise." },
                        alphaField()],
                    run: runCorrelation
                }
            ]
        },
        {
            label: "Compare groups",
            icon: "fa-scale-balanced",
            items: [
                {
                    id: "oneSampleT",
                    label: "One-sample t-test",
                    icon: "fa-arrow-right-to-bracket",
                    description: "Compare a sample mean with a target value.",
                    action: "Run t-test",
                    fields: [numericColumn("column", "Numeric column", { autoFirst: true }),
                        numberField("target", "Target mean", 0),
                        alphaField(),
                        { name: "alternative", type: "select", label: "Alternative hypothesis", default: "two-sided",
                            options: [{ value: "two-sided", label: "Two-sided" }, { value: "greater", label: "Mean is greater" }, { value: "less", label: "Mean is less" }] }],
                    run: runOneSampleT
                },
                {
                    id: "twoSampleT",
                    label: "Two-sample t-test",
                    icon: "fa-arrows-left-right",
                    description: "Compare the means of two independent groups using a Welch or pooled t-test.",
                    action: "Compare means",
                    fields: [
                        numericColumn("response", "Response column (grouped mode)", { autoIndex: 0 }),
                        { name: "groupColumn", type: "column", label: "Grouping column (optional)", numeric: false, hideBlank: false,
                            help: "If provided, the response is split into exactly two groups." },
                        numericColumn("column1", "First sample column (two-column mode)", { autoIndex: 0 }),
                        numericColumn("column2", "Second sample column (two-column mode)", { autoIndex: 1 }),
                        alphaField(),
                        { name: "equalVariance", type: "checkbox", label: "Assume equal variances (pooled t-test)", default: false }
                    ],
                    run: runTwoSampleT
                },
                {
                    id: "pairedT",
                    label: "Paired t-test",
                    icon: "fa-link",
                    description: "Compare two measurements made on the same rows.",
                    action: "Compare paired values",
                    fields: [numericColumn("first", "First measurement", { autoIndex: 0 }),
                        numericColumn("second", "Second measurement", { autoIndex: 1 }), alphaField()],
                    run: runPairedT
                },
                {
                    id: "oneProportion",
                    label: "One-proportion z-test",
                    icon: "fa-percent",
                    description: "Compare an observed proportion with a target proportion.",
                    action: "Run proportion test",
                    fields: [numberField("successes", "Successes", 10, { step: 1, min: 0 }),
                        numberField("trials", "Trials", 100, { step: 1, min: 1 }),
                        numberField("target", "Target proportion", 0.1, { step: 0.01, min: 0, max: 1 }),
                        alphaField()],
                    run: runOneProportion
                },
                {
                    id: "twoProportion",
                    label: "Two-proportion z-test",
                    icon: "fa-code-compare",
                    description: "Compare proportions from two independent samples.",
                    action: "Compare proportions",
                    fields: [numberField("x1", "Successes in sample 1", 10, { step: 1, min: 0 }),
                        numberField("n1", "Sample size 1", 100, { step: 1, min: 1 }),
                        numberField("x2", "Successes in sample 2", 15, { step: 1, min: 0 }),
                        numberField("n2", "Sample size 2", 100, { step: 1, min: 1 }),
                        alphaField()],
                    run: runTwoProportion
                },
                {
                    id: "chiSquare",
                    label: "Chi-square test",
                    icon: "fa-table-cells",
                    description: "Test independence between two categorical columns.",
                    action: "Test independence",
                    fields: [{ name: "rowColumn", type: "column", label: "Row category column", numeric: false, prefer: "Line", autoFirst: true },
                        { name: "columnColumn", type: "column", label: "Column category column", numeric: false, prefer: "Operator", autoIndex: 1 },
                        alphaField()],
                    run: runChiSquare
                },
                {
                    id: "anova",
                    label: "One-way ANOVA",
                    icon: "fa-layer-group",
                    description: "Compare means across two or more groups and inspect pairwise differences.",
                    action: "Run ANOVA",
                    fields: [numericColumn("response", "Numeric response", { autoFirst: true }),
                        { name: "groupColumn", type: "column", label: "Grouping column", numeric: false, prefer: "Line" },
                        alphaField()],
                    run: runAnova
                }
            ]
        },
        {
            label: "Model relationships",
            icon: "fa-chart-line",
            items: [
                {
                    id: "regression",
                    label: "Linear regression",
                    icon: "fa-chart-line",
                    description: "Fit a least-squares model and evaluate coefficients, fit, residuals, and multicollinearity.",
                    action: "Fit regression",
                    fields: [numericColumn("response", "Numeric response", { prefer: "Fill_ml" }),
                        { name: "predictors", type: "columns", label: "Predictor columns", numeric: true, wide: true,
                            default: ["Temperature_C", "Pressure_bar"], help: "Select one or more numeric predictors." },
                        alphaField(),
                        { name: "interactions", type: "checkbox", label: "Include two-way interactions", default: false }],
                    run: runRegression
                },
                {
                    id: "logistic",
                    label: "Logistic regression",
                    icon: "fa-toggle-on",
                    description: "Model a binary 0/1 response and report odds ratios, classification, and ROC/AUC.",
                    action: "Fit logistic model",
                    fields: [numericColumn("response", "Binary response (0/1)", { prefer: "Pass" }),
                        { name: "predictors", type: "columns", label: "Predictor columns", numeric: true, wide: true,
                            default: ["Fill_ml", "Temperature_C"], help: "Select one or more numeric predictors." },
                        alphaField()],
                    run: runLogistic
                }
            ]
        },
        {
            label: "Control & capability",
            icon: "fa-gauge-high",
            items: [
                {
                    id: "imr",
                    label: "I-MR chart",
                    icon: "fa-wave-square",
                    description: "Monitor individual observations and moving ranges for stability.",
                    action: "Build control charts",
                    fields: [numericColumn("column", "Numeric column", { prefer: "Fill_ml" })],
                    run: runImr
                },
                {
                    id: "xbarR",
                    label: "X-bar and R chart",
                    icon: "fa-chart-area",
                    description: "Monitor subgroup means and ranges with constant subgroup size.",
                    action: "Build X-bar and R charts",
                    fields: [numericColumn("column", "Numeric column", { prefer: "Fill_ml" }),
                        numberField("subgroupSize", "Subgroup size", 5, { step: 1, min: 2, max: 10 })],
                    run: runXbarR
                },
                {
                    id: "pChart",
                    label: "P chart",
                    icon: "fa-bars-progress",
                    description: "Monitor the proportion defective across lots with varying sample sizes.",
                    action: "Build P chart",
                    fields: [numericColumn("defectives", "Defective count", { prefer: "Defectives" }),
                        numericColumn("sizes", "Inspected per lot", { prefer: "Inspected" })],
                    run: runPChart
                },
                {
                    id: "capability",
                    label: "Process capability",
                    icon: "fa-gauge-high",
                    description: "Calculate Cp, Cpk, Pp, Ppk, and expected defect rates against specification limits.",
                    action: "Calculate capability",
                    fields: [numericColumn("column", "Measurement column", { prefer: "Fill_ml" }),
                        numberField("lsl", "Lower specification limit (LSL)", 499.55, { placeholder: "Optional" }),
                        numberField("usl", "Upper specification limit (USL)", 500.7, { placeholder: "Optional" })],
                    run: runCapability
                }
            ]
        },
        {
            label: "Measurement systems",
            icon: "fa-ruler-combined",
            items: [
                {
                    id: "gageRR",
                    label: "Gage R&R",
                    icon: "fa-repeat",
                    description: "Evaluate repeatability and reproducibility with a balanced ANOVA study.",
                    action: "Analyze measurement system",
                    fields: [{ name: "part", type: "column", label: "Part column", numeric: false, prefer: "Part" },
                        { name: "operator", type: "column", label: "Operator column", numeric: false, prefer: "Operator" },
                        numericColumn("measurement", "Measurement column", { prefer: "Measurement" })],
                    run: runGage
                }
            ]
        },
        {
            label: "Design of experiments",
            icon: "fa-flask",
            items: [
                {
                    id: "factorialDesign",
                    label: "Create factorial design",
                    icon: "fa-table-list",
                    description: "Generate a randomized two-level full factorial design.",
                    action: "Create design",
                    fields: [
                        { name: "factors", type: "text", label: "Factor names", default: "A, B, C", wide: true,
                            help: "Separate names with commas." },
                        { name: "low", type: "text", label: "Low levels", default: "-1, -1, -1", wide: true,
                            help: "One numeric low level for each factor." },
                        { name: "high", type: "text", label: "High levels", default: "1, 1, 1", wide: true,
                            help: "One numeric high level for each factor." },
                        numberField("replicates", "Replicates", 2, { step: 1, min: 1 }),
                        { name: "randomize", type: "checkbox", label: "Randomize run order", default: true }
                    ],
                    run: runFactorialDesign
                },
                {
                    id: "factorialAnalyze",
                    label: "Analyze factorial design",
                    icon: "fa-flask-vial",
                    description: "Estimate main effects and two-way interactions from a two-level design.",
                    action: "Analyze design",
                    fields: [numericColumn("response", "Response column", { prefer: "Response" }),
                        { name: "factors", type: "columns", label: "Factor columns", numeric: true, wide: true,
                            default: ["A", "B", "C"], help: "Select the numeric factor columns." },
                        alphaField()],
                    run: runFactorialAnalyze
                }
            ]
        },
        {
            label: "Sample size & power",
            icon: "fa-calculator",
            items: [
                {
                    id: "sampleSizeMeans",
                    label: "Sample size for means",
                    icon: "fa-users",
                    description: "Estimate the sample size needed to detect a difference in means.",
                    action: "Calculate sample size",
                    fields: [numberField("delta", "Difference to detect", 1, { min: 0.000001 }),
                        numberField("sigma", "Standard deviation", 1, { min: 0.000001 }),
                        alphaField(),
                        numberField("power", "Power", 0.8, { step: 0.05, min: 0.01, max: 0.999 }),
                        { name: "twoSided", type: "checkbox", label: "Two-sided test", default: true },
                        { name: "twoSample", type: "checkbox", label: "Two independent samples", default: true }],
                    run: runSampleSizeMeans
                },
                {
                    id: "powerMeans",
                    label: "Power for means",
                    icon: "fa-bolt",
                    description: "Estimate power for a given sample size and difference in means.",
                    action: "Calculate power",
                    fields: [numberField("n", "Sample size per group", 30, { step: 1, min: 2 }),
                        numberField("delta", "Difference to detect", 1, { min: 0.000001 }),
                        numberField("sigma", "Standard deviation", 1, { min: 0.000001 }),
                        alphaField(),
                        numberField("power", "Target power (reference)", 0.8, { step: 0.05, min: 0.01, max: 0.999, help: "Power is calculated from n; this value is shown only for reference." }),
                        { name: "twoSided", type: "checkbox", label: "Two-sided test", default: true },
                        { name: "twoSample", type: "checkbox", label: "Two independent samples", default: true }],
                    run: runPowerMeans
                },
                {
                    id: "sampleSizeProportions",
                    label: "Sample size for two proportions",
                    icon: "fa-percent",
                    description: "Estimate the sample size needed to detect a difference between two proportions.",
                    action: "Calculate sample size",
                    fields: [numberField("p1", "Proportion 1", 0.1, { step: 0.01, min: 0, max: 1 }),
                        numberField("p2", "Proportion 2", 0.15, { step: 0.01, min: 0, max: 1 }),
                        alphaField(),
                        numberField("power", "Power", 0.8, { step: 0.05, min: 0.01, max: 0.999 })],
                    run: runSampleSizeProportions
                },
                {
                    id: "sampleSizeOneProportion",
                    label: "Sample size for one proportion",
                    icon: "fa-bullseye",
                    description: "Estimate the sample size needed to compare one proportion with a target.",
                    action: "Calculate sample size",
                    fields: [numberField("p0", "Null proportion", 0.1, { step: 0.01, min: 0, max: 1 }),
                        numberField("p1", "Alternative proportion", 0.15, { step: 0.01, min: 0, max: 1 }),
                        alphaField(),
                        numberField("power", "Power", 0.8, { step: 0.05, min: 0.01, max: 0.999 })],
                    run: runSampleSizeOneProportion
                }
            ]
        },
        {
            label: "Distributions",
            icon: "fa-dice",
            items: [
                {
                    id: "normalDistribution",
                    label: "Normal distribution",
                    icon: "fa-bell",
                    description: "Evaluate density and cumulative probabilities for a normal distribution.",
                    action: "Calculate probabilities",
                    fields: [numberField("x", "Value (x)", 0), numberField("mean", "Mean", 0),
                        numberField("sigma", "Standard deviation", 1, { min: 0.000001 })],
                    run: runNormal
                },
                {
                    id: "binomialDistribution",
                    label: "Binomial distribution",
                    icon: "fa-coins",
                    description: "Evaluate exact and cumulative probabilities for a binomial count.",
                    action: "Calculate probabilities",
                    fields: [numberField("k", "Successes (k)", 5, { step: 1, min: 0 }),
                        numberField("n", "Trials (n)", 10, { step: 1, min: 1 }),
                        numberField("p", "Probability of success", 0.5, { step: 0.01, min: 0, max: 1 })],
                    run: runBinomial
                },
                {
                    id: "poissonDistribution",
                    label: "Poisson distribution",
                    icon: "fa-clock",
                    description: "Evaluate probabilities for a count with a given average rate.",
                    action: "Calculate probabilities",
                    fields: [numberField("k", "Event count (k)", 3, { step: 1, min: 0 }),
                        numberField("lambda", "Average rate (lambda)", 2, { min: 0.000001 })],
                    run: runPoisson
                },
                {
                    id: "exponentialDistribution",
                    label: "Exponential distribution",
                    icon: "fa-hourglass-half",
                    description: "Evaluate probabilities for time between events at a constant rate.",
                    action: "Calculate probabilities",
                    fields: [numberField("x", "Value (x)", 1, { min: 0 }),
                        numberField("rate", "Rate", 0.5, { min: 0.000001 })],
                    run: runExponential
                },
                {
                    id: "weibullDistribution",
                    label: "Weibull distribution",
                    icon: "fa-chart-area",
                    description: "Evaluate probabilities for reliability and life data.",
                    action: "Calculate probabilities",
                    fields: [numberField("x", "Value (x)", 1, { min: 0 }),
                        numberField("shape", "Shape", 1.5, { min: 0.000001 }),
                        numberField("scale", "Scale", 2, { min: 0.000001 })],
                    run: runWeibull
                }
            ]
        }
    ];

    App.registerGroups(CATALOG);
}());

