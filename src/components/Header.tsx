"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function getCurrentMonthTR() {
  const aylar = [
    'OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN',
    'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'
  ];
  const now = new Date();
  return aylar[now.getMonth()];
}

const DISCOUNT = 30;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentMonth = getCurrentMonthTR();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Dinamik indirim ve kargo bannerı */}
      <div className="bg-orange-100 text-orange-800 text-center py-2 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
        <span>%{DISCOUNT} İNDİRİM</span>
        <span>·</span>
        <span>{currentMonth} AYINA ÖZEL</span>
        <span className="flex items-center gap-1">🚚 KARGO ÜCRETSİZ</span>
      </div>
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo.png"
              alt="Portakal Çiçeği Atölye"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
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