import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const db = await connectToDatabase();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Tüm alanlar gereklidir." },
        { status: 400 }
      );
    }

    // E-posta kontrolü
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Bu e-posta adresi zaten kayıtlı." },
        { status: 400 }
      );
    }

    // Yeni kullanıcı oluştur
    const newUser = {
      name,
      email,
      password, // Gerçek uygulamada şifre hash'lenmeli
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    // Hassas bilgileri çıkar
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json(
      { message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
} 