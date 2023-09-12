import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { styleVideoData,  } = await request.json();
  await connectMongoDB();
  await Formulaire.create({ styleVideoData });
  return NextResponse.json({ message: "Demande envoyé" }, { status: 201 });
}