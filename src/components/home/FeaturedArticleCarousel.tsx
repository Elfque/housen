import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredArticles } from "../../data/articles";

import "swiper/css";

export default function FeaturedArticleCarousel() {
  return (
    <div className="relative col-span-1">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop
          navigation={{
            prevEl: ".insight-prev",
            nextEl: ".insight-next",
          }}
          className="max-w-130 w-full"
        >
          {featuredArticles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="group relative overflow-hidden rounded-4xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-110 w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent w-full" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-xl bg-white px-4 py-2 text-sm font-medium">
                    Featured
                  </span>
                </div>

                <div className="absolute bottom-8 left-8">
                  <div className="mb-3 flex gap-3 text-sm text-white/80">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="max-w-xl text-5xl font-light text-white">
                    {article.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          <button className="insight-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B88C] bg-black/30 text-white backdrop-blur">
            <ChevronLeft />
          </button>

          <button className="insight-next flex h-12 w-12 items-center justify-center rounded-full bg-[#D9B88C] text-black">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
