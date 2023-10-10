
import connectMongoDB from "@/libs/mongodb";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Assurez-vous de valider les données d'abord (par exemple, vérifier que l'email existe dans la base de données)

        const { db } = await connectMongoDB();
        const collection = db.collection('user');

        // Recherchez l'utilisateur par son e-mail
        const user = await collection.findOne({ email });

        if (!user) {
            res.status(401).json({ message: 'Identifiants invalides' });
            return;
        }

        // Vérifiez le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Créez ici une session d'utilisateur ou un jeton JWT pour l'authentification
            res.status(200).json({ message: 'Connexion réussie' });
        } else {
            res.status(401).json({ message: 'Identifiants invalides' });
        }
    } else {
        res.status(405).end();
    }
}