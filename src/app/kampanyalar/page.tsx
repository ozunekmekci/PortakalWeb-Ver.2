'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SocialProof from '@/components/SocialProof';

export default function CampaignsPage() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: API'den kampanya ürünlerini çek
    setLoading(false);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4">
        {/* Kampanya Başlığı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Kampanyalar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Özel fırsatlar ve indirimlerle sevdiklerinize anlamlı hediyeler sunun.
          </p>
        </div>

        {/* Kampanya Banner */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-pink rounded-2xl p-8 mb-12 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-2">%30 İndirim Fırsatı</h2>
              <p className="text-white/90">Tüm ürünlerde geçerli büyük indirim fırsatını kaçırmayın!</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm">Gün</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24</div>
                <div className="text-sm">Saat</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">60</div>
                <div className="text-sm">Dakika</div>
              </div>
            </div>
          </div>
        </div>

        {/* Arama ve Filtreler */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Ürün Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard
                  product={product}
                  onAddToCart={() => addToCart(product)}
                  onFavoriteClick={() => {}}
                  isFavorite={false}
                />
              </div>
            ))}
          </div>
        )}

        {/* Boş Durum */}
        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Şu anda aktif kampanya bulunmuyor.</p>
          </div>
        )}

        {/* Sosyal Kanıt */}
        <SocialProof
          reviews={[
            {
              name: 'Mehmet Y.',
              rating: 5,
              text: 'Kampanyalardan çok memnun kaldım, harika ürünler! Özellikle indirimli fiyatlar çok uygun.',
              date: 'Mart 2024',
              avatar: '/images/avatars/mehmety.jpg',
            },
            {
              name: 'Zeynep A.',
              rating: 4.9,
              text: 'Kampanya ürünlerinin kalitesi normal ürünlerle aynı, sadece fiyatları daha uygun. Kesinlikle tavsiye ederim!',
              date: 'Şubat 2024',
              avatar: '/images/avatars/zeynepa.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'En Çok Tercih Edilen',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '🎁',
              title: 'Özel Kampanyalar',
              desc: 'Her ay yeni fırsatlar',
              bgClass: 'bg-brand-pink/60',
            },
            {
              icon: '🔒',
              title: 'Güvenli Alışveriş',
              desc: '256-bit SSL ile korunan ödeme altyapısı',
              bgClass: 'bg-green-100',
            }
          ]}
        />
      </div>
    </main>
  );
} 