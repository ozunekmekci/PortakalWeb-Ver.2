"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const genderOptions = ["Kadın", "Erkek", "Diğer", "Belirtmek istemiyorum"];
const roleOptions = ["user", "admin", "seller"];
const statusOptions = ["active", "inactive", "banned"];

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) router.replace("/login");
    if (user) fetchProfile();
    // eslint-disable-next-line
  }, [user]);

  const fetchProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/profile?email=${user.email}`);
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      setError("Profil yüklenemedi.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setProfile({ ...profile, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile.email,
          name: profile.name,
          profilePic: profile.profilePic,
          bio: profile.bio,
          phone: profile.phone,
          address: profile.address,
          birthday: profile.birthday,
          gender: profile.gender,
          instagram: profile.instagram,
          twitter: profile.twitter,
          facebook: profile.facebook,
          linkedin: profile.linkedin,
          emailVerified: profile.emailVerified,
          role: profile.role,
          status: profile.status,
          banner: profile.banner,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Güncelleme başarısız.");
      setProfile(data);
      setSuccess("Profil başarıyla güncellendi.");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user || !profile) return null;

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in flex flex-col items-center">
      {profile.banner && (
        <img src={profile.banner} alt="Banner" className="w-full h-32 object-cover rounded-xl mb-4" />
      )}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2 overflow-hidden">
          {profile.profilePic ? (
            <img src={profile.profilePic} alt="Profil" className="w-24 h-24 object-cover rounded-full" />
          ) : (
            <span className="text-5xl text-gray-400">👤</span>
          )}
        </div>
        <input
          type="text"
          name="profilePic"
          placeholder="Profil Fotoğrafı URL"
          value={profile.profilePic || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="banner"
          placeholder="Banner/Arka Plan URL"
          value={profile.banner || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Ad Soyad"
          value={profile.name || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          value={profile.email || ""}
          disabled
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
        <textarea
          name="bio"
          placeholder="Kısa Biyografi"
          value={profile.bio || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefon"
          value={profile.phone || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Adres"
          value={profile.address || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="date"
          name="birthday"
          placeholder="Doğum Tarihi"
          value={profile.birthday || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <select
          name="gender"
          value={profile.gender || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Cinsiyet</option>
          {genderOptions.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <input
          type="text"
          name="instagram"
          placeholder="Instagram"
          value={profile.instagram || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="twitter"
          placeholder="Twitter"
          value={profile.twitter || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="facebook"
          placeholder="Facebook"
          value={profile.facebook || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          value={profile.linkedin || ""}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
        <div className="w-full flex gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="emailVerified"
              checked={!!profile.emailVerified}
              onChange={handleChange}
            />
            E-posta Onaylı
          </label>
          <select
            name="role"
            value={profile.role || "user"}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          >
            {roleOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <select
            name="status"
            value={profile.status || "active"}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <input
          type="text"
          name="createdAt"
          value={profile.createdAt ? new Date(profile.createdAt).toLocaleString() : ""}
          disabled
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all w-full"
          disabled={loading}
        >
          {loading ? "Kaydediliyor..." : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={logout}
          className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold transition-all w-full mt-2"
        >
          Çıkış Yap
        </button>
      </form>
    </div>
  );
};

export default ProfilePage; 