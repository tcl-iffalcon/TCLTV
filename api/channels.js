// Kanal veritabanı
// Stream URL'leri iptv-org'dan dinamik olarak çekilir

const STATIC_CHANNELS = {
  "turk-kanallar": [
    { id: "livetv_trt1",     name: "TRT 1",        logo: "https://i.imgur.com/MVXMIq0.png", genre: "General", country: "TR", tvgId: "TRT1.tr" },
    { id: "livetv_trt2",     name: "TRT 2",        logo: "https://i.imgur.com/1OHPQFM.png", genre: "General", country: "TR", tvgId: "TRT2.tr" },
    { id: "livetv_show",     name: "Show TV",      logo: "https://i.imgur.com/FIeJFpg.png", genre: "General", country: "TR", tvgId: "ShowTV.tr" },
    { id: "livetv_atv",      name: "ATV",          logo: "https://i.imgur.com/qXGu6Yw.png", genre: "General", country: "TR", tvgId: "ATV.tr" },
    { id: "livetv_kanald",   name: "Kanal D",      logo: "https://i.imgur.com/nRm5BuX.png", genre: "General", country: "TR", tvgId: "KanalD.tr" },
    { id: "livetv_startv",   name: "Star TV",      logo: "https://i.imgur.com/L8JT0rK.png", genre: "General", country: "TR", tvgId: "StarTV.tr" },
    { id: "livetv_foxtv",    name: "FOX TV",       logo: "https://i.imgur.com/HMVkHca.png", genre: "General", country: "TR", tvgId: "FoxTV.tr" },
    { id: "livetv_tv8",      name: "TV8",          logo: "https://i.imgur.com/YRbcFB9.png", genre: "General", country: "TR", tvgId: "TV8.tr" },
    { id: "livetv_trt_cocuk",name: "TRT Çocuk",   logo: "https://i.imgur.com/tMHG2S4.png", genre: "Kids",    country: "TR", tvgId: "TRTCocuk.tr" },
    { id: "livetv_trt_muzik",name: "TRT Müzik",   logo: "https://i.imgur.com/9lzCqKD.png", genre: "Music",   country: "TR", tvgId: "TRTMuzik.tr" },
  ],
  "spor-kanallar": [
    { id: "livetv_trt_spor",  name: "TRT Spor",        logo: "https://i.imgur.com/8dJhJPh.png", genre: "Sports", country: "TR", tvgId: "TRTSpor.tr" },
    { id: "livetv_trt_spor2", name: "TRT Spor Yıldız", logo: "https://i.imgur.com/6kFjGnE.png", genre: "Sports", country: "TR", tvgId: "TRTSporYildiz.tr" },
    { id: "livetv_aspor",     name: "A Spor",           logo: "https://i.imgur.com/bwmEh3j.png", genre: "Sports", country: "TR", tvgId: "ASpor.tr" },
  ],
  "haber-kanallar": [
    { id: "livetv_trt_haber",  name: "TRT Haber",        logo: "https://i.imgur.com/4Gw9l5n.png", genre: "News", country: "TR", tvgId: "TRTHaber.tr" },
    { id: "livetv_cnn_turk",   name: "CNN Türk",         logo: "https://i.imgur.com/OZmMHJN.png", genre: "News", country: "TR", tvgId: "CNNTurk.tr" },
    { id: "livetv_ntv",        name: "NTV",              logo: "https://i.imgur.com/R4ZxSHQ.png", genre: "News", country: "TR", tvgId: "NTV.tr" },
    { id: "livetv_bloomberg",  name: "Bloomberg HT",     logo: "https://i.imgur.com/1pVBGdP.png", genre: "News", country: "TR", tvgId: "BloombergHT.tr" },
    { id: "livetv_aljazeera",  name: "Al Jazeera EN",    logo: "https://i.imgur.com/2mZmFWB.png", genre: "News", country: "QA", tvgId: "AlJazeeraEnglish.qa" },
    { id: "livetv_france24",   name: "France 24 EN",     logo: "https://i.imgur.com/bMdEbMp.png", genre: "News", country: "FR", tvgId: "France24English.fr" },
    { id: "livetv_dw",         name: "DW News English",  logo: "https://i.imgur.com/VJH9LKf.png", genre: "News", country: "DE", tvgId: "DWEnglish.de" },
  ],
  "uluslararasi-kanallar": [
    { id: "livetv_trt_world", name: "TRT World",        logo: "https://i.imgur.com/oMiGhcN.png", genre: "News",    country: "TR", tvgId: "TRTWorld.tr" },
    { id: "livetv_euronews",  name: "Euronews EN",      logo: "https://i.imgur.com/E5lN5j1.png", genre: "News",    country: "FR", tvgId: "EuronewsEnglish.fr" },
    { id: "livetv_nasa",      name: "NASA TV",          logo: "https://i.imgur.com/5b3cFq2.png", genre: "Science", country: "US", tvgId: "NASATV.us" },
    { id: "livetv_cgtn",      name: "CGTN English",     logo: "https://i.imgur.com/H6WcKp3.png", genre: "News",    country: "CN", tvgId: "CGTNEnglish.cn" },
  ]
};

// iptv-org API'sinden stream URL'si çek
async function fetchStreamUrl(tvgId) {
  try {
    const res = await fetch(`https://iptv-org.github.io/api/streams.json`);
    if (!res.ok) return null;
    const streams = await res.json();
    const match = streams.find(s => s.channel === tvgId && s.status === "online");
    return match ? match.url : null;
  } catch {
    return null;
  }
}

// Tüm kanallar düz liste
const ALL_CHANNELS = Object.values(STATIC_CHANNELS).flat();

module.exports = { CHANNELS: STATIC_CHANNELS, ALL_CHANNELS, fetchStreamUrl };
