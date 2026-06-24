type PropertyCardProps = {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
};

export default function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
}: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow">
      <img src={image} alt={title} className="h-72 w-full object-cover" />

      <div className="p-6">
        <p className="text-sm text-gray-500">{location}</p>

        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span>{price}</span>
        </div>

        <div className="mt-4 flex gap-6 text-sm text-gray-600">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft}</span>
        </div>
      </div>
    </article>
  );
}
