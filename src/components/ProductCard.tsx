"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const slug = product.image.split("/").pop()?.split(".")[0] || "";

  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center hover:scale-[1.03] hover:shadow-2xl transition-all border border-orange-100 relative group" data-testid="product-card">
      <Link href={`/products/${slug}`} className="w-full">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </Link>
      <div className="w-full mt-4">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mt-1">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{product.rating?.toFixed(1) || '0.0'}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{product.reviews || 0} değerlendirme</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">₺{product.price.toFixed(2)}</span>
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Sepete Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 