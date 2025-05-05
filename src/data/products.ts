export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
  stock: number;
  slug: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoş Geldin Bebek Mıknatısı',
    description: `Üç katmanlı, zarif ve sevimli bir "hoş geldin bebek" hatıra mıknatısı:\n\n• Arka Plan Kartı: Lüks Dokulu Özel Tasarım Kart üzerine A6 boyutunda UV baskı\n• Orta Katman: Kabuk formunda, pastel pembe tonlu pleksi kesim\n• Üst Katman: MDF figür ve ekru-pembe ekose kurdele fiyonku\n• Kişiselleştirme: Bebeğin adı altın aynalı vinil folyo ile yazılır\n• Boyut: A6 kart boyutunda\n• Kullanım: Buzdolabı mıknatısı olarak kullanılabilir\n\nBebek mevlütü, doğum günü veya özel tanıtım etkinliklerinde misafirlere dağıtılabilecek, hem dekoratif hem işlevsel bir hatıra.`,
    price: 89.99,
    image: '/images/products/hos-geldin-bebek-miknatisi.jpg',
    category: 'Hatıra Ürünleri',
    isNew: true,
    stock: 50,
    slug: 'hos-geldin-bebek-miknatisi'
  }
  // Yeni ürün eklemek için yukarıdaki yapıyı kopyalayıp çoğaltabilirsiniz.
]; 