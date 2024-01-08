// Fichier : /routes/api/update_user.route.js
import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/user";

export default async (req, res) => {
    await connectMongoDB(); // Connexion à la base de données MongoDB

    try {
        const { id } = req.query; // Extraction de l'ID de l'utilisateur à partir des paramètres de la requête
        const { role } = req.body; // Extraction du rôle à partir du corps de la requête

        // Mise à jour uniquement du rôle de l'utilisateur
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { role }, // Mise à jour uniquement du champ rôle
            { new: true, runValidators: true } // Options pour retourner le document mis à jour et exécuter les validateurs de schéma
        );

        // Vérification si l'utilisateur a été trouvé et mis à jour
        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }

        // Retourner l'utilisateur mis à jour
        return res.status(200).json(updatedUser);
    } catch (error) {
        // Gestion des erreurs lors de la mise à jour
        console.error('Erreur lors de la mise à jour du rôle de l’utilisateur :', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};
