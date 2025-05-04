import ProductCard from "@/components/product/ProductCard";
import { demoProducts } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Relica Collectibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {demoProducts.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
