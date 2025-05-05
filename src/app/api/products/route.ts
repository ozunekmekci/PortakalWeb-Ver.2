import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const sampleDir = path.join(process.cwd(), 'public/products');

export async function GET() {
  try {
    const images = fs
      .readdirSync(sampleDir)
      .filter((file) =>
        ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
      );

    const products = images.map((image, index) => ({
      id: index + 1,
      name: `Pleksi Magnet ${index + 1}`,
      description: 'Kişiye özel tasarım pleksi magnet',
      price: 49.99 + index * 10,
      image: `/products/${image}`,
    }));

    return NextResponse.json(products);
  } catch (error) {
    console.error('Ürünler yüklenirken hata:', error);
    return NextResponse.json([], { status: 500 });
  }
} 