"use client";
import Image from "next/image";
import ausi from "@/assets/pexels-olly-3761513.jpg";
import VavBorder from "@/components/VavBorder";
import fdk from "@/assets/e7391473-ce45-403b-ae9e-04f25674874c.png";
import fdds from "@/assets/7df1fb1e-dc1e-4d1d-9031-bb05955710fa.png";
import sisjdh from "@/assets/th.svg";
import { Button } from "@/components/ui/button";
import HappientCarausol from "./HappientCarausol";

import convenienceIcon from "@/assets/convenience.svg";
import costEffectiveIcon from "@/assets/costEffective.svg";
import certifiedIcon from "@/assets/certified.svg";
import shieldIcon from "@/assets/confidential.svg";
import BookAppoinmet from "@/app/BookAppoinmet";
import { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
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
                  Online doctor{" "}
                  <span className="text-primary">consultation</span>
                </p>
                <p className="font-extrabold">Meet with our doctor&lsquo;s</p>
              </div>
            </div>
            <Image src={ausi} alt="ausi" className="md:w-1/2" />
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
        {" "}
        <VavBorder />
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-3 md:flex-row">
          <div className="space-y-5 md:w-1/2">
            <p className="text-2xl font-bold">
              Online doctor consultation with qualified{" "}
              <span className="text-primary">doctors</span>
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="flex items-center gap-3">
                <Image src={fdk} alt="fdk" />
                <p>Talk within 30 min</p>
              </div>

              <div className="flex items-center gap-3">
                <Image src={fdds} alt="fdk" />
                <p>Free follow up for 3 days</p>
              </div>

              <div className="flex items-center gap-3">
                <Image src={sisjdh} alt="fdk" />
                <p>Free follow up for 3 days</p>
              </div>
            </div>

            <Button className="w-full" onClick={() => setShow(true)}>
              Consult Now
            </Button>

            <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row">
              {/* Count Section */}
              <div className="text-center">
                <p className="text-3xl font-semibold text-red-500">30L+</p>
                <p>Total Consultations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold text-red-500">3k+</p>
                <p>Daily Consultations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-semibold text-red-500">22+</p>
                <p>Specialities</p>
              </div>
            </div>
          </div>
          <Image src={ausi} alt="knd" className="md:w-1/2" />
        </div>
      </div>

      <div>
        <VavBorder />

        <div className="mx-auto max-w-7xl space-y-5 px-3">
          <p className="text-center text-4xl font-extrabold">
            Our Happy <span className="text-primary">Customers</span>
          </p>
          <HappientCarausol />
        </div>
      </div>

      <div>
        <VavBorder />

        <div className="mx-auto max-w-7xl px-3 py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Image
                src={shieldIcon}
                alt="Confidential"
                className="mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold">100% Confidential</h3>
              <p className="text-sm text-gray-500">
                All advice & consultations are completely confidential. You can
                also delete chats whenever you want.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src={certifiedIcon}
                alt="Certified Doctors"
                className="mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold">Certified Doctors</h3>
              <p className="text-sm text-gray-500">
                We offer quality healthcare through our network of certified and
                experienced doctors.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src={convenienceIcon}
                alt="Convenience"
                className="mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold">Convenience</h3>
              <p className="text-sm text-gray-500">
                Forget the hassle of long queues and rush hour. Seek expert
                opinion anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src={costEffectiveIcon}
                alt="Cost Effective"
                className="mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold">Cost Effective</h3>
              <p className="text-sm text-gray-500">
                We provide medical assistance on non-urgent queries for free.
                Fee starting at ₹50 for faster response to queries.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookAppoinmet open={show} onclose={() => setShow(false)} />
    </main>
  );
}
