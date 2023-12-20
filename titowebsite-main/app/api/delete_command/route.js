import { getSession } from "next-auth/react";
import mongoose from "mongoose";
import Commande from "@/models/commande_client";
import connectMongoDB from "@/libs/mongodb";

export default async function handler(req, res) {
    if (req.method !== "DELETE") {
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Méthode ${req.method} non autorisée`);
    }

    try {
        await connectMongoDB();

        const session = await getSession({ req });
        if (!session) {
            return res.status(401).json({ message: "Non autorisé" });
        }

        const { id } = req.query;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Format d'ID invalide" });
        }

        const objectId = mongoose.Types.ObjectId(id);
        const deletedCommande = await Commande.findByIdAndDelete(objectId);
        if (!deletedCommande) {
            return res.status(404).json({ message: "Commande introuvable" });
        }

        return res.status(200).json({ message: "Commande supprimée avec succès" });
    } catch (error) {
        console.error("Erreur lors de la suppression de la commande:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
}
