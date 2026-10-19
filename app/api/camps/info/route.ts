import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ success: true, camp: { campCode: "BRAINWELL_2026", title: "Brainwell Camp", tagline: "Revive your mind.", fee: 49, capacity: 50, waitlistEnabled: true, isOpen: true, venue: "Details to be announced", dates: "Details to be announced" } }); }
