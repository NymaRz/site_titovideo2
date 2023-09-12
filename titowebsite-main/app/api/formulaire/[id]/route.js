import connectMongoDB from "@/libs/mongodb";
import Formulaire from "@/models/formulaire";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const formulaire = await Formulaire.findOne({_id: id});
    return NextResponse.json({ formulaire }, { status: 200 });
}