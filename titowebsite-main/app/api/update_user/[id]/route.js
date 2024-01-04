// File: /api/update_user/[id].js

import connectMongoDB from "../../../../libs/mongodb";
import {NextResponse} from "next/server";
import User from "../../../../models/user"; // À remplacer par 'res' si c'est utilisé dans une API Route

export async function PUT(req, res) {
    const {id} = req.query; // Dans une API Route, utilisez req.query pour accéder aux paramètres
    const userData = await req.body; // userData contient les champs à mettre à jour
    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(id, userData, {new: true});
    if (!updatedUser) {
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({message: "User updated", updatedUser});
}

export async function GET(req, res) {
    const {id} = req.query; // Dans une API Route, utilisez req.query pour accéder aux paramètres
    await connectMongoDB();
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user});
}
