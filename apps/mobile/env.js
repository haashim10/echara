const apiUrl = process.env.EXPO_PUBLIC_API_URL;

if (!apiUrl) {
  console.error("❌ EXPO_PUBLIC_API_URL is not set.");
  throw new Error("EXPO_PUBLIC_API_URL is required");
}

try {
  // Validate it is at least a syntactically valid URL.
  // eslint-disable-next-line no-new
  new URL(apiUrl);
} catch {
  console.error("❌ EXPO_PUBLIC_API_URL must be a valid URL.");
  throw new Error("EXPO_PUBLIC_API_URL must be a valid URL");
}

export const env = {
  EXPO_PUBLIC_API_URL: apiUrl,
};

