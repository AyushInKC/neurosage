import Link from "next/link";
import { Brand } from "./Brand";
export function MarketingNav() { return <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Brand /><nav className="hidden gap-6 text-sm text-secondary md:flex"><a href="#philosophy">Our philosophy</a><a href="#services">Services</a><a href="#awareness">Awareness</a></nav><Link href="/login" className="rounded-full border border-border px-5 py-2 text-sm hover:bg-cream">Sign in</Link></header>; }
