// Baidu Maps API Configuration Endpoint

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.BAIDU_MAPS_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'Baidu Maps API key not configured' });
    }

    return res.status(200).json({ apiKey });
  } catch (error) {
    console.error('Map Config API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
};
