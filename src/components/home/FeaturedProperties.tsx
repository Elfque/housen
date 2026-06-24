import PropertyCard from "./PropertyCard";

const properties = [
  {
    image: "/villa-1.jpg",
    title: "Bayside Villa",
    location: "Los Angeles, CA",
    price: "$3.2M",
    beds: 4,
    baths: 3,
    sqft: "3450 sqft",
  },
  {
    image: "/villa-2.jpg",
    title: "Urban Loft",
    location: "Miami, FL",
    price: "$2.6M",
    beds: 3,
    baths: 2,
    sqft: "2150 sqft",
  },
  {
    image: "/villa-3.jpg",
    title: "Pearlhouse View",
    location: "Austin, TX",
    price: "$2.9M",
    beds: 4,
    baths: 3,
    sqft: "3120 sqft",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-5xl font-light">Featured Properties</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
