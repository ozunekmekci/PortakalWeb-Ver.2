'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function OdemeSonucPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const paymentStatus = searchParams.get('status');
    
    if (paymentStatus === 'success') {
      setStatus('success');
      clearCart();
    } else {
      setStatus('error');
    }
  }, [searchParams, clearCart]);

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif mb-4">Sipariş İşleniyor</h1>
        <p className="text-gray-600">Lütfen bekleyin...</p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-serif mb-4">Siparişiniz Alındı!</h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Ödeme Bilgileri</h2>
            <div className="space-y-3 text-left">
              <p className="text-blue-700">
                <span className="font-medium">Banka:</span> Ziraat Bankası
              </p>
              <p className="text-blue-700">
                <span className="font-medium">Hesap Sahibi:</span> Portakal Çiçeği Atölye
              </p>
              <p className="text-blue-700">
                <span className="font-medium">IBAN:</span> TR00 0000 0000 0000 0000 0000 00
              </p>
              <p className="text-sm text-blue-600 mt-4">
                * Lütfen açıklama kısmına sipariş numaranızı yazmayı unutmayın.
                <br />
                * Ödemenizi yaptıktan sonra siparişiniz hazırlanmaya başlayacaktır.
                <br />
                * Siparişinizle ilgili bilgilendirme e-posta ile yapılacaktır.
              </p>
            </div>
          </div>
          <button
            onClick={() => router.push('/')}
            className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Alışverişe Devam Et
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-red-500 text-6xl mb-4">✕</div>
        <h1 className="text-3xl font-serif mb-4">Sipariş Başarısız</h1>
        <p className="text-gray-600 mb-8">
          Sipariş oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={() => router.push('/odeme')}
          className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
} 