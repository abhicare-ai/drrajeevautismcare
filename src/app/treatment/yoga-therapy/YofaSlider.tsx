"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function YofaSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-full right-[70px] z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 text-4xl text-gray-700 hover:text-black"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-full right-2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 text-4xl text-gray-700 hover:text-black"
      >
        ❯
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onInit={(swiper) => {
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
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative cursor-grab">
          <div className="jsdskk h-[700px] w-full object-cover"></div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative cursor-grab">
          <div className="jdas h-[700px] w-full object-cover"></div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative cursor-grab">
          <div className="jdsdds h-[700px] w-full object-cover">
            <div className="mx-auto flex h-full max-w-7xl items-center px-3">
              <div>
                <h4 className="text-card text-3xl font-extrabold sm:text-6xl md:text-8xl">
                  Aut<span className="text-primary">is</span>m
                </h4>
                <h4 className="text-card ml-10 text-3xl font-extrabold sm:text-6xl md:mt-6 md:ml-32 md:text-8xl">
                  worthy
                </h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
