import User from "../models/userModel.js";
import AppError from "../utils/error.js";
import emailValidate from "email-validator";
import bcrypt from "bcrypt";

// REGISTER
const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Validator
  if (!name || !email || !password) {
    return next(new AppError("All Fields Are Required", 400));
  }

  const validEmail = emailValidate.validate(email);
  if (!validEmail) {
    return next(new AppError("Please Enter a Valid Email", 400));
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError("User Already Exist", 400));
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return next(new AppError("User Registration Field", 400));
    }

    await user.save();
    user.password = undefined;

    return res.status(200).json({
      success: "Ture",
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error, `Failed...`);
  }
};

// LOGIN
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Validator
    if (!email || !password) {
      return next(new AppError("All Fields Are Required", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(new AppError("Email and password dose not match", 400));
    }

    user.password = undefined;

    return res.status(200).json({
      success: "Ture",
      message: "User loggedin successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message));
  }
};

export { register, login };
