import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import ProductDetailClient from "./ProductDetailClient";

function getSlugFromFilename(filename) {
  return crypto.createHash('md5').update(filename).digest('hex').slice(0, 12);
}

function getProductBySlug(slug) {
  const dir = path.join(process.cwd(), 'public', 'images', 'products');
  const files = fs.readdirSync(dir).filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
  );
  const file = files.find(f => getSlugFromFilename(f) === slug);
  if (!file) return null;
  const name = path.basename(file, path.extname(file));
  return {
    id: slug,
    name: 'Kişiye Özel Pleksi Bebek Hatıra Mıknatıs Hediyelik – Baskılı Figür ve İsim Yazılı Babyshower & Mevlüt & Doğum Günü Hediyesi',
    description: 'Açıklama ekleyebilirsiniz.',
    price: 35,
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