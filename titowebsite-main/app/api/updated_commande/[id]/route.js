import connectMongoDB from "../../../../libs/mongodb";
import Commande from "@/models/commande";

export default async function PATCH(request, { params, body }) {
    await connectMongoDB();
    const { id } = params;
    const { etat } = body;
    const updatedCommande = await Commande.findByIdAndUpdate(id, { etat }, { new: true });
    return { message: "Commande mise à jour", updatedCommande };
}
