import type { IUser } from "../models/user.model";

// -------------------------------------------------------------

export interface ISeller extends IUser {
  is_registered_seller: boolean;
}

export type SellerLevel = "" | "Beginner" | "Intermediate" | "Elite";

export interface ISellerInformation {
  seller_information: {
    seller_name: string;
    seller_id: string;
    seller_avatarUrl: string;
    seller_level: SellerLevel;
  };
}

// -------------------------------------------------------------
