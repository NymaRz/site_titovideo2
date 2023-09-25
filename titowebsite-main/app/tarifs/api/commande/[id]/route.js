import connectMongoDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import { NextResponse } from "next/server";

const mongoose = require("mongoose");
//envoie de formulaire de commande

export async function GET(request,{params}) {
    const { id } = params;
    await connectMongoDB();
    const commande = await Commande.findOne({_id: id});
    return NextResponse.json({ commande }, { status: 200 });
}



const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    totalPrice: Number,
    // Ajoutez d'autres champs de commande ici
});

module.exports = mongoose.model('Order', orderSchema);
