document.addEventListener('DOMContentLoaded', function() {
    try {
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        }
    } catch (e) {
        console.warn('Tooltip initialization skipped:', e);
    }
    checkLoginStatus();
    enforceLandingAuth();
});

function enforceLandingAuth() {
    if (!document.body || document.body.getAttribute('data-require-login') !== 'true') return;
    window.sessionReady.then(function (state) {
        if (!state || !state.user) window.location.replace('login.html');
    }).catch(function () {
        window.location.replace('login.html');
    });
}

function readUser() {
    try {
        const user = localStorage.getItem('lss_user');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        return null;
    }
}

function checkLoginStatus() {
    const user = readUser();
    const loginLinks = document.querySelectorAll('a[href="login.html"]');
    if (!user) return;
    loginLinks.forEach(function (link) {
        link.innerHTML = '<i class="fas fa-user"></i> ' + (user.firstName || user.username || 'Profile');
        link.href = 'profile.html';
    });
}

function saveUser(userData) {
    try {
        localStorage.setItem('lss_user', JSON.stringify(userData));
    } catch (error) {
        console.warn('Unable to persist user to localStorage:', error);
    }
}

function getCurrentUser() {
    return readUser();
}

async function hydrateSession() {
    let cached = null;
    try {
        cached = readUser();
    } catch (e) {}

    if (!window.LssApi || !navigator.onLine) {
        return { mode: 'offline', user: cached };
    }
    let offlineUntil = 0;
    try {
        offlineUntil = Number(sessionStorage.getItem('lss_api_offline_until') || 0);
    } catch (e) {}

    if (offlineUntil > Date.now()) {
        return { mode: 'offline', user: cached };
    }
    try {
        const payload = await window.LssApi.me();
        const previous = cached || {};
        const user = Object.assign({}, payload.user, { authMode: 'api' });
        const offlineId = previous.authMode === 'offline' ? previous.userId : previous.offlineUserId;
        if (offlineId) user.offlineUserId = offlineId;
        if (previous.offlineBeltLevel) user.offlineBeltLevel = previous.offlineBeltLevel;
        if (previous.pendingMigration) user.pendingMigration = true;
        if (previous.migrationDoneAt) user.migrationDoneAt = previous.migrationDoneAt;
        saveUser(user);
        try { sessionStorage.removeItem('lss_api_offline_until'); } catch (e) {}
        return { mode: 'api', user: user };
    } catch (error) {
        if (error.status === 401) {
            if (cached && cached.authMode === 'api') {
                try { localStorage.removeItem('lss_user'); } catch (e) {}
            }
            return { mode: 'signed-out', user: cached && cached.authMode === 'offline' ? cached : null };
        }
        try { sessionStorage.setItem('lss_api_offline_until', String(Date.now() + 15000)); } catch (e) {}
        return { mode: 'offline', user: cached, error: error };
    }
}

const sessionReady = hydrateSession();
window.sessionReady = sessionReady;

async function logout() {
    if (window.LssApi) {
        try {
            await window.LssApi.logout();
        } catch (error) {
            if (!window.LssApi.isUnavailable(error)) console.warn(error.message);
        }
    }
    localStorage.removeItem('lss_user');
    localStorage.setItem('lss_belt_level', 'white');
    window.location.href = 'index.html';
}

function trackProgress(moduleId, status) {
    const user = getCurrentUser();
    if (!user) {
        alert('Please login to track progress');
        return;
    }
    const progress = JSON.parse(localStorage.getItem('lss_progress') || '{}');
    if (!progress[user.userId]) {
        progress[user.userId] = {};
    }
    progress[user.userId][moduleId] = {
        status: status,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('lss_progress', JSON.stringify(progress));
}

function getUserProgress(userId) {
    const progress = JSON.parse(localStorage.getItem('lss_progress') || '{}');
    return progress[userId] || {};
}

function formatNumber(num) {
    if (isNaN(num)) return 'N/A';
    return Number(num).toFixed(3);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}
