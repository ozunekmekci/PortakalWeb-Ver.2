'use client';
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 flex flex-col justify-center items-center py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full flex flex-col items-center animate-fade-in">
          <Image src="/success.svg" alt="Başarılı" width={120} height={120} className="mb-4" />
          <h1 className="text-3xl font-serif font-bold text-brand-pink mb-2 text-center">Siparişiniz Alındı!</h1>
          <p className="text-gray-600 text-center mb-4">Siparişiniz başarıyla oluşturuldu. En kısa sürede sizinle iletişime geçeceğiz.</p>
          <Link href="/" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mt-2">Ana Sayfaya Dön</Link>
        </div>
        {/* Sosyal Kanıt */}
        <section className="mt-20 w-full max-w-3xl animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">“Siparişim çok hızlı ve sorunsuz geldi, teşekkürler!”</blockquote>
              <span className="font-bold text-brand-orange">- Elif K.</span>
            </div>
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
              <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Ödeme</div>
              <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Sipariş ve Ödeme</h1>
          <p className="text-gray-600 max-w-xl mx-auto">Teslimat bilgilerinizi doldurun ve siparişinizi tamamlayın. Tüm siparişlerde <span className='text-brand-orange font-semibold'>%30 indirim</span> ve <span className='text-brand-blue font-semibold'>kargo ücretsiz</span>!</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sepet Özeti */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-xl font-serif text-brand-orange mb-6">Sepet Özeti</h2>
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Sepetiniz boş.</p>
                <Link href="/urunler" className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Ürünleri Keşfet</Link>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100 mb-4">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center justify-between py-3">
                    <span className="flex items-center gap-3">
                      <Image src={item.image} alt={item.name} width={48} height={48} className="rounded-xl border border-brand-pink/30" />
                      <span className="font-medium text-gray-700 text-sm">{item.name}</span>
                    </span>
                    <span className="text-gray-500 text-sm">{item.quantity} x {item.price}₺</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Ara Toplam</span>
                <span>{total}₺</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>İndirim</span>
                <span className="text-red-600">-%30</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Kargo</span>
                <span className="text-green-600">Ücretsiz</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between text-lg font-bold text-brand-orange">
                <span>Toplam</span>
                <span>{(total * 0.7).toFixed(2)}₺</span>
              </div>
            </div>
          </div>
          {/* Teslimat Formu */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 animate-fade-in">
            <h2 className="text-xl font-serif text-brand-blue mb-6">Teslimat Bilgileri</h2>
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
            <input required name="email" value={form.email} onChange={handleChange} placeholder="E-posta" type="email" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
            <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
            <textarea required name="address" value={form.address} onChange={handleChange} placeholder="Adres" className="border border-gray-200 rounded-xl px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none min-h-[80px]" />
            <button type="submit" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors mt-2">Siparişi Tamamla</button>
          </form>
        </div>
        {/* Sosyal Kanıt */}
        <section className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-pink/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">💬</span>
              <blockquote className="italic text-gray-700 text-center mb-2">“Siparişim çok hızlı ve sorunsuz geldi, teşekkürler!”</blockquote>
              <span className="font-bold text-brand-orange">- Elif K.</span>
            </div>
            <div className="bg-brand-blue/60 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🏆</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Alışveriş</div>
              <div className="text-gray-600 text-sm text-center">2024 Handmade Awards</div>
            </div>
            <div className="bg-green-100 rounded-2xl p-6 flex flex-col items-center shadow">
              <span className="text-4xl mb-2">🔒</span>
              <div className="font-bold text-lg text-gray-800 mb-1">Güvenli Ödeme</div>
              <div className="text-gray-600 text-sm text-center">256-bit SSL ile korunan ödeme altyapısı</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 