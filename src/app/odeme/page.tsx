'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import SocialProof from '@/components/SocialProof';

export default function OdemePage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    adres: '',
    sehir: '',
    postaKodu: ''
  });

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
    }
  }, [items, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/odeme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          total,
          ...formData
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        clearCart();
        router.push('/odeme/sonuc?status=success');
      } else {
        alert('Sipariş oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Sipariş hatası:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 text-center">Sipariş ve Ödeme</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Banka Hesap Bilgileri</h2>
          <div className="space-y-3">
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
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
              <input
                type="text"
                name="ad"
                required
                value={formData.ad}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
              <input
                type="text"
                name="soyad"
                required
                value={formData.soyad}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
            <input
              type="tel"
              name="telefon"
              required
              value={formData.telefon}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
            <textarea
              name="adres"
              required
              value={formData.adres}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şehir</label>
              <input
                type="text"
                name="sehir"
                required
                value={formData.sehir}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Posta Kodu</label>
              <input
                type="text"
                name="postaKodu"
                required
                value={formData.postaKodu}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Toplam Tutar:</span>
              <span className="text-2xl font-bold text-brand-orange">{total}₺</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {loading ? 'İşleniyor...' : 'Test Ödemeyi Tamamla'}
            </button>
          </div>
        </form>

        {/* Sosyal Kanıt */}
        <SocialProof
          reviews={[
            {
              name: 'Elif K.',
              rating: 5,
              text: 'Siparişim çok hızlı ve sorunsuz geldi, teşekkürler! Ödeme süreci de çok kolaydı.',
              date: 'Mart 2024',
              avatar: '/images/avatars/elifk.jpg',
            },
            {
              name: 'Ahmet S.',
              rating: 4.9,
              text: 'Ödeme seçenekleri çok pratik ve güvenli. Siparişim ertesi gün kargodaydı.',
              date: 'Şubat 2024',
              avatar: '/images/avatars/ahmets.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'Güvenli Alışveriş',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '💳',
              title: 'Kolay Ödeme',
              desc: 'Çeşitli ödeme seçenekleri',
              bgClass: 'bg-brand-pink/60',
            },
            {
              icon: '🔒',
              title: 'Güvenli Ödeme',
              desc: '256-bit SSL ile korunan ödeme altyapısı',
              bgClass: 'bg-green-100',
            }
          ]}
        />
      </div>
    </div>
  );
} 