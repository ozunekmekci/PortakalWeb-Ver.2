# Portakal Çiçeği Atölye - Modern E-Ticaret Web Sitesi

## Son Güncellemeler (Haziran 2024)

- **Modern Ana Sayfa Tasarımı:**
  - Instagram tarzı görsel feed slider
  - Güven rozetleri (grid yapıda, eşit boyutlu)
  - Kampanya bannerı (renkli, dikkat çekici)
  - Müşteri memnuniyeti kartı (DM ekranı, ürün ve avatar ile)
  - Tüm bileşenler responsive ve modern grid/flex yapısında
- **Kullanıcı Yorumları:**
  - `public/pleasure/{kullanıcı_adı}/` klasörüne `urun`, `mesaj`, `pp` dosyalarını ekleyerek yeni müşteri memnuniyeti kartı oluşturabilirsin.
  - Her klasör otomatik olarak ana sayfada yeni bir kart olarak görünür.
- **Kod ve Tasarım:**
  - Tüm ana bileşenler (InstagramFeedSlider, TrustBadges, CampaignBanner, TestimonialCard) ayrı dosyalarda ve kolayca özelleştirilebilir.
  - Tüm alanlar mobil ve masaüstünde modern, şık ve orantılı görünür.

## Ana Sayfa Bileşenleri
- **InstagramFeedSlider:** Son ürün görsellerini swipe edilebilir şekilde gösterir.
- **TrustBadges:** Güvenli ödeme, hızlı kargo, kişiye özel tasarım ve müşteri memnuniyeti rozetleri.
- **CampaignBanner:** Güncel kampanya ve indirim duyurusu.
- **TestimonialCard:** Gerçek müşteri memnuniyeti, DM ekranı ve ürün görseliyle birlikte.

## Yeni Müşteri Memnuniyeti Kartı Ekleme
1. `public/pleasure/{kullanıcı_adı}/` klasörü oluştur.
2. İçine:
   - `urun` (ürün görseli, arka plan ve küçük ürün kutusu)
   - `mesaj` (müşteri mesajı görseli, DM ekranı)
   - `pp` (profil fotoğrafı, avatar)
   dosyalarını ekle.
3. Hepsi otomatik olarak ana sayfada yeni bir kart olarak görünür.

## Katkı ve Geliştirme
- Kodlar tamamen modülerdir, yeni bileşenler kolayca eklenebilir.
- Tasarımda değişiklik yapmak için ilgili bileşen dosyasını güncellemen yeterli.

---
Daha fazla bilgi veya destek için [ozunekmekci/portakalcicegiwebsite](https://github.com/ozunekmekci/portakalcicegiwebsite) adresini ziyaret edebilirsin.

## 🚀 Kullanılan Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Jest** (test)
- **ESLint & Prettier**

## ✨ Öne Çıkan Özellikler

- 🎨 Modern, pastel ve marka uyumlu UI/UX
- 🖼️ Büyük ve belirgin logo, modern promosyon barı
- 🛒 Tam fonksiyonel sepet, ödeme ve sipariş akışı
- 📱 Mobil ve masaüstü için responsive tasarım
- ⭐ Güçlü sosyal kanıt: Instagram temalı müşteri yorumları, rozetler
- 🏷️ Dinamik promosyonlar ve kampanya bannerları
- 🚚 Kargo ve indirimler için dikkat çekici üst bar
- 🔍 SEO ve hızlı sayfa yüklemeleri
- 🧹 Hızlı bakış (Quick View) özelliği tamamen kaldırıldı
- 🛠️ Kod kalitesi ve test altyapısı

## 🛠️ Kurulum

```bash
# Repo klonla
https://github.com/ozunekmekci/portakalcicegiwebsite.git
cd portakalcicegiwebsite
npm install
npm run dev
```

## Komutlar
- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production derleme
- `npm start` - Production başlatma
- `npm run lint` - Kod kontrolü
- `npm run test` - Testler
- `npm run format` - Kod formatlama

## 🌐 Canlı Demo
[Vercel'de Görüntüle](https://portakalcicegiwebsite.vercel.app)

## Lisans
MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın.
