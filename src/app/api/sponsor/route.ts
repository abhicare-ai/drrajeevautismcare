import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZOR_KEY as string,
  key_secret: process.env.RAZOR_SECRET,
});

export async function POST(req: Request) {
  const { name, phoneNumber, Country, state, amount } = await req.json();
  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
  });

  const createdOrder = await prisma.sponsor.create({
    data: {
      name,
      phoneNumber,
      Country,
      state,
      amount: Number(amount),

      orderId: order.id,
    },
  });

  return NextResponse.json(createdOrder);
}
