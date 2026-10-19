import { cookies } from "next/headers";
import { verifyToken, type AuthClaims } from "./tokens";

export async function currentUser(): Promise<AuthClaims | null> {
  const token = (await cookies()).get("neurosage_access")?.value;
  if (!token) return null;
  try { return await verifyToken(token); } catch { return null; }
}
export async function requireAuth() {
  const user = await currentUser();
  if (!user) throw new Error("UNAUTHORIZED");
  return user;
}
