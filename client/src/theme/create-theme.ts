import { extendTheme } from "@mui/material/styles";

import { shadows } from "./core/shadows";
import { darkScheme } from "./schemes/dark";
import { lightScheme } from "./schemes/light";
import { typography } from "./core/typography";
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
