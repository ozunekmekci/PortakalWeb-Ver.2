"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useMemo } from "react";
import CartIcon from "@/components/CartIcon";
import { Toast } from "@/components/Toast";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default function HomeClient({ products }: { products: Product[] }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setToast(`${product.name} sepete eklendi!`);
  };

  const extendedProducts = useMemo(() => 
    products.map((p, i) => ({
      ...p,
      oldPrice: p.price + 50 + (i % 2 === 0 ? 20 : 0),
      discount: 100 - Math.round((p.price / (p.price + 50 + (i % 2 === 0 ? 20 : 0))) * 100),
      badge: i === 0 ? "%50 indirim" : i === 1 ? "%25 indirim" : i === 2 ? "%45 indirim" : i === 3 ? "%33 indirim" : undefined,
      info: i === 0 ? "En büyük indirim" : i === 1 ? "60+ gündür en büyük indirim" : i === 2 ? "60+ gündür en büyük indirim" : i === 3 ? "Ücretsiz kargo" : undefined,
      rating: 4.8 + (i % 2) * 0.2,
      reviews: 100 + i * 10,
    })), [products]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      {toast && <Toast message={toast} />}
      
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo/logo.png" 
            alt="Portakal Çiçeği Atölye Logo" 
            width={48} 
            height={48} 
            className="rounded-full bg-white p-1 shadow" 
          />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">
            Portakal Çiçeği
          </span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <a href="#" className="hover:text-white">Ürünler</a>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
          <CartIcon />
        </nav>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#E94F1D] mb-4">
          Portakal Çiçeği Atölye - Kişiye Özel Pleksi Magnet & Anahtarlıklar
        </h1>
        <p className="text-center text-lg text-white mb-8 max-w-2xl mx-auto">
          El yapımı, folyo baskılı pleksi magnetler ve anahtarlıklar. Lüks Dokulu Özel Tasarım Kart ile hem dayanıklı hem de şık. Hediyelik, magnet veya anahtarlık olarak kişiye özel tasarım seçenekleriyle sevdiklerinize anlam katın.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {extendedProducts.map((product) => (
            <ProductCard
              key={product.image}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 