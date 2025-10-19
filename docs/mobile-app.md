# Echara Mobile App

The mobile app lives in `apps/mobile` and is powered by Expo + React Native. It reuses the shared tokens (design) and business logic defined under `packages/*`, so both the web and mobile experiences stay in sync.

## Getting started

1. Install dependencies from the monorepo root:
   ```bash
   pnpm install
   ```
2. Run the Expo development server:
   ```bash
   pnpm --filter @echara/mobile start
   ```
   Use the Expo CLI output to open the app on iOS Simulator, Android Emulator, or a physical device.

## Shared resources

- `@echara/tokens` centralises colors, typography, radii, shadows and NativeWind theme mappings. The web imports its CSS variables from the same package, and the mobile app consumes the TypeScript helpers.
- `@echara/core` contains marketing copy plus the API client for marketplace data. Both apps use `getTrendingVendors()` and fallback to sample vendors when the API base URL is not configured.

## Configuration

- Set `EXPO_PUBLIC_API_BASE_URL` (or `NEXT_PUBLIC_API_BASE_URL`) to point at the Echara API for live data. When the variable is omitted, mocked vendor data is used.
- NativeWind reads `nativewind.config.ts`, which simply re-exports the theme created in `@echara/tokens/nativewind`. Update the tokens package to change design primitives across platforms.
- Metro is configured to watch and transpile files from the `packages/` workspace. If you add new shared packages, append them to the `content` array in `apps/mobile/nativewind.config.ts` and update the Metro config if needed.

## Troubleshooting

- When adding native dependencies, prefer `npx expo install <package>` so versions remain compatible with the Expo SDK.
- If Metro cannot resolve workspace packages, clear caches with `pnpm --filter @echara/mobile start -- --reset-cache`.
