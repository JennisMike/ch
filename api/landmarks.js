// API endpoint for landmarks
// /api/landmarks

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
        const cityId = url.pathname.split('/')[3];
        
        if (cityId) {
            // Get landmarks for specific city
            const result = await sql`
                SELECT id, name, chinese_name, description, latitude, longitude, category, image_url 
                FROM landmarks 
                WHERE city_id = ${cityId}
                ORDER BY name
            `;
            
            return response.json({ 
                success: true, 
                landmarks: result
            });
        } else {
            // Get all landmarks
            const result = await sql`
                SELECT id, name, chinese_name, description, latitude, longitude, category, image_url, city_id
                FROM landmarks 
                ORDER BY name
            `;
            
            return response.json({ 
                success: true, 
                landmarks: result
            });
        }
    } catch (error) {
        console.error('Landmarks GET error:', error);
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
        const { cityId, name, chineseName, description, latitude, longitude, category, imageUrl } = await request.json();
        
        const result = await sql`
            INSERT INTO landmarks (city_id, name, chinese_name, description, latitude, longitude, category, image_url)
            VALUES (${cityId}, ${name}, ${chineseName}, ${description}, ${latitude}, ${longitude}, ${category}, ${imageUrl || 'NULL'})
            RETURNING id, name, chinese_name, description, latitude, longitude, category, image_url
        `;
        
        return response.json({ 
            success: true, 
            message: 'Landmark created successfully',
            landmark: result[0]
        });
    } catch (error) {
        console.error('Landmarks POST error:', error);
        response.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    GET,
    POST
};
