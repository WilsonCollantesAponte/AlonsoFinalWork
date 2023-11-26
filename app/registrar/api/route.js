import DatabaseInteraction from "@/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, cellNumber, address, password } = await request.json();

  const existEmail = await DatabaseInteraction.user.findMany({
    where: {
      email,
    },
  });
  if (existEmail.length) return NextResponse.json(null);

  const response = await DatabaseInteraction.user.create({
    data: {
      name,
      email,
      cellNumber,
      address,
      password,
    },
  });

  return NextResponse.json(response);
}
