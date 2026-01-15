import express from "express";
import { register } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);

export default authRouter;

// login
// register
// logout
// forget password
// reset password
// verfiy email
// verfiy otp
