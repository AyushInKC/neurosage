import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth/server";
export async function GET() { const user = await currentUser(); return user ? NextResponse.json({ success: true, user: { id: user.sub, email: user.email, role: user.role } }) : NextResponse.json({ success: false, message: "Authentication required." }, { status: 401 }); }
