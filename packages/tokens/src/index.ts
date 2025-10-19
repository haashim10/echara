import {
  MOBILE_FONT_SCALE,
  type MobileFontScale,
  themeModes,
  themeName,
  themeTokens,
  type ThemeMode,
  type ThemeTokens,
} from "./tokens";

export type {
  ThemeMode,
  ThemeTokens,
  ColorTokens,
  RadiusTokens,
  ShadowTokens,
  FontTokens,
  MobileFontScale,
} from "./tokens";

export { themeTokens, themeModes, themeName, MOBILE_FONT_SCALE };

export const defaultThemeMode: ThemeMode = "light";

export function getPalette(mode: ThemeMode = defaultThemeMode) {
  return themeTokens.colors[mode];
}

export function getShadows(mode: ThemeMode = defaultThemeMode) {
  return themeTokens.shadows[mode];
}

export function getFonts() {
  return themeTokens.fonts;
}

export function getRadii() {
  return themeTokens.radii;
}

export function toCssVariables(mode: ThemeMode = defaultThemeMode) {
  const colors = getPalette(mode);
  const shadows = getShadows(mode);
  const fonts = getFonts();
  const radii = getRadii();

  return {
    "--color-background": colors.background,
    "--color-surface": colors.surface,
    "--color-foreground": colors.foreground,
    "--color-muted": colors.muted,
    "--color-accent": colors.accent,
    "--color-accent-soft": colors.accentSoft,
    "--color-border": colors.border,
    "--color-brand-primary": colors.brandPrimary,
    "--color-brand-secondary": colors.brandSecondary,
    "--color-brand-surface": colors.brandSurface,
    "--font-sans": fonts.sans,
    "--font-display": fonts.display,
    "--font-mono": fonts.mono,
    "--radius-sm": radii.sm,
    "--radius-md": radii.md,
    "--radius-lg": radii.lg,
    "--shadow-soft": shadows.soft,
    "--shadow-card": shadows.card,
  };
}

export function cssVarsToString(mode: ThemeMode = defaultThemeMode) {
  return Object.entries(toCssVariables(mode))
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");
}
