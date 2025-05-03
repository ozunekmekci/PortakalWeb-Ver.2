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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <Image src="/success.svg" alt="Başarılı" width={120} height={120} className="mb-4" />
          <h1 className="text-2xl font-bold text-pink-700 mb-2 text-center">Siparişiniz başarıyla alındı!</h1>
          <p className="text-gray-600 text-center mb-4">En kısa sürede sizinle iletişime geçeceğiz.</p>
          <Link href="/" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition">Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <Link href="/" className="hover:text-white">Ürünler</Link>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-white">İletişim</Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-pink-700 mb-8">Ödeme</h1>
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-lg font-bold mb-4 text-pink-600">Sepet Özeti</h2>
          {items.length === 0 ? (
            <p className="text-gray-400">Sepetiniz boş.</p>
          ) : (
            <ul className="divide-y divide-gray-100 mb-4">
              {items.map((item) => (
                <li key={item.image} className="flex items-center justify-between py-2">
                  <span className="flex items-center gap-2">
                    <Image src={item.image} alt={item.name} width={40} height={56} className="rounded border border-pink-100" />
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </span>
                  <span className="text-gray-500">{item.quantity} x {item.price}₺</span>
                </li>
              ))}
            </ul>
          )}
          <div className="text-right font-bold text-pink-700">Toplam: {total}₺</div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-lg font-bold mb-2 text-pink-600">Teslimat Bilgileri</h2>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad" className="border rounded px-4 py-2" />
          <input required name="email" value={form.email} onChange={handleChange} placeholder="E-posta" type="email" className="border rounded px-4 py-2" />
          <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Telefon" className="border rounded px-4 py-2" />
          <textarea required name="address" value={form.address} onChange={handleChange} placeholder="Adres" className="border rounded px-4 py-2 resize-none min-h-[80px]" />
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition mt-2">Siparişi Tamamla</button>
        </form>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 