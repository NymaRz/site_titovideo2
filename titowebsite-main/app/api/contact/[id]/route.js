import connectMongoDB from "@/libs/mongodb";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const message = await Contact.findOne({ _id: id });
  return NextResponse.json({ message }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}