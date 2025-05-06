'use client';
import React from 'react';

const CampaignBanner = () => (
  <div className="w-full bg-gradient-to-r from-orange-400 via-pink-200 to-blue-300 rounded-2xl shadow-lg p-2 md:p-4 flex flex-col items-center border-2 border-orange-200 animate-pulse">
    <span className="text-white font-bold text-base md:text-xl drop-shadow">Yaza Merhaba! %20 İndirim</span>
    <span className="text-orange-900 font-semibold text-xs md:text-lg tracking-wide mt-1">Kampanya Kodu: <span className="bg-white/80 px-2 py-1 rounded-lg text-orange-700 font-bold">YAZ20</span></span>
    <span className="mt-2 text-xs md:text-sm text-gray-700">Sınırlı süreli, tüm ürünlerde geçerli!</span>
  </div>
);

export default CampaignBanner; 