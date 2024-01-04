import connectMongoDB from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import User from "../../../../models/user";

export async function GET(request) {
    const { id } = request.query;
    await connectMongoDB();
    const user = await User.findOne({ id: id });
    return NextResponse.json({ user }, { status: 200 });
}
