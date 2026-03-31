import type { Request, Response } from "express";
import { MealModel as Meal } from "../models/meal.model";
import { UserModel as User } from "../models/user.model";

// -------------------------------------------------------------

export async function createSellerMeal(req: Request, res: Response) {
  const user = await User.findById(req.userId);

  const { meal_name, meal_price, meal_img_url } = req.body;

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (user && !user.is_registered_seller) {
    res.status(401).json({ message: "User is not registered seller" });
  }

  if ([meal_name, meal_price, meal_img_url].some((f) => !f)) {
    res.status(400).json({ message: "All fields are required!" });
    return;
  }

  const meal = await Meal.create({
    meal_name,
    meal_price,
    meal_img_url,
    seller_information: {
      seller_id: user.id,
      seller_name: user.username,
      seller_avatarUrl: user.avatar_url,
    },
  });

  await meal.save();

  if (!meal) {
    throw new Error("unable to create meal!");
  }

  res.status(201).json({ message: "meal created successfully!", data: meal });
}

// -------------------------------------------------------------

export async function getSellerMeals(req: Request, res: Response) {}

// -------------------------------------------------------------

export async function createSellerPlate(req: Request, res: Response) {}

// -------------------------------------------------------------

export async function getSellerPlates(req: Request, res: Response) {}

// -------------------------------------------------------------

export async function getSellerCollection(req: Request, res: Response) {}
