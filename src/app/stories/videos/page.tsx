/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import ausi from "@/assets/images (5).jpeg";
import CareteTestomoni from "./CareteTestomoni";
import { useEffect, useState } from "react";
import axios from "axios";
import VavBorder from "@/components/VavBorder";

export default function Page() {
  const [data, setdaat] = useState([]);
  const showdata = async () => {
    const { data } = await axios.get("/api/feedback");

    setdaat(data);
  };

  useEffect(() => {
    showdata();
  }, []);
  return (
    <main>
      <div className="mx-auto max-w-7xl px-3">
        <div className="relative">
          {/* Wave SVG divider */}
          <div className="w-full rotate-180 overflow-hidden leading-[0]">
            <div className="custom-shape-divider-top-1746940280">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                  fill="#aac7f2"
                ></path>
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-5 space-y-5 bg-[#aac7f2] text-slate-800 md:flex-row">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="space-y-5">
                <p className="text-4xl font-extrabold">
                  <span className="text-primary">Review&lsquo;s </span>
                </p>
                <p className="text-xl font-semibold text-slate-700">
                  Customer&#39;s Review&lsquo;s
                </p>
                <CareteTestomoni />
              </div>
            </div>
            <Image src={ausi} alt="ausi" />
          </div>
          {/* Wave SVG divider */}
          <div className="w-full overflow-hidden leading-[0]">
            <div className="custom-shape-divider-top-1746940280">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                  fill="#aac7f2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <VavBorder />

        <div className="mx-auto max-w-7xl space-y-6 px-3">
          <div className="flex justify-between gap-5">
            <p className="text-4xl font-extrabold">
              Our <span className="text-primary">Reviews </span>
            </p>
            <CareteTestomoni />
          </div>
          {data &&
            data.map((v: any, i) => (
              <div
                className="bg-primary text-card flex flex-col gap-5 rounded-md border p-4 shadow-lg md:flex-row"
                key={i}
              >
                <div className="flex items-center justify-center md:w-1/2">
                  {v.vidio ? (
                    <video
                      src={v.vidio}
                      controls
                      className="rounded-md w-full h-full"
                    ></video>
                  ) : (
                    <div className="rounded-md border p-3 text-center font-bold">
                      No Vidio Uploaded by user.
                    </div>
                  )}
                </div>
                <div className="space-y-4 whitespace-normal md:w-1/2">
                  <p> {v.comment}</p>
                  <p className="font-bold">{v.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
