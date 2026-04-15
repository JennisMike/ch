// API endpoint for user login
// /api/login

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
        const { email, password, userType = 'user' } = await request.json();

        if (!email || !password) {
            return response.status(400).json({ 
                success: false, 
                message: 'Email and password are required!' 
            });
        }

        // Admin check
        if (userType === 'admin') {
            if (email !== 'admin@chinese-heritage.com' || password !== 'admin123') {
                return response.status(401).json({ 
                    success: false, 
                    message: 'Invalid admin credentials!' 
                });
            }

            const adminUser = {
                id: 'admin',
                full_name: 'Administrator',
                email: 'admin@chinese-heritage.com',
                avatar_url: 'https://ui-avatars.com/api/?name=Admin&background=BB1E1E&color=FFD700&size=128',
                bio: 'System administrator',
                favorite_cities: [],
                tours_completed: 0,
                login_count: 1,
                last_login: new Date().toISOString(),
                created_at: new Date().toISOString()
            };

            return response.json({ 
                success: true, 
                message: 'Login successful!',
                user: adminUser,
                userType: 'admin'
            });
        }

        // Regular user authentication
        const result = await sql`
            SELECT id, full_name, email, avatar_url, bio, favorite_cities, tours_completed, login_count, last_login, created_at 
            FROM users 
            WHERE email = ${email} AND password_hash = ${hashPassword(password)}
        `;

        if (result.length > 0) {
            const user = result[0];
            
            // Update login count and last login
            await sql`
                UPDATE users 
                SET login_count = ${user.login_count + 1}, last_login = CURRENT_TIMESTAMP
                WHERE id = ${user.id}
            `;

            return response.json({ 
                success: true, 
                message: 'Login successful!',
                user: user,
                userType: 'user'
            });
        } else {
            return response.status(401).json({ 
                success: false, 
                message: 'Invalid email or password!' 
            });
        }

    } catch (error) {
        console.error('Login error:', error);
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
