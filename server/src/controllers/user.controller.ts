import type { Request, Response } from "express";
import { UserModel as User } from "../models/user.model";

// -------------------------------------------------------------

export async function getUser(req: Request, res: Response) {
  const user = await User.findById(req.userId).select(
    "-password -createdAt -updatedAt -mobile_no -address -pincode",
  );

  if (!user) {
    res.status(404).json({ message: "User not found!" });
    return;
  }

  res.status(200).json(user);
}

// -------------------------------------------------------------

export async function updateUser(req: Request, res: Response) {
  try {
    const { avatar_url, name, mobile_no, address, pincode } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: {
          name,
          mobile_no,
          avatar_url,
          address,
          pincode,
        },
      },
      {
        new: true,
        runValidators: true,
      },
    ).select("-createdAt -updatedAt");

    res.status(201).json(updatedUser);
    return;
  } catch (error) {
    res.status(500).json({ message: "Unable to update user!" });
    return;
  }
}
