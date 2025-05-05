"use client";

import { Product } from '@/types';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Link from 'next/link';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

const FeaturedProducts = ({ products, title, subtitle }: FeaturedProductsProps) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', product);
  };

  const handleFavoriteClick = (productId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 font-sans">{subtitle}</p>}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="block h-full">
              <div className="animate-fade-in transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <ProductCard
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                  onFavoriteClick={() => handleFavoriteClick(product.id)}
                  isFavorite={favorites.has(product.id)}
                  onQuickView={setQuickViewProduct}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-orange-600 text-2xl font-bold"
                aria-label="Kapat"
              >
                ×
              </button>
              <div className="flex flex-col items-center gap-4">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-40 h-40 object-contain rounded-xl" />
                <h3 className="text-lg font-serif font-bold text-gray-800 text-center">{quickViewProduct.name}</h3>
                <div className="flex gap-2 mb-2">
                  <span className="inline-flex items-center bg-orange-100 text-orange-600 font-bold text-xs px-2 py-1 rounded-full">%30 İNDİRİM</span>
                  <span className="inline-flex items-center bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full">🚚 KARGO ÜCRETSİZ</span>
                </div>
                <p className="text-gray-600 text-sm text-center line-clamp-3">{quickViewProduct.description}</p>
                <span className="text-xl font-bold text-brand-orange">{quickViewProduct.price} TL</span>
                <button
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors mt-2"
                  onClick={() => { handleAddToCart(quickViewProduct); setQuickViewProduct(null); }}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
            {/* Modal kapatmak için arka plan */}
            <div className="fixed inset-0 z-40" onClick={() => setQuickViewProduct(null)} />
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center text-brand-orange hover:text-orange-700 transition-colors font-semibold">
            Tümünü Gör
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 