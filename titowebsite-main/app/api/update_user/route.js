// File: /routes/api/updateUser.js
import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/user";

export default async (req, res) => {
    await connectMongoDB();

    try {
        const { id } = req.query;
        const userData = req.body; // Cela devrait être l'objet contenant les champs de l'utilisateur à mettre à jour
        const updatedUser = await User.findByIdAndUpdate(
            id,
            userData, // Remplacez { etat } par userData pour mettre à jour les champs de l'utilisateur
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l’utilisateur :', error);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
};
