import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const sampleDir = path.join(process.cwd(), "public", "sample");
  let files: string[] = [];
  try {
    files = fs.readdirSync(sampleDir).filter((file) =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(file).toLowerCase())
    );
  } catch (e) {
    // Klasör yoksa veya hata varsa boş dizi döndür
    return NextResponse.json([]);
  }

  const products = files.map((file) => {
    const name = path.basename(file, path.extname(file));
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1) + " Pleksi Magnet",
      image: `/sample/${file}`,
      price: 129,
      description: "Kişiye özel el yapımı pleksi magnet.",
    };
  });

  return NextResponse.json(products);
} 