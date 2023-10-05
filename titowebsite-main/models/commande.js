import mongoose, { Schema } from "mongoose";
const commandeSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },


    email:{
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    sound:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    name:{
        type: String,
    },
    selectedChoice:{
        type: String,
    },
    tito:{
        type: Number,
    },
    etat:{
        type: String,
        enum: ["En attente", "En cours", "Terminé"],
        default: "En attente",
    }









});

const Commande = mongoose.models.Commande || mongoose.model("Commande", commandeSchema);

export default Commande;