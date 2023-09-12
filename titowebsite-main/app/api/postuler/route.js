import connectMongoDB from "@/libs/mongodb";
import Postuler from "@/models/Postuler";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, email,telephone,poste,cv,projets } = await request.json();
  await connectMongoDB();
  await Postuler.create({ username, email,telephone,poste,cv,projets });
  return NextResponse.json({ message: "Demande envoyé" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const postuler = await Postuler.find();
  return NextResponse.json({ postuler });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Postuler.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
