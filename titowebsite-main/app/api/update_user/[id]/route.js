// File: /api/update_user/[id].route.js

import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/user";

export async function PUT(request, { params }) {
    const { id } = params;
    const { NewRole: role } = await request.json();
    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User updated", updatedUser });
} // Added missing closing brace

export async function GET(req, res) {
    const { id } = req.query; // Changed to req.query to get the id parameter from the URL
    await connectMongoDB();
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user }); // Corrected the structure
}
