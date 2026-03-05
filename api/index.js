const { CHANNELS, ALL_CHANNELS } = require("./channels");
const manifest = require("./manifest.json");

// CORS headers
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

// Kanal ID'sine göre kanal bul
function findChannel(id) {
  return ALL_CHANNELS.find(ch => ch.id === id);
}

// Vercel serverless handler
module.exports = async (req, res) => {
  const { url } = req;

  // CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(200, CORS_HEADERS);
    return res.end();
  }

  // Ana sayfa yönlendirmesi
  if (url === "/" || url === "") {
    res.writeHead(301, { Location: "/manifest.json" });
    return res.end();
  }

  // manifest.json
  if (url === "/manifest.json") {
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify(manifest));
  }

  // Catalog endpoint: /catalog/tv/:catalogId.json
  const catalogMatch = url.match(/^\/catalog\/tv\/([^/]+)\.json$/);
  if (catalogMatch) {
    const catalogId = catalogMatch[1];
    const channels = CHANNELS[catalogId] || [];

    const metas = channels.map(ch => ({
      id: ch.id,
      type: "tv",
      name: ch.name,
      logo: ch.logo,
      poster: ch.logo,
      background: ch.logo,
      genres: [ch.genre],
      country: ch.country
    }));

    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ metas }));
  }

  // Meta endpoint: /meta/tv/:id.json
  const metaMatch = url.match(/^\/meta\/tv\/([^/]+)\.json$/);
  if (metaMatch) {
    const channelId = metaMatch[1];
    const channel = findChannel(channelId);

    if (!channel) {
      res.writeHead(404, CORS_HEADERS);
      return res.end(JSON.stringify({ meta: null }));
    }

    const meta = {
      id: channel.id,
      type: "tv",
      name: channel.name,
      logo: channel.logo,
      poster: channel.logo,
      background: channel.logo,
      genres: [channel.genre],
      country: channel.country,
      description: `${channel.name} - Canlı Yayın`
    };

    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ meta }));
  }

  // Stream endpoint: /stream/tv/:id.json
  const streamMatch = url.match(/^\/stream\/tv\/([^/]+)\.json$/);
  if (streamMatch) {
    const channelId = streamMatch[1];
    const channel = findChannel(channelId);

    if (!channel) {
      res.writeHead(404, CORS_HEADERS);
      return res.end(JSON.stringify({ streams: [] }));
    }

    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ streams: channel.streams }));
  }

  // 404
  res.writeHead(404, CORS_HEADERS);
  return res.end(JSON.stringify({ error: "Not found" }));
};
