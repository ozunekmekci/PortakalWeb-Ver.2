"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const LoginPage = () => {
  const { login, loading, error, user } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState<{ email?: string; password?: string }>({});

  if (user) {
    router.replace("/profile");
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: undefined });
  };

  const validate = () => {
    const err: typeof formError = {};
    if (!form.email) err.email = "E-posta gerekli";
    if (!form.password) err.password = "Şifre gerekli";
    setFormError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await login(form.email, form.password);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Giriş Yap</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          label="E-posta"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          error={formError.email}
        />
        <Input
          label="Şifre"
          name="password"
          type="password"
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          error={formError.password}
        />
        {error && <div className="text-red-500 text-sm mb-2 animate-fade-in">{error}</div>}
        <Button type="submit" loading={loading}>
          Giriş Yap
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link href="/register" className="text-orange-600 hover:underline">Hesabın yok mu? Kayıt ol</Link>
        <span className="text-gray-400 cursor-not-allowed">Şifremi unuttum?</span>
      </div>
    </div>
  );
};

export default LoginPage; 