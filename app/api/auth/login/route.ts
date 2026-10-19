import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/lib/validation/auth";
import { connectDb } from "@/lib/db/mongoose";
import User from "@/models/User";
import { createToken } from "@/lib/auth/tokens";
export async function POST(request: Request) { try { const body = request.headers.get("content-type")?.includes("application/json") ? await request.json() : Object.fromEntries((await request.formData()).entries()); const input = loginSchema.parse(body); await connectDb(); const user = await User.findOne({ email: input.email }); if (!user || !(await bcrypt.compare(input.password, user.passwordHash))) return NextResponse.json({ success: false, message: "Invalid email or password." }, { status: 401 }); const response = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } }); response.cookies.set("neurosage_access", await createToken(user.id, user.role, user.email), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 900 }); return response; } catch { return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 }); } }
