import mongoose, { Schema } from "mongoose";

const commandeSchema = new Schema({

    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    choix: {
        type: String,
        required: [true, "Choix is required."],
    },
    sous_titre: {
        type: Boolean,
        required: [true, "Sous titre is required."],
    },
    video: {
        type: String,
        required: [true, "Video is required."],
    },
    option: {
        timestamps: true,
    }

});

const Commande = mongoose.models.Commande || mongoose.model("Commande", commandeSchema);

export default Commande;