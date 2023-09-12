import connectMongoDB from "@/libs/mongodb";
import Postuler from "@/models/postuler";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const postuler = await Postuler.findOne({ _id: id });
  return NextResponse.json({ postuler }, { status: 200 });
}
