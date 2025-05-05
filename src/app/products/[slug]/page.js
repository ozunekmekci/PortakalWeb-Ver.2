import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetail({ params }) {
  const sampleDir = path.join(process.cwd(), "public", "sample");
  let files = [];
  try {
    files = fs.readdirSync(sampleDir).filter((file) =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(file).toLowerCase())
    );
  } catch (e) {
    return notFound();
  }

  const file = files.find((f) => path.basename(f, path.extname(f)).toLowerCase() === params.slug.toLowerCase());
  if (!file) return notFound();

  const name = path.basename(file, path.extname(file));
  const product = {
    name: name.charAt(0).toUpperCase() + name.slice(1) + " Pleksi Magnet",
    image: `/sample/${file}`,
    price: 129,
    description: "Kişiye özel el yapımı pleksi magnet.",
  };

  return <ProductDetailClient product={product} />;
} 