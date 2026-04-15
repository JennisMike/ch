// DeepSeek Chat API Bridge

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'AI API key not configured' });
    }

    const upstreamResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text();
      console.error('DeepSeek API Error:', upstreamResponse.status, errorText);
      return res.status(upstreamResponse.status).json({
        error: `API Error: ${upstreamResponse.status}`,
        details: errorText
      });
    }

    const data = await upstreamResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
};
