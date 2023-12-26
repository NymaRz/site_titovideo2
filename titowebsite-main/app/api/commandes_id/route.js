import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";

// Connectez-vous à la base de données MongoDB
connectDB();
export async function GET(request) {
    try {
        // Utilisez le modèle approprié ici, User ou Commande selon ce que vous souhaitez récupérer
        const commande = await User.find().select('email sound name selectedChoice date etat tito image createdAt');
        return NextResponse.json({ commande });
    } catch (error) {
        console.error(error);
        // Envoyez une réponse d'erreur au client
        return NextResponse.json({ message: "Erreur lors de la récupération des commandes" }, { status: 500 });
    }
}

