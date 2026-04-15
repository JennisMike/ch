// Neon Database Configuration Endpoint

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const connectionString = process.env.NEON_DB_CONNECTION_STRING;

    if (!connectionString) {
      return res.status(500).json({ error: 'Neon DB connection string not configured' });
    }

    const maskedConnectionString = connectionString.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');

    return res.status(200).json({
      connectionString: maskedConnectionString,
      configured: true
    });
  } catch (error) {
    console.error('DB Config API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
};
