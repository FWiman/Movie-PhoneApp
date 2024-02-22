import User from "../models/User";
import { Request, Response } from "express";
import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        password,
      });

      await user.save();

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// export const loginUser = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (!user || !(await user.isPasswordCorrect(password))) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid credentials",
//       });
//     }

//     // Return jsonwebtoken
//     const token = user.getSignedToken();
//     export interface IUser extends Document {
//         email: string;
//         password: string;
//         isPasswordCorrect(password: string): Promise<boolean>;
//     }

//     userSchema.methods.isPasswordCorrect = async function (password: string): Promise<boolean> {
//         return await bcrypt.compare(password, this.password);
//     };

//     const User = model<IUser>("User", userSchema);

//     export default User;

//     return res.status(200).json({
//       success: true,
//       token,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

// @route   GET api/users/current
// @desc    Get current user
// @access  Private
// const getCurrentUser = async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById(req.user.id);
//     return res.status(200).json({
//       success: true,
//       data: user,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

export default {
  registerUser,
  //   loginUser,
  //   getCurrentUser,
};
