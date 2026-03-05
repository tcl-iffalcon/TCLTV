// Kanal veritabanı - Güncel stream URL'leri (2025)
// NOT: Bazı kanallar Referer kontrolü yapar, o yüzden her stream'e
// behaviorHints ile header bilgisi eklendi.

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function makeStream(url, title, referer) {
  return {
    url,
    title,
    behaviorHints: {
      notWebReady: false,
      proxyHeaders: {
        request: {
          "User-Agent": UA,
          ...(referer ? { "Referer": referer } : {})
        }
      }
    }
  };
}

const CHANNELS = {
  "turk-kanallar": [
    {
      id: "livetv_trt1",
      name: "TRT 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TRT_1_logo_%282021-%29.svg/200px-TRT_1_logo_%282021-%29.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://tv-trt1-dai.medya.trt.com.tr/master.m3u8", "TRT 1 HD", "https://www.trt1.com.tr/"),
        makeStream("https://trt.daioncdn.net/trt-1/master.m3u8?app=web", "TRT 1 HD (Yedek)", "https://www.trt1.com.tr/")
      ]
    },
    {
      id: "livetv_trt2",
      name: "TRT 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/200px-TRT_2_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://tv-trt2-dai.medya.trt.com.tr/master.m3u8", "TRT 2 HD", "https://www.trt.com.tr/"),
        makeStream("https://trt.daioncdn.net/trt-2/master.m3u8?app=web", "TRT 2 HD (Yedek)", "https://www.trt.com.tr/")
      ]
    },
    {
      id: "livetv_show",
      name: "Show TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Show_TV_logo.svg/200px-Show_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://showtv.blutv.com/blutv_showtv_live/live.m3u8", "Show TV HD", "https://www.showtv.com.tr/"),
        makeStream("https://ciner-live.daioncdn.net/showtv/showtv.m3u8", "Show TV HD (Yedek)", "https://www.showtv.com.tr/")
      ]
    },
    {
      id: "livetv_star",
      name: "Star TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Star_TV_logo.svg/200px-Star_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://startv.blutv.com/blutv_startv_live/live.m3u8", "Star TV HD", "https://www.startv.com.tr/")
      ]
    },
    {
      id: "livetv_kanal_d",
      name: "Kanal D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kanal_D_logo.svg/200px-Kanal_D_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://kanald.blutv.com/blutv_kanald_live/live.m3u8", "Kanal D HD", "https://www.kanald.com.tr/")
      ]
    },
    {
      id: "livetv_fox_tr",
      name: "FOX TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fox_TV_logo_turkey.svg/200px-Fox_TV_logo_turkey.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://foxtv.blutv.com/blutv_foxtv_live/live.m3u8", "FOX TV HD", "https://www.fox.com.tr/")
      ]
    },
    {
      id: "livetv_tv8",
      name: "TV8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TV8_logo.svg/200px-TV8_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://tv8.blutv.com/blutv_tv8_live/live.m3u8", "TV8 HD", "https://www.tv8.com.tr/")
      ]
    },
    {
      id: "livetv_atv",
      name: "ATV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ATV_Turkey_logo.svg/200px-ATV_Turkey_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        makeStream("https://atv.blutv.com/blutv_atv_live/live.m3u8", "ATV HD", "https://www.atv.com.tr/")
      ]
    },
    {
      id: "livetv_trt_cocuk",
      name: "TRT Çocuk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/TRT_%C3%A7ocuk_logo.png",
      genre: "Kids", country: "TR",
      streams: [
        makeStream("https://tv-trtcocuk-dai.medya.trt.com.tr/master.m3u8", "TRT Çocuk HD", "https://www.trtcocuk.net.tr/"),
        makeStream("https://trt.daioncdn.net/trt-cocuk/master.m3u8?app=web", "TRT Çocuk (Yedek)", "https://www.trtcocuk.net.tr/")
      ]
    },
    {
      id: "livetv_trt_muzik",
      name: "TRT Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TRT_M%C3%BCzik_logo.svg/200px-TRT_M%C3%BCzik_logo.svg.png",
      genre: "Music", country: "TR",
      streams: [
        makeStream("https://tv-trtmuzik-dai.medya.trt.com.tr/master.m3u8", "TRT Müzik HD", "https://www.trt.com.tr/"),
        makeStream("https://trt.daioncdn.net/trt-muzik/master.m3u8?app=web", "TRT Müzik (Yedek)", "https://www.trt.com.tr/")
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
        makeStream("https://tv-trtspor1-dai.medya.trt.com.tr/master.m3u8", "TRT Spor HD", "https://www.trtspor.com.tr/"),
        makeStream("https://trt.daioncdn.net/trt-spor/master.m3u8?app=web", "TRT Spor (Yedek)", "https://www.trtspor.com.tr/")
      ]
    },
    {
      id: "livetv_trt_spor2",
      name: "TRT Spor Yıldız",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg/200px-TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        makeStream("https://tv-trtspor2-dai.medya.trt.com.tr/master.m3u8", "TRT Spor Yıldız HD", "https://www.trtspor.com.tr/"),
        makeStream("https://trt.daioncdn.net/trt-spor-yildiz/master.m3u8?app=web", "TRT Spor Yıldız (Yedek)", "https://www.trtspor.com.tr/")
      ]
    },
    {
      id: "livetv_a_spor",
      name: "A Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/A_Spor_logo.png/200px-A_Spor_logo.png",
      genre: "Sports", country: "TR",
      streams: [
        makeStream("https://aspor.blutv.com/blutv_aspor_live/live.m3u8", "A Spor HD", "https://www.aspor.com.tr/")
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
        makeStream("https://tv-trthaber-dai.medya.trt.com.tr/master.m3u8", "TRT Haber HD", "https://www.trthaber.com/"),
        makeStream("https://trt.daioncdn.net/trt-haber/master.m3u8?app=web", "TRT Haber (Yedek)", "https://www.trthaber.com/")
      ]
    },
    {
      id: "livetv_cnn_turk",
      name: "CNN Türk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/CNN_T%C3%BCrk_logo.svg/200px-CNN_T%C3%BCrk_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        makeStream("https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/track_1_320/playlist.m3u8", "CNN Türk HD", "https://www.cnnturk.com/"),
        makeStream("https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8", "CNN Türk (Yedek)", "https://www.cnnturk.com/")
      ]
    },
    {
      id: "livetv_ntv",
      name: "NTV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/NTV_Turkey_logo.svg/200px-NTV_Turkey_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        makeStream("https://dogusyayingrubu-live.daioncdn.net/ntv/ntv.m3u8", "NTV HD", "https://www.ntv.com.tr/")
      ]
    },
    {
      id: "livetv_bloomberg",
      name: "Bloomberg HT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bloomberg_HT.png/200px-Bloomberg_HT.png",
      genre: "News", country: "TR",
      streams: [
        makeStream("https://bloomberght.daioncdn.net/bloomberght/bloomberght.m3u8", "Bloomberg HT HD", "https://www.bloomberght.com/")
      ]
    },
    {
      id: "livetv_aljazeera",
      name: "Al Jazeera English",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English.svg/200px-Al_Jazeera_English.svg.png",
      genre: "News", country: "QA",
      streams: [
        makeStream("https://live-hls-web-aje.getaj.net/AJE/index.m3u8", "Al Jazeera EN HD", "https://www.aljazeera.com/")
      ]
    },
    {
      id: "livetv_france24",
      name: "France 24 English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/France_24_logo.svg/200px-France_24_logo.svg.png",
      genre: "News", country: "FR",
      streams: [
        makeStream("https://stream.france24.com/hls/live/2037218/F24_EN_LO_HLS/master.m3u8", "France 24 EN HD", "https://www.france24.com/")
      ]
    },
    {
      id: "livetv_dw",
      name: "DW News English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/200px-Deutsche_Welle_symbol_2012.svg.png",
      genre: "News", country: "DE",
      streams: [
        makeStream("https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8", "DW News HD", "https://www.dw.com/")
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
        makeStream("https://tv-trtworld-dai.medya.trt.com.tr/master.m3u8", "TRT World HD", "https://www.trtworld.com/"),
        makeStream("https://trt.daioncdn.net/trt-world/master.m3u8?app=web", "TRT World (Yedek)", "https://www.trtworld.com/")
      ]
    },
    {
      id: "livetv_euronews",
      name: "Euronews English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Euronews_logo.svg/200px-Euronews_logo.svg.png",
      genre: "News", country: "FR",
      streams: [
        makeStream("https://euronews-euronews-en-live.hls.cedexis.com/hls/live/euronews_en.m3u8", "Euronews EN HD", "https://www.euronews.com/")
      ]
    },
    {
      id: "livetv_nasa",
      name: "NASA TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png",
      genre: "Science", country: "US",
      streams: [
        makeStream("https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/index.m3u8", "NASA TV HD", "https://www.nasa.gov/")
      ]
    },
    {
      id: "livetv_cgtn",
      name: "CGTN English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN_English_Logo.svg/200px-CGTN_English_Logo.svg.png",
      genre: "News", country: "CN",
      streams: [
        makeStream("https://news.cgtn.com/resource/live/english/cgtn-news.m3u8", "CGTN EN HD", "https://www.cgtn.com/")
      ]
    }
  ]
};

const ALL_CHANNELS = Object.values(CHANNELS).flat();

module.exports = { CHANNELS, ALL_CHANNELS };
