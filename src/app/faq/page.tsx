'use client';
import Link from "next/link";
import { useState } from "react";
import SocialProof from '@/components/SocialProof';

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
    <main className="min-h-screen bg-gradient-to-br from-brand-pink/5 via-white to-brand-blue/5 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-gray-600 max-w-xl mx-auto">En çok merak edilen sorular ve cevapları burada.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 divide-y divide-brand-pink/10 animate-fade-in">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-4 font-semibold text-brand-orange flex justify-between items-center focus:outline-none"
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
        {/* Sosyal Kanıt */}
        <SocialProof
          reviews={[
            {
              name: 'Zeynep T.',
              rating: 5,
              text: 'Sorularım çok hızlı yanıtlandı, güvenle alışveriş yaptım! SSS bölümü de çok faydalı.',
              date: 'Mart 2024',
              avatar: '/images/avatars/zeynept.jpg',
            },
            {
              name: 'Burak M.',
              rating: 4.9,
              text: 'SSS bölümünde aradığım tüm soruların cevabını buldum. Çok kapsamlı ve açıklayıcı.',
              date: 'Şubat 2024',
              avatar: '/images/avatars/burakm.jpg',
            }
          ]}
          badges={[
            {
              icon: '🏆',
              title: 'Müşteri Memnuniyeti',
              desc: '2024 Handmade Awards',
              bgClass: 'bg-brand-blue/60',
            },
            {
              icon: '❓',
              title: 'Detaylı Bilgi',
              desc: 'Kapsamlı SSS bölümü',
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