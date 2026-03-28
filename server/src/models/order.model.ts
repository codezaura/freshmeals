import mongoose, { Document, Schema } from "mongoose";

// -------------------------------------------------------------

export interface IOrderItem {
  id: string;
  meal_type: "Single" | "Plate";
  quantity: number;
}

export type OrderStatus = "Processing" | "Canceled" | "Approved" | "Delivered";

export interface IOrder {
  order_items: IOrderItem[];
  order_status: OrderStatus;
  order_date: Date;
  user_information: mongoose.Types.ObjectId | string;
  delivery_information: {
    mobile_no: string;
  };
}

export interface IOrderDocument extends IOrder, Document {
  _id: mongoose.Types.ObjectId;
  order_id: string;
  createdAt: Date;
  updatedAt: Date;
}

// -------------------------------------------------------------

const OrderSchema = new Schema<IOrderDocument>(
  {
    order_items: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: "plate",
        },
        meal_type: { type: ["Single", "Plate"], required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    user_information: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    delivery_information: {
      mobile_no: { type: String, required: true },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret: any) => {
        ret.order_id = ret._id;
        delete ret.__v;
        delete ret._id;
        return ret;
      },
    },
  },
);

// -------------------------------------------------------------

export const OrderModel = mongoose.model<IOrderDocument>("order", OrderSchema);
