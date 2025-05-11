"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function BannerSlider() {
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
          <video
            src="/vido.mp4"
            autoPlay
            muted={false}
            controls
            playsInline
            className="h-[700px] w-full object-cover"
          ></video>
          <Wave />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative cursor-grab">
          <div className="jds h-[700px] w-full object-cover">
            <div className="mx-auto flex h-full max-w-7xl items-center px-3">
              <div>
                <h4 className="text-card text-3xl font-extrabold sm:text-6xl md:text-8xl">
                  Aut<span className="text-primary">is</span>m
                </h4>
                <h4 className="text-card ml-10 text-3xl font-extrabold sm:text-6xl md:mt-6 md:ml-32 md:text-8xl">
                  acceptance
                </h4>
              </div>
            </div>
          </div>
          <Wave />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative cursor-grab">
          <div className="jdsds h-[700px] w-full object-cover">
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
          <Wave />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// Reusable Wave component
export function Wave() {
  return (
    <div className="absolute bottom-0 left-0 w-full rotate-180 overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="h-[200px] w-full"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,
           172-41.86,82.39-16.72,168.19-17.73,
           250.45-.39C823.78,31,906.67,72,
           985.66,92.83c70.05,18.48,146.53,
           26.09,214.34,3V0H0V27.35A600.21,
           600.21,0,0,0,321.39,56.44Z"
          fill="#2B7FFF"
        />
      </svg>
    </div>
  );
}
