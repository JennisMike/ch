// API Client for Neon Database Integration
// Replaces localStorage calls with fetch() to server

class ApiClient {
    constructor(baseUrl = '/api') {
        this.baseUrl = baseUrl;
    }

    // Generic API call method
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const config = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'API request failed');
            }
            
            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // User API methods
    async register(userData) {
        return await this.request('/signup', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    async login(email, password, userType = 'user') {
        return await this.request('/login', {
            method: 'POST',
            body: JSON.stringify({ email, password, userType })
        });
    }

    async getUser(userId) {
        return await this.request(`/users/${userId}`);
    }

    async getAllUsers() {
        return await this.request('/users');
    }

    async updateUser(userId, userData) {
        return await this.request(`/users/${userId}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    async deleteUser(userId) {
        return await this.request(`/users/${userId}`, {
            method: 'DELETE'
        });
    }

    // City API methods
    async getCities() {
        return await this.request('/cities');
    }

    async getCity(cityId) {
        return await this.request(`/cities/${cityId}`);
    }

    async saveCity(cityData) {
        return await this.request('/cities', {
            method: 'POST',
            body: JSON.stringify(cityData)
        });
    }

    // Landmark API methods
    async getLandmarks(cityId) {
        return await this.request(`/landmarks${cityId ? `/${cityId}` : ''}`);
    }

    async saveLandmark(landmarkData) {
        return await this.request('/landmarks', {
            method: 'POST',
            body: JSON.stringify(landmarkData)
        });
    }

    // Translation API methods
    async getTranslations() {
        return await this.request('/translations');
    }

    async saveTranslation(translationData) {
        return await this.request('/translations', {
            method: 'POST',
            body: JSON.stringify(translationData)
        });
    }
}

// Initialize and export
const apiClient = new ApiClient();

// Export for global use
window.ApiClient = ApiClient;
window.apiClient = apiClient;
