import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; // Import the MONGO_URI environment variable from the @env module.
import userRoutes from "./routes/userRoutes";
// import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";

dotenv.config(); // Load the MONGO_URI environment variable from the .env file.
const MONGO_URI = process.env.MONGO_URI as string; // Get the MONGO_URI environment variable from the process.env object.

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1);
  }
};

const app: Express = express();
const port = process.env.PORT || 5000; // Set the port to the PORT environment variable or 5000 if the PORT environment variable is not set.

app.use(express.json()); // Middleware to parse JSON data in the request body.

app.use("/api/users", userRoutes); // Use the userRoutes for requests to the /api/users path.

// Validate the email and password in the request body. (Middleware)
app.post(
  "/api/users/login",
  [body("email").isEmail(), body("password").isLength({ min: 6 })],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

app.get("/", (_req: Request, res: Response) => {
  // Set up a route to handle GET requests to the root URL.
  res.send("API is running...");
});

const startServer = async () => {
  await connectDB(); // Connect to the database.
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Start the server on the specified port.
  });
};

startServer();
