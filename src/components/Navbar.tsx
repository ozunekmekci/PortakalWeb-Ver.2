"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-4 py-3 mb-6">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-orange-600 text-lg">Portakal Çiçeği</Link>
        <Link href="/" className="text-gray-700 hover:text-orange-600 transition">Anasayfa</Link>
      </div>
      <div className="flex items-center gap-4">
        {!user && (
          <>
            <Link href="/login" className="text-gray-700 hover:text-orange-600 transition">Giriş Yap</Link>
            <Link href="/register" className="text-gray-700 hover:text-orange-600 transition">Kayıt Ol</Link>
          </>
        )}
        {user && (
          <>
            <Link href="/profile" className="text-gray-700 hover:text-orange-600 transition">Profilim</Link>
            <button onClick={logout} className="text-gray-700 hover:text-red-500 transition">Çıkış</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 