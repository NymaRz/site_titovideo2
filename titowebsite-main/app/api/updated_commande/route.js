import Commande from "@/models/commande";
import connectMongoDB from "../../../libs/mongodb";

import Commande from "@/models/commande";
import connectMongoDB from "../../../libs/mongodb";

export default async function patchHandler(req, res) {
    if (req.method === 'PATCH') {
        try {
            await connectMongoDB();
            const { id } = req.query;
            const { etat } = req.body;

            const updatedCommande = await Commande.findByIdAndUpdate(id, { etat }, { new: true });

            if (!updatedCommande) {
                return res.status(404).json({ message: "Commande introuvable" });
            }

            return res.status(200).json(updatedCommande);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la mise à jour de la commande" });
        }
    } else {
        res.setHeader('Allow', ['PATCH']);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
