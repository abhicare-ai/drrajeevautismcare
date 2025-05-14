/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import ausi from "@/assets/download.jpeg";
import SponsorForm from "./SponsorForm";
import VavBorder from "@/components/VavBorder";
import { childList } from "@/app/stories/videos/ChildList";

export default function Page() {
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
                  Sponsor A <span className="text-primary">Child</span>
                </p>
                <p className="font-extrabold">
                  you can join with us by sponsoring a child
                </p>
              
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
        <div className="space-y-6 ">
          <p className="text-3xl font-extrabold px-3 text-center">
            Become A <span className="text-primary">Sponsor</span>
          </p>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5  px-3 md:grid-cols-2 lg:grid-cols-3">
        
          {childList.map((v, i) => (
            <div
              className="overflow-hidden rounded-md border shadow-lg"
              key={i}
            >
              <img src={`${v.image}`} alt="ausi" className="w-full" />

              <div className="space-y-5 p-4">
                <p className="font-bold">{v.childName}</p>
                <p className="space-y-3">
                  <p className="font-bold"> Child Bio</p>
                  {v.description}
                </p>
                <p className="space-y-3">
                  <p className="font-bold"> Child sponsor Desc</p>
                  {v.sponsorText}
                </p>
                <SponsorForm sponName={v.childName} />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </main>
  );
}
