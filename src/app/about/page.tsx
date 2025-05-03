'use client';
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <Link href="/" className="hover:text-white">Ürünler</Link>
          <Link href="/cart" className="hover:text-white">Sepet</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-pink-700 mb-6 text-center">Hakkımızda</h1>
        <div className="bg-white rounded-xl shadow p-6 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4"><b>Portakal Çiçeği Atölye</b> olarak, el yapımı, kişiye özel pleksi magnet, anahtarlık ve hediyelik ürünler üretiyoruz. Ürünlerimizde pleksi malzeme üzerine folyo baskı uygulanır ve arka yüzünde 300 gr özel kağıt kullanılır. Her bir ürünümüz, hem estetik hem de dayanıklı olacak şekilde özenle tasarlanır.</p>
          <p className="mb-4">Kişiye özel tasarım seçenekleriyle, sevdiklerinize anlamlı ve kaliteli hediyeler sunmak için çalışıyoruz. Magnetlerimiz ve anahtarlıklarımız, doğum günü, bebek mevlüdü, nikah, nişan gibi özel günler için mükemmel birer hatıra ve dekoratif objedir.</p>
          <p className="mb-4">Hayalinizdeki magneti veya anahtarlığı birlikte tasarlayalım! Sorularınız ve özel istekleriniz için bana her zaman ulaşabilirsiniz.</p>
          <p className="mt-6 text-center text-[#E94F1D] font-semibold">Sevgiyle, <br />Portakal Çiçeği Atölye</p>
          <p className="mt-4 text-center">
            Bizi Instagram'da takip edin: {" "}
            <a href="https://www.instagram.com/portakalcicegi.atolye/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E94F1D]">@portakalcicegi.atolye</a>
          </p>
        </div>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 