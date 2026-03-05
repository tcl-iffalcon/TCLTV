// Kanal veritabanı - Güncel ve çalışan stream URL'leri (2025)

const CHANNELS = {
  "turk-kanallar": [
    {
      id: "livetv_trt1",
      name: "TRT 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TRT_1_logo.svg/200px-TRT_1_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-1/master.m3u8?app=web", title: "TRT 1 HD" },
        { url: "https://mn-nl.mncdn.com/blutv_trt1/smil:trt1_sd.smil/playlist.m3u8", title: "TRT 1 SD" }
      ]
    },
    {
      id: "livetv_trt2",
      name: "TRT 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/200px-TRT_2_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-2/master.m3u8?app=web", title: "TRT 2 HD" }
      ]
    },
    {
      id: "livetv_atv",
      name: "ATV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ATV_Turkey_logo.svg/200px-ATV_Turkey_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trkvz-live.daioncdn.net/atv/atv.m3u8", title: "ATV HD" }
      ]
    },
    {
      id: "livetv_kanal_d",
      name: "Kanal D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kanal_D_logo.svg/200px-Kanal_D_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_kanald/smil:kanald_sd.smil/playlist.m3u8", title: "Kanal D" }
      ]
    },
    {
      id: "livetv_show",
      name: "Show TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Show_TV_logo.svg/200px-Show_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8", title: "Show TV HD" }
      ]
    },
    {
      id: "livetv_star",
      name: "Star TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Star_TV_logo.svg/200px-Star_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_star/smil:star_sd.smil/playlist.m3u8", title: "Star TV" }
      ]
    },
    {
      id: "livetv_fox_tr",
      name: "FOX TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fox_TV_logo_turkey.svg/200px-Fox_TV_logo_turkey.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_foxtv/smil:foxtv_sd.smil/chunklist.m3u8", title: "FOX TV" }
      ]
    },
    {
      id: "livetv_tv8",
      name: "TV8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TV8_logo.svg/200px-TV8_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_tv8/smil:tv8_sd.smil/playlist.m3u8", title: "TV8" }
      ]
    },
    {
      id: "livetv_trt_cocuk",
      name: "TRT Çocuk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TRT_%C3%87ocuk_logo.svg/200px-TRT_%C3%87ocuk_logo.svg.png",
      genre: "Kids", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-cocuk/master.m3u8?app=web", title: "TRT Çocuk HD" }
      ]
    },
    {
      id: "livetv_trt_muzik",
      name: "TRT Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TRT_M%C3%BCzik_logo.svg/200px-TRT_M%C3%BCzik_logo.svg.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-muzik/master.m3u8?app=web", title: "TRT Müzik HD" }
      ]
    }
  ],

  "spor-kanallar": [
    {
      id: "livetv_trt_spor",
      name: "TRT Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/200px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-spor/master.m3u8?app=web", title: "TRT Spor HD" }
      ]
    },
    {
      id: "livetv_trt_spor2",
      name: "TRT Spor Yıldız",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg/200px-TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-spor-yildiz/master.m3u8?app=web", title: "TRT Spor Yıldız HD" }
      ]
    },
    {
      id: "livetv_a_spor",
      name: "A Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/A_Spor_logo.png/200px-A_Spor_logo.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://trkvz-live.daioncdn.net/aspor/aspor.m3u8", title: "A Spor HD" }
      ]
    },
    {
      id: "livetv_eurosport1",
      name: "Eurosport 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eurosport_1_logo_2015.svg/200px-Eurosport_1_logo_2015.svg.png",
      genre: "Sports", country: "INT",
      streams: [
        { url: "https://dai.google.com/linear/hls/pa/event/eurosport1/stream/1/master.m3u8", title: "Eurosport 1" }
      ]
    }
  ],

  "haber-kanallar": [
    {
      id: "livetv_trt_haber",
      name: "TRT Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/TRT_Haber_logo.svg/200px-TRT_Haber_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-haber/master.m3u8?app=web", title: "TRT Haber HD" }
      ]
    },
    {
      id: "livetv_cnn_turk",
      name: "CNN Türk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/CNN_T%C3%BCrk_logo.svg/200px-CNN_T%C3%BCrk_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8", title: "CNN Türk HD" }
      ]
    },
    {
      id: "livetv_ntv",
      name: "NTV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/NTV_Turkey_logo.svg/200px-NTV_Turkey_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://dogusyayingrubu-live.daioncdn.net/ntv/ntv.m3u8", title: "NTV HD" }
      ]
    },
    {
      id: "livetv_bloomberg",
      name: "Bloomberg HT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bloomberg_HT.png/200px-Bloomberg_HT.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://bloomberght.daioncdn.net/bloomberght/bloomberght.m3u8", title: "Bloomberg HT HD" }
      ]
    },
    {
      id: "livetv_aljazeera",
      name: "Al Jazeera English",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English.svg/200px-Al_Jazeera_English.svg.png",
      genre: "News", country: "QA",
      streams: [
        { url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8", title: "Al Jazeera EN HD" }
      ]
    },
    {
      id: "livetv_france24",
      name: "France 24 English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/France_24_logo.svg/200px-France_24_logo.svg.png",
      genre: "News", country: "FR",
      streams: [
        { url: "https://stream.france24.com/hls/live/2037218/F24_EN_LO_HLS/master.m3u8", title: "France 24 EN HD" }
      ]
    },
    {
      id: "livetv_dw",
      name: "DW News English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/200px-Deutsche_Welle_symbol_2012.svg.png",
      genre: "News", country: "DE",
      streams: [
        { url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8", title: "DW News HD" }
      ]
    }
  ],

  "uluslararasi-kanallar": [
    {
      id: "livetv_trt_world",
      name: "TRT World",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/TRT_World_Logo.svg/200px-TRT_World_Logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-world/master.m3u8?app=web", title: "TRT World HD" }
      ]
    },
    {
      id: "livetv_euronews",
      name: "Euronews English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Euronews_logo.svg/200px-Euronews_logo.svg.png",
      genre: "News", country: "FR",
      streams: [
        { url: "https://euronews-euronews-en-live.hls.cedexis.com/hls/live/euronews_en.m3u8", title: "Euronews EN HD" }
      ]
    },
    {
      id: "livetv_nasa",
      name: "NASA TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png",
      genre: "Science", country: "US",
      streams: [
        { url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/index.m3u8", title: "NASA TV HD" }
      ]
    },
    {
      id: "livetv_cgtn",
      name: "CGTN English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN_English_Logo.svg/200px-CGTN_English_Logo.svg.png",
      genre: "News", country: "CN",
      streams: [
        { url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8", title: "CGTN EN HD" }
      ]
    },
    {
      id: "livetv_arte",
      name: "ARTE",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Arte_Logo.svg/200px-Arte_Logo.svg.png",
      genre: "Culture", country: "EU",
      streams: [
        { url: "https://arteptweb-a.akamaihd.net/am/ptweb/arte7/arte7.m3u8", title: "ARTE HD" }
      ]
    }
  ]
};

const ALL_CHANNELS = Object.values(CHANNELS).flat();

module.exports = { CHANNELS, ALL_CHANNELS };
