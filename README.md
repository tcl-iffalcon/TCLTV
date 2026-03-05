# 🇹🇷 Nuvio Canlı TV Eklentisi

Nuvio ve Stremio uyumlu, ücretsiz Türkçe canlı TV eklentisi.

## 📺 İçerik

| Kategori | Kanallar |
|----------|----------|
| 🇹🇷 Türkçe | TRT 1, TRT 2, Show TV, Kanal 7, TRT Çocuk, TRT Müzik |
| ⚽ Spor | TRT Spor, TRT Spor Yıldız, Eurosport 1, NBA TV |
| 📰 Haber | TRT Haber, CNN Türk, Bloomberg HT, Al Jazeera, France 24, DW |
| 🌍 Uluslararası | BBC World, Euronews, NASA TV, CGTN, TRT World, ARTE |

---

## 🚀 Vercel'e Deploy Etme (Ücretsiz)

### 1. Hesap aç
- [vercel.com](https://vercel.com) adresine git
- GitHub hesabınla giriş yap

### 2. Projeyi yükle
```bash
# GitHub'a yükle
git init
git add .
git commit -m "Nuvio Live TV Addon"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/nuvio-live-tv.git
git push -u origin main
```

### 3. Vercel'de deploy et
- Vercel dashboard'a gir
- "New Project" > GitHub repo'nu seç
- Deploy butonuna bas → ✅ Hazır!

### 4. URL'yi al
Deploy sonrası URL şöyle görünür:
```
https://nuvio-live-tv-XXXXX.vercel.app/manifest.json
```

---

## 📱 Nuvio'ya Ekleme

1. Nuvio uygulamasını aç
2. **Ayarlar** → **Eklentiler / Addons**
3. **"Manifest URL ekle"** seçeneğine tıkla
4. URL'yi yapıştır:
   ```
   https://nuvio-live-tv-XXXXX.vercel.app/manifest.json
   ```
5. **Yükle** → Kanallar hemen görünür!

---

## 🛠️ Lokal Test

```bash
node server.js
# http://localhost:7000/manifest.json adresini Nuvio'ya ekle
```

---

## ➕ Yeni Kanal Ekleme

`api/channels.js` dosyasını aç, ilgili kategoriye ekle:

```javascript
{
  id: "livetv_KANAL_ADI",        // benzersiz ID
  name: "Kanal Adı",
  logo: "https://logo-url.png",
  genre: "General",              // News, Sports, Kids, Music...
  country: "TR",
  streams: [
    {
      url: "https://stream-url.m3u8",
      title: "Kanal Adı HD",
      behaviorHints: { notWebReady: false }
    }
  ]
}
```

---

## ⚠️ Notlar

- Tüm yayın kaynakları ücretsiz ve açık kaynaklıdır
- Stream URL'leri yayıncıların sunucularından doğrudan gelir
- Bazı kanallar bölge kısıtlaması uygulayabilir
- Stream çalışmazsa URL'yi güncel bir kaynaktan güncellemeniz gerekebilir
