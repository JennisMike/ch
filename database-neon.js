// Neon Database Configuration and Connection
// This file handles database operations for the Chinese Heritage website

const neonConfig = {
    // Neon Database Connection Details
    connectionString: 'postgresql://username:password@ep-soft-salad-123456.us-east-1.aws.neon.tech/dbname?sslmode=require',
    
    // Database Schema
    schema: {
        users: `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                avatar_url VARCHAR(500),
                bio TEXT,
                favorite_cities TEXT[],
                tours_completed INTEGER DEFAULT 0,
                login_count INTEGER DEFAULT 0,
                last_login TIMESTAMP,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        
        cities: `
            CREATE TABLE IF NOT EXISTS cities (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                chinese_name VARCHAR(100),
                description TEXT,
                center_lat DECIMAL(10, 8),
                center_lng DECIMAL(11, 8),
                zoom_level INTEGER DEFAULT 12,
                featured_image VARCHAR(500),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        
        landmarks: `
            CREATE TABLE IF NOT EXISTS landmarks (
                id SERIAL PRIMARY KEY,
                city_id INTEGER REFERENCES cities(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                chinese_name VARCHAR(255),
                description TEXT,
                latitude DECIMAL(10, 8),
                longitude DECIMAL(11, 8),
                category VARCHAR(50), -- 'temple', 'palace', 'garden', 'wall', etc.
                image_url VARCHAR(500),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        
        translations: `
            CREATE TABLE IF NOT EXISTS translations (
                id SERIAL PRIMARY KEY,
                key VARCHAR(255) UNIQUE NOT NULL,
                english TEXT NOT NULL,
                chinese TEXT,
                arabic TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        
        user_sessions: `
            CREATE TABLE IF NOT EXISTS user_sessions (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                session_token VARCHAR(255) UNIQUE NOT NULL,
                expires_at TIMESTAMP NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `,
        
        site_content: `
            CREATE TABLE IF NOT EXISTS site_content (
                id SERIAL PRIMARY KEY,
                page VARCHAR(100) NOT NULL,
                section VARCHAR(100),
                content_key VARCHAR(255),
                content_value TEXT,
                language VARCHAR(10) DEFAULT 'en',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
    }
};

// Database Connection Class
class NeonDatabase {
    constructor() {
        this.connection = null;
        this.isConnected = false;
    }

    // Connect to Neon database
    async connect() {
        try {
            // For client-side, we'll use a REST API approach
            // In production, this would be a server-side connection
            console.log('Neon database connection initialized');
            this.isConnected = true;
            return true;
        } catch (error) {
            console.error('Database connection failed:', error);
            this.isConnected = false;
            return false;
        }
    }

    // Execute query (simulated for client-side)
    async query(sql, params = []) {
        if (!this.isConnected) {
            throw new Error('Database not connected');
        }

        // Simulate database queries with localStorage for now
        // In production, this would be actual SQL queries
        console.log('Executing query:', sql, params);
        
        switch (sql.split(' ')[0].toUpperCase()) {
            case 'INSERT':
                return this.handleInsert(sql, params);
            case 'SELECT':
                return this.handleSelect(sql, params);
            case 'UPDATE':
                return this.handleUpdate(sql, params);
            case 'DELETE':
                return this.handleDelete(sql, params);
            default:
                return { success: false, message: 'Unsupported query type' };
        }
    }

    // Handle INSERT operations
    handleInsert(sql, params) {
        const table = this.extractTable(sql);
        const data = this.extractInsertData(sql, params);
        
        // Store in localStorage with table prefix
        const key = `neon_${table}_${Date.now()}`;
        localStorage.setItem(key, JSON.stringify(data));
        
        return { 
            success: true, 
            id: Date.now(),
            message: `${table} record created successfully`
        };
    }

    // Handle SELECT operations
    handleSelect(sql, params) {
        const table = this.extractTable(sql);
        
        // Retrieve from localStorage
        const keys = Object.keys(localStorage).filter(key => key.startsWith(`neon_${table}_`));
        const results = keys.map(key => {
            const data = JSON.parse(localStorage.getItem(key));
            return { ...data, id: parseInt(key.split('_')[2]) };
        });
        return {
            success: true,
            rows: results,
            rowCount: results.length
        };
    }

    // Handle UPDATE operations
    handleUpdate(sql, params) {
        const table = this.extractTable(sql);
        const data = this.extractUpdateData(sql, params);
        
        // Update in localStorage
        const keys = Object.keys(localStorage).filter(key => key.startsWith(`neon_${table}_`));
        if (keys.length > 0) {
            const key = keys[0]; // Update first record
            localStorage.setItem(key, JSON.stringify({ ...JSON.parse(localStorage.getItem(key)), ...data }));
        }

        return { 
            success: true, 
            message: `${table} record updated successfully`
        };
    }

    // Handle DELETE operations
    handleDelete(sql, params) {
        const table = this.extractTable(sql);
        
        // Delete from localStorage
        const keys = Object.keys(localStorage).filter(key => key.startsWith(`neon_${table}_`));
        keys.forEach(key => localStorage.removeItem(key));

        return { 
            success: true, 
            message: `${table} record deleted successfully`
        };
    }

    // Extract table name from SQL
    extractTable(sql) {
        const match = sql.match(/(?:FROM|INTO|UPDATE)\s+(\w+)/i);
        return match ? match[1] : 'unknown';
    }

    // Extract data from INSERT statement
    extractInsertData(sql, params) {
        const columns = sql.match(/\(([^)]+)\)/)[1].split(',').map(col => col.trim());
        const data = {};
        
        columns.forEach((col, index) => {
            data[col] = params[index];
        });
        
        return data;
    }

    // Extract data from UPDATE statement
    extractUpdateData(sql, params) {
        const setMatches = sql.match(/SET\s+(.+?)(?:\s+WHERE|\s*$)/i);
        if (!setMatches) return {};
        
        const setData = setMatches[1];
        const data = {};
        
        // Simple parsing for SET clause
        const pairs = setData.split(',');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=').map(s => s.trim());
            data[key] = value.replace(/['"]/g, ''); // Remove quotes
        });
        
        return data;
    }

    // Close connection
    async disconnect() {
        this.isConnected = false;
        console.log('Database connection closed');
    }
}

// Initialize database instance
const neonDB = new NeonDatabase();

// Export for use in other files
window.NeonDatabase = NeonDatabase;
window.neonDB = neonDB;
