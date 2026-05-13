import { pxToRem, setFont } from "../styles";

export const defaultFont = "Outfit Variable";
export const primaryFont = setFont(defaultFont);
export const secondaryFont = setFont("Nunito Sans Variable");

export const typography = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: { fontWeight: 700, lineHeight: 1.2, fontSize: pxToRem(44), fontFamily: secondaryFont },
  h2: { fontWeight: 700, lineHeight: 1.25, fontSize: pxToRem(36), fontFamily: secondaryFont },
  h3: { fontWeight: 650, lineHeight: 1.3, fontSize: pxToRem(28), fontFamily: secondaryFont },
  h4: { fontWeight: 650, lineHeight: 1.4, fontSize: pxToRem(22) },
  h5: { fontWeight: 600, lineHeight: 1.4, fontSize: pxToRem(18) },
  h6: { fontWeight: 600, lineHeight: 1.45, fontSize: pxToRem(16) },
  subtitle1: { fontWeight: 600, lineHeight: 1.5, fontSize: pxToRem(16) },
  subtitle2: { fontWeight: 600, lineHeight: 1.45, fontSize: pxToRem(14) },
  body1: { lineHeight: 1.6, fontSize: pxToRem(16) },
  body2: { lineHeight: 1.55, fontSize: pxToRem(14) },
  caption: { lineHeight: 1.5, fontSize: pxToRem(12) },
  button: { fontWeight: 600, lineHeight: 1.5, fontSize: pxToRem(14), textTransform: "none" },
};
