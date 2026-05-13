import { extendTheme } from "@mui/material/styles";

import { typography } from "./core/typography";
import { shadows } from "./core/shadows";
import { lightScheme } from "./schemes/light";
import { darkScheme } from "./schemes/dark";
import { componentsOverrides } from "./overrides";

export function createTheme() {
  return extendTheme({
    colorSchemeSelector: "data",
    colorSchemes: {
      light: lightScheme,
      dark: darkScheme,
    },
    typography,
    spacing: 8,
    shape: { borderRadius: 12 },
    shadows,
    components: componentsOverrides,
  });
}
