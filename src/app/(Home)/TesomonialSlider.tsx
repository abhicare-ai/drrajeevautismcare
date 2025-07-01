"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

export default function TesomonialSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div
        ref={prevRef}
        className="absolute top-1/2 2xl:left-[-40px] left-0 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-600 hover:text-black"
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 2xl:right-[-40px] right-0 z-10 -translate-y-1/2 cursor-pointer text-3xl text-gray-600 hover:text-black"
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
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/12QzPxMRB6g?si=xl_P9IXaINpln1Og"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-primary text-card overflow-hidden rounded-md p-4">
          <iframe
            className="mb-4 h-[300px] w-full"
            src="https://www.youtube.com/embed/uJV_SWpW9gY?si=mr5mYBP5pGdG4C8G"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* Video caption */}
          <div className="text-center">
            <p className="text-lg font-semibold">
              &ldquo;Thanks to early support, my child is thriving today.&ldquo;
            </p>
            <p className="mt-1 text-sm">
              – Priya Sharma, Parent of a child with Autism
            </p>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
}
