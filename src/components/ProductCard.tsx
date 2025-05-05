"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const DISCOUNT = 30;
const KARGO_MESAJI = "🚚 KARGO ÜCRETSİZ";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onFavoriteClick: () => void;
  isFavorite: boolean;
}

const ProductCard = ({ product, onAddToCart, onFavoriteClick, isFavorite }: ProductCardProps) => {
  const slug = product.image.split("/").pop()?.split(".")[0] || "";

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            Yeni
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onFavoriteClick(); }}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          {isFavorite ? (
            <HeartIconSolid className="h-5 w-5 text-orange-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="inline-flex items-center bg-orange-100 text-orange-600 font-bold text-xs px-2 py-1 rounded-full">%{DISCOUNT} İNDİRİM</span>
          <span className="inline-flex items-center bg-green-100 text-green-700 font-bold text-xs px-2 py-1 rounded-full">🚚 KARGO ÜCRETSİZ</span>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-600">{product.price} TL</span>
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
            className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 