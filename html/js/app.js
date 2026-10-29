// Lean Six Sigma Training Course - Main JavaScript
// Global functions and utilities

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Check user login status
    checkLoginStatus();
});

// Check if user is logged in
function checkLoginStatus() {
    const user = localStorage.getItem('lss_user');
    const loginNav = document.querySelector('a[href="login.html"]');
    
    if (user && loginNav) {
        const userData = JSON.parse(user);
        loginNav.innerHTML = `<i class="fas fa-user"></i> ${userData.firstName || userData.username}`;
        loginNav.href = 'profile.html';
    }
}

// Save user to localStorage
function saveUser(userData) {
    localStorage.setItem('lss_user', JSON.stringify(userData));
}

// Get current user
function getCurrentUser() {
    const user = localStorage.getItem('lss_user');
    return user ? JSON.parse(user) : null;
}

// Logout user
function logout() {
    localStorage.removeItem('lss_user');
    window.location.href = 'index.html';
}

// Track module progress
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

// Get user progress
function getUserProgress(userId) {
    const progress = JSON.parse(localStorage.getItem('lss_progress') || '{}');
    return progress[userId] || {};
}

// Format numbers to 3 decimal places
function formatNumber(num) {
    if (isNaN(num)) return 'N/A';
    return Number(num).toFixed(3);
}

// Validate form inputs
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show alert message
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
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
}
