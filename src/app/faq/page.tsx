'use client';
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Pleksi magnetler kişiye özel nasıl hazırlanıyor?",
    a: "Siparişinizde belirttiğiniz isim, tarih veya özel mesaj pleksi magnetin üzerine özenle işlenir. Dilerseniz renk ve tema tercihinizi de belirtebilirsiniz.",
  },
  {
    q: "Kargo ve teslimat süresi nedir?",
    a: "El yapımı ürünlerimiz genellikle 2-4 iş günü içinde hazırlanır ve kargoya verilir. Kargo süresi bulunduğunuz şehre göre değişiklik gösterebilir.",
  },
  {
    q: "Toplu siparişlerde indirim var mı?",
    a: "Evet! 10 adet ve üzeri toplu siparişlerde özel indirim uygulanır. Detaylar için iletişime geçebilirsiniz.",
  },
  {
    q: "Ürünler kırılır mı? Dayanıklı mı?",
    a: "Pleksi malzeme oldukça dayanıklıdır. Ürünlerimiz özel korumalı ambalaj ile gönderilir. Kırılma veya hasar durumunda bizimle iletişime geçebilirsiniz.",
  },
  {
    q: "Nasıl ödeme yapabilirim?",
    a: "Kredi kartı, havale/EFT ve kapıda ödeme seçenekleriyle sipariş verebilirsiniz. Online ödeme altyapımız Stripe/iyzico ile güvenlidir.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-pink-50">
      <header className="w-full flex justify-between items-center px-6 py-4 bg-white/80 shadow-sm sticky top-0 z-10">
        <div className="text-2xl font-bold tracking-tight text-pink-600">Portakal Pleksi</div>
        <nav className="space-x-6 text-gray-700 font-medium flex items-center">
          <Link href="/" className="hover:text-pink-500">Ürünler</Link>
          <Link href="/cart" className="hover:text-pink-500">Sepet</Link>
          <Link href="/about" className="hover:text-pink-500">Hakkımızda</Link>
          <Link href="/contact" className="hover:text-pink-500">İletişim</Link>
        </nav>
      </header>
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-pink-700 mb-6 text-center">Sıkça Sorulan Sorular</h1>
        <div className="bg-white rounded-xl shadow p-6 divide-y divide-pink-50">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-4 font-semibold text-pink-700 flex justify-between items-center focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className={`ml-2 transition-transform ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && (
                <div className="text-gray-600 pb-4 pl-2 animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm">
        © {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler
      </footer>
    </div>
  );
} 