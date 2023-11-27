import User from "../../models/commande_client";
import connectMongoDB from "../../libs/mongodb";


export default async function handler(req, res) {
    try {
        await connectMongoDB()

        const user = await User.findById(req.query.userId);

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        res.status(200).json({ profileImage: user.profileImage });
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}

