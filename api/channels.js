const CHANNELS = {
  "genel": [
    {
      id: "livetv_trt1", name: "TRT 1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/TRT_1_logo_%282021-%29.svg/120px-TRT_1_logo_%282021-%29.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-1/master.m3u8?app=web", title: "TRT 1 HD" },
        { url: "https://tv-trt1.medya.trt.com.tr/master.m3u8", title: "TRT 1 HD (2)" }
      ]
    },
    {
      id: "livetv_trt2", name: "TRT 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt2.medya.trt.com.tr/master.m3u8", title: "TRT 2 HD" }
      ]
    },
    {
      id: "livetv_trt3", name: "TRT 3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt3.live.trt.com.tr/master.m3u8", title: "TRT 3" }
      ]
    },
    {
      id: "livetv_trt_belgesel", name: "TRT Belgesel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "Documentary", country: "TR",
      streams: [
        { url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8", title: "TRT Belgesel" }
      ]
    },
    {
      id: "livetv_atv", name: "ATV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ATV_Turkey_logo.svg/120px-ATV_Turkey_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/atv/atv_360p.m3u8", title: "ATV" },
        { url: "http://89.187.191.41/ATV-HD-TR/video.m3u8", title: "ATV HD (2)" },
        { url: "http://116.202.238.88/ATV_TR/index.m3u8", title: "ATV HD (3)" }
      ]
    },
    {
      id: "livetv_kanald", name: "Kanal D",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Kanal_D_logo.svg/120px-Kanal_D_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web&ce=3", title: "Kanal D HD" }
      ]
    },
    {
      id: "livetv_show", name: "Show TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Show_TV_logo.svg/120px-Show_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://ciner-live.daioncdn.net/showtv/showtv.m3u8", title: "Show TV HD" }
      ]
    },
    {
      id: "livetv_startv", name: "Star TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Star_TV_logo.svg/120px-Star_TV_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://dogus-live.daioncdn.net/startv/startv.m3u8", title: "Star TV HD" }
      ]
    },
    {
      id: "livetv_nowtv", name: "NOW TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fox_TV_logo_turkey.svg/120px-Fox_TV_logo_turkey.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://116.202.238.88/FOXTV_TR/index.m3u8", title: "NOW TV" }
      ]
    },
    {
      id: "livetv_tv8", name: "TV8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/TV8_logo.svg/120px-TV8_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv8.daioncdn.net/tv8/tv8.m3u8?app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3", title: "TV8 HD" }
      ]
    },
    {
      id: "livetv_halktv", name: "Halk TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://halktv-live.daioncdn.net/halktv/halktv.m3u8", title: "Halk TV HD" }
      ]
    }
  ],

  "haber": [
    {
      id: "livetv_trt_haber", name: "TRT Haber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/TRT_Haber_logo.svg/120px-TRT_Haber_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8", title: "TRT Haber HD" }
      ]
    },
    {
      id: "livetv_cnn_turk", name: "CNN Türk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/CNN_T%C3%BCrk_logo.svg/120px-CNN_T%C3%BCrk_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8", title: "CNN Türk HD" }
      ]
    },
    {
      id: "livetv_ntv", name: "NTV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/NTV_Turkey_logo.svg/120px-NTV_Turkey_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8", title: "NTV HD" }
      ]
    },
    {
      id: "livetv_bloomberg", name: "Bloomberg HT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Bloomberg_HT.png/120px-Bloomberg_HT.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://ciner.daioncdn.net/bloomberght/bloomberght.m3u8", title: "Bloomberg HT" },
        { url: "https://tv.ensonhaber.com/bloomberght/bloomberght.m3u8", title: "Bloomberg HT (1)" }
      ]
    },
    {
      id: "livetv_haberturk", name: "Habertürk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Haberturk_logo.svg/120px-Haberturk_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv.ensonhaber.com/haberturk/haberturk.m3u8", title: "Habertürk" }
      ]
    },
    {
      id: "livetv_haberglobal", name: "Haber Global",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8", title: "Haber Global HD" },
      ]
    },
    {
      id: "livetv_cnbce", name: "CNBC-e",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8", title: "CNBC-e HD" }
      ]
    }
  ],

  "spor": [
    {
      id: "livetv_trt_spor", name: "TRT Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8", title: "TRT Spor HD" }
      ]
    },
    {
      id: "livetv_trt_spor2", name: "TRT Spor Yıldız",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg/120px-TRT_Spor_Y%C4%B1ld%C4%B1z_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor2.medya.trt.com.tr/master.m3u8", title: "TRT Spor Yıldız HD" }
      ]
    },
    {
      id: "livetv_tabii_spor6", name: "Tabii Spor 6",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://vbtob9hyq58eiophct5qctxr2.medya.trt.com.tr/master.m3u8", title: "Tabii Spor 6" }
      ]
    },
    {
      id: "livetv_ht_spor", name: "HT Spor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://ciner.daioncdn.net/ht-spor/ht-spor.m3u8?app=web", title: "HT Spor HD" }
      ]
    },
    {
      id: "livetv_s_sport", name: "S Sport",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://bcovlive-a.akamaihd.net/540fcb034b144b848e7ff887f61a293a/eu-central-1/6415845530001/profile_0/chunklist.m3u8", title: "S Sport" }
      ]
    },
    {
      id: "livetv_s_sport2", name: "S Sport 2",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://bcovlive-a.akamaihd.net/29c60f23ea4840ba8726925a77fcfd0b/eu-central-1/6415845530001/profile_0/chunklist.m3u8", title: "S Sport 2" }
      ]
    },
    {
      id: "livetv_sports_tv", name: "Sports TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TRT_Spor_logo.svg/120px-TRT_Spor_logo.svg.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://live.sportstv.com.tr/hls/low/sportstv.m3u8", title: "Sports TV" }
      ]
    }
  ],

  "muzik": [
    {
      id: "livetv_power_turk", name: "Power Türk TV",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8", title: "Power Türk HD" }
      ]
    },
    {
      id: "livetv_trt_muzik", name: "TRT Müzik",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TRT_M%C3%BCzik_logo.svg/120px-TRT_M%C3%BCzik_logo.svg.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8", title: "TRT Müzik HD" }
      ]
    },
    {
      id: "livetv_dream_turk", name: "Dream Türk",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TRT_2_logo.svg/120px-TRT_2_logo.svg.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8", title: "Dream Türk HD" }
      ]
    }
  ]
};

const ALL_CHANNELS = Object.values(CHANNELS).flat();
module.exports = { CHANNELS, ALL_CHANNELS };
