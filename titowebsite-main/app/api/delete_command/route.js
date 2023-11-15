import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";




export default async function deleteCommand(req, res) {

    const { method, body } = req;
await connectMongoDB();

switch (method) {
    case "DELETE":
        try {
            const { id } = body;
            const user = await User.findById(id);
            if (!user) {
                return res.status(400).json({ success: false });
            }
            await User.deleteOne({ _id: id });
            return res.status(200).json({ success: true, data: {} });
        } catch (error) {
            return res.status(400).json({ success: false });
        }
        break;
}

}