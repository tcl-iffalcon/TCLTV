// Kanal veritabanı - IPTVorg'dan alınan ücretsiz ve açık yayın kaynakları
// Stream URL'leri iptv-org/iptv projesinden alınmıştır (MIT Lisansı)

const CHANNELS = {
  "turk-kanallar": [
    {
      id: "livetv_trt1",
      name: "TRT 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/TRT_1_logo.svg/200px-TRT_1_logo.svg.png",
      genre: "General",
      country: "TR",
      streams: [
        {
          url: "https://trttv1hls.akamaized.net/hls/live/571388/trt1/master.m3u8",
          title: "TRT 1 HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_trt2",
      name: "TRT 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/200px-TRT_2_logo.svg.png",
      genre: "General",
      country: "TR",
      streams: [
        {
          url: "https://trttv2hls.akamaized.net/hls/live/572324/trt2/master.m3u8",
          title: "TRT 2 HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_show",
      name: "Show TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Show_TV_logo.svg/200px-Show_TV_logo.svg.png",
      genre: "General",
      country: "TR",
      streams: [
        {
          url: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8",
          title: "Show TV HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_kanal7",
      name: "Kanal 7",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kanal_7_logo.svg/200px-Kanal_7_logo.svg.png",
      genre: "General",
      country: "TR",
      streams: [
        {
          url: "https://kanal7.daioncdn.net/kanal7/kanal7.m3u8",
          title: "Kanal 7 HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_trt_cocuk",
      name: "TRT Çocuk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/TRT_%C3%87ocuk_logo.svg/200px-TRT_%C3%87ocuk_logo.svg.png",
      genre: "Kids",
      country: "TR",
      streams: [
        {
          url: "https://trtcocukhls.akamaized.net/hls/live/572327/trtcocuk/master.m3u8",
          title: "TRT Çocuk HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_trt_muzik",
      name: "TRT Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TRT_M%C3%BCzik_logo.svg/200px-TRT_M%C3%BCzik_logo.svg.png",
      genre: "Music",
      country: "TR",
      streams: [
        {
          url: "https://trtmuzikthls.akamaized.net/hls/live/572328/trtmuzik/master.m3u8",
          title: "TRT Müzik HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    }
  ],

  "spor-kanallar": [
    {
      id: "livetv_trt_spor",
      name: "TRT Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/200px-TRT_Spor_logo.svg.png",
      genre: "Sports",
      country: "TR",
      streams: [
        {
          url: "https://trtsporthls.akamaized.net/hls/live/571399/trtspor/master.m3u8",
          title: "TRT Spor HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_trt_spor2",
      name: "TRT Spor Yıldız",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg/200px-TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg.png",
      genre: "Sports",
      country: "TR",
      streams: [
        {
          url: "https://trtsport2hls.akamaized.net/hls/live/573474/trtspor2/master.m3u8",
          title: "TRT Spor Yıldız HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_eurosport1",
      name: "Eurosport 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eurosport_1_logo_2015.svg/200px-Eurosport_1_logo_2015.svg.png",
      genre: "Sports",
      country: "INT",
      streams: [
        {
          url: "https://dai.google.com/linear/hls/pa/event/eurosport1/stream/1/master.m3u8",
          title: "Eurosport 1",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_nba_tv",
      name: "NBA TV",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/NBA_TV_logo.svg/200px-NBA_TV_logo.svg.png",
      genre: "Sports",
      country: "US",
      streams: [
        {
          url: "https://nbatv.akamaized.net/hls/live/master.m3u8",
          title: "NBA TV",
          behaviorHints: { notWebReady: false }
        }
      ]
    }
  ],

  "haber-kanallar": [
    {
      id: "livetv_trt_haber",
      name: "TRT Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/TRT_Haber_logo.svg/200px-TRT_Haber_logo.svg.png",
      genre: "News",
      country: "TR",
      streams: [
        {
          url: "https://trthaberhls.akamaized.net/hls/live/571391/trthaber/master.m3u8",
          title: "TRT Haber HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_cnn_turk",
      name: "CNN Türk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/CNN_T%C3%BCrk_logo.svg/200px-CNN_T%C3%BCrk_logo.svg.png",
      genre: "News",
      country: "TR",
      streams: [
        {
          url: "https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8",
          title: "CNN Türk HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_bloomberg",
      name: "Bloomberg HT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bloomberg_HT.png/200px-Bloomberg_HT.png",
      genre: "News",
      country: "TR",
      streams: [
        {
          url: "https://bloomberght.daioncdn.net/bloomberght/bloomberght.m3u8",
          title: "Bloomberg HT HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_aljazeera",
      name: "Al Jazeera English",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_English.svg/200px-Al_Jazeera_English.svg.png",
      genre: "News",
      country: "QA",
      streams: [
        {
          url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
          title: "Al Jazeera English HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_france24",
      name: "France 24 English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/France_24_logo.svg/200px-France_24_logo.svg.png",
      genre: "News",
      country: "FR",
      streams: [
        {
          url: "https://stream.france24.com/hls/live/2037218/F24_EN_LO_HLS/master.m3u8",
          title: "France 24 EN HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_dw",
      name: "DW News English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/200px-Deutsche_Welle_symbol_2012.svg.png",
      genre: "News",
      country: "DE",
      streams: [
        {
          url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
          title: "DW News HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    }
  ],

  "uluslararasi-kanallar": [
    {
      id: "livetv_bbc_world",
      name: "BBC World News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/BBC_World_News_2022.svg/200px-BBC_World_News_2022.svg.png",
      genre: "News",
      country: "GB",
      streams: [
        {
          url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_world_service/pc_hd.m3u8",
          title: "BBC World News HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_euronews",
      name: "Euronews English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Euronews_logo.svg/200px-Euronews_logo.svg.png",
      genre: "News",
      country: "FR",
      streams: [
        {
          url: "https://euronews-euronews-en-live.hls.cedexis.com/hls/live/euronews_en.m3u8",
          title: "Euronews EN HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_nasa",
      name: "NASA TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png",
      genre: "Science",
      country: "US",
      streams: [
        {
          url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/index.m3u8",
          title: "NASA TV HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_cgtn",
      name: "CGTN English",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN_English_Logo.svg/200px-CGTN_English_Logo.svg.png",
      genre: "News",
      country: "CN",
      streams: [
        {
          url: "https://news.cgtn.com/resource/live/english/cgtn-news.m3u8",
          title: "CGTN EN HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_trt_world",
      name: "TRT World",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/TRT_World_Logo.svg/200px-TRT_World_Logo.svg.png",
      genre: "News",
      country: "TR",
      streams: [
        {
          url: "https://trtworldhls.akamaized.net/hls/live/571393/trtworld/master.m3u8",
          title: "TRT World HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    },
    {
      id: "livetv_arte",
      name: "ARTE (FR/DE)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Arte_Logo.svg/200px-Arte_Logo.svg.png",
      genre: "Culture",
      country: "EU",
      streams: [
        {
          url: "https://arteptweb-a.akamaihd.net/am/ptweb/arte7/arte7.m3u8",
          title: "ARTE HD",
          behaviorHints: { notWebReady: false }
        }
      ]
    }
  ]
};

// Tüm kanallar düz liste olarak
const ALL_CHANNELS = Object.values(CHANNELS).flat();

module.exports = { CHANNELS, ALL_CHANNELS };
