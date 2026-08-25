const crypto = require('crypto');

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name = '', scores } = request.body || {};
  if (!scores || typeof scores !== 'object') {
    return response.status(400).json({ error: 'Scores are required' });
  }

  const id = crypto.randomBytes(5).toString('base64url');
  const supabaseResponse = await fetch(`${process.env.SUPABASE_URL}/rest/v1/results`, {
    method: 'POST',
    headers: {
      apikey: process.env.SUPABASE_SECRET_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify({ id, name: String(name).slice(0, 40), scores })
  });

  if (!supabaseResponse.ok) {
    return response.status(502).json({ error: 'Could not save result' });
  }
  return response.status(201).json({ id });
};
