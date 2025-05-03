'use client';
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  // Örnek badge, indirim, eski fiyat, puan, öne çıkanlar
  const oldPrice = product.price + 50;
  const discount = 100 - Math.round((product.price / oldPrice) * 100);
  const badge = "%25 indirim";
  const rating = 4.9;
  const highlights = [
    { icon: "🎨", text: "Kişiye özel tasarım" },
    { icon: "🪞", text: "Pleksi malzeme, folyo baskı" },
    { icon: "📦", text: "300 gr kağıt arka yüz" },
    { icon: "🎁", text: "Hediyelik, magnet veya anahtarlık" },
  ];

  const handleAddToCart = () => {
    addToCart(product);
    setToast(`${product.name} sepete eklendi!`);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#E94F1D] text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <Link href="/" className="hover:text-white">Ürünler</Link>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
          <CartIcon />
        </nav>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10 items-start">
        {/* Sol: Galeri */}
        <div className="flex flex-col gap-4 w-full md:w-[380px]">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg bg-white">
            <Image src={product.image} alt={product.name} fill className="object-cover rounded-2xl" />
            {badge && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded shadow">{badge}</span>
            )}
          </div>
        </div>
        {/* Sağ: Detaylar */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-[#E94F1D] flex-1">{product.name}</h1>
            <span className="flex items-center gap-1 text-base text-[#E94F1D] font-bold">{rating.toFixed(1)} <svg width="16" height="16" fill="#E94F1D" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>
          </div>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-2xl font-bold text-green-700">{product.price.toLocaleString()} TL</span>
            <span className="text-base text-gray-400 line-through">{oldPrice.toLocaleString()} TL</span>
            <span className="text-xs bg-green-100 text-green-700 font-bold rounded px-2 py-0.5">%{discount} indirim</span>
          </div>
          <div className="text-sm text-red-600 font-semibold mb-2">Bugün bu ürünü 3 kişi sepete ekledi</div>
          <button className="w-full bg-[#E94F1D] hover:bg-[#FF914D] text-white py-3 rounded-xl font-bold text-lg transition mb-2" onClick={handleAddToCart}>Sepete Ekle</button>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span className="inline-flex items-center gap-1"><svg width="16" height="16" fill="#E94F1D" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#E94F1D" strokeWidth="2" fill="none"/><path d="M12 8v4l3 2" stroke="#E94F1D" strokeWidth="2" strokeLinecap="round"/></svg> 7 gün içinde kargoda</span>
            <span className="inline-flex items-center gap-1"><svg width="16" height="16" fill="#E94F1D" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><circle cx="12" cy="12" r="5"/></svg> Ücretsiz kargo</span>
          </div>
          <div className="border-t pt-4 mt-2">
            <h2 className="font-bold text-[#E94F1D] mb-2">Öne Çıkanlar</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2"><span>{h.icon}</span> {h.text}</li>
              ))}
            </ul>
          </div>
          <div className="border-t pt-4 mt-2">
            <h2 className="font-bold text-[#E94F1D] mb-2">Açıklama</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description} <br />Pleksi malzeme üzerine folyo baskı, arka yüzü 300 gr kağıt. Hediyelik, magnet veya anahtarlık olarak tasarlanmıştır. Kişiye özel tasarım seçenekleriyle sevdiklerinize anlam katın.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 