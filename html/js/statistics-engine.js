/*
 * Statistics - browser statistics engine
 * Pure functions with no DOM dependencies so calculations can be tested independently.
 */
(function (root) {
    "use strict";

    const EPS = 1e-12;
    const D2 = [0, 0, 1.128, 1.693, 2.059, 2.326, 2.534, 2.704, 2.847, 2.970, 3.078];
    const A2 = [0, 0, 1.880, 1.023, 0.729, 0.577, 0.483, 0.419, 0.373, 0.337, 0.308];
    const D3 = [0, 0, 0, 0, 0, 0, 0, 0.076, 0.136, 0.184, 0.223];
    const D4 = [0, 0, 3.267, 2.574, 2.282, 2.114, 2.004, 1.924, 1.864, 1.816, 1.777];

    function isFiniteNumber(value) {
        return typeof value === "number" && Number.isFinite(value);
    }

    function numbers(values) {
        return (values || [])
            .map(function (value) { return typeof value === "number" ? value : parseFloat(value); })
            .filter(function (value) { return Number.isFinite(value); });
    }

    function sum(values) {
        return values.reduce(function (total, value) { return total + value; }, 0);
    }

    function mean(values) {
        return values.length ? sum(values) / values.length : NaN;
    }

    function variance(values, population) {
        if (values.length < 2) return NaN;
        const center = mean(values);
        const divisor = population ? values.length : values.length - 1;
        return values.reduce(function (total, value) {
            return total + Math.pow(value - center, 2);
        }, 0) / divisor;
    }

    function sd(values, population) {
        return Math.sqrt(variance(values, population));
    }

    function sorted(values) {
        return values.slice().sort(function (a, b) { return a - b; });
    }

    function quantile(values, p) {
        const data = sorted(values);
        if (!data.length) return NaN;
        if (data.length === 1) return data[0];
        const position = (data.length - 1) * p;
        const lower = Math.floor(position);
        const upper = Math.ceil(position);
        const weight = position - lower;
        return data[lower] * (1 - weight) + data[upper] * weight;
    }

    function median(values) {
        return quantile(values, 0.5);
    }

    function mode(values) {
        const counts = new Map();
        let best = 0;
        values.forEach(function (value) {
            const count = (counts.get(value) || 0) + 1;
            counts.set(value, count);
            best = Math.max(best, count);
        });
        if (best <= 1) return [];
        return Array.from(counts.entries())
            .filter(function (entry) { return entry[1] === best; })
            .map(function (entry) { return entry[0]; });
    }

    function skewness(values) {
        const n = values.length;
        if (n < 3) return NaN;
        const center = mean(values);
        const s = sd(values);
        if (!s) return 0;
        const total = values.reduce(function (acc, value) {
            return acc + Math.pow((value - center) / s, 3);
        }, 0);
        return n / ((n - 1) * (n - 2)) * total;
    }

    function kurtosis(values) {
        const n = values.length;
        if (n < 4) return NaN;
        const center = mean(values);
        const s = sd(values);
        if (!s) return 0;
        const total = values.reduce(function (acc, value) {
            return acc + Math.pow((value - center) / s, 4);
        }, 0);
        return n * (n + 1) / ((n - 1) * (n - 2) * (n - 3)) * total -
            3 * Math.pow(n - 1, 2) / ((n - 2) * (n - 3));
    }

    function erf(x) {
        const sign = x < 0 ? -1 : 1;
        const absolute = Math.abs(x);
        const t = 1 / (1 + 0.3275911 * absolute);
        const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-absolute * absolute);
        return sign * y;
    }

    function normalPdf(x, mu, sigma) {
        const m = mu === undefined ? 0 : mu;
        const s = sigma === undefined ? 1 : sigma;
        return Math.exp(-0.5 * Math.pow((x - m) / s, 2)) / (s * Math.sqrt(2 * Math.PI));
    }

    function normalCdf(x, mu, sigma) {
        const m = mu === undefined ? 0 : mu;
        const s = sigma === undefined ? 1 : sigma;
        return 0.5 * (1 + erf((x - m) / (s * Math.SQRT2)));
    }

    function normalInv(p) {
        if (p <= 0) return -Infinity;
        if (p >= 1) return Infinity;
        const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
        const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
        const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
        const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
        const low = 0.02425;
        const high = 1 - low;
        let q;
        let r;
        if (p < low) {
            q = Math.sqrt(-2 * Math.log(p));
            return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
                ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
        }
        if (p > high) {
            q = Math.sqrt(-2 * Math.log(1 - p));
            return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
                ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
        }
        q = p - 0.5;
        r = q * q;
        return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
            (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
    }

    function logGamma(x) {
        const coefficients = [
            76.18009172947146, -86.50532032941677, 24.01409824083091,
            -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
        ];
        let y = x;
        let temp = x + 5.5;
        temp -= (x + 0.5) * Math.log(temp);
        let series = 1.000000000190015;
        for (let index = 0; index < 6; index += 1) {
            y += 1;
            series += coefficients[index] / y;
        }
        return -temp + Math.log(2.5066282746310005 * series / x);
    }

    function gammaP(a, x) {
        if (x <= 0) return 0;
        if (x < a + 1) {
            let ap = a;
            let sumValue = 1 / a;
            let delta = sumValue;
            for (let iteration = 0; iteration < 10000; iteration += 1) {
                ap += 1;
                delta *= x / ap;
                sumValue += delta;
                if (Math.abs(delta) < Math.abs(sumValue) * EPS) break;
            }
            return sumValue * Math.exp(-x + a * Math.log(x) - logGamma(a));
        }
        let b = x + 1 - a;
        let c = 1 / 1e-300;
        let d = 1 / b;
        let h = d;
        for (let iteration = 1; iteration <= 10000; iteration += 1) {
            const an = -iteration * (iteration - a);
            b += 2;
            d = an * d + b;
            if (Math.abs(d) < 1e-300) d = 1e-300;
            c = b + an / c;
            if (Math.abs(c) < 1e-300) c = 1e-300;
            d = 1 / d;
            const delta = d * c;
            h *= delta;
            if (Math.abs(delta - 1) < EPS) break;
        }
        return 1 - Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
    }

    function betaContinuedFraction(a, b, x) {
        const qab = a + b;
        const qap = a + 1;
        const qam = a - 1;
        let c = 1;
        let d = 1 - qab * x / qap;
        if (Math.abs(d) < 1e-300) d = 1e-300;
        d = 1 / d;
        let h = d;
        for (let iteration = 1; iteration <= 10000; iteration += 1) {
            const m2 = 2 * iteration;
            let aa = iteration * (b - iteration) * x / ((qam + m2) * (a + m2));
            d = 1 + aa * d;
            if (Math.abs(d) < 1e-300) d = 1e-300;
            c = 1 + aa / c;
            if (Math.abs(c) < 1e-300) c = 1e-300;
            d = 1 / d;
            h *= d * c;
            aa = -(a + iteration) * (qab + iteration) * x / ((a + m2) * (qap + m2));
            d = 1 + aa * d;
            if (Math.abs(d) < 1e-300) d = 1e-300;
            c = 1 + aa / c;
            if (Math.abs(c) < 1e-300) c = 1e-300;
            d = 1 / d;
            const delta = d * c;
            h *= delta;
            if (Math.abs(delta - 1) < EPS) break;
        }
        return h;
    }

    function ibeta(a, b, x) {
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        const front = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
        if (x < (a + 1) / (a + b + 2)) return front * betaContinuedFraction(a, b, x) / a;
        return 1 - front * betaContinuedFraction(b, a, 1 - x) / b;
    }

    function tCdf(t, df) {
        if (!Number.isFinite(t)) return t < 0 ? 0 : 1;
        const x = df / (df + t * t);
        const tail = 0.5 * ibeta(df / 2, 0.5, x);
        return t >= 0 ? 1 - tail : tail;
    }

    function tPValue(t, df) {
        return 2 * (1 - tCdf(Math.abs(t), df));
    }

    function tInv(p, df) {
        if (p <= 0) return -Infinity;
        if (p >= 1) return Infinity;
        let low = -1e6;
        let high = 1e6;
        for (let iteration = 0; iteration < 160; iteration += 1) {
            const mid = (low + high) / 2;
            if (tCdf(mid, df) < p) low = mid;
            else high = mid;
        }
        return (low + high) / 2;
    }

    function fCdf(f, d1, d2) {
        if (f <= 0) return 0;
        return ibeta(d1 / 2, d2 / 2, d1 * f / (d1 * f + d2));
    }

    function fPValue(f, d1, d2) {
        return 1 - fCdf(f, d1, d2);
    }

    function chiSquareCdf(x, df) {
        return gammaP(df / 2, x / 2);
    }

    function chiSquarePValue(x, df) {
        return 1 - chiSquareCdf(x, df);
    }

    function confidenceT(values, alpha) {
        const data = numbers(values);
        const n = data.length;
        if (n < 2) return { low: NaN, high: NaN, margin: NaN };
        const center = mean(data);
        const s = sd(data);
        const margin = tInv(1 - alpha / 2, n - 1) * s / Math.sqrt(n);
        return { low: center - margin, high: center + margin, margin: margin };
    }

    function summarize(values, alpha) {
        const data = numbers(values);
        const n = data.length;
        if (!n) return { n: 0 };
        const center = mean(data);
        const s = sd(data);
        const varianceValue = variance(data);
        const q1 = quantile(data, 0.25);
        const q3 = quantile(data, 0.75);
        const ci = alpha === undefined ? null : confidenceT(data, alpha || 0.05);
        return {
            count: n,
            mean: center,
            median: median(data),
            mode: mode(data),
            sd: s,
            variance: varianceValue,
            seMean: s / Math.sqrt(n),
            cv: center !== 0 ? s / Math.abs(center) * 100 : NaN,
            min: Math.min.apply(null, data),
            max: Math.max.apply(null, data),
            range: Math.max.apply(null, data) - Math.min.apply(null, data),
            q1: q1,
            q3: q3,
            iqr: q3 - q1,
            skewness: skewness(data),
            kurtosis: kurtosis(data),
            sum: sum(data),
            ci: ci
        };
    }

    function oneSampleT(values, target, alpha, alternative) {
        const data = numbers(values);
        const n = data.length;
        if (n < 2) throw new Error("At least two numeric observations are required.");
        const center = mean(data);
        const s = sd(data);
        const se = s / Math.sqrt(n);
        const t = (center - target) / se;
        const df = n - 1;
        const tail = 1 - tCdf(Math.abs(t), df);
        let p = tail * 2;
        const side = alternative || "two-sided";
        if (side === "greater") p = t < 0 ? 1 - tail : tail;
        if (side === "less") p = t > 0 ? 1 - tail : tail;
        const critical = tInv(1 - alpha / 2, df);
        return {
            test: "One-sample t",
            n: n,
            mean: center,
            target: target,
            sd: s,
            se: se,
            df: df,
            t: t,
            p: Math.min(1, p),
            alpha: alpha,
            difference: center - target,
            ci: { low: center - critical * se, high: center + critical * se },
            alternative: side
        };
    }

    function twoSampleT(first, second, alpha, equalVariance) {
        const a = numbers(first);
        const b = numbers(second);
        if (a.length < 2 || b.length < 2) throw new Error("Each sample needs at least two numeric observations.");
        const n1 = a.length;
        const n2 = b.length;
        const m1 = mean(a);
        const m2 = mean(b);
        const v1 = variance(a);
        const v2 = variance(b);
        const diff = m1 - m2;
        let se;
        let df;
        if (equalVariance) {
            const pooled = ((n1 - 1) * v1 + (n2 - 1) * v2) / (n1 + n2 - 2);
            se = Math.sqrt(pooled * (1 / n1 + 1 / n2));
            df = n1 + n2 - 2;
        } else {
            se = Math.sqrt(v1 / n1 + v2 / n2);
            df = Math.pow(v1 / n1 + v2 / n2, 2) /
                (Math.pow(v1 / n1, 2) / (n1 - 1) + Math.pow(v2 / n2, 2) / (n2 - 1));
        }
        const t = diff / se;
        const critical = tInv(1 - alpha / 2, df);
        return {
            test: equalVariance ? "Two-sample t (pooled)" : "Two-sample t (Welch)",
            n1: n1,
            n2: n2,
            mean1: m1,
            mean2: m2,
            sd1: Math.sqrt(v1),
            sd2: Math.sqrt(v2),
            difference: diff,
            se: se,
            df: df,
            t: t,
            p: tPValue(t, df),
            alpha: alpha,
            ci: { low: diff - critical * se, high: diff + critical * se }
        };
    }

    function pairedT(first, second, alpha) {
        if (first.length !== second.length) throw new Error("Paired samples must have the same number of observations.");
        const differences = [];
        for (let index = 0; index < first.length; index += 1) {
            const a = parseFloat(first[index]);
            const b = parseFloat(second[index]);
            if (Number.isFinite(a) && Number.isFinite(b)) differences.push(a - b);
        }
        if (differences.length < 2) throw new Error("At least two complete pairs are required.");
        const center = mean(differences);
        const s = sd(differences);
        const se = s / Math.sqrt(differences.length);
        const df = differences.length - 1;
        const t = center / se;
        const critical = tInv(1 - alpha / 2, df);
        return {
            test: "Paired t",
            n: differences.length,
            meanDifference: center,
            sdDifference: s,
            se: se,
            df: df,
            t: t,
            p: tPValue(t, df),
            alpha: alpha,
            ci: { low: center - critical * se, high: center + critical * se }
        };
    }

    function oneProportion(successes, trials, target, alpha) {
        if (trials <= 0 || successes < 0 || successes > trials) throw new Error("Check the success and trial counts.");
        const phat = successes / trials;
        const seNull = Math.sqrt(target * (1 - target) / trials);
        const z = (phat - target) / seNull;
        const zCritical = normalInv(1 - alpha / 2);
        const wilsonDenominator = 1 + Math.pow(zCritical, 2) / trials;
        const wilsonCenter = (phat + Math.pow(zCritical, 2) / (2 * trials)) / wilsonDenominator;
        const wilsonMargin = zCritical * Math.sqrt(phat * (1 - phat) / trials + Math.pow(zCritical, 2) / (4 * Math.pow(trials, 2))) / wilsonDenominator;
        return {
            test: "One-proportion z",
            successes: successes,
            trials: trials,
            proportion: phat,
            target: target,
            z: z,
            p: 2 * (1 - normalCdf(Math.abs(z))),
            alpha: alpha,
            ci: { low: Math.max(0, wilsonCenter - wilsonMargin), high: Math.min(1, wilsonCenter + wilsonMargin) }
        };
    }

    function twoProportion(x1, n1, x2, n2, alpha) {
        if (n1 <= 0 || n2 <= 0) throw new Error("Sample sizes must be positive.");
        const p1 = x1 / n1;
        const p2 = x2 / n2;
        const pooled = (x1 + x2) / (n1 + n2);
        const sePooled = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
        const seDifference = Math.sqrt(p1 * (1 - p1) / n1 + p2 * (1 - p2) / n2);
        const z = (p1 - p2) / sePooled;
        const critical = normalInv(1 - alpha / 2);
        return {
            test: "Two-proportion z",
            p1: p1,
            p2: p2,
            difference: p1 - p2,
            pooled: pooled,
            z: z,
            p: 2 * (1 - normalCdf(Math.abs(z))),
            alpha: alpha,
            ci: { low: p1 - p2 - critical * seDifference, high: p1 - p2 + critical * seDifference }
        };
    }

    function matrixInverse(matrix) {
        const n = matrix.length;
        const augmented = matrix.map(function (row, rowIndex) {
            return row.slice().concat(Array.from({ length: n }, function (_, columnIndex) {
                return rowIndex === columnIndex ? 1 : 0;
            }));
        });
        for (let column = 0; column < n; column += 1) {
            let pivot = column;
            for (let row = column + 1; row < n; row += 1) {
                if (Math.abs(augmented[row][column]) > Math.abs(augmented[pivot][column])) pivot = row;
            }
            if (Math.abs(augmented[pivot][column]) < 1e-12) throw new Error("The matrix is singular. Remove redundant or constant predictors.");
            if (pivot !== column) {
                const temp = augmented[column];
                augmented[column] = augmented[pivot];
                augmented[pivot] = temp;
            }
            const divisor = augmented[column][column];
            for (let index = 0; index < 2 * n; index += 1) augmented[column][index] /= divisor;
            for (let row = 0; row < n; row += 1) {
                if (row === column) continue;
                const factor = augmented[row][column];
                if (!factor) continue;
                for (let index = 0; index < 2 * n; index += 1) {
                    augmented[row][index] -= factor * augmented[column][index];
                }
            }
        }
        return augmented.map(function (row) { return row.slice(n); });
    }

    function matrixMultiply(left, right) {
        return left.map(function (row) {
            return right[0].map(function (_, columnIndex) {
                return row.reduce(function (total, value, index) {
                    return total + value * right[index][columnIndex];
                }, 0);
            });
        });
    }

    function regression(yValues, xColumns, names, options) {
        const y = numbers(yValues);
        const n = y.length;
        if (n < 3) throw new Error("At least three complete observations are required.");
        const predictors = (xColumns || []).map(numbers);
        if (!predictors.length) throw new Error("Select at least one predictor.");
        predictors.forEach(function (column) {
            if (column.length !== n) throw new Error("All predictors and the response must have the same number of valid rows.");
        });
        const labels = names && names.length === predictors.length ? names : predictors.map(function (_, index) { return "X" + (index + 1); });
        const columns = predictors.map(function (column) { return column.slice(); });
        if (options && options.interactions) {
            for (let first = 0; first < predictors.length; first += 1) {
                for (let second = first + 1; second < predictors.length; second += 1) {
                    columns.push(predictors[first].map(function (value, index) { return value * predictors[second][index]; }));
                    labels.push(labels[first] + "*" + labels[second]);
                }
            }
        }
        const p = columns.length + 1;
        const dfResidual = n - p;
        if (dfResidual <= 0) throw new Error("Not enough observations for the number of terms.");
        const X = [];
        for (let row = 0; row < n; row += 1) {
            X.push([1].concat(columns.map(function (column) { return column[row]; })));
        }
        const Xt = X[0].map(function (_, columnIndex) { return X.map(function (row) { return row[columnIndex]; }); });
        const XtX = matrixMultiply(Xt, X);
        const inverse = matrixInverse(XtX);
        const Xty = Xt.map(function (row) {
            return row.reduce(function (total, value, index) { return total + value * y[index]; }, 0);
        });
        const coefficients = inverse.map(function (row) {
            return row.reduce(function (total, value, index) { return total + value * Xty[index]; }, 0);
        });
        const fitted = X.map(function (row) {
            return row.reduce(function (total, value, index) { return total + value * coefficients[index]; }, 0);
        });
        const residuals = y.map(function (value, index) { return value - fitted[index]; });
        const yMean = mean(y);
        const sst = y.reduce(function (total, value) { return total + Math.pow(value - yMean, 2); }, 0);
        const sse = residuals.reduce(function (total, value) { return total + value * value; }, 0);
        const ssr = sst - sse;
        const mse = sse / dfResidual;
        const r2 = sst ? ssr / sst : 0;
        const adjustedR2 = 1 - (1 - r2) * (n - 1) / dfResidual;
        const f = (ssr / (p - 1)) / mse;
        const fp = fPValue(f, p - 1, dfResidual);
        const terms = ["Constant"].concat(labels).map(function (label, index) {
            const estimate = coefficients[index];
            const se = Math.sqrt(mse * inverse[index][index]);
            const t = estimate / se;
            return {
                term: label,
                coefficient: estimate,
                se: se,
                t: t,
                p: tPValue(t, dfResidual),
                standardized: NaN
            };
        });
        const vif = predictors.map(function (_, predictorIndex) {
            const otherX = predictors.filter(function (__, index) { return index !== predictorIndex; });
            if (!otherX.length) return 1;
            const yPredictor = predictors[predictorIndex];
            const otherXWithIntercept = otherX.map(function (column) { return column; });
            const sub = regression(yPredictor, otherXWithIntercept, otherX.map(function (_, index) { return "X" + index; }), { interactions: false });
            return 1 / Math.max(1e-12, 1 - sub.r2);
        });
        let durbinWatson = NaN;
        if (residuals.length > 1) {
            let numerator = 0;
            for (let index = 1; index < residuals.length; index += 1) {
                numerator += Math.pow(residuals[index] - residuals[index - 1], 2);
            }
            durbinWatson = numerator / sse;
        }
        return {
            test: "Linear regression",
            n: n,
            terms: terms,
            coefficients: coefficients,
            fitted: fitted,
            residuals: residuals,
            sst: sst,
            sse: sse,
            ssr: ssr,
            mse: mse,
            r2: r2,
            adjustedR2: adjustedR2,
            f: f,
            p: fp,
            dfModel: p - 1,
            dfResidual: dfResidual,
            vif: vif,
            durbinWatson: durbinWatson,
            labels: labels
        };
    }

    function logisticRegression(yValues, xColumns, names, alpha) {
        const y = numbers(yValues);
        const n = y.length;
        if (n < 5) throw new Error("At least five complete observations are required.");
        if (!y.every(function (value) { return value === 0 || value === 1; })) {
            throw new Error("Logistic regression requires a response coded 0 or 1.");
        }
        const predictors = (xColumns || []).map(numbers);
        predictors.forEach(function (column) {
            if (column.length !== n) throw new Error("All predictors and the response must have the same number of valid rows.");
        });
        const labels = names && names.length === predictors.length ? names : predictors.map(function (_, index) { return "X" + (index + 1); });
        const X = [];
        for (let row = 0; row < n; row += 1) {
            X.push([1].concat(predictors.map(function (column) { return column[row]; })));
        }
        const p = X[0].length;
        let beta = new Array(p).fill(0);
        let inverse = null;
        let converged = false;
        for (let iteration = 0; iteration < 100; iteration += 1) {
            const probabilities = X.map(function (row) {
                const eta = row.reduce(function (total, value, index) { return total + value * beta[index]; }, 0);
                return Math.max(1e-9, Math.min(1 - 1e-9, 1 / (1 + Math.exp(-eta))));
            });
            const weights = probabilities.map(function (value) { return value * (1 - value); });
            const XtWX = Array.from({ length: p }, function (_, i) {
                return Array.from({ length: p }, function (__, j) {
                    return X.reduce(function (total, row, rowIndex) {
                        return total + row[i] * weights[rowIndex] * row[j];
                    }, 0);
                });
            });
            const XtWz = Array.from({ length: p }, function (_, i) {
                return X.reduce(function (total, row, rowIndex) {
                    const eta = row.reduce(function (sumEta, value, index) { return sumEta + value * beta[index]; }, 0);
                    const z = eta + (y[rowIndex] - probabilities[rowIndex]) / weights[rowIndex];
                    return total + row[i] * weights[rowIndex] * z;
                }, 0);
            });
            inverse = matrixInverse(XtWX);
            const nextBeta = inverse.map(function (row) {
                return row.reduce(function (total, value, index) { return total + value * XtWz[index]; }, 0);
            });
            const change = Math.max.apply(null, nextBeta.map(function (value, index) { return Math.abs(value - beta[index]); }));
            beta = nextBeta;
            if (change < 1e-8) {
                converged = true;
                break;
            }
        }
        if (!converged) throw new Error("Logistic regression did not converge. Check for separation or redundant predictors.");
        const probabilities = X.map(function (row) {
            const eta = row.reduce(function (total, value, index) { return total + value * beta[index]; }, 0);
            return 1 / (1 + Math.exp(-eta));
        });
        const logLikelihood = y.reduce(function (total, value, index) {
            const probability = Math.max(1e-12, Math.min(1 - 1e-12, probabilities[index]));
            return total + value * Math.log(probability) + (1 - value) * Math.log(1 - probability);
        }, 0);
        const baseRate = mean(y);
        const nullLogLikelihood = y.reduce(function (total, value) {
            return total + value * Math.log(baseRate) + (1 - value) * Math.log(1 - baseRate);
        }, 0);
        const critical = normalInv(1 - alpha / 2);
        const terms = ["Constant"].concat(labels).map(function (label, index) {
            const estimate = beta[index];
            const se = Math.sqrt(inverse[index][index]);
            const z = estimate / se;
            return {
                term: label,
                coefficient: estimate,
                se: se,
                z: z,
                p: 2 * (1 - normalCdf(Math.abs(z))),
                oddsRatio: Math.exp(estimate),
                orLow: Math.exp(estimate - critical * se),
                orHigh: Math.exp(estimate + critical * se)
            };
        });
        const positives = probabilities.filter(function (_, index) { return y[index] === 1; }).sort(function (a, b) { return a - b; });
        const negatives = probabilities.filter(function (_, index) { return y[index] === 0; }).sort(function (a, b) { return a - b; });
        let auc = NaN;
        if (positives.length && negatives.length) {
            let wins = 0;
            positives.forEach(function (positive) {
                negatives.forEach(function (negative) {
                    if (positive > negative) wins += 1;
                    else if (positive === negative) wins += 0.5;
                });
            });
            auc = wins / (positives.length * negatives.length);
        }
        return {
            test: "Logistic regression",
            n: n,
            terms: terms,
            probabilities: probabilities,
            fitted: probabilities,
            beta: beta,
            logLikelihood: logLikelihood,
            nullLogLikelihood: nullLogLikelihood,
            pseudoR2: 1 - logLikelihood / nullLogLikelihood,
            auc: auc,
            converged: converged,
            alpha: alpha
        };
    }

    function contingency(rowValues, columnValues) {
        const rows = [];
        const columns = [];
        const counts = new Map();
        for (let index = 0; index < rowValues.length; index += 1) {
            const row = String(rowValues[index]);
            const column = String(columnValues[index]);
            if (!row || !column || row === "undefined" || column === "undefined") continue;
            if (!rows.includes(row)) rows.push(row);
            if (!columns.includes(column)) columns.push(column);
            const key = row + "\u0000" + column;
            counts.set(key, (counts.get(key) || 0) + 1);
        }
        const table = rows.map(function (row) {
            return columns.map(function (column) { return counts.get(row + "\u0000" + column) || 0; });
        });
        return { rows: rows, columns: columns, table: table };
    }

    function chiSquareTest(table, rowLabels, columnLabels) {
        const rowCount = table.length;
        const columnCount = table[0].length;
        const rowTotals = table.map(function (row) { return sum(row); });
        const columnTotals = Array.from({ length: columnCount }, function (_, columnIndex) {
            return table.reduce(function (total, row) { return total + row[columnIndex]; }, 0);
        });
        const total = sum(rowTotals);
        const expected = table.map(function (row, rowIndex) {
            return row.map(function (_, columnIndex) {
                return rowTotals[rowIndex] * columnTotals[columnIndex] / total;
            });
        });
        let chiSquare = 0;
        const contributions = [];
        for (let row = 0; row < rowCount; row += 1) {
            contributions.push([]);
            for (let column = 0; column < columnCount; column += 1) {
                const value = expected[row][column] ? Math.pow(table[row][column] - expected[row][column], 2) / expected[row][column] : 0;
                contributions[row].push(value);
                chiSquare += value;
            }
        }
        const df = (rowCount - 1) * (columnCount - 1);
        return {
            test: "Chi-square test of independence",
            table: table,
            expected: expected,
            contributions: contributions,
            rowLabels: rowLabels,
            columnLabels: columnLabels,
            rowTotals: rowTotals,
            columnTotals: columnTotals,
            total: total,
            chiSquare: chiSquare,
            df: df,
            p: chiSquarePValue(chiSquare, df),
            cramersV: Math.sqrt(chiSquare / (total * Math.min(rowCount - 1, columnCount - 1))),
            minExpected: Math.min.apply(null, expected.reduce(function (all, row) { return all.concat(row); }, []))
        };
    }

    function chiSquareColumns(rowValues, columnValues) {
        const built = contingency(rowValues, columnValues);
        return chiSquareTest(built.table, built.rows, built.columns);
    }

    function oneWayAnova(groups, alpha) {
        const valid = groups.filter(function (group) { return group.values.length > 0; });
        if (valid.length < 2) throw new Error("At least two groups with data are required.");
        const all = valid.reduce(function (array, group) { return array.concat(group.values); }, []);
        const grand = mean(all);
        let ssBetween = 0;
        let ssWithin = 0;
        const summaries = valid.map(function (group) {
            const center = mean(group.values);
            const groupSd = group.values.length > 1 ? sd(group.values) : 0;
            ssBetween += group.values.length * Math.pow(center - grand, 2);
            ssWithin += group.values.reduce(function (total, value) { return total + Math.pow(value - center, 2); }, 0);
            return {
                name: group.name,
                n: group.values.length,
                mean: center,
                sd: groupSd,
                se: groupSd / Math.sqrt(group.values.length)
            };
        });
        const dfBetween = valid.length - 1;
        const dfWithin = all.length - valid.length;
        const msBetween = ssBetween / dfBetween;
        const msWithin = ssWithin / dfWithin;
        const f = msBetween / msWithin;
        const p = fPValue(f, dfBetween, dfWithin);
        const comparisons = [];
        const pairCount = valid.length * (valid.length - 1) / 2;
        const critical = tInv(1 - alpha / (2 * pairCount), dfWithin);
        for (let first = 0; first < summaries.length; first += 1) {
            for (let second = first + 1; second < summaries.length; second += 1) {
                const a = summaries[first];
                const b = summaries[second];
                const difference = a.mean - b.mean;
                const se = Math.sqrt(msWithin * (1 / a.n + 1 / b.n));
                const t = difference / se;
                comparisons.push({
                    first: a.name,
                    second: b.name,
                    difference: difference,
                    se: se,
                    t: t,
                    p: Math.min(1, tPValue(t, dfWithin) * pairCount),
                    ciLow: difference - critical * se,
                    ciHigh: difference + critical * se
                });
            }
        }
        return {
            test: "One-way ANOVA",
            groups: summaries,
            grandMean: grand,
            ssBetween: ssBetween,
            ssWithin: ssWithin,
            ssTotal: ssBetween + ssWithin,
            dfBetween: dfBetween,
            dfWithin: dfWithin,
            msBetween: msBetween,
            msWithin: msWithin,
            f: f,
            p: p,
            etaSquared: ssBetween / (ssBetween + ssWithin),
            comparisons: comparisons,
            alpha: alpha
        };
    }

    function movingRanges(values) {
        const ranges = [];
        for (let index = 1; index < values.length; index += 1) ranges.push(Math.abs(values[index] - values[index - 1]));
        return ranges;
    }

    function spcSignals(values, center, ucl, lcl) {
        const signals = [];
        values.forEach(function (value, index) {
            if (value > ucl + 1e-12) signals.push("Point " + (index + 1) + " is above the upper control limit.");
            if (value < lcl - 1e-12) signals.push("Point " + (index + 1) + " is below the lower control limit.");
        });
        let sameSide = 1;
        for (let index = 1; index < values.length; index += 1) {
            const previous = Math.sign(values[index - 1] - center);
            const current = Math.sign(values[index] - center);
            sameSide = current !== 0 && current === previous ? sameSide + 1 : 1;
            if (sameSide === 8) signals.push("Eight or more consecutive points are on the same side of the center line (ending at point " + (index + 1) + ").");
        }
        let increasing = 1;
        let decreasing = 1;
        for (let index = 1; index < values.length; index += 1) {
            increasing = values[index] > values[index - 1] ? increasing + 1 : 1;
            decreasing = values[index] < values[index - 1] ? decreasing + 1 : 1;
            if (increasing === 6) signals.push("Six consecutive increasing points (ending at point " + (index + 1) + ").");
            if (decreasing === 6) signals.push("Six consecutive decreasing points (ending at point " + (index + 1) + ").");
        }
        return signals;
    }

    function individualsChart(values) {
        const data = numbers(values);
        if (data.length < 2) throw new Error("At least two observations are required.");
        const ranges = movingRanges(data);
        const center = mean(data);
        const mrBar = mean(ranges);
        const sigma = mrBar / D2[2];
        const ucl = center + 3 * sigma;
        const lcl = center - 3 * sigma;
        const mrUcl = D4[2] * mrBar;
        return {
            test: "Individuals and moving range (I-MR)",
            values: data,
            center: center,
            sigma: sigma,
            ucl: ucl,
            lcl: lcl,
            movingRanges: ranges,
            mrCenter: mrBar,
            mrUcl: mrUcl,
            mrLcl: 0,
            signals: spcSignals(data, center, ucl, lcl)
        };
    }

    function xbarRChart(subgroups) {
        const cleaned = subgroups.map(numbers).filter(function (group) { return group.length >= 2; });
        if (cleaned.length < 2) throw new Error("At least two subgroups with two or more observations are required.");
        const size = cleaned[0].length;
        if (!cleaned.every(function (group) { return group.length === size; })) {
            throw new Error("All subgroups must have the same sample size for an X-bar and R chart.");
        }
        if (size > 10) throw new Error("The X-bar and R constants in this tool support subgroup sizes from 2 to 10.");
        const xbars = cleaned.map(mean);
        const ranges = cleaned.map(function (group) { return Math.max.apply(null, group) - Math.min.apply(null, group); });
        const xbarbar = mean(xbars);
        const rbar = mean(ranges);
        const xUcl = xbarbar + A2[size] * rbar;
        const xLcl = xbarbar - A2[size] * rbar;
        const rUcl = D4[size] * rbar;
        const rLcl = D3[size] * rbar;
        return {
            test: "X-bar and R chart",
            subgroupSize: size,
            subgroups: cleaned,
            xbars: xbars,
            ranges: ranges,
            center: xbarbar,
            ucl: xUcl,
            lcl: xLcl,
            rCenter: rbar,
            rUcl: rUcl,
            rLcl: rLcl,
            sigma: rbar / D2[size],
            signals: spcSignals(xbars, xbarbar, xUcl, xLcl)
        };
    }

    function pChart(defectives, sizes) {
        const defects = numbers(defectives);
        const lots = numbers(sizes);
        if (defects.length !== lots.length || defects.length < 2) throw new Error("Defective counts and sample sizes must be paired and have at least two rows.");
        const totalDefects = sum(defects);
        const totalInspected = sum(lots);
        if (totalInspected <= 0) throw new Error("Total inspected must be positive.");
        const pbar = totalDefects / totalInspected;
        const points = defects.map(function (count, index) {
            const sigma = Math.sqrt(pbar * (1 - pbar) / lots[index]);
            return {
                proportion: count / lots[index],
                ucl: Math.min(1, pbar + 3 * sigma),
                lcl: Math.max(0, pbar - 3 * sigma)
            };
        });
        return {
            test: "P chart",
            proportions: points.map(function (point) { return point.proportion; }),
            sizes: lots,
            center: pbar,
            points: points,
            signals: points.reduce(function (list, point, index) {
                if (point.proportion > point.ucl) list.push("Proportion " + (index + 1) + " is above its upper control limit.");
                if (point.proportion < point.lcl) list.push("Proportion " + (index + 1) + " is below its lower control limit.");
                return list;
            }, [])
        };
    }

    function capability(values, lsl, usl) {
        const data = numbers(values);
        if (data.length < 2) throw new Error("At least two observations are required.");
        const center = mean(data);
        const overall = sd(data);
        const mrBar = mean(movingRanges(data));
        const within = mrBar / D2[2];
        const cp = Number.isFinite(lsl) && Number.isFinite(usl) ? (usl - lsl) / (6 * within) : NaN;
        const cpkLow = Number.isFinite(lsl) ? (center - lsl) / (3 * within) : NaN;
        const cpkHigh = Number.isFinite(usl) ? (usl - center) / (3 * within) : NaN;
        const cpk = Number.isFinite(cpkLow) && Number.isFinite(cpkHigh) ? Math.min(cpkLow, cpkHigh) : (Number.isFinite(cpkLow) ? cpkLow : cpkHigh);
        const pp = Number.isFinite(lsl) && Number.isFinite(usl) ? (usl - lsl) / (6 * overall) : NaN;
        const ppkLow = Number.isFinite(lsl) ? (center - lsl) / (3 * overall) : NaN;
        const ppkHigh = Number.isFinite(usl) ? (usl - center) / (3 * overall) : NaN;
        const ppk = Number.isFinite(ppkLow) && Number.isFinite(ppkHigh) ? Math.min(ppkLow, ppkHigh) : (Number.isFinite(ppkLow) ? ppkLow : ppkHigh);
        const below = Number.isFinite(lsl) ? normalCdf((lsl - center) / overall) : 0;
        const above = Number.isFinite(usl) ? 1 - normalCdf((usl - center) / overall) : 0;
        const observedLow = Number.isFinite(lsl) ? data.filter(function (value) { return value < lsl; }).length : 0;
        const observedHigh = Number.isFinite(usl) ? data.filter(function (value) { return value > usl; }).length : 0;
        return {
            test: "Process capability",
            n: data.length,
            mean: center,
            overallSd: overall,
            withinSd: within,
            lsl: lsl,
            usl: usl,
            cp: cp,
            cpk: cpk,
            pp: pp,
            ppk: ppk,
            expectedPpm: (below + above) * 1e6,
            observedPpm: (observedLow + observedHigh) / data.length * 1e6,
            observedOut: observedLow + observedHigh,
            belowPpm: below * 1e6,
            abovePpm: above * 1e6
        };
    }

    function gageRR(rows, partKey, operatorKey, measurementKey) {
        const parts = [];
        const operators = [];
        const cells = new Map();
        rows.forEach(function (row) {
            const part = String(row[partKey]);
            const operator = String(row[operatorKey]);
            const value = parseFloat(row[measurementKey]);
            if (!part || !operator || !Number.isFinite(value)) return;
            if (!parts.includes(part)) parts.push(part);
            if (!operators.includes(operator)) operators.push(operator);
            const key = part + "\u0000" + operator;
            if (!cells.has(key)) cells.set(key, []);
            cells.get(key).push(value);
        });
        if (parts.length < 2 || operators.length < 2) throw new Error("At least two parts and two operators are required.");
        const trialCounts = Array.from(cells.values()).map(function (values) { return values.length; });
        const r = Math.min.apply(null, trialCounts);
        if (r < 2) throw new Error("Each part-operator combination needs at least two trials.");
        if (!trialCounts.every(function (count) { return count === r; })) throw new Error("The gage R&R design must be balanced.");
        const cellMeans = new Map();
        cells.forEach(function (values, key) { cellMeans.set(key, mean(values)); });
        const grand = mean(Array.from(cellMeans.values()));
        const partMeans = parts.map(function (part) {
            const values = operators.map(function (operator) { return cellMeans.get(part + "\u0000" + operator); });
            return mean(values.filter(Number.isFinite));
        });
        const operatorMeans = operators.map(function (operator) {
            const values = parts.map(function (part) { return cellMeans.get(part + "\u0000" + operator); });
            return mean(values.filter(Number.isFinite));
        });
        const ssPart = operators.length * r * sum(parts.map(function (_, index) { return Math.pow(partMeans[index] - grand, 2); }));
        const ssOperator = parts.length * r * sum(operators.map(function (_, index) { return Math.pow(operatorMeans[index] - grand, 2); }));
        let ssCell = 0;
        cells.forEach(function (values, key) {
            ssCell += values.length * Math.pow(cellMeans.get(key) - grand, 2);
        });
        const ssInteraction = Math.max(0, ssCell - ssPart - ssOperator);
        let ssTotal = 0;
        cells.forEach(function (values) { values.forEach(function (value) { ssTotal += Math.pow(value - grand, 2); }); });
        const ssError = Math.max(0, ssTotal - ssCell);
        const dfPart = parts.length - 1;
        const dfOperator = operators.length - 1;
        const dfInteraction = dfPart * dfOperator;
        const dfError = parts.length * operators.length * (r - 1);
        const msPart = ssPart / dfPart;
        const msOperator = ssOperator / dfOperator;
        const msInteraction = ssInteraction / dfInteraction;
        const msError = ssError / dfError;
        const ev = msError;
        const av = Math.max(0, (msOperator - msInteraction) / (parts.length * r));
        const interaction = Math.max(0, (msInteraction - msError) / r);
        const pv = Math.max(0, (msPart - msInteraction) / (operators.length * r));
        const grr = ev + av + interaction;
        const total = grr + pv;
        const percent = function (value) { return total ? value / total * 100 : 0; };
        const study = function (value) { return total ? Math.sqrt(value / total) * 100 : 0; };
        return {
            test: "Gage R&R (ANOVA)",
            parts: parts,
            operators: operators,
            trials: r,
            grandMean: grand,
            partMeans: partMeans,
            operatorMeans: operatorMeans,
            anova: [
                { source: "Part", df: dfPart, ss: ssPart, ms: msPart, f: msPart / msInteraction, p: fPValue(msPart / msInteraction, dfPart, dfInteraction) },
                { source: "Operator", df: dfOperator, ss: ssOperator, ms: msOperator, f: msOperator / msInteraction, p: fPValue(msOperator / msInteraction, dfOperator, dfInteraction) },
                { source: "Part x Operator", df: dfInteraction, ss: ssInteraction, ms: msInteraction, f: msInteraction / msError, p: fPValue(msInteraction / msError, dfInteraction, dfError) },
                { source: "Repeatability", df: dfError, ss: ssError, ms: msError, f: NaN, p: NaN },
                { source: "Total", df: dfPart + dfOperator + dfInteraction + dfError, ss: ssTotal, ms: NaN, f: NaN, p: NaN }
            ],
            components: {
                repeatability: ev,
                reproducibility: av,
                interaction: interaction,
                grr: grr,
                part: pv,
                total: total
            },
            percentContribution: {
                repeatability: percent(ev),
                reproducibility: percent(av + interaction),
                grr: percent(grr),
                part: percent(pv)
            },
            percentStudy: {
                repeatability: study(ev),
                reproducibility: study(av + interaction),
                grr: study(grr),
                part: study(pv)
            },
            ndc: grr ? 1.41 * Math.sqrt(pv / grr) : Infinity
        };
    }

    function fullFactorial(factors, replicates, randomize) {
        const validFactors = (factors || []).filter(function (factor) { return factor.name; });
        if (validFactors.length < 2) throw new Error("Define at least two factors.");
        if (validFactors.length > 6) throw new Error("This generator supports up to six factors.");
        const copies = Math.max(1, parseInt(replicates, 10) || 1);
        const rows = [];
        const total = Math.pow(2, validFactors.length);
        for (let replicate = 1; replicate <= copies; replicate += 1) {
            for (let combination = 0; combination < total; combination += 1) {
                const row = { Replicate: replicate, StdOrder: rows.length + 1 };
                validFactors.forEach(function (factor, index) {
                    row[factor.name] = (combination >> index) & 1 ? factor.high : factor.low;
                });
                row.RunOrder = rows.length + 1;
                rows.push(row);
            }
        }
        if (randomize !== false) {
            for (let index = rows.length - 1; index > 0; index -= 1) {
                const swap = Math.floor(Math.random() * (index + 1));
                const temp = rows[index];
                rows[index] = rows[swap];
                rows[swap] = temp;
            }
            rows.forEach(function (row, index) { row.RunOrder = index + 1; });
        }
        return { factors: validFactors, rows: rows, runs: rows.length };
    }

    function analyzeFactorial(rows, responseKey, factorNames) {
        if (!factorNames || factorNames.length < 2) throw new Error("Select at least two factors.");
        const filtered = rows.filter(function (row) {
            return Number.isFinite(parseFloat(row[responseKey])) &&
                factorNames.every(function (name) { return row[name] !== undefined && row[name] !== ""; });
        });
        if (filtered.length < 4) throw new Error("At least four complete runs are required.");
        const coded = factorNames.map(function (name) {
            const values = filtered.map(function (row) { return parseFloat(row[name]); });
            const low = Math.min.apply(null, values);
            const high = Math.max.apply(null, values);
            if (low === high) throw new Error("Factor " + name + " has only one level.");
            return values.map(function (value) { return ((value - low) / (high - low)) * 2 - 1; });
        });
        const response = filtered.map(function (row) { return parseFloat(row[responseKey]); });
        const result = regression(response, coded, factorNames, { interactions: true });
        const effects = result.terms.slice(1).map(function (term) {
            return { term: term.term, effect: 2 * term.coefficient, p: term.p };
        }).sort(function (a, b) { return Math.abs(b.effect) - Math.abs(a.effect); });
        return Object.assign({}, result, { test: "2-level factorial analysis", effects: effects, runs: filtered.length });
    }

    function sampleSizeMeans(delta, sigma, alpha, power, twoSided, twoSample) {
        const effect = Math.abs(delta);
        if (!effect || !sigma) throw new Error("Effect size and standard deviation must be positive.");
        const zAlpha = twoSided ? normalInv(1 - alpha / 2) : normalInv(1 - alpha);
        const zPower = normalInv(power);
        const n = Math.ceil(Math.pow((zAlpha + zPower) * sigma / effect, 2) * (twoSample ? 2 : 1));
        return { nPerGroup: Math.max(2, n), total: Math.max(2, n) * (twoSample ? 2 : 1), delta: effect, sigma: sigma, alpha: alpha, power: power };
    }

    function powerMeans(n, delta, sigma, alpha, twoSided, twoSample) {
        const effect = Math.abs(delta);
        const groups = twoSample ? 2 : 1;
        const ncp = effect / (sigma * Math.sqrt(groups / n));
        const critical = twoSided ? normalInv(1 - alpha / 2) : normalInv(1 - alpha);
        const power = twoSided
            ? 1 - normalCdf(critical - ncp) + normalCdf(-critical - ncp)
            : 1 - normalCdf(critical - ncp);
        return { nPerGroup: n, power: Math.min(1, Math.max(0, power)), delta: effect, sigma: sigma, alpha: alpha };
    }

    function sampleSizeProportions(p1, p2, alpha, power) {
        if (p1 === p2) throw new Error("The two proportions must differ.");
        const pbar = (p1 + p2) / 2;
        const zAlpha = normalInv(1 - alpha / 2);
        const zPower = normalInv(power);
        const numerator = Math.pow(zAlpha * Math.sqrt(2 * pbar * (1 - pbar)) + zPower * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
        const n = Math.ceil(numerator / Math.pow(p1 - p2, 2));
        return { nPerGroup: Math.max(2, n), total: Math.max(2, n) * 2, p1: p1, p2: p2, alpha: alpha, power: power };
    }

    function sampleSizeOneProportion(p0, p1, alpha, power) {
        if (p1 === p0) throw new Error("The null and alternative proportions must differ.");
        const zAlpha = normalInv(1 - alpha / 2);
        const zPower = normalInv(power);
        const numerator = Math.pow(zAlpha * Math.sqrt(p0 * (1 - p0)) + zPower * Math.sqrt(p1 * (1 - p1)), 2);
        const n = Math.ceil(numerator / Math.pow(p1 - p0, 2));
        return { n: Math.max(2, n), p0: p0, p1: p1, alpha: alpha, power: power };
    }

    function histogram(values, binCount) {
        const data = numbers(values);
        if (!data.length) throw new Error("No numeric data available.");
        const min = Math.min.apply(null, data);
        const max = Math.max.apply(null, data);
        const count = Math.max(3, Math.min(40, parseInt(binCount, 10) || Math.ceil(Math.sqrt(data.length))));
        const width = (max - min) / count || 1;
        const bins = Array.from({ length: count }, function (_, index) {
            return { low: min + index * width, high: min + (index + 1) * width, count: 0 };
        });
        data.forEach(function (value) {
            let index = Math.floor((value - min) / width);
            if (index >= count) index = count - 1;
            bins[index].count += 1;
        });
        return { bins: bins, min: min, max: max, width: width, count: count, n: data.length };
    }

    function boxStats(values) {
        const data = numbers(values);
        if (!data.length) throw new Error("No numeric data available.");
        const q1 = quantile(data, 0.25);
        const q2 = quantile(data, 0.5);
        const q3 = quantile(data, 0.75);
        const iqr = q3 - q1;
        const lowFence = q1 - 1.5 * iqr;
        const highFence = q3 + 1.5 * iqr;
        const inside = data.filter(function (value) { return value >= lowFence && value <= highFence; });
        return {
            min: Math.min.apply(null, data),
            max: Math.max.apply(null, data),
            q1: q1,
            median: q2,
            q3: q3,
            iqr: iqr,
            lowWhisker: Math.min.apply(null, inside),
            highWhisker: Math.max.apply(null, inside),
            outliers: data.filter(function (value) { return value < lowFence || value > highFence; })
        };
    }

    function pareto(categories) {
        const counts = new Map();
        categories.forEach(function (value) {
            const key = String(value === undefined || value === null || value === "" ? "(blank)" : value);
            counts.set(key, (counts.get(key) || 0) + 1);
        });
        const total = categories.length;
        const items = Array.from(counts.entries()).map(function (entry) {
            return { label: entry[0], count: entry[1], percent: total ? entry[1] / total * 100 : 0 };
        }).sort(function (a, b) { return b.count - a.count; });
        let cumulative = 0;
        items.forEach(function (item) {
            cumulative += item.percent;
            item.cumulative = cumulative;
        });
        return items;
    }

    function normalProbabilityPlot(values) {
        const data = sorted(numbers(values));
        if (data.length < 3) throw new Error("At least three observations are required.");
        const points = data.map(function (value, index) {
            const probability = (index + 0.375) / (data.length + 0.25);
            return { value: value, z: normalInv(probability), probability: probability };
        });
        const xs = points.map(function (point) { return point.value; });
        const ys = points.map(function (point) { return point.z; });
        const mx = mean(xs);
        const my = mean(ys);
        let numerator = 0;
        let xVariance = 0;
        let yVariance = 0;
        for (let index = 0; index < xs.length; index += 1) {
            numerator += (xs[index] - mx) * (ys[index] - my);
            xVariance += Math.pow(xs[index] - mx, 2);
            yVariance += Math.pow(ys[index] - my, 2);
        }
        const slope = numerator / xVariance;
        const intercept = my - slope * mx;
        return { points: points, slope: slope, intercept: intercept, correlation: numerator / Math.sqrt(xVariance * yVariance) };
    }

    function correlation(first, second) {
        const a = numbers(first);
        const b = numbers(second);
        const n = Math.min(a.length, b.length);
        if (n < 3) throw new Error("At least three paired observations are required.");
        const ma = mean(a.slice(0, n));
        const mb = mean(b.slice(0, n));
        let numerator = 0;
        let va = 0;
        let vb = 0;
        for (let index = 0; index < n; index += 1) {
            numerator += (a[index] - ma) * (b[index] - mb);
            va += Math.pow(a[index] - ma, 2);
            vb += Math.pow(b[index] - mb, 2);
        }
        return numerator / Math.sqrt(va * vb);
    }

    function binomialPmf(k, n, p) {
        if (k < 0 || k > n || p < 0 || p > 1) return 0;
        return Math.exp(logGamma(n + 1) - logGamma(k + 1) - logGamma(n - k + 1) + k * Math.log(p || 1e-300) + (n - k) * Math.log(1 - p || 1e-300));
    }

    function binomialCdf(k, n, p) {
        let total = 0;
        for (let index = 0; index <= Math.floor(k); index += 1) total += binomialPmf(index, n, p);
        return Math.min(1, total);
    }

    function poissonPmf(k, lambda) {
        if (k < 0 || lambda < 0) return 0;
        return Math.exp(-lambda + k * Math.log(lambda || 1e-300) - logGamma(k + 1));
    }

    function poissonCdf(k, lambda) {
        let total = 0;
        for (let index = 0; index <= Math.floor(k); index += 1) total += poissonPmf(index, lambda);
        return Math.min(1, total);
    }

    function exponentialPdf(x, rate) {
        return x < 0 || rate <= 0 ? 0 : rate * Math.exp(-rate * x);
    }

    function exponentialCdf(x, rate) {
        return x < 0 || rate <= 0 ? 0 : 1 - Math.exp(-rate * x);
    }

    function weibullPdf(x, shape, scale) {
        if (x < 0 || shape <= 0 || scale <= 0) return 0;
        return (shape / scale) * Math.pow(x / scale, shape - 1) * Math.exp(-Math.pow(x / scale, shape));
    }

    function weibullCdf(x, shape, scale) {
        if (x < 0 || shape <= 0 || scale <= 0) return 0;
        return 1 - Math.exp(-Math.pow(x / scale, shape));
    }

    function parseDelimited(text) {
        const source = String(text || "").replace(/^\uFEFF/, "");
        if (!source.trim()) return { headers: [], rows: [] };
        const firstLine = source.split(/\r?\n/)[0];
        const delimiters = [",", "\t", ";"];
        const delimiter = delimiters.reduce(function (best, candidate) {
            const count = firstLine.split(candidate).length;
            return count > best.count ? { value: candidate, count: count } : best;
        }, { value: ",", count: 0 }).value;
        const rows = [];
        let row = [];
        let field = "";
        let quoted = false;
        for (let index = 0; index < source.length; index += 1) {
            const character = source[index];
            if (quoted) {
                if (character === '"' && source[index + 1] === '"') {
                    field += '"';
                    index += 1;
                } else if (character === '"') {
                    quoted = false;
                } else {
                    field += character;
                }
            } else if (character === '"') {
                quoted = true;
            } else if (character === delimiter) {
                row.push(field);
                field = "";
            } else if (character === "\n") {
                row.push(field);
                rows.push(row);
                row = [];
                field = "";
            } else if (character !== "\r") {
                field += character;
            }
        }
        if (field !== "" || row.length) {
            row.push(field);
            rows.push(row);
        }
        const headers = (rows.shift() || []).map(function (header, index) {
            const clean = String(header).trim() || "Column " + (index + 1);
            return clean;
        });
        const uniqueHeaders = [];
        headers.forEach(function (header) {
            let candidate = header;
            let suffix = 2;
            while (uniqueHeaders.includes(candidate)) {
                candidate = header + " " + suffix;
                suffix += 1;
            }
            uniqueHeaders.push(candidate);
        });
        return {
            headers: uniqueHeaders,
            rows: rows.filter(function (values) { return values.some(function (value) { return String(value).trim() !== ""; }); })
                .map(function (values) {
                    return uniqueHeaders.map(function (_, index) { return values[index] === undefined ? "" : values[index]; });
                })
        };
    }

    function toCsv(headers, rows) {
        const escape = function (value) {
            const text = value === undefined || value === null ? "" : String(value);
            return /[",\n\r]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
        };
        return [headers.map(escape).join(",")].concat(rows.map(function (row) {
            return headers.map(function (_, index) { return escape(row[index]); }).join(",");
        })).join("\n");
    }

    function inferType(values) {
        const present = values.filter(function (value) { return String(value).trim() !== ""; });
        if (!present.length) return "text";
        const numeric = present.filter(function (value) { return Number.isFinite(parseFloat(value)); }).length;
        return numeric / present.length >= 0.8 ? "numeric" : "text";
    }

    const api = {
        numbers: numbers,
        sum: sum,
        mean: mean,
        variance: variance,
        sd: sd,
        median: median,
        quantile: quantile,
        mode: mode,
        skewness: skewness,
        kurtosis: kurtosis,
        summarize: summarize,
        normalPdf: normalPdf,
        normalCdf: normalCdf,
        normalInv: normalInv,
        tCdf: tCdf,
        tPValue: tPValue,
        tInv: tInv,
        fCdf: fCdf,
        fPValue: fPValue,
        chiSquareCdf: chiSquareCdf,
        chiSquarePValue: chiSquarePValue,
        oneSampleT: oneSampleT,
        twoSampleT: twoSampleT,
        pairedT: pairedT,
        oneProportion: oneProportion,
        twoProportion: twoProportion,
        chiSquareColumns: chiSquareColumns,
        oneWayAnova: oneWayAnova,
        regression: regression,
        logisticRegression: logisticRegression,
        individualsChart: individualsChart,
        xbarRChart: xbarRChart,
        pChart: pChart,
        capability: capability,
        gageRR: gageRR,
        fullFactorial: fullFactorial,
        analyzeFactorial: analyzeFactorial,
        sampleSizeMeans: sampleSizeMeans,
        powerMeans: powerMeans,
        sampleSizeProportions: sampleSizeProportions,
        sampleSizeOneProportion: sampleSizeOneProportion,
        histogram: histogram,
        boxStats: boxStats,
        pareto: pareto,
        normalProbabilityPlot: normalProbabilityPlot,
        correlation: correlation,
        binomialPmf: binomialPmf,
        binomialCdf: binomialCdf,
        poissonPmf: poissonPmf,
        poissonCdf: poissonCdf,
        exponentialPdf: exponentialPdf,
        exponentialCdf: exponentialCdf,
        weibullPdf: weibullPdf,
        weibullCdf: weibullCdf,
        parseDelimited: parseDelimited,
        toCsv: toCsv,
        inferType: inferType
    };

    if (typeof module !== "undefined" && module.exports) module.exports = api;
    root.StatsEngine = api;
}(typeof globalThis !== "undefined" ? globalThis : this));
