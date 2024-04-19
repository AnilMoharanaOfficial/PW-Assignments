import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import AppError from "../utils/error.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name Must Be Requied"],
      minLength: [5, "Name Must Be At Least 5 Charchter"],
      maxLength: [50, "Name Should Be Less Than 50 Charchter"],
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email ID is Required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      select: false,
      minLength: [8, "Password Must Be At Least 8 Charchter"],
    },
  },
  {
    timestamps: true,
  }
);

// Password Encryption
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
    return next();
  } catch (error) {
    return next(new AppError(error.message));
  }
});

const User = model("User", userSchema);

export default User;
