import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-primary sticky top-[4.25rem] h-fit w-full flex-none space-y-5 rounded-lg p-3 shadow-md md:w-64 lg:w-80">
      <p className="text-card text-2xl font-bold">Related Pages</p>
      <p>
        <Link
          href="/about-autism/what-is-autism"
          className="text-card hover:underline"
        >
          What is Autism?
        </Link>
      </p>
      <p>
        <Link
          href="/about-autism/symptoms"
          className="text-card hover:underline"
        >
          Signs & Symptoms
        </Link>
      </p>
      <p>
        <Link
          href="/about-autism/diagnosis"
          className="text-card hover:underline"
        >
          Early Diagnosis
        </Link>
      </p>
      <p>
        <Link href="/about-autism/faqs" className="text-card hover:underline">
          FAQs
        </Link>
      </p>
    </div>
  );
}
