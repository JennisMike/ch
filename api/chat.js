// DeepSeek Chat API Bridge

async function POST(request, response) {
  try {
    const apiKey = process.env.AI_API_KEY;

    if (!apiKey) {
      return response.status(500).json({ error: 'AI API key not configured' });
    }

    const body = typeof request?.body !== 'undefined' ? request.body : await request.json();

    const upstreamResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text();
      console.error('DeepSeek API Error:', upstreamResponse.status, errorText);
      return response.status(upstreamResponse.status).json({
        error: `API Error: ${upstreamResponse.status}`,
        details: errorText
      });
    }

    const data = await upstreamResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error('Chat API Error:', error);
    return response.status(500).json({
      error: 'Internal server error',
      details: error?.message || String(error)
    });
  }
}

module.exports = {
  POST
};
