import type { ConfigContext, ExpoConfig } from "@expo/config";

const projectId = "echara-mobile";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Echara Mobile",
  slug: projectId,
  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  scheme: "echara",
  extra: {
    apiBaseUrl:
      process.env.EXPO_PUBLIC_API_BASE_URL ??
      process.env.NEXT_PUBLIC_API_BASE_URL ??
      null,
  },
  updates: {
    enabled: true,
    checkAutomatically: "ON_LOAD",
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.echara.mobile",
  },
  android: {
    package: "com.echara.mobile",
  },
});
