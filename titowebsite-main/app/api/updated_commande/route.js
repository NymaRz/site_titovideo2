// File: /routes/api/updateCommande.js

import Commande from "@/models/commande";
import connectMongoDB from "../../../libs/mongodb";

export default async (req, res) => {
    await connectMongoDB();

    try {
        const { id } = req.query; // ID de la commande à mettre à jour
        const { etat } = await req.body; // Nouvel état

        // Utilisez findByIdAndUpdate pour mettre à jour la commande par son ID
        const updatedCommande = await Commande.findByIdAndUpdate(
            id,
            { etat },
            { new: true, runValidators: true } // Make sure to run validators if you have any schema validations.
        );

        if (!updatedCommande) {
            return res.status(404).json({ message: 'Commande introuvable' });
        }

        return res.status(200).json(updatedCommande);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de la commande :', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};
