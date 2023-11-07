import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";


// Connectez-vous à la base de données MongoDB
connectDB();

export async function GET(request) {
    try {
        // Assurez-vous que l'utilisateur est authentifié et que vous avez son ID ou nom d'utilisateur
        const userId = request.user.id; // Exemple : obtenir l'ID de l'utilisateur à partir de votre mécanisme d'authentification

        await connectMongoDB(); // Assurez-vous que la connexion MongoDB est établie correctement.

        // Recherchez l'utilisateur en utilisant son ID ou nom d'utilisateur
        const user = await User.findById(userId); // Remplacez "findById" par la méthode appropriée pour rechercher l'utilisateur

        if (user) {
            // Vous avez maintenant accès aux informations de l'utilisateur connecté
            return NextResponse.json({ user }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Utilisateur non trouvé" }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Une erreur s'est produite lors de la recherche de l'utilisateur" }, { status: 500 });
    }
}