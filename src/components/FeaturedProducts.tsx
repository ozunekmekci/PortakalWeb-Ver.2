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
            <div key={product.id} className="animate-fade-in transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <ProductCard
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onFavoriteClick={() => handleFavoriteClick(product.id)}
                isFavorite={favorites.has(product.id)}
              />
            </div>
          ))}
        </div>

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