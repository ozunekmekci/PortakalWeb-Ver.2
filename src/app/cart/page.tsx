'use client';
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image src="/empty-cart.svg" alt="Boş Sepet" width={180} height={180} className="mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Sepetiniz Boş</h1>
            <p className="text-gray-600 mb-8">Sepetinizde henüz ürün bulunmuyor. Hemen alışverişe başlayın!</p>
            <Link
              href="/urunler"
              className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ürünleri Keşfet
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 text-center">Sepetiniz</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Ürün Listesi */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0 items-center">
                    {/* Ürün Görseli */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {/* Ürün Bilgileri */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-medium text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-orange-100 text-orange-600 font-bold text-xs px-2 py-1 rounded-full">%30 İNDİRİM</span>
                        <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full">KARGO ÜCRETSİZ</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-colors"
                        >
                          +
                        </button>
                        <span className="text-lg font-semibold text-brand-orange ml-4">{item.price * item.quantity} TL</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                        >
                          <span className="text-xl">×</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-8 gap-4">
                <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-500 underline">Sepeti Temizle</button>
                <div className="text-xl font-bold text-brand-orange">Toplam: {total} TL</div>
              </div>
            </div>
          </div>
          {/* Sipariş Özeti */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-serif text-gray-800 mb-6">Sipariş Özeti</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Ara Toplam</span>
                  <span>{total} TL</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Kargo</span>
                  <span className="text-green-600">Ücretsiz</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>İndirim</span>
                  <span className="text-red-600">-%30</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-semibold text-gray-800">
                  <span>Toplam</span>
                  <span>{(total * 0.7).toFixed(2)} TL</span>
                </div>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-brand-orange hover:bg-orange-600 text-white text-center py-3 rounded-xl font-semibold transition-colors mb-4"
              >
                Ödemeye Geç
              </Link>
              <Link
                href="/urunler"
                className="block w-full bg-white border border-brand-orange text-brand-orange text-center py-3 rounded-xl font-semibold hover:bg-brand-orange/10 transition-colors"
              >
                Alışverişe Devam Et
              </Link>
            </div>
          </div>
        </div>
        {/* Sosyal Kanıt */}
        <section className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Müşteri Yorumu */}
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">“Siparişim 2 günde elime ulaştı, paketleme ve ürün kalitesi harika! Herkese tavsiye ederim.”</blockquote>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400 text-lg">★★★★★</span>
                <span className="text-sm text-gray-600">5.0</span>
              </div>
              <span className="font-bold text-brand-orange">- Elif K. / İstanbul</span>
            </div>
            {/* Müşteri Memnuniyeti & Destek */}
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">%100 Müşteri Memnuniyeti</div>
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full">7/24 Destek</span>
                <span className="inline-block bg-orange-100 text-orange-600 font-bold text-xs px-2 py-1 rounded-full">10.000+ Takipçi</span>
              </div>
              <div className="text-gray-600 text-sm text-center">Google ve Instagram'da yüksek puan</div>
            </div>
            {/* Güvenli Ödeme & Kargo */}
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Ödeme</div>
              <div className="flex flex-wrap gap-2 justify-center mb-2">
                <span className="inline-block bg-brand-blue/10 text-brand-blue font-bold text-xs px-2 py-1 rounded-full">256-bit SSL</span>
                <span className="inline-block bg-brand-orange/10 text-brand-orange font-bold text-xs px-2 py-1 rounded-full">Aynı Gün Kargo</span>
              </div>
              <div className="text-gray-600 text-sm text-center">Tüm siparişlerde hızlı ve güvenli teslimat</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 