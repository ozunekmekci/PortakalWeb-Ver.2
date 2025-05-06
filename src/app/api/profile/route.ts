import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";

// GET: Profil getir
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json({ message: "E-posta gerekli." }, { status: 400 });
    }
    const db = await connectToDatabase();
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Kullanıcı bulunamadı." }, { status: 404 });
    }
    // Şifreyi çıkar, tüm alanları döndür
    const profile = { ...user };
    if (profile.password) delete profile.password;
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ message: "Bir hata oluştu.", error: String(error) }, { status: 500 });
  }
}

// POST: Profil güncelle
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email, name, profilePic, bio, phone, address, birthday, gender,
      instagram, twitter, facebook, linkedin, emailVerified, role, status, banner
    } = body;
    if (!email) {
      return NextResponse.json({ message: "E-posta gerekli." }, { status: 400 });
    }
    const db = await connectToDatabase();
    const update = {
      $set: {
        name, profilePic, bio, phone, address, birthday, gender,
        instagram, twitter, facebook, linkedin, emailVerified, role, status, banner
      }
    };
    const result = await db.collection("users").updateOne({ email }, update);
    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Kullanıcı bulunamadı." }, { status: 404 });
    }
    const user = await db.collection("users").findOne({ email });
    const profile = { ...user };
    if (profile.password) delete profile.password;
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ message: "Bir hata oluştu.", error: String(error) }, { status: 500 });
  }
} 