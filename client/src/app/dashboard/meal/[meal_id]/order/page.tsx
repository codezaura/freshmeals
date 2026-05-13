import type { Metadata } from "next";

import { CONFIG } from "@/config-global";
import { MealOrderView } from "@/sections/dashboard/app/meal-order-view";

export const metadata: Metadata = {
  title: `Order meal | ${CONFIG.site.name}`,
};

export default async function Page({
  params,
}: {
  params: Promise<{ meal_id: string }>;
}) {
  const { meal_id } = await params;

  return <MealOrderView mealId={meal_id} />;
}
