import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: function(v) {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Veuillez entrer une adresse email valide!"
            }
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "administrateur", "monteur"],
            default: "user",
            required: true,
        },
    },
    { timestamps: true }
);

// Middleware pour hasher le mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.models.User || mongoose.model("User", userSchema, 'clients');
export default User;
