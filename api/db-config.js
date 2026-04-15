// Neon Database Configuration Endpoint

async function GET(request, response) {
  try {
    const connectionString = process.env.NEON_DB_CONNECTION_STRING;

    if (!connectionString) {
      return response.status(500).json({ error: 'Neon DB connection string not configured' });
    }

    const maskedConnectionString = connectionString.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');

    return response.status(200).json({
      connectionString: maskedConnectionString,
      configured: true
    });
  } catch (error) {
    console.error('DB Config API Error:', error);
    return response.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
}

module.exports = {
  GET
};
