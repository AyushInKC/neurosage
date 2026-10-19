import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "NeuroSage — Be kind to your mind.", description: "A welcoming space for mental wellness." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
