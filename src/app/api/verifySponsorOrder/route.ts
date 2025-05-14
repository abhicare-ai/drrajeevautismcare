import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const generatedSignature = (
  razorpayOrderId: string,
  razorpayPaymentId: string,
) => {
  const keySecret = process.env.RAZOR_SECRET as string;

  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request: NextRequest) {
  const { orderId, razorpayPaymentId, razorpaySignature } =
    await request.json();

  const signature = generatedSignature(orderId, razorpayPaymentId);
  if (signature !== razorpaySignature) {
    return NextResponse.json(
      { message: "payment verification failed", isOk: false },
      { status: 400 },
    );
  }

  await prisma.sponsor.update({
    where: {
      orderId: orderId,
    },
    data: {
      razorpayPaymentId,
      razorpaySignature,
    },
  });

  // Probably some database calls here to update order or add premium status to user
  return NextResponse.json(
    { message: "payment verified successfully", isOk: true },
    { status: 200 },
  );
}
