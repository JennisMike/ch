// API endpoint for users
// /api/users

const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function GET(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    try {
        const url = new URL(request.url);
        const userId = url.pathname.split('/')[3];

        if (userId) {
            // Get single user
            const result = await sql`
                SELECT id, full_name, email, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at 
                FROM users 
                WHERE id = ${userId}
            `;
            
            if (result.length > 0) {
                return response.json({ success: true, user: result[0] });
            } else {
                return response.status(404).json({ error: 'User not found' });
            }
        } else {
            // Get all users
            const result = await sql`
                SELECT id, full_name, email, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at 
                FROM users 
                ORDER BY created_at DESC
            `;
            
            return response.json({ success: true, users: result });
        }
    } catch (error) {
        console.error('Users GET error:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}

async function POST(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    try {
        const { fullName, email, password, avatar, bio, favoriteCities } = await request.json();
        
        const result = await sql`
            INSERT INTO users (full_name, email, password_hash, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at)
            VALUES (${fullName}, ${email}, ${hashPassword(password)}, ${avatar || 'NULL'}, ${bio || 'NULL'}, ${favoriteCities || 'NULL'}, 0, 0, CURRENT_TIMESTAMP)
            RETURNING id, full_name, email, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at
        `;
        
        return response.json({ 
            success: true, 
            message: 'User created successfully',
            user: result[0]
        });
    } catch (error) {
        console.error('Users POST error:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}

function hashPassword(password) {
    return btoa(password + 'salt');
}

module.exports = {
    GET,
    POST
};
