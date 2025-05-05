'use client';
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import { Toast } from "@/components/Toast";

const DISCOUNT = 30;
const KARGO_MESAJI = "🚚 KARGO ÜCRETSİZ";

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const [tab, setTab] = useState<'desc' | 'reviews'>('desc');

  const oldPrice = Math.round(product.price / (1 - DISCOUNT / 100));

  // Örnek badge, indirim, eski fiyat, puan, öne çıkanlar
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
    <main className="min-h-screen bg-orange-50/60 py-6 md:py-10">
      {toast && (
        <Toast message={toast} />
      )}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden animate-fade-in">
        {/* Sol: Ürün görseli */}
        <div className="md:w-1/2 w-full bg-white flex items-center justify-center p-4 md:p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-xl object-contain max-h-[350px] w-auto h-auto"
          />
        </div>
        {/* Sağ: Bilgiler */}
        <div className="md:w-1/2 w-full p-4 md:p-8 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold text-xs px-3 py-1 rounded-full">
              %{DISCOUNT} İNDİRİM
            </span>
            <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full">
              {KARGO_MESAJI}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-2xl font-bold text-orange-600">{product.price} TL</span>
            <span className="text-base text-gray-400 line-through">{oldPrice} TL</span>
          </div>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition mb-2 shadow"
            onClick={handleAddToCart}
          >
            Sepete Ekle
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <span className="inline-flex items-center gap-1">🚚 Kargo: Ücretsiz</span>
            <span className="inline-flex items-center gap-1">🎁 Hediye Paketi</span>
            <span className="inline-flex items-center gap-1">🌿 El Yapımı</span>
          </div>
          {/* Sekmeler */}
          <div className="mt-4">
            <div className="flex gap-6 border-b border-orange-100 mb-4">
              <button
                className={`pb-2 font-semibold text-base transition border-b-2 ${tab === 'desc' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'}`}
                onClick={() => setTab('desc')}
              >
                Açıklama
              </button>
              <button
                className={`pb-2 font-semibold text-base transition border-b-2 ${tab === 'reviews' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500'}`}
                onClick={() => setTab('reviews')}
                disabled
              >
                Yorumlar
              </button>
            </div>
            {tab === 'desc' && (
              <div className="text-gray-700 text-sm leading-relaxed space-y-2">
                <p>
                  <b>Ürün Açıklaması:</b> Kişiye özel pleksi bebek hatıra mıknatıs hediyelik. Babyshower, mevlüt ve doğum günü için mükemmel bir hediye.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>El yapımı, kişiselleştirilebilir tasarım</li>
                  <li>Yüksek kaliteli pleksi ve baskı</li>
                  <li>İsim yazılı, figürlü ve renkli seçenekler</li>
                  <li>Ücretsiz kargo ve hediye paketi</li>
                  <li>Hızlı teslimat</li>
                </ul>
              </div>
            )}
            {tab === 'reviews' && (
              <div className="text-gray-500 text-sm">Yorumlar yakında eklenecek.</div>
            )}
          </div>
        </div>
      </div>
      {/* Sosyal Kanıt Alanı */}
      <section className="mt-16 mb-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
            <span className="text-4xl mb-2">💬</span>
            <blockquote className="italic text-gray-700 text-center mb-2">“Ürünüm tam istediğim gibi geldi, çok kaliteli ve hızlı kargo!”</blockquote>
            <span className="font-bold text-brand-orange">- Merve Y.</span>
          </div>
          <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
            <span className="text-4xl mb-2">🏆</span>
            <div className="font-bold text-lg text-gray-800 mb-1">En Çok Tercih Edilen Ürün</div>
            <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
          </div>
          <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow animate-fade-in">
            <span className="text-4xl mb-2">🔒</span>
            <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
            <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
          </div>
        </div>
      </section>
    </main>
  );
} 