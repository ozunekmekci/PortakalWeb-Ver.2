import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import SocialProof from '@/components/SocialProof';
import TestimonialCard from '@/components/TestimonialCard';
import InstagramFeedSlider from '@/components/InstagramFeedSlider';
import TrustBadges from '@/components/TrustBadges';
import CampaignBanner from '@/components/CampaignBanner';

const FIXED_TITLE = 'Kişiye Özel Pleksi Bebek Hatıra Mıknatıs Hediyelik – Baskılı Figür ve İsim Yazılı Babyshower & Mevlüt & Doğum Günü Hediyesi';
const FIXED_PRICE = 35;

function getCurrentMonthTR() {
  const aylar = [
    'OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN',
    'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'
  ];
  const now = new Date();
  return aylar[now.getMonth()];
}

function getSlugFromFilename(filename: string) {
  // Dosya adından md5 hash üret
  return crypto.createHash('md5').update(filename).digest('hex').slice(0, 12);
}

function getProductsFromImages() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  const files = fs.readdirSync(dir).filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
  );
  return files.map((file, i) => {
    const slug = getSlugFromFilename(file);
    return {
      id: String(i + 1),
      name: FIXED_TITLE,
      description: 'Açıklama ekleyebilirsiniz.',
      price: FIXED_PRICE,
      image: `/images/products/${file}`,
      category: 'Hatıra Ürünleri',
      isNew: true,
      stock: 10,
      slug
    };
  });
}

// pleasure klasöründen müşteri memnuniyetlerini oku
function getTestimonials() {
  const pleasureDir = path.join(process.cwd(), 'public', 'pleasure');
  if (!fs.existsSync(pleasureDir)) return [];
  const users = fs.readdirSync(pleasureDir).filter((name) =>
    fs.lstatSync(path.join(pleasureDir, name)).isDirectory()
  );
  return users.map((username) => {
    const userDir = path.join(pleasureDir, username);
    // Dosya uzantılarını bulmak için
    const files = fs.readdirSync(userDir);
    const findFile = (prefix: string) => files.find(f => f.startsWith(prefix));
    const urun = findFile('urun');
    const mesaj = findFile('mesaj');
    const pp = findFile('pp');
    return {
      username,
      backgroundImg: `/pleasure/${username}/${urun}`,
      profileImg: `/pleasure/${username}/${pp}`,
      messageImg: `/pleasure/${username}/${mesaj}`,
    };
  });
}

export default function Home() {
  const products = getProductsFromImages();
  const currentMonth = getCurrentMonthTR();
  const kargoMesaji = `${currentMonth} AYINA ÖZEL KARGO ÜCRETSİZ`;
  const testimonials = getTestimonials();

  return (
    <main>
      <Hero kargoMesaji={kargoMesaji} />
      <FeaturedProducts
        products={products}
        title="El Yapımı Ürünlerimiz"
        subtitle="Kişiye özel tasarım ve el emeği ürünlerimizle tanışın"
      />
      {/* Modern sosyal ve güven alanı */}
      <div className="w-full flex flex-col md:flex-row gap-4 my-8 items-start justify-center">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <InstagramFeedSlider />
        </div>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <TrustBadges />
          <CampaignBanner />
        </div>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {testimonials.length > 0 && (
            <TestimonialCard
              backgroundImg={testimonials[0].backgroundImg}
              profileImg={testimonials[0].profileImg}
              username={testimonials[0].username}
              message={<img src={testimonials[0].messageImg} alt="Müşteri mesajı" />}
              productImg={testimonials[0].backgroundImg}
            />
          )}
        </div>
      </div>
    </main>
  );
}
