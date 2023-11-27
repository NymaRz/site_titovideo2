import mongoose, { Schema, models } from "mongoose";

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
        tito: {
            type: String,
            default:"1"

        },
        image: {
            type: String,
            default: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },


    },
    { timestamps: true }
);

const Client = models.Client || mongoose.model("Client", clientSchema);

export default Client;