import { alpha } from "@mui/material/styles";

import { brandColors, neutralScale } from "../tokens/colors";

export const lightScheme = {
  palette: {
    primary: {
      light: "#5C8E75",
      main: brandColors.primary,
      dark: "#24533D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#E2BD6D",
      main: brandColors.accent,
      dark: "#9A711E",
      contrastText: "#1F1F1C",
    },
    grey: neutralScale,
    background: {
      default: neutralScale[50],
      paper: "#FFFFFF",
    },
    text: {
      primary: neutralScale[900],
      secondary: neutralScale[600],
      disabled: alpha(neutralScale[900], 0.4),
    },
    divider: alpha(neutralScale[700], 0.16),
  },
};
