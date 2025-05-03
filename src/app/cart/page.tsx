'use client';
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <Link href="/" className="hover:text-white">Ürünler</Link>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-pink-700 mb-8">Sepetim</h1>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Image src="/empty-cart.svg" alt="Boş Sepet" width={180} height={180} className="mb-6" />
            <p className="text-lg text-gray-500 mb-4">Sepetiniz şu anda boş.</p>
            <Link href="/" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition">Alışverişe Başla</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.image} className="flex items-center gap-4 bg-white rounded-xl shadow p-4">
                <div className="relative w-20 h-28 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded-lg border border-pink-100" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="text-pink-600 font-bold">{item.price}₺</div>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.image, item.quantity - 1)} className="w-8 h-8 rounded bg-pink-100 text-pink-600 font-bold text-lg hover:bg-pink-200">-</button>
                    <span className="px-2 font-medium">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.image, item.quantity + 1)} className="w-8 h-8 rounded bg-pink-100 text-pink-600 font-bold text-lg hover:bg-pink-200">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="text-gray-500 font-medium">{item.price * item.quantity}₺</div>
                  <button onClick={() => removeFromCart(item.image)} className="text-xs text-red-500 hover:underline">Kaldır</button>
                </div>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
              <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-500 underline">Sepeti Temizle</button>
              <div className="text-xl font-bold text-pink-700">Toplam: {total}₺</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
              <Link href="/" className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition">Alışverişe Devam Et</Link>
              <Link href="/checkout" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition">Ödemeye Geç</Link>
            </div>
          </div>
        )}
      </main>
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 