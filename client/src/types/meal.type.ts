export interface IMeal {
  meal_name: string;
  meal_price: string;
  meal_img_url: string;
}

export interface IMealPlate {
  plate_name: string;
  plate_price: string;
  plate_img_url: string;
  plate_items: string[];
}

export type Seller = {
  seller_name: string;
  seller_avatar: string;
  seller_level: string;
};

export interface Meal extends IMeal {
  meal_id: string;
  seller_information: Seller;
}

export interface MealPlate extends IMealPlate {
  plate_id: string;
  seller_information: Seller;
}
