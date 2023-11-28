import multer from 'multer';
import User from "@/models/commande_client";
import connectMongoDB from "../../../libs/mongodb";


const upload = multer({ dest: 'uploads/' });

export default upload.single('file'), async function handler(req, res) {
    try {
        await connectMongoDB();

        const user = await User.findById(req.body.userId);

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        user.image = `/public/team/${req.file.filename}`;
        await user.save();

        res.status(200).json({ success: true, message: 'Image de profil mise à jour' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
};