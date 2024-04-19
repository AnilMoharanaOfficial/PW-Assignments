import express from "express";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// APIS
app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

export default app;
