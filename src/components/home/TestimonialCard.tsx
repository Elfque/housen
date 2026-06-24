import { FaQuoteLeft } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ image, name, role, quote }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.2fr_1fr]">
      <img
        src={image}
        alt={name}
        className="h-72 w-full rounded-3xl object-cover"
      />

      <div className="flex flex-col justify-center rounded-3xl bg-white p-10 shadow-sm">
        <FaQuoteLeft className="mb-4 text-3xl text-brown" />

        <p className="mb-8 text-lg leading-relaxed text-gray-700">{quote}</p>

        <div className="flex items-center gap-4">
          <img
            src={"/images/test-image.jpg"}
            alt={name}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>

      <img
        src={image}
        alt={name}
        className="h-72 w-full rounded-3xl object-cover"
      />
    </div>
  );
}
