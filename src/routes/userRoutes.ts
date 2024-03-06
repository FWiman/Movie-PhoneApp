import express from "express";
import { registerUser, loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
// The environment variables are set in the .env file, and the values are accessed using the process.env object. The .env file is not committed to the repository, so the values are kept private.
