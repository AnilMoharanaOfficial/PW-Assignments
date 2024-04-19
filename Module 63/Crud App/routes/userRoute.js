import Router from "express";
import { login, register } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/register", register);
userRoute.post("/login", login);

export default userRoute;
