'use client';
import React from 'react';

const badges = [
  { icon: '🔒', title: 'Güvenli Ödeme' },
  { icon: '🚚', title: 'Hızlı Kargo' },
  { icon: '🎁', title: 'Kişiye Özel Tasarım' },
  { icon: '⭐', title: '1000+ Müşteri Memnuniyeti' },
];

const TrustBadges = () => (
  <div className="w-full bg-white rounded-2xl shadow-lg p-4">
    <div className="grid grid-cols-2 gap-4">
      {badges.map((b, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center w-32 h-24 bg-gray-50 rounded-xl border border-gray-100 shadow-sm mx-auto"
        >
          <span className="text-4xl mb-2">{b.icon}</span>
          <span className="text-sm md:text-base font-semibold text-gray-700 text-center leading-tight">{b.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TrustBadges; 