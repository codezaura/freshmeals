import mongoose from "mongoose";

// -------------------------------------------------------------
// user
// -------------------------------------------------------------

export const _name = ["Alice", "Bob", "Charlie"];
export const _email = ["alice@mail.com", "bob@mail.com", "charlie@yahoo.com"];
export const _address = ["norway", "san fransisco", "san diego"];
export const _password = 12334;
export const _mobile_no = [9080706050, 9181716151, 91827364];
export const _pincode = [121212, 323232, 222222];
export const _avatar_url = [
  "https://i.pinimg.com/1200x/97/18/59/971859a0da1b81571bef3b5dc26eb892.jpg",
  "https://i.pinimg.com/736x/e7/b7/85/e7b785d2cba3004447e07b421391b2fd.jpg",
  "https://i.pinimg.com/1200x/39/86/91/398691f123726a5763e9c47980964fff.jpg",
];

// -------------------------------------------------------------

export const _users = _name.map((name, index) => ({
  _id: new mongoose.Types.ObjectId(),
  name,
  email: _email[index],
  password: _password,
  address: _address[index],
  mobile_no: _mobile_no[index],
  pincode: _pincode[index],
  avatar_url: _avatar_url[index],
}));

// -------------------------------------------------------------
// meals
// -------------------------------------------------------------

export const _meal_name = [
  "momo",
  "french fries",
  "cutlet",
  "donut",
  "curd",
  "noodles",
  "gulab jamun",
  "pasta",
];
export const _meal_price = [50, 40, 40, 60, 80, 110, 140, 120];
export const _meal_img_url = [
  "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg",
  "https://i.pinimg.com/736x/1c/87/68/1c8768ff8575c44ebd1df6141987bdbe.jpg",
  "https://i.pinimg.com/1200x/92/41/c5/9241c592c77574f1750bf33ddd5f258d.jpg",
  "https://i.pinimg.com/1200x/29/7b/2b/297b2b9df48ae374b4c8c6513f0e462a.jpg",
  "https://i.pinimg.com/1200x/7b/82/51/7b8251f15a271dc196009f14b7a77126.jpg",
  "https://i.pinimg.com/1200x/75/92/f5/7592f529505c44e6b4f2df40204f0c2d.jpg",
  "https://i.pinimg.com/1200x/04/3e/f8/043ef80ed6c4c1ad98be030f1c5afead.jpg",
  "https://i.pinimg.com/1200x/f4/87/32/f48732176f34fb4749ff5ae0adca126e.jpg",
];
export const _meal_seller = [
  _users[0]?._id,
  _users[0]?._id,
  _users[1]?._id,
  _users[2]?._id,
  _users[2]?._id,
  _users[0]?._id,
  _users[2]?._id,
  _users[1]?._id,
];

// -------------------------------------------------------------

export const _meals = _meal_name.map((name, index) => ({
  _id: new mongoose.Types.ObjectId(),
  meal_name: name,
  meal_price: _meal_price[index],
  meal_img_url: _meal_img_url[index],
  seller_information: {
    seller: _meal_seller[index],
  },
}));

// -------------------------------------------------------------
// plates
// -------------------------------------------------------------

export const _plate_name = ["party time", "sweet moments"];
export const _plate_price = [350, 250];
export const _plate_items = [
  [_meals[0]?._id, _meals[1]?._id, _meals[5]?._id],
  [_meals[4]?._id, _meals[6]?._id],
];
export const _plate_seller = [[_users[0]?._id], [_users[2]?._id]];
export const _plate_img_url = [
  "https://i.pinimg.com/1200x/ad/9b/6a/ad9b6a34b3914562abd3237bc6bf1c2f.jpg",
  "https://i.pinimg.com/1200x/c3/ad/48/c3ad48d18dbbbb7a56baeb03544dcff4.jpg",
];

// -------------------------------------------------------------

export const _plates = _plate_name.map((name, index) => ({
  _id: new mongoose.Types.ObjectId(),
  plate_name: name,
  plate_price: _plate_price[index],
  plate_items: _plate_items[index],
  plate_img_url: _plate_img_url[index],
  seller_information: {
    seller: _plate_seller[index],
  },
}));
