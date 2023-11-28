import multer from 'multer';
import { dbConnect } from '../../utils/dbConnect';
import User from '../../models/commande_client';

const upload = multer({ dest: 'public/uploads/' });

export default upload.single('file'),async function handler(req, res) {
    try {
        await dbConnect();

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        // Vous pouvez utiliser une bibliothèque comme cloudinary pour stocker les images
        // ou les stocker localement dans un dossier 'public'
        user.image = `/public/uploads/${req.file.filename}`;
        await user.save();

        res.status(200).json({ profileImage: user.image });
    } catch (error) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
}
