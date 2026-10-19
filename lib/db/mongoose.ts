import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not configured");

declare global { var mongooseConnection: Promise<typeof mongoose> | undefined; }
export function connectDb() {
  if (!global.mongooseConnection) global.mongooseConnection = mongoose.connect(uri, { maxPoolSize: 10 });
  return global.mongooseConnection;
}
