export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://your-username.github.io',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      if (url.pathname === '/api/submit' && request.method === 'POST') {
        return await handleSubmit(request, env, corsHeaders);
      }
      
      if (url.pathname === '/api/aggregate' && request.method === 'GET') {
        return await handleAggregate(request, env, corsHeaders);
      }
      
      return new Response('Not found', { status: 404, headers: corsHeaders });
    } catch (error) {
      console.error('Error:', error);
      return new Response('Internal server error', { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
};

async function handleSubmit(request, env, corsHeaders) {
  const { tiers } = await request.json();
  
  if (!tiers || typeof tiers !== 'object') {
    return new Response('Invalid request body', { 
      status: 400, 
      headers: corsHeaders 
    });
  }

  // Validate algorithm IDs and stars
  const validAlgorithms = [
    'quicksort', 'mergesort', 'heapsort', 'bubblesort',
    'dijkstra', 'astar', 'bfs', 'dfs'
  ];
  
  for (const [algoId, stars] of Object.entries(tiers)) {
    if (!validAlgorithms.includes(algoId)) {
      return new Response(`Invalid algorithm ID: ${algoId}`, { 
        status: 400, 
        headers: corsHeaders 
      });
    }
    
    if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
      return new Response(`Invalid stars for ${algoId}: ${stars}`, { 
        status: 400, 
        headers: corsHeaders 
      });
    }
  }

  // Update KV storage
  for (const [algoId, stars] of Object.entries(tiers)) {
    const sumKey = `totals:${algoId}:sum`;
    const countKey = `totals:${algoId}:count`;
    
    // Get current values
    const currentSum = await env.TIER_LIST_KV.get(sumKey);
    const currentCount = await env.TIER_LIST_KV.get(countKey);
    
    const newSum = (parseInt(currentSum) || 0) + stars;
    const newCount = (parseInt(currentCount) || 0) + 1;
    
    // Update KV
    await env.TIER_LIST_KV.put(sumKey, newSum.toString());
    await env.TIER_LIST_KV.put(countKey, newCount.toString());
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

async function handleAggregate(request, env, corsHeaders) {
  const algorithms = [
    'quicksort', 'mergesort', 'heapsort', 'bubblesort',
    'dijkstra', 'astar', 'bfs', 'dfs'
  ];
  
  const results = {};
  
  for (const algoId of algorithms) {
    const sumKey = `totals:${algoId}:sum`;
    const countKey = `totals:${algoId}:count`;
    
    const sum = await env.TIER_LIST_KV.get(sumKey);
    const count = await env.TIER_LIST_KV.get(countKey);
    
    const totalSum = parseInt(sum) || 0;
    const totalCount = parseInt(count) || 0;
    
    results[algoId] = {
      average: totalCount > 0 ? totalSum / totalCount : 0,
      votes: totalCount
    };
  }

  return new Response(JSON.stringify(results), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}