'use client';
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import CartIcon from "@/components/CartIcon";

export default function HomeClient({ products }: { products: any[] }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const handleAddToCart = (product: any) => {
    addToCart(product);
    setToast(`${product.name} sepete eklendi!`);
    setTimeout(() => setToast(""), 2000);
  };

  // Ürünlere örnek indirim ve badge ekle
  const extendedProducts = products.map((p, i) => ({
    ...p,
    oldPrice: p.price + 50 + (i % 2 === 0 ? 20 : 0),
    discount: 100 - Math.round((p.price / (p.price + 50 + (i % 2 === 0 ? 20 : 0))) * 100),
    badge: i === 0 ? "%50 indirim" : i === 1 ? "%25 indirim" : i === 2 ? "%45 indirim" : i === 3 ? "%33 indirim" : undefined,
    info: i === 0 ? "En büyük indirim" : i === 1 ? "60+ gündür en büyük indirim" : i === 2 ? "60+ gündür en büyük indirim" : i === 3 ? "Ücretsiz kargo" : undefined,
    rating: 4.8 + (i % 2) * 0.2,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <a href="#" className="hover:text-white">Ürünler</a>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
          <CartIcon />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#E94F1D] mb-4">Portakal Çiçeği Atölye - Kişiye Özel Pleksi Magnet & Anahtarlıklar</h1>
        <p className="text-center text-lg text-white mb-8 max-w-2xl mx-auto">El yapımı, folyo baskılı pleksi magnetler ve anahtarlıklar. 300 gr kağıt arka yüzüyle hem dayanıklı hem de şık. Hediyelik, magnet veya anahtarlık olarak kişiye özel tasarım seçenekleriyle sevdiklerinize anlam katın.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {extendedProducts.map((product, idx) => {
            const slug = product.image.split("/").pop().split(".")[0];
            return (
              <div key={product.image} className="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl transition-all border border-orange-100 relative group">
                <Link href={`/products/${slug}`} className="w-full flex-1 flex flex-col items-center">
                  <div className="relative w-full h-56 mb-3 rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl group-hover:brightness-95"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-800 text-base truncate max-w-[140px]">{product.name}</span>
                      <span className="flex items-center gap-1 text-xs text-[#E94F1D] font-bold">{product.rating.toFixed(1)} <svg width="14" height="14" fill="#E94F1D" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></span>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-lg font-bold text-green-700">{product.price.toLocaleString()} TL</span>
                      <span className="text-sm text-gray-400 line-through">{product.oldPrice.toLocaleString()} TL</span>
                      <span className="text-xs bg-green-100 text-green-700 font-bold rounded px-2 py-0.5">%{product.discount} off</span>
                    </div>
                    {product.info && <div className="text-xs text-gray-500 mt-1">{product.info}</div>}
                  </div>
                </Link>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow">{product.badge}</span>
                )}
                <button
                  className="mt-3 bg-[#E94F1D] hover:bg-[#FF914D] text-white px-4 py-2 rounded-lg font-medium transition w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Sepete Ekle
                </button>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 