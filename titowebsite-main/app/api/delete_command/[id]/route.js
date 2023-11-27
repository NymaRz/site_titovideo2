import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { getSession } from "next-auth/react";
import connectMongoDB from "../../../../libs/mongodb";

export async function DELETE(request, { params }) {
    try {
        // Assurez-vous de gérer la connexion à MongoDB de manière asynchrone
        await connectMongoDB();

        // Récupérez l'ID de la commande depuis les paramètres de la requête
        const { id } = params;

        // Utilisez la fonction findByIdAndDelete pour supprimer la commande par ID
        const deletedCommande = await User.findByIdAndDelete(id);

        // Si la commande n'est pas trouvée, retournez une réponse 404
        if (!deletedCommande) {
            return NextResponse.json({ message: "Commande introuvable" }, { status: 404 });
        }

        // Si la commande est supprimée avec succès, retournez une réponse 200
        return NextResponse.json({ message: "Commande supprimée" }, { status: 200 });
    } catch (error) {
        // En cas d'erreur, loggez l'erreur et retournez une réponse 500
        console.error("Erreur lors de la suppression de la commande:", error);
        return NextResponse.json({ message: "Erreur lors de la suppression de la commande" }, { status: 500 });
    }
}
