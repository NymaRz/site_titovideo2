import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../libs/mongodb";


export async function POST(request) {
  const {selectedStyle,email,sound,name,selectedChoice,etat} = await request.json()

  //envoie de la commande dans user

    try {
        await connectMongoDB()

        const commande = new Commande({
            email,
            sound,
            name,
            selectedChoice,
            etat,
            selectedStyle
        })
        await commande.save()
        await User.findOneAndUpdate({email: email}, {$push:
            {commande: commande._id,
                selectedChoice: selectedChoice,
                sound: sound,
                etat: etat,
            }


        })


    return NextResponse.json({
      msg: ["Commande sent successfully"],
      success: true,
    });
    } catch (error) {
if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }

}

export async function GET() {
  await connectMongoDB()
  const commande = await Commande.find().select('email sound name selectedChoice etat')
  return NextResponse.json({commande})

}