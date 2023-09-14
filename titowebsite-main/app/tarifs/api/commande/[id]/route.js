import connectMongoDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import { NextResponse } from "next/server";


//envoie de formulaire de commande

export async function GET(request,{params}) {
    const { id } = params;
    await connectMongoDB();
    const commande = await Commande.findOne({_id: id});
    return NextResponse.json({ commande }, { status: 200 });
}

