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
            default: "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg",
        },
        date: {
            type: Date,
            default: Date.now,
        },

    },
    { timestamps: true });

const Client = models.Client || mongoose.model("Client", clientSchema);

export default Client;