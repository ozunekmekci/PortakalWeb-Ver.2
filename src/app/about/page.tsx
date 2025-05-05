'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Hakkımızda</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">El yapımı, kişiye özel tasarım ürünlerimizle sevdiklerinize anlamlı hediyeler sunuyoruz.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" fill className="object-contain bg-brand-pink/10" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-brand-orange mb-2">Portakal Çiçeği Atölye</h2>
              <p className="text-gray-700 mb-4">El yapımı, kişiye özel pleksi magnet, anahtarlık ve hediyelik ürünler üretiyoruz. Ürünlerimizde pleksi malzeme üzerine folyo baskı uygulanır ve arka yüzünde Lüks Dokulu Özel Tasarım Kart kullanılır. Her bir ürünümüz, hem estetik hem de dayanıklı olacak şekilde özenle tasarlanır.</p>
              <p className="text-gray-700 mb-4">Kişiye özel tasarım seçenekleriyle, sevdiklerinize anlamlı ve kaliteli hediyeler sunmak için çalışıyoruz. Magnetlerimiz ve anahtarlıklarımız, doğum günü, bebek mevlüdü, nikah, nişan gibi özel günler için mükemmel birer hatıra ve dekoratif objedir.</p>
              <p className="text-gray-700">Hayalinizdeki magneti veya anahtarlığı birlikte tasarlayalım! Sorularınız ve özel istekleriniz için bana her zaman ulaşabilirsiniz.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-brand-orange font-semibold">Sevgiyle, <br />Portakal Çiçeği Atölye</p>
            <p className="mt-4">
              Bizi Instagram'da takip edin: {" "}
              <a href="https://www.instagram.com/portakalcicegi.atolye/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-orange">@portakalcicegi.atolye</a>
            </p>
          </div>
        </div>
        {/* Sosyal Kanıt */}
        <section className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">"Ürünler harika, iletişim çok hızlı ve ilgili!"</blockquote>
              <span className="font-bold text-brand-orange">- Selin D.</span>
            </div>
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">El Yapımı Kalite</div>
              <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
              <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 