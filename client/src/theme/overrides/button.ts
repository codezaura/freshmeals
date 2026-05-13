import { alpha } from "@mui/material/styles";

export const buttonOverrides = {
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: { borderRadius: 12, minHeight: 42, paddingInline: 16 },
      containedPrimary: {
        boxShadow: "0px 6px 18px rgba(47,107,79,0.24)",
        "&:hover": { boxShadow: "0px 10px 24px rgba(47,107,79,0.30)" },
      },
      outlinedPrimary: {
        borderColor: alpha("#2F6B4F", 0.4),
      },
    },
  },
};
