import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ProductDetailClient from "./ProductDetailClient";

function getProductBySlug(slug) {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  const files = fs.readdirSync(dir).filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
  );
  const file = files.find(f => {
    const name = path.basename(f, path.extname(f));
    return name.toLowerCase().replace(/\s+/g, '-') === slug;
  });
  if (!file) return null;
  const name = path.basename(file, path.extname(file));
  return {
    id: slug,
    name: name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: 'Açıklama ekleyebilirsiniz.',
    price: 99.99,
    image: `/images/products/${file}`,
    category: 'Hatıra Ürünleri',
    isNew: true,
    stock: 10,
    slug
  };
}

export default function ProductDetail({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  return <ProductDetailClient product={product} />;
} 