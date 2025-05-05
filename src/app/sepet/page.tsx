'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';
import SocialProof from '@/components/SocialProof';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
              Sepetiniz Boş
            </h1>
            <p className="text-gray-600 mb-8">
              Sepetinizde henüz ürün bulunmuyor. Hemen alışverişe başlayın!
            </p>
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
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8 text-center">
          Sepetiniz
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Ürün Listesi */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-gray-100 last:border-0 last:pb-0">
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
                      <h3 className="text-lg font-medium text-gray-800 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
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
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-lg font-semibold text-brand-orange">
                            {item.price * item.quantity} TL
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <span>{total * 0.7} TL</span>
                </div>
              </div>

              <Link
                href="/odeme"
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
        <SocialProof
          reviews={[
            {
              name: 'Can Y.',
              rating: 5,
              text: 'Hızlı ve güvenli alışveriş deneyimi! Sepetimdeki ürünler çok hızlı geldi.',
              date: 'Mart 2024',
              avatar: '/images/avatars/cany.jpg',
            },
            {
              name: 'Deniz K.',
              rating: 4.9,
              text: 'Sepetimdeki ürünlerin hepsi aynı kalitede geldi. Kargo paketlemesi de çok özenliydi.',
              date: 'Şubat 2024',
              avatar: '/images/avatars/denizk.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'Güvenilir Alışveriş',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '🚚',
              title: 'Ücretsiz Kargo',
              desc: 'Tüm siparişlerde kargo bedava',
              bgClass: 'bg-brand-pink/60',
            },
            {
              icon: '🔒',
              title: 'Güvenli Ödeme',
              desc: '256-bit SSL ile korunan ödeme altyapısı',
              bgClass: 'bg-green-100',
            }
          ]}
        />
      </div>
    </main>
  );
} 