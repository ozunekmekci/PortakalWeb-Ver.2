"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
        {/* Profil fotoğrafı placeholder */}
        <span className="text-5xl text-gray-400">👤</span>
      </div>
      <h2 className="text-xl font-bold mb-2 text-orange-600">{user.name}</h2>
      <p className="text-gray-700 mb-6">{user.email}</p>
      <button
        onClick={logout}
        className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all"
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default ProfilePage; 