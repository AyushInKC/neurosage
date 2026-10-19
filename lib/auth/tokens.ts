import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import crypto from "node:crypto";

export type Role = "user" | "admin";
export type AuthClaims = JWTPayload & { sub: string; role: Role; email: string };
const encoder = new TextEncoder();
const secret = (name: string) => {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return encoder.encode(value);
};
export async function createToken(userId: string, role: Role, email: string, refresh = false) {
  return new SignJWT({ role, email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId).setIssuer("neurosage").setAudience("neurosage-app")
    .setIssuedAt().setExpirationTime(process.env[refresh ? "JWT_REFRESH_EXPIRES_IN" : "JWT_ACCESS_EXPIRES_IN"] || (refresh ? "7d" : "15m"))
    .sign(secret(refresh ? "JWT_REFRESH_SECRET" : "JWT_ACCESS_SECRET"));
}
export async function verifyToken(token: string, refresh = false): Promise<AuthClaims> {
  const result = await jwtVerify(token, secret(refresh ? "JWT_REFRESH_SECRET" : "JWT_ACCESS_SECRET"), { issuer: "neurosage", audience: "neurosage-app" });
  return result.payload as AuthClaims;
}
export const hashToken = (token: string) => crypto.createHash("sha256").update(token).digest("hex");
