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
      <section className="mt-20 mb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">“Ürünlerinizin kalitesine ve hızlı teslimatınıza bayıldım! Herkese tavsiye ederim.”</blockquote>
              <span className="font-bold text-brand-orange">- Elif K.</span>
            </div>
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Yılın El Yapımı Hediyesi</div>
              <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
              <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
