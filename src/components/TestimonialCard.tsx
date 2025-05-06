'use client';

import React, { useState, useEffect } from 'react';

interface TestimonialCardProps {
  backgroundImg: string; // Ürün görseli (arka plan)
  profileImg: string;    // Profil fotoğrafı (avatar)
  username: string;      // Instagram kullanıcı adı
  message: React.ReactNode; // DM mesajı görseli
  productImg?: string;   // Ürün görseli (net hali, opsiyonel)
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  backgroundImg,
  profileImg,
  username,
  message,
  productImg,
}) => {
  const [showModal, setShowModal] = useState(false);

  // Modal açıldığında body'ye overflow-hidden ekle
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showModal]);

  return (
    <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg my-8" style={{ minHeight: 420 }}>
      {/* Arka plan bulanık ürün görseli */}
      <img
        src={backgroundImg}
        alt="Ürün arka plan"
        className="w-full h-full absolute inset-0 object-cover filter blur-md brightness-75 z-0"
        style={{ minHeight: 420 }}
      />
      {/* Ön plan kartı */}
      <div className="relative z-10 flex flex-col justify-start items-center p-2 sm:p-4 h-full">
        {/* Profil ve kullanıcı adı */}
        <div className="flex items-center gap-3 mb-2 w-full px-2 pt-2">
          <img
            src={profileImg}
            alt={username}
            className="w-10 h-10 rounded-full border-2 border-pink-300"
          />
          <span className="font-semibold text-gray-800 px-3 py-1 rounded-2xl shadow-sm"
            style={{
              background: 'rgba(245, 245, 245, 0.7)',
              border: '1.5px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              borderRadius: '1.5rem',
            }}>
            @{username}
          </span>
          <span className="ml-2 text-pink-500 text-lg">💖✨</span>
        </div>
        {/* Mesaj görseli tam ve orijinal oranında */}
        <div className="w-full flex justify-center items-center flex-1">
          {React.isValidElement(message) && message.type === 'img' ? (
            React.cloneElement(message, {
              ...message.props,
              className: 'rounded-lg w-full h-auto object-contain bg-white',
              style: { maxHeight: 420, width: '100%', height: 'auto', background: 'white', ...message.props.style },
            })
          ) : (
            <span className="text-gray-700 text-base whitespace-pre-line p-2">{message}</span>
          )}
        </div>
        {/* Sağ alt köşede büyük, edge ve tıklanabilir ürün görseli (net hali) */}
        {productImg && (
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="absolute bottom-4 right-4 bg-white/90 border-4 border-white shadow-lg rounded-2xl p-1 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
            style={{ width: 80, height: 80, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            aria-label="Ürünü büyüt"
          >
            <img
              src={productImg}
              alt="Ürün net görsel"
              className="w-full h-full object-cover rounded-xl border-2 border-gray-200"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
            />
          </button>
        )}
        {/* Modal: Ürün büyük görsel */}
        {showModal && productImg && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div className="relative flex items-center justify-center w-full h-full" onClick={e => e.stopPropagation()}>
              <img
                src={productImg}
                alt="Ürün büyük görsel"
                className="max-w-[70vw] max-h-[70vh] rounded-2xl border-4 border-white shadow-2xl"
              />
              <button
                className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
                onClick={() => setShowModal(false)}
                aria-label="Kapat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard; 