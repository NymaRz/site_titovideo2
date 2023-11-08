import connectMongoDB from "../../../../libs/mongodb";
import Commande from "../../../../models/commande_client";
import {NextResponse} from "next/server";

export async function GET(request) {
    const {email} = request.query;
    await connectMongoDB();
    const commande = await Commande.findOne({email: email});
    return NextResponse.json({commande}, {status: 200});

}