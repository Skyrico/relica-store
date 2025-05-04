type Props = {
    title: string;
    price: number;
    image: string;
  };
  
  export default function ProductCard({ title, price, image }: Props) {
    return (
      <div className="rounded-xl border p-4 shadow hover:scale-105 transition">
        <img src={image} alt={title} className="w-full rounded-md mb-3" />
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {(price / 100).toFixed(2)} kr
        </p>
      </div>
    );
  }
  