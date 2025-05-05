import { NextResponse } from 'next/server';
// Remove unused import
// import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { adres, sehir, ilce, postaKodu } = data;

    // Ödeme işlemi simülasyonu
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        status: 'success',
        message: 'Test ödeme başarılı',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Ödeme API hatası:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Bir hata oluştu',
      },
      { status: 500 }
    );
  }
} 