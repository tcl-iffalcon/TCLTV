const BASE_LOGO = "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/turkey/";
const DEFAULT_LOGO = BASE_LOGO + "trt-tr.png";

const CHANNELS = {
  "genel": [
    {
      id: "livetv_trt1", name: "TRT 1",
      logo: BASE_LOGO + "trt-1-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://trt.daioncdn.net/trt-1/master.m3u8?app=web", title: "TRT 1 HD" },
        { url: "https://tv-trt1.medya.trt.com.tr/master.m3u8", title: "TRT 1 HD (2)" }
      ]
    },
    {
      id: "livetv_trt2", name: "TRT 2",
      logo: BASE_LOGO + "trt-2-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt2.medya.trt.com.tr/master.m3u8", title: "TRT 2 HD" }
      ]
    },
    {
      id: "livetv_trt3", name: "TRT 3",
      logo: BASE_LOGO + "trt-3-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv-trt3.live.trt.com.tr/master.m3u8", title: "TRT 3" }
      ]
    },
    {
      id: "livetv_trt_belgesel", name: "TRT Belgesel",
      logo: BASE_LOGO + "trt-belgesel-tr.png",
      genre: "Documentary", country: "TR",
      streams: [
        { url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8", title: "TRT Belgesel" }
      ]
    },
    {
      id: "livetv_atv", name: "ATV",
      logo: BASE_LOGO + "atv-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/atv/atv_360p.m3u8", title: "ATV" },
        { url: "http://89.187.191.41/ATV-HD-TR/video.m3u8", title: "ATV HD (2)" },
        { url: "http://116.202.238.88/ATV_TR/index.m3u8", title: "ATV HD (3)" }
      ]
    },
    {
      id: "livetv_kanald", name: "Kanal D",
      logo: BASE_LOGO + "kanal-d-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web&ce=3", title: "Kanal D HD" }
      ]
    },
    {
      id: "livetv_show", name: "Show TV",
      logo: BASE_LOGO + "show-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://canli.ensonhaber.com/tr/showtv/index.m3u8", title: "Show TV HD" },
        { url: "https://ciner.daioncdn.net/showtv/showtv.m3u8?ce=3&app=4bc856ef-4c68-4a94-bc87-37dfaaa66558", title: "Show TV (2)" }
      ]
    },
    {
      id: "livetv_startv", name: "Star TV",
      logo: BASE_LOGO + "star-tv-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://dogus-live.daioncdn.net/startv/startv.m3u8", title: "Star TV HD" },
        { url: "http://dygvideo.dygdigital.com/live/hls/startv4puhu?m3u8", title: "Star TV (2)" }
      ]
    },
    {
      id: "livetv_nowtv", name: "NOW TV",
      logo: BASE_LOGO + "now-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv.m3u8", title: "NOW TV HD" },
        { url: "http://116.202.238.88/FOXTV_TR/index.m3u8", title: "NOW TV (2)" }
      ]
    },
    {
      id: "livetv_tv8", name: "TV8",
      logo: BASE_LOGO + "tv8-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv8-live.daioncdn.net/tv8/tv8.m3u8", title: "TV8 HD" },
        { url: "https://tv8.daioncdn.net/tv8/tv8.m3u8?app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3", title: "TV8 HD (2)" }
      ]
    },
    {
      id: "livetv_tv8_5", name: "TV8,5",
      logo: "https://i.ibb.co/dgj3MTh/tv85.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://tv8.daioncdn.net/tv8bucuk/tv8bucuk.m3u8?app=tv8bucuk_web", title: "TV8,5 HD" }
      ]
    },
    {
      id: "livetv_halktv", name: "Halk TV",
      logo: BASE_LOGO + "halk-tv-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://halktv-live.daioncdn.net/halktv/halktv.m3u8", title: "Halk TV HD" }
      ]
    },
    {
      id: "livetv_teve2", name: "TEVE2",
      logo: BASE_LOGO + "teve2-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://live.duhnet.tv/S2/HLS_LIVE/teve2np/playlist.m3u8", title: "TEVE2 HD" }
      ]
    },
    {
      id: "livetv_tlc", name: "TLC",
      logo: "http://assets.tvcdn.net/9871d781-b961-45cc-a287-c304f02bef1d.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://dygvideo.dygdigital.com/live/hls/tlctvdai?m3u8", title: "TLC HD" }
      ]
    },
    {
      id: "livetv_dmax", name: "DMAX",
      logo: "http://assets.tvcdn.net/32da9e04-0514-4e3c-b8e1-854f1fc175ed.png",
      genre: "General", country: "TR",
      streams: [
        { url: "http://dygvideo.dygdigital.com/live/hls/dmaxdai?m3u8", title: "DMAX HD" }
      ]
    },
    {
      id: "livetv_a2", name: "A2",
      logo: BASE_LOGO + "a2-tr.png",
      genre: "General", country: "TR",
      streams: [
        { url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/a2tv/a2tv.m3u8", title: "A2 HD" }
      ]
    }
  ],

  "haber": [
    {
      id: "livetv_trt_haber", name: "TRT Haber",
      logo: BASE_LOGO + "trt-haber-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8", title: "TRT Haber HD" }
      ]
    },
    {
      id: "livetv_cnn_turk", name: "CNN Türk",
      logo: BASE_LOGO + "cnn-turk-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/track_1_320/playlist.m3u8", title: "CNN Türk HD" },
        { url: "https://cnnturk.daioncdn.net/cnnturk/cnnturk.m3u8", title: "CNN Türk (2)" }
      ]
    },
    {
      id: "livetv_ntv", name: "NTV",
      logo: BASE_LOGO + "ntv-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8", title: "NTV HD" },
        { url: "http://dygvideo.dygdigital.com/live/hls/ntv4puhu?m3u8", title: "NTV (2)" }
      ]
    },
    {
      id: "livetv_bloomberg", name: "Bloomberg HT",
      logo: BASE_LOGO + "bloomberg-ht-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://ciner-live.daioncdn.net/bloomberght/bloomberght.m3u8", title: "Bloomberg HT HD" },
        { url: "https://ciner.daioncdn.net/bloomberght/bloomberght.m3u8", title: "Bloomberg HT (2)" },
        { url: "https://tv.ensonhaber.com/bloomberght/bloomberght.m3u8", title: "Bloomberg HT (3)" }
      ]
    },
    {
      id: "livetv_haberturk", name: "Habertürk",
      logo: BASE_LOGO + "haberturk-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://ciner-live.daioncdn.net/haberturktv/haberturktv.m3u8", title: "Habertürk HD" },
        { url: "https://tv.ensonhaber.com/haberturk/haberturk.m3u8", title: "Habertürk (2)" }
      ]
    },
    {
      id: "livetv_haberglobal", name: "Haber Global",
      logo: BASE_LOGO + "haber-global-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8", title: "Haber Global HD" },
        { url: "https://haberglobaldvr.blutv.com/blutv_haberglobal_dvr/live.m3u8", title: "Haber Global (2)" }
      ]
    },
    {
      id: "livetv_cnbce", name: "CNBC-e",
      logo: BASE_LOGO + "cnbc-e-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8", title: "CNBC-e HD" }
      ]
    },
    {
      id: "livetv_tv100", name: "TV100",
      logo: BASE_LOGO + "tv100-tr.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://tv100-live.daioncdn.net/tv100/tv100.m3u8", title: "TV100 HD" }
      ]
    },
    {
      id: "livetv_sozcu", name: "Sözcü TV",
      logo: "http://assets.tvcdn.net/491384df-7154-4404-8f97-2e7847655441.png",
      genre: "News", country: "TR",
      streams: [
        { url: "https://trn03.tulix.tv/gt-sozcu-tv/playlist.m3u8", title: "Sözcü TV HD" }
      ]
    }
  ],

  "spor": [
    {
      id: "livetv_trt_spor", name: "TRT Spor",
      logo: BASE_LOGO + "trt-spor-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8", title: "TRT Spor HD" }
      ]
    },
    {
      id: "livetv_trt_spor2", name: "TRT Spor Yıldız",
      logo: BASE_LOGO + "trt-spor-yildiz-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://tv-trtspor2.medya.trt.com.tr/master.m3u8", title: "TRT Spor Yıldız HD" }
      ]
    },
    {
      id: "livetv_tabii_spor6", name: "Tabii Spor 6",
      logo: BASE_LOGO + "trt-spor-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://vbtob9hyq58eiophct5qctxr2.medya.trt.com.tr/master.m3u8", title: "Tabii Spor 6" }
      ]
    },
    {
      id: "livetv_ht_spor", name: "HT Spor",
      logo: BASE_LOGO + "haberturk-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://ciner.daioncdn.net/ht-spor/ht-spor.m3u8?app=web", title: "HT Spor HD" },
        { url: "https://ciner-live.ercdn.net/htspor/htspor.m3u8", title: "HT Spor (2)" }
      ]
    },
    {
      id: "livetv_sports_tv", name: "Sports TV",
      logo: BASE_LOGO + "sports-tv-tr.png",
      genre: "Sports", country: "TR",
      streams: [
        { url: "https://live.sportstv.com.tr/hls/low/sportstv.m3u8", title: "Sports TV" }
      ]
    }
  ],

  "muzik": [
    {
      id: "livetv_power_turk", name: "Power Türk TV",
      logo: BASE_LOGO + "powerturk-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlist.m3u8", title: "Power Türk HD" },
        { url: "https://mn-nl.mncdn.com/blutv_powerturk/smil:powerturk_sd.smil/playlist.m3u8", title: "Power Türk (2)" },
        { url: "https://powerturk.blutv.com/blutv_powerturk/powerturk_sd.smil/playlist.m3u8", title: "Power Türk (3)" }
      ]
    },
    {
      id: "livetv_power_love", name: "Power Love",
      logo: BASE_LOGO + "power-tv-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8", title: "Power Love HD" }
      ]
    },
    {
      id: "livetv_power_dance", name: "Power Dance",
      logo: BASE_LOGO + "power-tv-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8", title: "Power Dance HD" }
      ]
    },
    {
      id: "livetv_power_akustik", name: "Power Akustik",
      logo: BASE_LOGO + "power-tv-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/playlist.m3u8", title: "Power Akustik HD" }
      ]
    },
    {
      id: "livetv_power_slow", name: "Power Slow",
      logo: BASE_LOGO + "power-tv-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/pturkslow/slow.smil/playlist.m3u8", title: "Power Slow HD" }
      ]
    },
    {
      id: "livetv_power_taptaze", name: "Power Taptaze",
      logo: BASE_LOGO + "power-tv-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8", title: "Power Taptaze HD" }
      ]
    },
    {
      id: "livetv_trt_muzik", name: "TRT Müzik",
      logo: BASE_LOGO + "trt-muzik-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8", title: "TRT Müzik HD" }
      ]
    },
    {
      id: "livetv_dream_turk", name: "Dream Türk",
      logo: BASE_LOGO + "dream-turk-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://live.duhnet.tv/S2/HLS_LIVE/dreamturknp/playlist.m3u8", title: "Dream Türk HD" }
      ]
    },
    {
      id: "livetv_number1_ask", name: "Number 1 Aşk",
      logo: BASE_LOGO + "nr1-ask-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/playlist.m3u8", title: "Number 1 Aşk HD" }
      ]
    },
    {
      id: "livetv_number1_damar", name: "Number 1 Damar",
      logo: BASE_LOGO + "nr1-damar-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e198784bdc_1/playlist.m3u8", title: "Number 1 Damar HD" }
      ]
    },
    {
      id: "livetv_number1_dance", name: "Number 1 Dance",
      logo: BASE_LOGO + "nr1-dance-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/playlist.m3u8", title: "Number 1 Dance HD" }
      ]
    },
    {
      id: "livetv_number1_turk", name: "Number 1 Türk",
      logo: BASE_LOGO + "nr1-turk-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://mn-nl.mncdn.com/blutv_nr1turk2/live.m3u8", title: "Number 1 Türk HD" }
      ]
    },
    {
      id: "livetv_number1_tv", name: "Number 1 TV",
      logo: BASE_LOGO + "nr1-tr.png",
      genre: "Music", country: "TR",
      streams: [
        { url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8", title: "Number 1 TV HD" }
      ]
    }
  ],

  "cocuk": [
    {
      id: "livetv_trt_cocuk", name: "TRT Çocuk",
      logo: BASE_LOGO + "trt-cocuk-tr.png",
      genre: "Kids", country: "TR",
      streams: [
        { url: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8", title: "TRT Çocuk HD" }
      ]
    },
    {
      id: "livetv_babytv", name: "Baby TV",
      logo: "https://i.imgur.com/4BDJ5FT.png",
      genre: "Kids", country: "TR",
      streams: [
        { url: "https://saran-live.ercdn.net/babytv/index.m3u8", title: "Baby TV HD" }
      ]
    }
  ]
};

const ALL_CHANNELS = Object.values(CHANNELS).flat();
module.exports = { CHANNELS, ALL_CHANNELS };
