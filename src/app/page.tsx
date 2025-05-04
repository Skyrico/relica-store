import ProductCard from "@/components/product/ProductCard";
import { demoProducts } from "@/lib/products";

const tcgRows = [
  { name: "Magic: The Gathering", src: "/images/tcg/mtg-row.png.png" },
  { name: "Riftbound", src: "/images/tcg/riftbound-row.png.jpg" },
  { name: "One Piece", src: "/images/tcg/onepiece-row.png.jpg" },
  { name: "Pokémon", src: "/images/tcg/pokemon-row.png.png" },
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

      <section className="w-full mt-16 space-y-10 max-w-5xl">
        {tcgRows.map((tcg) => (
          <div key={tcg.name} className="flex justify-center">
            <img
              src={tcg.src}
              alt={tcg.name}
              className="rounded-lg shadow hover:scale-105 transition-transform w-full max-w-xl"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
