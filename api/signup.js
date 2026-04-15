// API endpoint for user registration
// /api/signup

const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function POST(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    try {
        const { fullName, email, password, confirmPassword } = await request.json();

        // Validation
        if (!fullName || !email || !password) {
            return response.status(400).json({ 
                success: false, 
                message: 'All fields are required!' 
            });
        }

        if (password !== confirmPassword) {
            return response.status(400).json({ 
                success: false, 
                message: 'Passwords do not match!' 
            });
        }

        if (password.length < 6) {
            return response.status(400).json({ 
                success: false, 
                message: 'Password must be at least 6 characters!' 
            });
        }

        // Check if user exists
        const existingUser = await sql`
            SELECT id FROM users WHERE email = ${email}
        `;

        if (existingUser.length > 0) {
            return response.status(409).json({ 
                success: false, 
                message: 'User with this email already exists!' 
            });
        }

        // Create new user
        const result = await sql`
            INSERT INTO users (full_name, email, password_hash, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at)
            VALUES (${fullName}, ${email}, ${hashPassword(password)}, 'https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=BB1E1E&color=FFD700&size=128', 'Exploring Chinese architectural heritage', '[]', 0, 0, CURRENT_TIMESTAMP)
            RETURNING id, full_name, email, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at
        `;

        return response.json({ 
            success: true, 
            message: 'Account created successfully!',
            user: result[0]
        });

    } catch (error) {
        console.error('Signup error:', error);
        response.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
}

function hashPassword(password) {
    return btoa(password + 'salt');
}

module.exports = {
    POST
};
