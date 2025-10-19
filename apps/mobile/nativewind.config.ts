import { nativeWindConfig } from "@echara/tokens/nativewind";

export default {
  content: [
    "./App.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/core/src/**/*.{ts,tsx}",
    "../../packages/tokens/src/**/*.{ts,tsx}",
  ],
  darkMode: nativeWindConfig.darkMode,
  theme: nativeWindConfig.theme,
  plugins: [],
} as const;
