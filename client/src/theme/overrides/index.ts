import { cardOverrides } from "./card";
import { inputOverrides } from "./input";
import { buttonOverrides } from "./button";

export const componentsOverrides = {
  ...buttonOverrides,
  ...cardOverrides,
  ...inputOverrides,
};
