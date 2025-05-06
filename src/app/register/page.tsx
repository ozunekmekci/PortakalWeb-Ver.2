"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const RegisterPage = () => {
  const { register, loading, error, user } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [formError, setFormError] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string }>({});

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
    if (!form.name) err.name = "Ad soyad gerekli";
    if (!form.email) err.email = "E-posta gerekli";
    if (!form.password) err.password = "Şifre gerekli";
    if (form.password.length < 6) err.password = "Şifre en az 6 karakter olmalı";
    if (form.password !== form.confirmPassword) err.confirmPassword = "Şifreler eşleşmiyor";
    setFormError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await register(form.name, form.email, form.password);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Kayıt Ol</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          label="Ad Soyad"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          error={formError.name}
        />
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
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          error={formError.password}
        />
        <Input
          label="Şifre (Tekrar)"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={formError.confirmPassword}
        />
        {error && <div className="text-red-500 text-sm mb-2 animate-fade-in">{error}</div>}
        <Button type="submit" loading={loading}>
          Kayıt Ol
        </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link href="/login" className="text-orange-600 hover:underline">Zaten hesabın var mı? Giriş yap</Link>
      </div>
    </div>
  );
};

export default RegisterPage; 