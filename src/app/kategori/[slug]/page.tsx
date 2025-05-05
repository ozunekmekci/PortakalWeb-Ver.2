'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SocialProof from '@/components/SocialProof';

export default function CategoryPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TODO: API'den kategori ürünlerini çek
    setLoading(false);
  }, [slug]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4">
        {/* Kategori Başlığı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            El yapımı, kişiye özel tasarım ürünlerimizle sevdiklerinize anlamlı hediyeler sunun.
          </p>
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
            <p className="text-gray-600">Bu kategoride henüz ürün bulunmuyor.</p>
          </div>
        )}

        {/* Sosyal Kanıt */}
        <SocialProof
          reviews={[
            {
              name: 'Ayşe K.',
              rating: 5,
              text: 'Ürünlerinizin kalitesine ve hızlı teslimatınıza bayıldım! Kategorideki tüm ürünler harika.',
              date: 'Mart 2024',
              avatar: '/images/avatars/aysek.jpg',
            },
            {
              name: 'Mehmet Y.',
              rating: 4.8,
              text: 'Bu kategorideki ürünler tam aradığım gibi. Özellikle kişiye özel tasarım seçenekleri çok güzel.',
              date: 'Şubat 2024',
              avatar: '/images/avatars/mehmety.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'En Çok Satan Kategori',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '🚚',
              title: 'Hızlı Teslimat',
              desc: '2-3 iş günü içinde kargoda',
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