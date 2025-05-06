import { User } from "@/context/AuthContext";
import jwt from "jsonwebtoken";

const USER_KEY = "auth_user";
const PASSWORD_KEY = "auth_password";
const API_URL = "http://localhost:3000/api";
const JWT_SECRET = "your_jwt_secret"; // Gerçek bir uygulamada bu değer güvenli bir şekilde saklanmalıdır.

export function getUserFromStorage(): User | null {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
}

export async function loginUser(email: string, password: string): Promise<User> {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Giriş yapılamadı.");
  }
  const user = await response.json();
  return user;
}

export async function registerUser(name: string, email: string, password: string): Promise<User> {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Kayıt yapılamadı.");
  }
  return response.json();
}

export function logoutUser() {
  localStorage.removeItem("auth_token");
} 