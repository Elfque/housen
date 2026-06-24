import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F6F3] py-24">
      <div className="grid mx-auto max-w-7xl px-6 lg:grid-cols-5">
        <div className="mb-16">
          <h2 className="text-4xl font-light">
            Our Clients Speak <span className="text-brown italic">Boldly.</span>
          </h2>

          <p className="mt-4 max-w-md text-gray-600">
            Real stories from people who found more than a space—they found
            their place.
          </p>
        </div>

        <div className="col-span-4 relative">
          <div className="mb-10 flex justify-end gap-4 absolute top-4 right-4 z-10">
            <button className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <ArrowLeft />
            </button>

            <button className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <ArrowRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            loop
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
