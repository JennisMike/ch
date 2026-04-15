// API endpoint for cities
// /api/cities

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
            // Get single city with landmarks
            const cityResult = await sql`
                SELECT id, name, chinese_name, description, center_lat, center_lng, zoom_level, featured_image 
                FROM cities 
                WHERE id = ${cityId}
            `;
            
            const landmarksResult = await sql`
                SELECT id, name, chinese_name, description, latitude, longitude, category, image_url 
                FROM landmarks 
                WHERE city_id = ${cityId}
                ORDER BY name
            `;
            
            if (cityResult.length > 0) {
                const city = cityResult[0];
                city.landmarks = landmarksResult;
                
                return response.json({ 
                    success: true, 
                    city: city
                });
            } else {
                return response.status(404).json({ 
                    error: 'City not found' 
                });
            }
        } else {
            // Get all cities
            const result = await sql`
                SELECT id, name, chinese_name, description, center_lat, center_lng, zoom_level, featured_image 
                FROM cities 
                ORDER BY name
            `;
            
            return response.json({ 
                success: true, 
                cities: result
            });
        }

    } catch (error) {
        console.error('Cities API error:', error);
        response.status(500).json({ 
            error: 'Internal server error' 
        });
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
        const { name, chineseName, description, centerLat, centerLng, zoomLevel, featuredImage } = await request.json();

        const result = await sql`
            INSERT INTO cities (name, chinese_name, description, center_lat, center_lng, zoom_level, featured_image)
            VALUES (${name}, ${chineseName}, ${description}, ${centerLat}, ${centerLng}, ${zoomLevel || 12}, ${featuredImage || 'NULL'})
            RETURNING id, name, chinese_name, description, center_lat, center_lng, zoom_level, featured_image
        `;
        
        return response.json({ 
            success: true, 
            message: 'City created successfully',
            city: result[0]
        });

    } catch (error) {
        console.error('Cities POST error:', error);
        response.status(500).json({ 
            error: 'Internal server error' 
        });
    }
}

module.exports = {
    GET,
    POST
};
