import { Meal, MealPlate } from "./meal.type";

// -------------------------------------------------------------

export type OrderStatus = "Processing" | "Canceled" | "Delivering" | "Delivered";

export type OrderItem =
  | { type: "Meal"; meal: Meal; quantity: number }
  | { type: "Plate"; plate: MealPlate; quantity: number };

export interface Order {
  order_items: OrderItem[];
  order_status: OrderStatus;
  order_date: string;
  delivery_information: {
    address: string;
    mobile_no: string;
  };
}
