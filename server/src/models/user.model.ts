import mongoose, { Document, Schema } from "mongoose";

// -------------------------------------------------------------

export interface IUser {
  username: string;
  email: string;
  password?: string;
  address?: string;
  mobile_no?: string;
  pincode?: number;
}

export interface IUserDocument extends IUser, Document {
  _id: mongoose.Types.ObjectId;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// -------------------------------------------------------------

const UserSchema = new Schema<IUserDocument>(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true, select: false },
    address: { type: String },
    mobile_no: { type: String },
    pincode: { type: Number },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret: any) => {
        ret.id = ret._id.toString();
        delete ret.__v;
        delete ret._id;
        return ret;
      },
    },
  },
);

// -------------------------------------------------------------

export const UserModel = mongoose.model<IUserDocument>("user", UserSchema);
