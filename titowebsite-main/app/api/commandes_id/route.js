import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";


// Connectez-vous à la base de données MongoDB
connectDB();

export async function GET(request) {

    // TEST DE RECUPERATION DE LA COMMANDE
  const userId = request.locals.user.id;
    const commande = await Commande.findOne({ userId: userId });
    return NextResponse.json({ commande }, { status: 200 });
}

