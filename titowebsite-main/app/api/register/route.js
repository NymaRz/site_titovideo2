import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password, role } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();

    // Créez un nouvel utilisateur avec le rôle "user"
    await User.create({ name, email, password: hashedPassword, role: role || "user" });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
        { message: "An error occurred while registering the user." },
        { status: 500 }
    );
  }
}
