import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";


//supprimer une commande
export async function DELETE(request) {
    const {email} = request.query;
    await connectMongoDB();
    try {
        await User.findByIdAndDelete(email);
        return NextResponse.json({msg: ["Commande deleted successfully"]}, {status: 200});
    } catch (error) {
        console.log(error);
    }
}