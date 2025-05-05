import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import SocialProof from '@/components/SocialProof';

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

export default function Home() {
  const products = getProductsFromImages();
  const currentMonth = getCurrentMonthTR();
  const kargoMesaji = `${currentMonth} AYINA ÖZEL KARGO ÜCRETSİZ`;

  return (
    <main>
      <Hero kargoMesaji={kargoMesaji} />
      <FeaturedProducts
        products={products}
        title="El Yapımı Ürünlerimiz"
        subtitle="Kişiye özel tasarım ve el emeği ürünlerimizle tanışın"
      />
      <SocialProof
        reviews={[
          {
            name: 'Elif K.',
            rating: 5,
            text: 'Ürünlerinizin kalitesine ve hızlı teslimatınıza bayıldım! Herkese tavsiye ederim.',
            date: 'Mart 2024',
            avatar: '/images/avatars/elifk.jpg',
          },
        ]}
        badges={[
          {
            icon: '🏆',
            title: 'Yılın El Yapımı Hediyesi',
            desc: '2024 Handmade Awards',
            bgClass: 'bg-brand-blue/60',
          },
          {
            icon: '🔒',
            title: 'Güvenli Alışveriş',
            desc: '256-bit SSL ile korunan ödeme altyapısı',
            bgClass: 'bg-green-100',
          },
        ]}
      />
    </main>
  );
}
