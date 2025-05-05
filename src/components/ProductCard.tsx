"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

const DISCOUNT = 30;
const KARGO_MESAJI = "🚚 KARGO ÜCRETSİZ";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onFavoriteClick: () => void;
  isFavorite: boolean;
}

export default function ProductCard({ product, onAddToCart, onFavoriteClick, isFavorite }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    onAddToCart();
  };

  return (
    <>
      <motion.div
        className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Ürün Görseli */}
        <Link href={`/products/${product.slug}`} className="block relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Hızlı Erişim Butonları */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={onFavoriteClick}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
          >
            {isFavorite ? (
              <HeartIconSolid className="h-5 w-5 text-red-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Ürün Bilgileri */}
        <div className="p-4">
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-brand-orange">{product.price} TL</span>
              <button
                onClick={handleAddToCart}
                className="p-2 bg-brand-orange text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                <ShoppingCartIcon className="h-5 w-5" />
              </button>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
} 