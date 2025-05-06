'use client';
import React, { useState } from 'react';

const images = [
  { url: '/pleasure/dilara_aksakal/urun.JPG', username: 'dilara_aksakal' },
  { url: '/pleasure/dilara_aksakal/urun.JPG', username: 'elifk' },
  { url: '/pleasure/dilara_aksakal/urun.JPG', username: 'ayse_123' },
  { url: '/pleasure/dilara_aksakal/urun.JPG', username: 'mehmet_456' },
  { url: '/pleasure/dilara_aksakal/urun.JPG', username: 'zeynep_789' },
];

const InstagramFeedSlider = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-sm md:max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        <button onClick={prev} className="absolute left-0 z-10 p-2 text-2xl text-gray-400 hover:text-orange-500">&#8592;</button>
        <img
          src={images[current].url}
          alt={images[current].username}
          className="rounded-xl object-cover w-full h-80"
        />
        <button onClick={next} className="absolute right-0 z-10 p-2 text-2xl text-gray-400 hover:text-orange-500">&#8594;</button>
      </div>
      <div className="flex gap-1 mt-4">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === current ? 'bg-orange-500' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeedSlider; 