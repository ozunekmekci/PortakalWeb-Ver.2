import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

// Gerçek bir uygulamada bu veriler veritabanından alınmalıdır.
const MOCK_USERS = [
  { name: "Test Kullanıcı", email: "test@example.com", password: "123456" },
];

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const db = await connectToDatabase();

    if (!email || !password) {
      return NextResponse.json(
        { message: "E-posta ve şifre gereklidir." },
        { status: 400 }
      );
    }

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "E-posta veya şifre hatalı." },
        { status: 401 }
      );
    }

    if (user.password !== password) {
      return NextResponse.json(
        { message: "E-posta veya şifre hatalı." },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Login hatası:", error);
    return NextResponse.json(
      { message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", error: String(error) },
      { status: 500 }
    );
  }
} 