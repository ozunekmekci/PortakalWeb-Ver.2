"use client";

import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: '🚚',
    title: 'Hızlı Teslimat',
    desc: 'Siparişleriniz 2 iş günü içinde kargoda',
  },
  {
    icon: '🎁',
    title: 'Hediye Paketi',
    desc: 'Ücretsiz hediye paketi seçeneği',
  },
  {
    icon: '🌿',
    title: 'El Yapımı',
    desc: 'Tüm ürünler el emeğiyle üretilir',
  },
  {
    icon: '⭐',
    title: 'Müşteri Memnuniyeti',
    desc: '%100 olumlu geri bildirim',
  },
];

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-orange-50 via-orange-100 to-white pb-0 pt-10 md:pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Sol: Logo veya ürün görseli */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 md:mb-0">
            <Image
              src="/logo/logo.png"
              alt="Portakal Çiçeği Atölye"
              width={200}
              height={200}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
        {/* Sağ: Başlık ve CTA */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4 leading-tight">
            Portakal Çiçeği Atölye
          </h1>
          <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold mb-4">
            El Yapımı Hatıra Ürünleri
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Özel günleriniz için el yapımı, kişiselleştirilebilir hatıra ürünleri. Her ürünümüz özenle tasarlanır ve el emeği ile üretilir.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Link
              href="/urunler"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow transition-colors"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/hakkimizda"
              className="bg-white border border-orange-300 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </div>
      {/* Avantajlar/ikonlar */}
      <div className="w-full bg-white/80 border-t border-orange-100 mt-12 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="font-semibold text-gray-800">{f.title}</span>
              <span className="text-sm text-gray-500 mt-1">{f.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 