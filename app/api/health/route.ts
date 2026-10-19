import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db/mongoose";
export async function GET() { let mongo = "ok"; try { await connectDb(); } catch { mongo = "unavailable"; } return NextResponse.json({ success: true, application: "ok", mongodb: mongo, ollama: process.env.OLLAMA_BASE_URL ? "configured" : "not_configured", model: process.env.OLLAMA_MODEL || "llama3.2:3b", timestamp: new Date().toISOString() }, { status: mongo === "ok" ? 200 : 503 }); }
