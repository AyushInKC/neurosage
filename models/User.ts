import mongoose, { Schema, type InferSchemaType } from "mongoose";
const userSchema = new Schema({ name: { type: String, required: true, trim: true }, email: { type: String, required: true, unique: true, lowercase: true, index: true }, passwordHash: { type: String, required: true }, role: { type: String, enum: ["user", "admin"], default: "user", index: true }, isEmailVerified: { type: Boolean, default: false }, consentNonEssential: { type: Boolean, default: false }, refreshSessions: [{ hash: String, expiresAt: Date }] }, { timestamps: true });
export type User = InferSchemaType<typeof userSchema>;
export default mongoose.models.User || mongoose.model("User", userSchema);
