import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, total, ad, soyad, email, telefon, adres, sehir, postaKodu } = body;

    // Test için sipariş numarası oluştur
    const orderId = `TEST-${Date.now()}`;

    // Test için başarılı ödeme simülasyonu
    return NextResponse.json({
      status: 'success',
      orderId,
      message: 'Test ödeme başarılı',
      paymentDetails: {
        orderId,
        customerName: `${ad} ${soyad}`,
        email,
        phone: telefon,
        address: adres,
        city: sehir,
        total: total,
        items: items.map((item: any) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity
        }))
      }
    });
  } catch (error) {
    console.error('Ödeme API hatası:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Bir hata oluştu'
    }, { status: 500 });
  }
} 