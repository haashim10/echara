export type ThemeMode = "light" | "dark";

export interface ColorTokens {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  accent: string;
  accentSoft: string;
  border: string;
  brandPrimary: string;
  brandSecondary: string;
  brandSurface: string;
}

export interface ShadowTokens {
  soft: string;
  card: string;
}

export interface RadiusTokens {
  sm: string;
  md: string;
  lg: string;
}

export interface FontTokens {
  sans: string;
  display: string;
  mono: string;
}

export interface ThemeTokens {
  colors: Record<ThemeMode, ColorTokens>;
  radii: RadiusTokens;
  shadows: Record<ThemeMode, ShadowTokens>;
  fonts: FontTokens;
}

export const themeTokens: ThemeTokens = {
  colors: {
    light: {
      background: "#f4f3ea",
      surface: "#ffffff",
      foreground: "#1a1a1a",
      muted: "#9c7b70",
      accent: "#335f0c",
      accentSoft: "#f6d8dd",
      border: "#ded6cf",
      brandPrimary: "#335f0c",
      brandSecondary: "#9c7b70",
      brandSurface: "#f4f3ea",
    },
    dark: {
      background: "#1f1b18",
      surface: "#26211d",
      foreground: "#f5f3f1",
      muted: "#c5a69d",
      accent: "#42772b",
      accentSoft: "rgba(255, 90, 115, 0.2)",
      border: "#3d332c",
      brandPrimary: "#42772b",
      brandSecondary: "#c5a69d",
      brandSurface: "#1f1b18",
    },
  },
  radii: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
  },
  shadows: {
    light: {
      soft: "0 10px 30px rgba(27, 24, 21, 0.08)",
      card: "0 10px 30px rgba(27, 24, 21, 0.08)",
    },
    dark: {
      soft: "0 14px 28px rgba(0, 0, 0, 0.25)",
      card: "0 14px 28px rgba(0, 0, 0, 0.25)",
    },
  },
  fonts: {
    sans: `"Inter", "SF Pro Display", "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    display: `"Poppins", "Inter", "SF Pro Display", sans-serif`,
    mono: `"JetBrains Mono", "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
};

export const MOBILE_FONT_SCALE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
} as const;

export type MobileFontScale = typeof MOBILE_FONT_SCALE;

export const themeName = "echara";

export const themeModes: ThemeMode[] = ["light", "dark"];
