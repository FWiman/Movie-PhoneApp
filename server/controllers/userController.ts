import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import { sendEmail } from "../../src/services/EmailService/emailService";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

// @route   POST api/users
// @desc    Register user
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    // Generate token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      user: {
        id: newUser.id,
        email: newUser.email,
      },
      token,
    });

    // const emailOptions = {
    //   to: newUser.email,
    //   subject: "Welcome to the app",
    //   text: "Thanks for signing up! We hope you enjoy our app, and please let us know if you have any questions :)",
    // };

    // try {
    //   await sendEmail(emailOptions);
    //   console.log("Welcome email sent successfully!");
    // } catch (error) {
    //   console.error("Failed to send welcome email: ", error);
    // }
  } catch (error: unknown) {
    let errorMessage = "Server error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({ error: errorMessage });
  }
};

// @route   POST api/users/login
// @desc    Login user

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Compare Password
    console.log("Fetched User:", user ? user.email : "No user found");
    console.log("User: ", user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password: ", req.body.password);
    console.log("User Password: ", user.password);
    console.log("Password Match:", isMatch);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1d",
    });

    // Respond with user (without password) and token.
    res.json({
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    });
  } catch (error: unknown) {
    let errorMessage = "Server error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({ error: errorMessage });
  }
};
export default {
  registerUser,
  loginUser,
};
