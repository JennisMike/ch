// Baidu Maps API Configuration Endpoint

async function GET(request, response) {
  try {
    const apiKey = process.env.BAIDU_MAPS_API_KEY;

    if (!apiKey) {
      return response.status(500).json({ error: 'Baidu Maps API key not configured' });
    }

    return response.status(200).json({ apiKey });
  } catch (error) {
    console.error('Map Config API Error:', error);
    return response.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
}

module.exports = {
  GET
};
