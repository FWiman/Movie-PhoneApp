import mongoose from "mongoose";
import { MONGO_URI } from "@env";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      // MONGO_URI is the environment variable that holds our MongoDB connection string, which i set in the .env file.
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1);
  }
};

export default connectDB;
