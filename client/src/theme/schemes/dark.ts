import { alpha } from "@mui/material/styles";

export const darkScheme = {
  palette: {
    primary: {
      light: "#6EA488",
      main: "#4E8768",
      dark: "#2F6B4F",
      contrastText: "#F4F3EF",
    },
    secondary: {
      light: "#D6B56D",
      main: "#B98A2E",
      dark: "#8D661D",
      contrastText: "#F4F3EF",
    },
    background: {
      default: "#121311",
      paper: "#1A1C19",
    },
    text: {
      primary: "#F4F3EF",
      secondary: "#B9B8B2",
      disabled: alpha("#F4F3EF", 0.45),
    },
    divider: alpha("#B9B8B2", 0.22),
  },
};
