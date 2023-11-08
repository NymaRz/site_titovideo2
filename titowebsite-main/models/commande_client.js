import mongoose, { Schema, models } from "mongoose";
import Commande from "./commande";

const clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        // Ajoutez d'autres champs utilisateur ici
        commande: [{ type: Schema.Types.ObjectId, ref: "Commande" }],
        selectedChoice: {
            type: Array,
        },
        sound: {
            type: Array,
        },
        etat: {
            type: String,
            enum: ["En attente", "En cours", "Terminé"],
            default: "En attente",
        },


    },
    { timestamps: true }
);

const Client = models.Client || mongoose.model("Client", clientSchema);

export default Client;