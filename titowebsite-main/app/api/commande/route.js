import connectDB from "@/libs/mongodb";
import Message from "@/models/message";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST() {
  await connectDB();
  const message = await Message.find();
  return NextResponse.json({ message });

}