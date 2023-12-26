// File: /api/updated_commande/[id]/route.js.js

import connectMongoDB from "../../../../libs/mongodb";
import Commande from "@/models/commande";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { NewEtat: etat } = await request.json();
    await connectMongoDB();
    const updatedCommande = await Commande.findByIdAndUpdate(id, { etat }, { new: true });

    if (!updatedCommande) {
        return NextResponse.json({ message: "Command not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Command updated", updatedCommande }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const commande = await Commande.findById(id);

    if (!commande) {
        return NextResponse.json({ message: "Command not found" }, { status: 404 });
    }

    return NextResponse.json({ commande }, { status: 200 });
}
