import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";
import {getSession} from "next-auth/react";





//suppression de la commande dans user


export default async function handler(req, res) {
    const session = await getSession({req});
    if (req.method === "DELETE") {
        const {db} = await connectMongoDB();
        const collection = db.collection("commande_client");
        const {id} = req.query;
        const user = await collection.findOne({_id: mongoose.Types.ObjectId(id)});
        if (!user) {
            res.status(404).json({message: "Commande introuvable"});
            return;
        }
        if (user.email !== session.user.email) {
            res.status(401).json({message: "Non autorisé"});
            return;
        }
        await collection.deleteOne({ _id: id });

        res.status(200).json({ message: "Commande supprimée" });
    } else {
        res.status(405).end();
    }
}