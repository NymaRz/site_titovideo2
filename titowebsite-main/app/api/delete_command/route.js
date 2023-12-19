// pages/api/delete_command/[id].js
import {getSession} from "next-auth/react";
import connectMongoDB from "../../../libs/mongodb";
import mongoose from "mongoose";

export default async function handler(req, res) {
    // Ce gestionnaire ne traitera que les requêtes DELETE. Toute autre méthode renverra une erreur 405 (Méthode non autorisée).
    if (req.method === "DELETE") {
        // Récupère la session de l'utilisateur. Cela est nécessaire pour vérifier si l'utilisateur est authentifié et autorisé à effectuer la suppression.
        const session = await getSession({req});
        console.log("ERRROROROR")
        // Établit une connexion à MongoDB en utilisant une fonction personnalisée importée depuis un autre fichier.
        await connectMongoDB();

        // Récupère l'ID de la commande à supprimer de l'URL, grâce au routage dynamique de Next.js.
        const {id} = req.query;

        try {
            // Convertit l'ID de chaîne en ObjectId MongoDB, nécessaire pour la recherche dans la base de données.
            const objectId = mongoose.Types.ObjectId(id);
            // Accède à la collection 'commande_client' de la base de données.
            const collection = req.db.collection("commande_client");

            // Recherche la commande dans la base de données en utilisant l'ObjectId.
            const user = await collection.findOne({_id: objectId});
            // Si la commande n'est pas trouvée, renvoie une réponse 404 (Introuvable).
            if (!user) {
                return res.status(404).json({message: "Commande introuvable"});
            }
            // Vérifie si l'email associé à la commande correspond à l'email de l'utilisateur connecté.
            if (user.email !== session.user.email) {
                // Si les emails ne correspondent pas, renvoie une erreur 401 (Non autorisé).
                return res.status(401).json({message: "Non autorisé"});
            }

            // Supprime la commande de la base de données.
            await collection.deleteOne({_id: objectId});
            // Renvoie une réponse 200 (OK) avec un message de confirmation.
            return res.status(200).json({message: "Commande supprimée"});
        } catch (error) {
            // En cas d'erreur dans le bloc try, log l'erreur et renvoie une réponse 500 (Erreur interne du serveur).
            console.error("Erreur lors de la suppression de la commande:", error);
            return res.status(500).json({message: "Erreur lors de la suppression de la commande"});
        }
    } else {
        // Si la méthode HTTP n'est pas DELETE, renvoie une erreur 405.
        return res.status(405).end();
    }
}
