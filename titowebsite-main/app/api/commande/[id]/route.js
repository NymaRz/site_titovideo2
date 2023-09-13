import connectMongoDB from "@/libs/mongodb";
import Message from "@/models/commande";
import { NextResponse } from "next/server";


export async function POST(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const message = await Message.findOne({ _id: id });
    return NextResponse.json({ message }, { status: 200 });

}

