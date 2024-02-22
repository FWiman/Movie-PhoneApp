import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // MONGO_URI is the environment variable that holds our MongoDB connection string, which we set in the .env file.
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1);
  }
};

export default connectDB;
