'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SocialProof from '@/components/SocialProof';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Form gönderme işlemi
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            İletişim
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın, en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-orange/10 p-3 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 (555) 123 45 67</p>
                    <p className="text-gray-600">+90 (555) 987 65 43</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-pink/10 p-3 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-brand-pink" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">E-posta</h3>
                    <p className="text-gray-600">info@portakalcicegi.com</p>
                    <p className="text-gray-600">siparis@portakalcicegi.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg">
                    <MapPinIcon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Portakal Çiçeği Atölye<br />
                      Örnek Mahallesi, Örnek Sokak No:1<br />
                      Kadıköy, İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-medium text-gray-800 mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazartesi - Cuma</span>
                    <span className="text-gray-800">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cumartesi</span>
                    <span className="text-gray-800">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazar</span>
                    <span className="text-gray-800">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-gray-800 mb-6">Bize Ulaşın</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.27184481!2d29.0288583!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOcKwMDEnNDMuOSJF!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Sosyal Kanıt */}
        <SocialProof
          reviews={[
            {
              name: 'Burcu S.',
              rating: 5,
              text: 'İletişim çok hızlı ve ilgili, teşekkürler! Sorularıma hemen dönüş yaptılar.',
              date: 'Mart 2024',
              avatar: '/images/avatars/burcus.jpg',
            },
            {
              name: 'Emre Y.',
              rating: 4.9,
              text: 'Özel sipariş talebim için çok yardımcı oldular. İletişimleri çok profesyonel.',
              date: 'Şubat 2024',
              avatar: '/images/avatars/emrey.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'Müşteri Desteği',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '💬',
              title: '7/24 Destek',
              desc: 'Hızlı yanıt garantisi',
              bgClass: 'bg-brand-pink/60',
            },
            {
              icon: '🔒',
              title: 'Güvenli Alışveriş',
              desc: '256-bit SSL ile korunan ödeme altyapısı',
              bgClass: 'bg-green-100',
            }
          ]}
        />
      </div>
    </main>
  );
} 