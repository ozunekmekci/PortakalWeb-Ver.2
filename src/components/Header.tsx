"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Banner */}
      <div className="bg-orange-100 text-orange-800 text-center py-2 text-sm">
        <p>🚚 Ücretsiz Kargo - 500TL ve üzeri siparişlerde</p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif text-orange-600">
            Portakal Çiçeği
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/kategoriler" className="text-gray-600 hover:text-orange-600 transition-colors">
              Kategoriler
            </Link>
            <Link href="/yeni-gelenler" className="text-gray-600 hover:text-orange-600 transition-colors">
              Yeni Gelenler
            </Link>
            <Link href="/kampanyalar" className="text-gray-600 hover:text-orange-600 transition-colors">
              Kampanyalar
            </Link>
            <Link href="/hakkimizda" className="text-gray-600 hover:text-orange-600 transition-colors">
              Hakkımızda
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-orange-600 transition-colors">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link href="/hesabim" className="text-gray-600 hover:text-orange-600 transition-colors">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link href="/sepet" className="text-gray-600 hover:text-orange-600 transition-colors relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 