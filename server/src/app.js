import express from "express";
import userRoutes from "./routes/user.routes.js";
import mealRoutes from "./routes/meal.routes.js";

// -------------------------------------------------------------

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/meal", mealRoutes);

export { app };
