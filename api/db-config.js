// Neon Database Configuration Endpoint
export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the connection string from environment variables
    const connectionString = process.env.NEON_DB_CONNECTION_STRING;
    
    if (!connectionString) {
      return res.status(500).json({ error: 'Neon DB connection string not configured' });
    }

    // Return the connection string (masked for security)
    // Only return the first part to hide credentials
    const maskedConnectionString = connectionString.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
    
    return res.status(200).json({ 
      connectionString: maskedConnectionString,
      configured: true
    });

  } catch (error) {
    console.error('DB Config API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}
