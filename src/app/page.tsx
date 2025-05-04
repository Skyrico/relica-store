import Image from "next/image";

const tcgRows = [
  { name: "Magic: The Gathering", src: "/images/tcg/mtg-row.png" },
  { name: "Riftbound", src: "/images/tcg/riftbound-row.jpg" },
  { name: "One Piece", src: "/images/tcg/onepiece-row.jpg" },
  { name: "Pokémon", src: "/images/tcg/pokemon-row.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center">
      <section className="text-center mt-8">
        <h1 className="text-4xl font-bold font-serif">Relica Collectibles</h1>
        <p className="mt-2 text-lg text-gray-400 font-sans">
          Coming Soon. Because every pack tells a story.
        </p>
      </section>

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
