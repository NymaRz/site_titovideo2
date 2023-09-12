import mongoose, { Schema } from "mongoose";

const postulerSchema = new Schema(
  {
    username: String,
    email: String,
    telephone: String,
    poste: String,
    cv: String,     // Champ pour le fichier CV (chemin ou nom de fichier)
    projets: [String],  // Champ pour les fichiers de projets (tableau de chemins/noms de fichiers)
  },
  {
    timestamps: true,
  }
);

const Postuler = mongoose.models.Postuler || mongoose.model("Postuler", postulerSchema);

export default Postuler;
