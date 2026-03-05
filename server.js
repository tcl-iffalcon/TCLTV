const http = require("http");
const { CHANNELS, ALL_CHANNELS } = require("./api/channels");
const manifest = require("./api/manifest.json");

const PORT = process.env.PORT || 7000;
const HOST = "0.0.0.0";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

function findChannel(id) {
  return ALL_CHANNELS.find(ch => ch.id === id);
}

const server = http.createServer((req, res) => {
  const url = req.url.split("?")[0];

  if (req.method === "OPTIONS") { res.writeHead(200, CORS_HEADERS); return res.end(); }

  if (url === "/" || url === "") {
    res.writeHead(200, { ...CORS_HEADERS, "Content-Type": "text/html" });
    return res.end(`<h2>🇹🇷 Nuvio Canlı TV</h2><code>https://${req.headers.host}/manifest.json</code>`);
  }

  if (url === "/manifest.json") {
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify(manifest));
  }

  const catalogMatch = url.match(/^\/catalog\/tv\/([^/]+)\.json$/);
  if (catalogMatch) {
    const channels = CHANNELS[catalogMatch[1]] || [];
    const metas = channels.map(ch => ({
      id: ch.id, type: "tv", name: ch.name,
      logo: ch.logo, poster: ch.logo, background: ch.logo,
      genres: [ch.genre], country: ch.country
    }));
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ metas }));
  }

  const metaMatch = url.match(/^\/meta\/tv\/([^/]+)\.json$/);
  if (metaMatch) {
    const ch = findChannel(metaMatch[1]);
    if (!ch) { res.writeHead(404, CORS_HEADERS); return res.end(JSON.stringify({ meta: null })); }
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ meta: { id: ch.id, type: "tv", name: ch.name, logo: ch.logo, poster: ch.logo, genres: [ch.genre], country: ch.country } }));
  }

  const streamMatch = url.match(/^\/stream\/tv\/([^/]+)\.json$/);
  if (streamMatch) {
    const ch = findChannel(streamMatch[1]);
    if (!ch) { res.writeHead(404, CORS_HEADERS); return res.end(JSON.stringify({ streams: [] })); }
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ streams: ch.streams }));
  }

  res.writeHead(404, CORS_HEADERS);
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Addon çalışıyor → http://localhost:${PORT}/manifest.json`);
});
