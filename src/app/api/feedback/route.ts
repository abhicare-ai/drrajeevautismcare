import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, comment, vidio } = await request.json();

  const res = await prisma.feedBack.create({
    data: {
      name,
      comment,
      vidio,
    },
  });

  return Response.json(res);
}

export async function GET() {
  const data = await prisma.feedBack.findMany({
    orderBy: {
      createdAt: 'desc',  // Ordering by 'createdAt' in descending order
    },
  });

  return Response.json(data);
}
