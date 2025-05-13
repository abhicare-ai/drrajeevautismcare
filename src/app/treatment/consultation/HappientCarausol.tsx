"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

export default function HappientCarausol() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-600 hover:text-black 2xl:left-[-40px]"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-600 hover:text-black 2xl:right-[-40px]"
      >
        ❯
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onInit={(swiper) => {
          // Type-safe way to assign navigation elements
          if (
            typeof swiper.params.navigation === "object" &&
            swiper.params.navigation !== null
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        modules={[FreeMode, Pagination, Navigation]}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper cursor-grab"
      >
        {/* Example Slides */}
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          I installed the app and went for a free consultation with a dietician.
          The advice given by Dr. Mirza was simply great. He shared a detailed
          diet chart and exercises with me which was easy to incorporate into my
          hectic schedule.
          {/* Video caption */}
          <div className="text-center">
         
            <p className="mt-1 text-sm">
              – Priya Sharma
            </p>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
}
