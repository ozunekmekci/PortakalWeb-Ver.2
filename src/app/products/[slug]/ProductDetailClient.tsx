'use client';
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";
import { Toast } from "@/components/Toast";
import { HeartIcon as HeartOutline, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const DISCOUNT = 30;
const KARGO_MESAJI = "🚚 KARGO ÜCRETSİZ";

export default function ProductDetailClient({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const [tab, setTab] = useState<'desc' | 'reviews'>('desc');
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  const oldPrice = Math.round(product.price / (1 - DISCOUNT / 100));
  const rating = 4.9;
  const highlights = [
    { icon: "🎨", text: "Kişiye özel tasarım" },
    { icon: "🪞", text: "Pleksi malzeme, folyo baskı" },
    { icon: "📦", text: "Lüks Dokulu Özel Tasarım Kart" },
    { icon: "🎁", text: "Hediyelik, magnet veya anahtarlık" },
  ];

  const handleAddToCart = () => {
    addToCart(product);
    setToast(`${product.name} sepete eklendi!`);
    setTimeout(() => setToast(""), 2000);
  };

  const handleFavorite = () => {
    setFavorite((f) => !f);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-8 md:py-14">
      {toast && <Toast message={toast} />}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden animate-fade-in">
        {/* Sol: Ürün görseli ve thumb alanı */}
        <div className="md:w-1/2 w-full bg-white flex flex-col items-center justify-center p-6 md:p-10 gap-4">
          <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-2xl bg-brand-pink/10 shadow"
              priority
            />
          </div>
          {/* Paylaş ve Favori */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={handleFavorite}
              className="p-2 rounded-full bg-brand-pink/10 hover:bg-brand-pink/30 transition-colors"
              aria-label="Favorilere ekle"
            >
              {favorite ? (
                <HeartSolid className="h-6 w-6 text-brand-orange" />
              ) : (
                <HeartOutline className="h-6 w-6 text-brand-orange" />
              )}
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-brand-blue/10 hover:bg-brand-blue/30 transition-colors"
              aria-label="Bağlantıyı kopyala"
            >
              <ShareIcon className="h-6 w-6 text-brand-blue" />
            </button>
            {copied && <span className="text-xs text-green-600 ml-2">Kopyalandı!</span>}
          </div>
        </div>
        {/* Sağ: Bilgiler */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="inline-block bg-orange-100 text-orange-600 font-bold text-xs px-3 py-1 rounded-full">%{DISCOUNT} İNDİRİM</span>
            <span className="inline-block bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full">{KARGO_MESAJI}</span>
            <span className="inline-block bg-brand-blue/10 text-brand-blue font-bold text-xs px-3 py-1 rounded-full">Stokta</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2 leading-tight">{product.name}</h1>
          <div className="flex items-end gap-3 mb-2">
            <span className="text-2xl font-bold text-brand-orange">{product.price} TL</span>
            <span className="text-base text-gray-400 line-through">{oldPrice} TL</span>
            <span className="flex items-center gap-1 text-yellow-500 text-sm ml-2">★ {rating}</span>
          </div>
          <button
            className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-lg transition mb-2 shadow-lg animate-fade-in"
            onClick={handleAddToCart}
          >
            Sepete Ekle
          </button>
          {/* Öne çıkanlar */}
          <ul className="flex flex-wrap gap-3 mb-2 mt-2">
            {highlights.map((h, i) => (
              <li key={i} className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-orange font-medium px-3 py-1 rounded-full text-xs">
                <span>{h.icon}</span> {h.text}
              </li>
            ))}
          </ul>
          {/* Sekmeler */}
          <div className="mt-4">
            <div className="flex gap-6 border-b border-orange-100 mb-4">
              <button
                className={`pb-2 font-semibold text-base transition border-b-2 ${tab === 'desc' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500'}`}
                onClick={() => setTab('desc')}
              >
                Açıklama
              </button>
              <button
                className={`pb-2 font-semibold text-base transition border-b-2 ${tab === 'reviews' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500'}`}
                onClick={() => setTab('reviews')}
                disabled
              >
                Yorumlar
              </button>
            </div>
            {tab === 'desc' && (
              <div className="text-gray-700 text-sm leading-relaxed space-y-2 animate-fade-in">
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
              <div className="text-gray-500 text-sm animate-fade-in">Yorumlar yakında eklenecek.</div>
            )}
          </div>
          {/* Paylaşım */}
          <div className="flex gap-4 mt-6">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(window?.location?.href || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-200 transition-colors"
            >
              <span>WhatsApp</span>
            </a>
            <a
              href={`https://www.instagram.com/portakalcicegi.atolye/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-pink/20 transition-colors"
            >
              <span>Instagram</span>
            </a>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-blue/20 transition-colors"
            >
              <span>Linki Kopyala</span>
            </button>
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