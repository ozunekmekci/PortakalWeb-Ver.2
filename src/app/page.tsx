import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import fs from 'fs';
import path from 'path';

function getProductsFromImages() {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  const files = fs.readdirSync(dir).filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
  );
  return files.map((file, i) => {
    const name = path.basename(file, path.extname(file));
    return {
      id: String(i + 1),
      name: name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: 'Açıklama ekleyebilirsiniz.',
      price: 99.99,
      image: `/images/products/${file}`,
      category: 'Hatıra Ürünleri',
      isNew: true,
      stock: 10,
      slug: name.toLowerCase().replace(/\s+/g, '-')
    };
  });
}

export default function Home() {
  const products = getProductsFromImages();

  return (
    <main>
      <Hero />
      <FeaturedProducts
        products={products}
        title="El Yapımı Ürünlerimiz"
        subtitle="Kişiye özel tasarım ve el emeği ürünlerimizle tanışın"
      />
    </main>
  );
}
