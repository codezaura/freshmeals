import { Router } from "express";

import * as Auth from "../middlewares/auth.middleware";

import userRoutes from "./user.routes";
import mealRoutes from "./meal.routes";
import authRoutes from "./auth.routes";
import orderRoutes from "./order.routes";
import sellerRoutes from "./seller.routes";

import publicRoutes from "./public.routes";
import _mockRoute from "../_mock/_mock.route";

// -------------------------------------------------------------

const router = Router();

// test
router.use("/_mock", _mockRoute);

// public
router.use(publicRoutes);
router.use("/auth", authRoutes);

// private
router.use("/user", Auth.isAuthenticated, userRoutes);
router.use("/meal", Auth.isAuthenticated, mealRoutes);
router.use("/order", Auth.isAuthenticated, orderRoutes);
router.use("/seller", Auth.isAuthenticated, sellerRoutes);

export default router;
