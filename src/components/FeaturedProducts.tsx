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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="block h-full">
              <ProductCard
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                onFavoriteClick={() => handleFavoriteClick(product.id)}
                isFavorite={favorites.has(product.id)}
              />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
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