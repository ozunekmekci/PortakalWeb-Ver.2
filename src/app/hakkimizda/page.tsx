'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Hakkımızda
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El yapımı, kişiye özel tasarım ürünlerimizle sevdiklerinize anlamlı hediyeler sunuyoruz.
          </p>
        </div>

        {/* Hikayemiz */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/workshop.jpg"
                alt="Portakal Çiçeği Atölye"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-4">Hikayemiz</h2>
              <p className="text-gray-600 mb-6">
                2020 yılında küçük bir atölyede başlayan yolculuğumuz, bugün binlerce mutlu müşteriye ulaştı. 
                Her ürünümüzde el emeği ve göz nuru var. Amacımız, özel günlerinizi daha da özel kılmak.
              </p>
              <p className="text-gray-600">
                Portakal Çiçeği Atölye olarak, her ürünümüzde kalite ve estetiği bir araya getiriyoruz. 
                Kişiye özel tasarımlarımızla, sevdiklerinize anlamlı hediyeler sunmanıza yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Değerlerimiz */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-serif text-gray-800 mb-2">Yaratıcılık</h3>
              <p className="text-gray-600">
                Her ürünümüzde benzersiz tasarımlar ve yaratıcı çözümler sunuyoruz.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-serif text-gray-800 mb-2">Kalite</h3>
              <p className="text-gray-600">
                En kaliteli malzemeler ve titiz işçilikle üretim yapıyoruz.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-serif text-gray-800 mb-2">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşterilerimizin mutluluğu bizim için en önemli öncelik.
              </p>
            </div>
          </div>
        </section>

        {/* Ekibimiz */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">Ekibimiz</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/member1.jpg"
                  alt="Ekip Üyesi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-1">Ayşe Yılmaz</h3>
              <p className="text-gray-600 text-sm">Kurucu & Tasarımcı</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/member2.jpg"
                  alt="Ekip Üyesi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-1">Mehmet Demir</h3>
              <p className="text-gray-600 text-sm">Üretim Sorumlusu</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/member3.jpg"
                  alt="Ekip Üyesi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-1">Zeynep Kaya</h3>
              <p className="text-gray-600 text-sm">Müşteri İlişkileri</p>
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/member4.jpg"
                  alt="Ekip Üyesi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-serif text-gray-800 mb-1">Ali Öztürk</h3>
              <p className="text-gray-600 text-sm">Kargo & Lojistik</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-brand-orange to-brand-pink rounded-2xl p-12 text-white shadow-lg">
            <h2 className="text-3xl font-serif mb-4">Ürünlerimizi Keşfedin</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              El yapımı, kişiye özel tasarım ürünlerimizle sevdiklerinize anlamlı hediyeler sunun.
            </p>
            <Link
              href="/urunler"
              className="inline-block bg-white text-brand-orange px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ürünleri Görüntüle
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
} 