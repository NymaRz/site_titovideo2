// pages/[id]/signup.js

import connectMongoDB from "@/libs/mongodb";
import Clients from "@/models/commande_client";
import bcrypt from 'bcrypt';
import {NextResponse} from "next/server";


export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB();
        await Clients.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering the user." },
            { status: 500 }
        );
    }
}