'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FF914D]">
      <header className="w-full flex justify-between items-center px-6 py-4 bg-[#FF914D]/90 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Portakal Çiçeği Atölye Logo" width={48} height={48} className="rounded-full bg-white p-1 shadow" />
          <span className="text-2xl font-bold tracking-tight text-[#E94F1D]">Portakal Çiçeği</span>
        </div>
        <nav className="space-x-6 text-[#E94F1D] font-medium flex items-center">
          <Link href="/" className="hover:text-white">Ürünler</Link>
          <Link href="/cart" className="hover:text-white">Sepet</Link>
          <Link href="/about" className="hover:text-white">Hakkımızda</Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-pink-700 mb-6 text-center">İletişim</h1>
        <div className="bg-white rounded-xl shadow p-6">
          {success ? (
            <div className="text-center text-green-600 font-semibold text-lg py-8">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Ad Soyad" className="border rounded px-4 py-2" />
              <input required name="email" value={form.email} onChange={handleChange} placeholder="E-posta" type="email" className="border rounded px-4 py-2" />
              <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Mesajınız" className="border rounded px-4 py-2 resize-none min-h-[80px]" />
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition mt-2">Gönder</button>
            </form>
          )}
          <div className="mt-8 text-gray-500 text-sm text-center">
            <div>Mail: <a href="mailto:portakalpleksi@gmail.com" className="underline hover:text-pink-600">portakalpleksi@gmail.com</a></div>
            <div>Instagram: <a href="https://www.instagram.com/portakalcicegi.atolye/" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600">@portakalcicegi.atolye</a></div>
          </div>
        </div>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 