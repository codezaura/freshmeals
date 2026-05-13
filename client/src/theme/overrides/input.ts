import { alpha } from "@mui/material/styles";

export const inputOverrides = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: alpha("#5A5851", 0.3),
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: alpha("#2F6B4F", 0.5),
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2F6B4F",
          borderWidth: 2,
        },
      },
    },
  },
};
