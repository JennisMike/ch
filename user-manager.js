// User Management System for Chinese Heritage Website
// Refactored to use Neon API instead of localStorage
class UserManager {
    constructor() {
        this.currentUser = this.loadCurrentUser();
        this.useNeon = true; // Enable Neon database
        this.apiClient = window.apiClient;
    }

    // Load users from localStorage
    loadUsers() {
        const usersData = localStorage.getItem('chineseHeritageUsers');
        return usersData ? JSON.parse(usersData) : [];
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('chineseHeritageUsers', JSON.stringify(this.users));
    }

    // Load current logged-in user
    loadCurrentUser() {
        const userData = localStorage.getItem('chineseHeritageCurrentUser');
        return userData ? JSON.parse(userData) : null;
    }

    // Save current logged-in user
    saveCurrentUser(user) {
        if (user) {
            localStorage.setItem('chineseHeritageCurrentUser', JSON.stringify(user));
        } else {
            localStorage.removeItem('chineseHeritageCurrentUser');
        }
    }

    // Register new user using Neon API
    async register(userData) {
        const { fullName, email, password, confirmPassword } = userData;

        // Validation
        if (!fullName || !email || !password) {
            return { success: false, message: 'All fields are required!' };
        }

        if (password !== confirmPassword) {
            return { success: false, message: 'Passwords do not match!' };
        }

        if (password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters!' };
        }

        try {
            // Use API client for registration
            const result = await this.apiClient.register({
                fullName,
                email,
                password,
                confirmPassword
            });

            if (result.success) {
                // Save current user session
                this.saveCurrentUser(result.user);
                return { 
                    success: true, 
                    message: 'Account created successfully!',
                    user: result.user
                };
            } else {
                return result;
            }
        } catch (error) {
            console.error('Registration failed:', error);
            return { 
                success: false, 
                message: error.message || 'Registration failed'
            };
        }
    }

    // Login user using Neon API
    async login(email, password, userType = 'user') {
        try {
            // Use API client for login
            const result = await this.apiClient.login(email, password, userType);

            if (result.success) {
                // Save current user session
                this.saveCurrentUser(result.user);
                return { 
                    success: true, 
                    message: 'Login successful!',
                    user: result.user,
                    userType: userType
                };
            } else {
                return result;
            }
        } catch (error) {
            console.error('Login failed:', error);
            return { 
                success: false, 
                message: error.message || 'Login failed'
            };
        }
    }

    // Logout user
    logout() {
        this.currentUser = null;
        this.saveCurrentUser(null);
        return { success: true, message: 'Logged out successfully!' };
    }

    // Get current user
    getCurrentUser() {
        return this.currentUser;
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Update user profile
    updateProfile(updates) {
        if (!this.currentUser) {
            return { success: false, message: 'No user logged in!' };
        }

        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex === -1) {
            return { success: false, message: 'User not found!' };
        }

        // Update user data
        this.users[userIndex] = { ...this.users[userIndex], ...updates };
        this.currentUser = this.sanitizeUser(this.users[userIndex]);
        this.saveUsers();
        this.saveCurrentUser(this.currentUser);

        return { success: true, message: 'Profile updated successfully!', user: this.currentUser };
    }

    // Get all users (for admin)
    getAllUsers() {
        return this.users.map(user => this.sanitizeUser(user));
    }

    // Delete user account
    deleteAccount() {
        if (!this.currentUser) {
            return { success: false, message: 'No user logged in!' };
        }

        const userIndex = this.users.findIndex(u => u.id === this.currentUser.id);
        if (userIndex === -1) {
            return { success: false, message: 'User not found!' };
        }

        this.users.splice(userIndex, 1);
        this.saveUsers();
        this.logout();

        return { success: true, message: 'Account deleted successfully!' };
    }

    // Simple password hashing (for demo - use bcrypt in production)
    hashPassword(password) {
        return btoa(password + 'chinese-heritage-salt');
    }

    // Simple password verification
    verifyPassword(password, hash) {
        return this.hashPassword(password) === hash;
    }

    // Remove sensitive data from user object
    sanitizeUser(user) {
        const { password, ...safeUser } = user;
        return safeUser;
    }

    // Get user statistics
    getUserStats() {
        return {
            totalUsers: this.users.length,
            recentUsers: this.users.filter(u => {
                const createdDate = new Date(u.createdAt);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return createdDate > weekAgo;
            }).length,
            activeUsers: this.users.filter(u => u.lastLogin).length
        };
    }
}

// Initialize user manager
window.userManager = new UserManager();

// Auto-login if remember me was checked
window.addEventListener('load', function() {
    const rememberedUser = localStorage.getItem('rememberUser');
    if (rememberedUser) {
        const emailInput = document.getElementById('email');
        const rememberCheckbox = document.getElementById('remember');
        if (emailInput) emailInput.value = rememberedUser;
        if (rememberCheckbox) rememberCheckbox.checked = true;
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserManager;
}
