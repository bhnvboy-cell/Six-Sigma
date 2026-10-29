// Lean Six Sigma Calculators - JavaScript Implementation

// Inverse standard normal CDF (Acklam approximation), used for sigma level.
function normalInverseCdf(p) {
    if (p <= 0) return -Infinity;
    if (p >= 1) return Infinity;
    const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
    const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
    const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
    const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
    const low = 0.02425;
    const high = 1 - low;
    let q, r;
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

// Basic Statistics Calculator
function calculateBasicStats() {
    const dataInput = document.getElementById('basicData').value;
    if (!dataInput.trim()) {
        alert('Please enter data');
        return;
    }
    
    // Parse comma-separated values
    const dataStr = dataInput.split(',').map(x => x.trim()).filter(x => x !== '');
    const data = dataStr.map(x => parseFloat(x)).filter(x => !isNaN(x));
    
    if (data.length === 0) {
        alert('Please enter valid numeric data');
        return;
    }
    
    // Calculate mean
    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    
    // Calculate median
    const sortedData = [...data].sort((a, b) => a - b);
    let median;
    if (sortedData.length % 2 === 1) {
        median = sortedData[Math.floor(sortedData.length / 2)];
    } else {
        median = (sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2;
    }
    
    // Calculate mode
    const frequency = {};
    let maxFreq = 0;
    let modes = [];
    for (let num of data) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }
    for (let num in frequency) {
        if (frequency[num] === maxFreq && maxFreq > 1) {
            modes.push(parseFloat(num));
        }
    }
    const mode = modes.length > 0 ? modes.join(', ') : 'No mode';
    
    // Calculate standard deviation (sample)
    const variance = data.length > 1
        ? data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (data.length - 1)
        : 0;
    const stdDev = Math.sqrt(variance);
    
    // Calculate range
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    // Display results
    document.getElementById('meanResult').textContent = formatNumber(mean);
    document.getElementById('medianResult').textContent = formatNumber(median);
    document.getElementById('modeResult').textContent = mode;
    document.getElementById('stdResult').textContent = formatNumber(stdDev);
    document.getElementById('rangeResult').textContent = formatNumber(range);
    document.getElementById('minResult').textContent = formatNumber(min);
    document.getElementById('maxResult').textContent = formatNumber(max);
}

// Process Capability Calculator
function calculateCapability() {
    const usl = parseFloat(document.getElementById('usl').value);
    const lsl = parseFloat(document.getElementById('lsl').value);
    const mean = parseFloat(document.getElementById('meanCap').value);
    const sigma = parseFloat(document.getElementById('sigmaCap').value);
    
    if (isNaN(usl) || isNaN(lsl) || isNaN(mean) || isNaN(sigma)) {
        alert('Please enter all values');
        return;
    }
    
    if (sigma <= 0) {
        alert('Standard deviation must be greater than 0');
        return;
    }

    if (usl <= lsl) {
        alert('Upper specification limit must be greater than the lower specification limit');
        return;
    }
    
    // Calculate Cp
    const cp = (usl - lsl) / (6 * sigma);
    
    // Calculate CPU and CPL
    const cpu = (usl - mean) / (3 * sigma);
    const cpl = (mean - lsl) / (3 * sigma);
    
    // Calculate Cpk
    const cpk = Math.min(cpu, cpl);
    
    // Display results
    document.getElementById('cpResult').textContent = formatNumber(cp);
    document.getElementById('cpkResult').textContent = formatNumber(cpk);
    document.getElementById('cpuResult').textContent = formatNumber(cpu);
    document.getElementById('cplResult').textContent = formatNumber(cpl);
    
    // Interpretation
    let interpretation = '';
    if (cpk >= 1.33) {
        interpretation = '<span class="text-success"><strong>Capable</strong> - Process meets specifications well (Cpk ≥ 1.33)</span>';
    } else if (cpk >= 1.0) {
        interpretation = '<span class="text-warning"><strong>Marginally Capable</strong> - Process is borderline (1.0 ≤ Cpk < 1.33)</span>';
    } else {
        interpretation = '<span class="text-danger"><strong>Not Capable</strong> - Process does not meet specifications (Cpk < 1.0)</span>';
    }
    document.getElementById('capInterpretation').innerHTML = interpretation;
}

// DPMO Calculator
function calculateDPMO() {
    const defects = parseFloat(document.getElementById('defects').value);
    const opportunities = parseFloat(document.getElementById('opportunities').value);
    const units = parseFloat(document.getElementById('units').value);
    
    if (isNaN(defects) || isNaN(opportunities) || isNaN(units)) {
        alert('Please enter all values');
        return;
    }
    
    if (opportunities <= 0 || units <= 0) {
        alert('Opportunities and units must be greater than 0');
        return;
    }
    
    const totalOpportunities = opportunities * units;
    const dpmo = (defects / totalOpportunities) * 1000000;
    
    // Sigma level with the traditional 1.5 sigma long-term shift.
    const yieldFraction = Math.max(Math.min(1 - dpmo / 1000000, 0.999999999), 0.000000001);
    const sigmaLevel = normalInverseCdf(yieldFraction) + 1.5;
    
    document.getElementById('totalOpp').textContent = totalOpportunities.toLocaleString();
    document.getElementById('dpmoResult').textContent = dpmo.toFixed(1);
    document.getElementById('sigmaLevelResult').textContent = Math.max(sigmaLevel, 0).toFixed(2);
}

// Takt Time Calculator
function calculateTaktTime() {
    const availableTime = parseFloat(document.getElementById('availableTime').value);
    const customerDemand = parseFloat(document.getElementById('customerDemand').value);
    
    if (isNaN(availableTime) || isNaN(customerDemand)) {
        alert('Please enter all values');
        return;
    }
    
    if (customerDemand <= 0) {
        alert('Customer demand must be greater than 0');
        return;
    }
    
    const taktTimeMin = availableTime / customerDemand;
    const taktTimeSec = taktTimeMin * 60;
    
    document.getElementById('taktTimeResult').textContent = taktTimeMin.toFixed(3);
    document.getElementById('taktTimeSec').textContent = taktTimeSec.toFixed(1);
}
