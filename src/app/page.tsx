import fs from "fs";
import path from "path";
import HomeClient from "./HomeClient";

function getProducts() {
  const sampleDir = path.join(process.cwd(), "public", "sample");
  let files: string[] = [];
  try {
    files = fs.readdirSync(sampleDir).filter((file) =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(path.extname(file).toLowerCase())
    );
  } catch (e) {
    return [];
  }
  return files.map((file) => {
    const name = path.basename(file, path.extname(file));
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1) + " Pleksi Magnet",
      image: `/sample/${file}`,
      price: 129,
      description: "Kişiye özel el yapımı pleksi magnet.",
    };
  });
}

export default function HomePage() {
  const products = getProducts();
  return <HomeClient products={products} />;
}
