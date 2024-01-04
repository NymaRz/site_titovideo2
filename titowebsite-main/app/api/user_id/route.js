// Fichier: /api/user_id/routes.js

import connectDB from "../../../libs/mongodb";
import User from "../../../models/user";
import {NextResponse} from "next/server";

// Connectez-vous à la base de données MongoDB
connectDB();

export async function GET(request) {
    try {
        // Utilisez le modèle approprié ici, User ou Commande selon ce que vous souhaitez récupérer
        const users = await User.find().select('email name role createdAt');
        return NextResponse.json({users});
    } catch (error) {
        console.error(error);
        // Envoyez une réponse d'erreur au client
        return NextResponse.json({message: "Erreur lors de la récupération des usssseeer"}, {status: 500});
    }
}
