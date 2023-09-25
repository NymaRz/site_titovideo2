import mongoose, { Schema } from "mongoose";

const commandeSchema = new Schema({


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
    selectedStyle:{
        type: String,
    }





});

const Commande = mongoose.models.Commande || mongoose.model("Commande", commandeSchema);

export default Commande;