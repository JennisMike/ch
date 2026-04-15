// Baidu Maps API Configuration Endpoint
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the API key from environment variables
    const apiKey = process.env.BAIDU_MAPS_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'Baidu Maps API key not configured' });
    }

    // Return the API key configuration
    return res.status(200).json({ 
      apiKey: apiKey 
    });

  } catch (error) {
    console.error('Map Config API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}
