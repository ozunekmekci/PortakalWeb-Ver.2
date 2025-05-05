import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portakal Çiçeği - Doğal ve Sağlıklı",
  description: "Doğanın en saf haliyle, size özel hazırlanmış portakal çiçeği ürünleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
        <footer className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-serif text-lg text-gray-800 mb-4">Portakal Çiçeği</h3>
                <p className="text-gray-600 text-sm">
                  Doğanın en saf haliyle, size özel hazırlanmış portakal çiçeği ürünleri.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Hızlı Linkler</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/hakkimizda" className="text-gray-600 hover:text-orange-600 text-sm">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="/urunler" className="text-gray-600 hover:text-orange-600 text-sm">
                      Ürünler
                    </a>
                  </li>
                  <li>
                    <a href="/kampanyalar" className="text-gray-600 hover:text-orange-600 text-sm">
                      Kampanyalar
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">Yardım</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/iletisim" className="text-gray-600 hover:text-orange-600 text-sm">
                      İletişim
                    </a>
                  </li>
                  <li>
                    <a href="/sss" className="text-gray-600 hover:text-orange-600 text-sm">
                      Sıkça Sorulan Sorular
                    </a>
                  </li>
                  <li>
                    <a href="/kargo" className="text-gray-600 hover:text-orange-600 text-sm">
                      Kargo ve Teslimat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-4">İletişim</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Email: info@portakalcicegi.com</li>
                  <li>Tel: +90 (555) 123 45 67</li>
                  <li>Adres: İstanbul, Türkiye</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
              <p>&copy; {new Date().getFullYear()} Portakal Çiçeği. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
