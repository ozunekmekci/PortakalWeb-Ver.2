import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portakal Çiçeği Atölye | Kişiye Özel Pleksi Magnet & Anahtarlıklar",
  description: "El yapımı, folyo baskılı pleksi magnet ve anahtarlıklar. 300 gr kağıt arka yüzüyle dayanıklı ve şık. Hediyelik, magnet veya anahtarlık olarak kişiye özel tasarım seçenekleriyle sevdiklerinize anlam katın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <footer className="w-full text-center py-6 text-gray-500 bg-white/70 mt-8 text-sm flex flex-col items-center gap-2">
            <span>© {new Date().getFullYear()} Portakal Pleksi | El Yapımı Kişiye Özel Magnetler</span>
            <a href="https://www.instagram.com/portakalcicegi.atolye/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-800 font-medium">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline-block"><rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2"/><circle cx="12" cy="12" r="4" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              <span>@portakalcicegi.atolye</span>
            </a>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
