const http = require("http");
const { CHANNELS, ALL_CHANNELS, fetchStreamUrl } = require("./api/channels");
const manifest = require("./api/manifest.json");

const PORT = process.env.PORT || 7000;
const HOST = "0.0.0.0";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json"
};

// Önbellek: stream URL'lerini 10 dakika sakla
const streamCache = {};
const CACHE_TTL = 10 * 60 * 1000;

function findChannel(id) {
  return ALL_CHANNELS.find(ch => ch.id === id);
}

async function getStreams(channel) {
  const now = Date.now();
  const cached = streamCache[channel.id];
  if (cached && now - cached.time < CACHE_TTL) return cached.streams;

  // iptv-org API'den çek
  try {
    const res = await fetch(
      `https://iptv-org.github.io/api/streams.json`
    );
    if (res.ok) {
      const all = await res.json();
      const matches = all.filter(s => s.channel === channel.tvgId);
      if (matches.length > 0) {
        const streams = matches.map(s => ({
          url: s.url,
          title: `${channel.name} (iptv-org)`,
          behaviorHints: { notWebReady: false }
        }));
        streamCache[channel.id] = { streams, time: now };
        return streams;
      }
    }
  } catch (e) {}

  return [];
}

// iptv-org streams.json önbelleği (tüm liste için)
let globalStreams = null;
let globalStreamsFetchedAt = 0;

async function getGlobalStreams() {
  const now = Date.now();
  if (globalStreams && now - globalStreamsFetchedAt < CACHE_TTL) return globalStreams;
  try {
    const res = await fetch("https://iptv-org.github.io/api/streams.json");
    if (res.ok) {
      globalStreams = await res.json();
      globalStreamsFetchedAt = now;
    }
  } catch (e) {}
  return globalStreams || [];
}

async function getStreamsForChannel(channel) {
  const now = Date.now();
  const cached = streamCache[channel.id];
  if (cached && now - cached.time < CACHE_TTL) return cached.streams;

  const all = await getGlobalStreams();
  const matches = all.filter(s => s.channel === channel.tvgId);
  const streams = matches.map(s => ({
    url: s.url,
    title: `${channel.name}`,
    behaviorHints: { notWebReady: false }
  }));

  streamCache[channel.id] = { streams, time: now };
  return streams;
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];

  if (req.method === "OPTIONS") {
    res.writeHead(200, CORS_HEADERS);
    return res.end();
  }

  if (url === "/" || url === "") {
    res.writeHead(200, { ...CORS_HEADERS, "Content-Type": "text/html" });
    return res.end(`<h2>🇹🇷 Nuvio Canlı TV Addon</h2><p>Manifest URL:</p><code>https://${req.headers.host}/manifest.json</code>`);
  }

  if (url === "/manifest.json") {
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify(manifest));
  }

  // Catalog
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

  // Meta
  const metaMatch = url.match(/^\/meta\/tv\/([^/]+)\.json$/);
  if (metaMatch) {
    const ch = findChannel(metaMatch[1]);
    if (!ch) { res.writeHead(404, CORS_HEADERS); return res.end(JSON.stringify({ meta: null })); }
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ meta: { id: ch.id, type: "tv", name: ch.name, logo: ch.logo, poster: ch.logo, genres: [ch.genre], country: ch.country } }));
  }

  // Stream
  const streamMatch = url.match(/^\/stream\/tv\/([^/]+)\.json$/);
  if (streamMatch) {
    const ch = findChannel(streamMatch[1]);
    if (!ch) { res.writeHead(404, CORS_HEADERS); return res.end(JSON.stringify({ streams: [] })); }

    const streams = await getStreamsForChannel(ch);
    res.writeHead(200, CORS_HEADERS);
    return res.end(JSON.stringify({ streams }));
  }

  res.writeHead(404, CORS_HEADERS);
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Addon çalışıyor → http://localhost:${PORT}/manifest.json`);
});
