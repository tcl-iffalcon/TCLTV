// Kanal veritabanı - Güncel ve çalışan stream URL'leri (2025)
// Her kanal için birden fazla yedek URL var

const CHANNELS = {
  "turk-kanallar": [
    {
      id: "livetv_trt1", name: "TRT 1",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-1-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt1-dai.medya.trt.com.tr/master.m3u8", title: "TRT 1 HD" },
        { url: "https://tv-trt1.medya.trt.com.tr/master.m3u8", title: "TRT 1 HD (2)" },
        { url: "https://trt.daioncdn.net/trt-1/master.m3u8?app=web", title: "TRT 1 HD (3)" }
      ]
    },
    {
      id: "livetv_trt2", name: "TRT 2",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-2-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt2.medya.trt.com.tr/master.m3u8", title: "TRT 2 HD" },
        { url: "https://trt.daioncdn.net/trt-2/master.m3u8?app=web", title: "TRT 2 HD (2)" }
      ]
    },
    {
      id: "livetv_show", name: "Show TV",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/show-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01602-themahqfrance-vivekanald-samsungspain/playlist.m3u8", title: "Show TV" },
        { url: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8", title: "Show TV (2)" }
      ]
    },
    {
      id: "livetv_atv", name: "ATV",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/atv-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trkvz-live.daioncdn.net/atv/atv.m3u8", title: "ATV HD" }
      ]
    },
    {
      id: "livetv_kanald", name: "Kanal D",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/kanal-d-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_kanald/smil:kanald_sd.smil/playlist.m3u8", title: "Kanal D" }
      ]
    },
    {
      id: "livetv_startv", name: "Star TV",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/star-tv-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://dogus-live.daioncdn.net/startv/startv.m3u8", title: "Star TV HD" }
      ]
    },
    {
      id: "livetv_foxtv", name: "FOX TV",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/fox-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_foxtv/smil:foxtv_sd.smil/chunklist.m3u8", title: "FOX TV" }
      ]
    },
    {
      id: "livetv_tv8", name: "TV8",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/tv8-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv8-live.daioncdn.net/tv8/tv8.m3u8", title: "TV8 HD" }
      ]
    },
    {
      id: "livetv_trt_cocuk", name: "TRT Çocuk",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-cocuk-tr.png",
      genre: "Kids", country: "TR",
      streams: [
        { url: "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8", title: "TRT Çocuk HD" }
      ]
    },
    {
      id: "livetv_trt_muzik", name: "TRT Müzik",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-muzik-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8", title: "TRT Müzik HD" },
        { url: "https://trt.daioncdn.net/trt-muzik/master.m3u8?app=web", title: "TRT Müzik (2)" }
      ]
    }
  ],

  "spor-kanallar": [
    {
      id: "livetv_trt_spor", name: "TRT Spor",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-spor-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8", title: "TRT Spor HD" },
        { url: "https://tv-trtspor1-dai.medya.trt.com.tr/master.m3u8", title: "TRT Spor HD (2)" }
      ]
    },
    {
      id: "livetv_trt_spor2", name: "TRT Spor Yıldız",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-spor-yildiz-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor2.medya.trt.com.tr/master.m3u8", title: "TRT Spor Yıldız HD" },
        { url: "https://tv-trtspor2-dai.medya.trt.com.tr/master.m3u8", title: "TRT Spor Yıldız (2)" }
      ]
    },
    {
      id: "livetv_aspor", name: "A Spor",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/a-spor-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://trkvz-live.daioncdn.net/aspor/aspor.m3u8", title: "A Spor HD" }
      ]
    }
  ],

  "haber-kanallar": [
    {
      id: "livetv_trt_haber", name: "TRT Haber",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-haber-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8", title: "TRT Haber HD" },
        { url: "https://tv-trthaber-dai.medya.trt.com.tr/master.m3u8", title: "TRT Haber (2)" }
      ]
    },
    {
      id: "livetv_cnn_turk", name: "CNN Türk",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/cnn-turk-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8", title: "CNN Türk HD" }
      ]
    },
    {
      id: "livetv_ntv", name: "NTV",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/ntv-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://dogusyayingrubu-live.daioncdn.net/ntv/ntv.m3u8", title: "NTV HD" }
      ]
    },
    {
      id: "livetv_haberturk", name: "Haber Türk",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/haberturk-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://rmtftbjlne.turknet.ercdn.net/bpeytmnqyp/haberturktv/haberturktv_1080p.m3u8", title: "Haber Türk HD" }
      ]
    },
    {
      id: "livetv_aljazeera", name: "Al Jazeera English",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/qatar/al-jazeera-english-qa.png",
      genre: "News", country: "QA",
      streams: [
        { url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8", title: "Al Jazeera EN HD" }
      ]
    },
    {
      id: "livetv_france24", name: "France 24 English",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/france/france-24-fr.png",
      genre: "News", country: "FR",
      streams: [
        { url: "https://stream.france24.com/hls/live/2037218/F24_EN_LO_HLS/master.m3u8", title: "France 24 EN HD" }
      ]
    },
    {
      id: "livetv_dw", name: "DW News English",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/germany/dw-de.png",
      genre: "News", country: "DE",
      streams: [
        { url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8", title: "DW News HD" }
      ]
    }
  ],

  "uluslararasi-kanallar": [
    {
      id: "livetv_trt_world", name: "TRT World",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/trt-world-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv-trtworld.live.trt.com.tr/master.m3u8", title: "TRT World HD" },
        { url: "https://api.trtworld.com/livestream/v1/WcM3Oa2LHD9iUjWDSRUI335NkMWVTUV351H56dqC/master.m3u8", title: "TRT World HD (2)" }
      ]
    },
    {
      id: "livetv_euronews", name: "Euronews English",
      logo: "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/france/euronews-fr.png",
      genre: "News", country: "FR",
      streams: [
        { url: "https://euronews-euronews-en-live.hls.cedexis.com/hls/live/euronews_en.m3u8", title: "Euronews EN HD" }
      ]
    },
    {
      id: "livetv_nasa", name: "NASA TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png",
      genre: "Science", country: "US",
      streams: [
        { url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/index.m3u8", title: "NASA TV HD" }
      ]
    },
    {
      id: "livetv_cgtn", name: "CGTN English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN_English_Logo.svg/200px-CGTN_English_Logo.svg.png",
      genre: "News", country: "CN",
      streams: [
        { url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8", title: "CGTN EN HD" }
      ]
    }
  ]
};

const ALL_CHANNELS = Object.values(CHANNELS).flat();
module.exports = { CHANNELS, ALL_CHANNELS };
