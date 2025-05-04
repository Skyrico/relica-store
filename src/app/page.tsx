// src/app/page.tsx
import Image from "next/image";

// If needed later:
// import ProductCard from "@/components/product/ProductCard";
// import { demoProducts } from "@/lib/products";

const tcgRows = [
  { name: "Magic: The Gathering", src: "/images/tcg/mtg-row.png" },
  { name: "Riftbound", src: "/images/tcg/riftbound-row.jpg" },
  { name: "One Piece", src: "/images/tcg/onepiece-row.jpg" },
  { name: "Pokémon", src: "/images/tcg/pokemon-row.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <section className="text-center mt-12">
        <h1 className="text-4xl font-bold">Relica Collectibles</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Coming Soon. Because every pack tells a story.
        </p>
      </section>

      {/* 💡 Replace the old image block with this updated one */}
      <section className="w-full mt-16 space-y-10 max-w-5xl px-4">
        {tcgRows.map((tcg) => (
          <div key={tcg.name} className="flex justify-center">
            <Image
              src={tcg.src}
              alt={tcg.name}
              width={600}
              height={200}
              className="rounded-lg shadow-md object-contain"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
