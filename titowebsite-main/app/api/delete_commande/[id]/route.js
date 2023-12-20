import {NextResponse} from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Commande from "@/models/commande";

export async function DELETE(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    await Commande.findByIdAndDelete(id);
    return NextResponse.json({ message: "Command deleted" }, { status: 200 });
}