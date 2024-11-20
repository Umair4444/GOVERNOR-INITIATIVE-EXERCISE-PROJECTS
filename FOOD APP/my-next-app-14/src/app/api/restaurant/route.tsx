import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose, { ConnectOptions } from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        // Any specific options if necessary
        // Exclude 'useNewUrlParser' and 'useUnifiedTopology'
      } as ConnectOptions
    );
    const data = await restaurantSchema.find();
    console.log("data", data);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
  return NextResponse.json({ result: true });
}
