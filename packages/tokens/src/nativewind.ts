import { getFonts, getPalette, getRadii, getShadows } from "./index";

const lightPalette = getPalette("light");
const darkPalette = getPalette("dark");
const lightShadows = getShadows("light");
const darkShadows = getShadows("dark");
const radii = getRadii();
const fonts = getFonts();

const sanitizeFontStack = (value: string) =>
  value
    .split(",")
    .map((token) => token.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);

const colors = Object.entries(lightPalette).reduce<Record<string, string>>(
  (acc, [token, value]) => {
    acc[token] = value;
    const darkValue = darkPalette[token as keyof typeof darkPalette];
    acc[`${token}-dark`] = darkValue;
    return acc;
  },
  {},
);

const shadows = Object.entries(lightShadows).reduce<Record<string, string>>(
  (acc, [token, value]) => {
    acc[token] = value;
    const darkValue = darkShadows[token as keyof typeof darkShadows];
    acc[`${token}-dark`] = darkValue;
    return acc;
  },
  {},
);

export const nativeWindTheme = {
  extend: {
    colors,
    borderRadius: radii,
    boxShadow: shadows,
    fontFamily: {
      sans: sanitizeFontStack(fonts.sans),
      display: sanitizeFontStack(fonts.display),
      mono: sanitizeFontStack(fonts.mono),
    },
  },
} as const;

export const nativeWindConfig = {
  darkMode: "media",
  theme: nativeWindTheme,
} as const;

export type NativeWindConfig = typeof nativeWindConfig;
