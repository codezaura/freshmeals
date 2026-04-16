import type { Request, Response } from "express";

import { UserModel as User } from "../models/user.model";
import { MealModel as Meal } from "../models/meal.model";
import { PlateModel as Plate } from "../models/plate.model";

import * as _mock from "./_mock.data";

const USERS = _mock._users;
const MEALS = _mock._meals;
const PLATES = _mock._plates;

// -------------------------------------------------------------

export async function seed(req: Request, res: Response) {
  const mockUsers = await User.insertMany(USERS);

  const mockMeals = await Meal.insertMany(MEALS);

  const mockPlates = await Plate.insertMany(PLATES);

  res
    .status(201)
    .json({ users: mockUsers, meals: mockMeals, plates: mockPlates });
  return;
}
