"use server";

import { prisma } from "@/lib/prisma";
import { AppoinmetValues } from "@/lib/validation";

export async function appo(input: AppoinmetValues) {
  const data = await prisma.appt.create({
    data: input,
  });

  return data;
}
