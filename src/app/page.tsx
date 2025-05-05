import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

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
    </main>
  );
}
