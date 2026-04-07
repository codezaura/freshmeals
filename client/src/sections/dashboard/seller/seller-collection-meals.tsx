import type { Meal } from "@/types/meal.type";
import { MealCard } from "@/components/core/cards";

// -----------------------------------------------------------------------

export function SellerCollectionMeals({ meals = [] }: { meals: Meal[] }) {
  return (
    <div className="flex space-x-4 w-full ">
      {meals.map((meal) => (
        <MealCard
          className="w-40"
          key={meal.meal_id}
          id={meal.meal_id}
          name={meal.meal_name}
          price={meal.meal_price}
          imageUrl={meal.meal_img_url}
          seller={{
            name: meal.seller_information.seller_name,
            avatarUrl: meal.seller_information.seller_avatar,
          }}
        />
      ))}
    </div>
  );
}
