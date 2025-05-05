"use client";

import Link from 'next/link';
import Image from 'next/image';

const DISCOUNT = 30;
const KARGO_MESAJI = "🚚 KARGO ÜCRETSİZ";

const features = [
  {
    icon: '🚚',
    title: 'Kargo Ücretsiz',
    desc: 'Tüm siparişlerde kargo ücretsiz',
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

interface HeroProps {
  kargoMesaji?: string;
}

const Hero = ({ kargoMesaji }: HeroProps) => {
  return (
    <section className="relative w-full bg-gradient-to-br from-brand-pink via-brand-blue to-white pb-0 pt-10 md:pt-20">
      {/* Modern Promosyon Bannerı */}
      <div className="w-full flex justify-center items-center mb-6">
        <div className="relative px-8 py-2 rounded-2xl shadow-lg bg-gradient-to-r from-brand-orange via-pink-200 to-brand-blue border-2 border-orange-200 flex items-center gap-4 animate-fade-in"
          style={{ boxShadow: '0 4px 24px 0 rgba(255, 145, 77, 0.10)' }}>
          <span className="text-white font-bold text-lg md:text-xl drop-shadow">%{DISCOUNT} İNDİRİM</span>
          <span className="w-2 h-2 rounded-full bg-white/60 mx-2"></span>
          <span className="text-orange-900 font-semibold text-base md:text-lg tracking-wide">{kargoMesaji || 'MAYIS AYINA ÖZEL KARGO ÜCRETSİZ'}</span>
          <span className="flex items-center gap-1 text-blue-800 font-bold text-base md:text-lg bg-white/80 px-3 py-1 rounded-xl shadow border border-blue-200">
            <span className="text-2xl">🚚</span> KARGO ÜCRETSİZ
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Sol: Logo veya ürün görseli */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-1/2">
          <div className="bg-white rounded-3xl shadow-2xl border-4 border-brand-orange p-4 md:p-8 mb-6 md:mb-0 flex items-center justify-center">
            <Image
              src="/logo/logo.png"
              alt="Portakal Çiçeği Atölye"
              width={300}
              height={300}
              className="rounded-2xl object-contain h-40 md:h-60 w-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>
        {/* Sağ: Başlık ve CTA */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-4 leading-tight">
            Portakal Çiçeği Atölye
          </h1>
          <h2 className="text-2xl md:text-3xl text-brand-orange font-semibold mb-4 font-serif">
            El Yapımı Hatıra Ürünleri
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            <span className="inline-flex items-center bg-brand-orange/10 text-brand-orange font-bold text-sm px-3 py-1 rounded-full">%{DISCOUNT} İNDİRİM</span>
            <span className="inline-flex items-center bg-brand-blue text-blue-700 font-bold text-sm px-3 py-1 rounded-full">🚚 KARGO ÜCRETSİZ</span>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl font-sans">
            Özel günleriniz için el yapımı, kişiselleştirilebilir hatıra ürünleri. Her ürünümüz özenle tasarlanır ve el emeği ile üretilir.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <Link
              href="/urunler"
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow transition-colors font-sans"
            >
              Ürünleri Keşfet
            </Link>
            <Link
              href="/hakkimizda"
              className="bg-white border border-brand-orange text-brand-orange px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange/10 transition-colors font-sans"
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