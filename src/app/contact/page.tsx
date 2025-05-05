'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">İletişim</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Sorularınız ve özel istekleriniz için bize ulaşın. En kısa sürede dönüş yapalım.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
          {success ? (
            <div className="text-center text-green-600 font-semibold text-lg py-8">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
              <input required name="email" value={form.email} onChange={handleChange} placeholder="E-posta" type="email" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
              <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Mesajınız" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none min-h-[80px]" />
              <button type="submit" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mt-2">Gönder</button>
            </form>
          )}
          <div className="mt-8 text-gray-500 text-sm text-center">
            <div>Mail: <a href="mailto:portakalpleksi@gmail.com" className="underline hover:text-brand-orange">portakalpleksi@gmail.com</a></div>
            <div>Instagram: <a href="https://www.instagram.com/portakalcicegi.atolye/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-orange">@portakalcicegi.atolye</a></div>
          </div>
        </div>
        {/* Sosyal Kanıt */}
        <section className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">“İletişim çok hızlı ve ilgili, teşekkürler!”</blockquote>
              <span className="font-bold text-brand-orange">- Burcu S.</span>
            </div>
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Müşteri Desteği</div>
              <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
              <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 