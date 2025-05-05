import Image from "next/image";

const tcgRows = [
  { name: "Magic: The Gathering", src: "/images/tcg/mtg-row.jpg" },
  { name: "Riftbound", src: "/images/tcg/riftbound-row.jpg" },
  { name: "One Piece", src: "/images/tcg/onepiece-row.jpg" },
  { name: "Pokémon", src: "/images/tcg/pokemon-row.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 flex flex-col items-center">
      <section className="text-center mt-4">
        <p className="text-[26px] font-bold text-purple-300 tracking-wide mb-4">
          Coming Soon.
        </p>
      </section>


      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto w-fit">

        {tcgRows.map((tcg) => (
          <div
            key={tcg.name}
           className="w-full max-w-xs mx-auto bg-zinc-900 border border-purple-600/40 rounded-lg p-3 flex items-center justify-center shadow-md hover:shadow-purple-500/40 hover:scale-[1.03] transition-all duration-200"
         >
           <Image
              src={tcg.src}
              alt={tcg.name}
              width={240}
              height={120}
             className="object-contain max-h-20"
            />
          </div>
       ))}
      </section>
      

    </main>
    
  );
  
}
