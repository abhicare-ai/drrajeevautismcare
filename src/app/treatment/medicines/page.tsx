"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cerolin Drops Effective for Brain",
    image: "/Cerolin.jpg",
    description:
      "A neuro-supportive formulation that aids in improving concentration, memory, and overall brain development in children with autism.",
    url: "https://www.drrajeevswellness.com/product-category/autism-care/",
  },
  {
    id: 2,
    name: "Neuroplus",
    image: "/neuro1.jpg",
    description:
      "Supports speech development, reduces hyperactivity, and enhances neurological function, especially in children with developmental delays or autism.",
    url: "https://www.drrajeevswellness.com/product-category/autism-care/",
  },
  {
    id: 3,
    name: "RL-33 For Baby & Calcium Tonic",
    image: "/0039_RL-33-1.jpg",
    description:
      "Helps in physical growth, strengthens bones, and supports calm behavior in children facing calcium deficiency or developmental concerns.",
    url: "https://www.drrajeevswellness.com/product-category/autism-care/",
  },
];

export default function MedicinesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Autism Supplements & Medicines
      </h1>
      <p className="mb-10 text-center text-gray-600">
        Specially formulated homeopathic and herbal remedies to support the
        treatment of autism in children.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-2xl border p-4 shadow-md"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold">{product.name}</h2>
              <p className="mb-4 text-sm text-gray-600">
                {product.description}
              </p>
            </div>
            <Link href={product.url} target="_blank">
              <Button className="mt-auto w-full">🛒 View & Add to Cart</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
