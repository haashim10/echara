import { config } from "dotenv";
import { z } from "zod";
const isTest = process.env.NODE_ENV === "test";
// Load .env files in non-production environments.
if (!process.env.ECHARA_ENV_LOADED && process.env.NODE_ENV !== "production") {
    config();
    process.env.ECHARA_ENV_LOADED = "true";
}
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    APP_BASE_URL: z.string().url().optional(),
    MONGODB_URI: z.string().min(1, "MONGODB_URI is required").optional(),
    FIREBASE_PROJECT_ID: z.string().optional(),
    FIREBASE_CLIENT_EMAIL: z.string().email().optional(),
    FIREBASE_PRIVATE_KEY: z.string().optional(),
    NEXT_PUBLIC_FIREBASE_API_KEY: z.string().optional(),
    GCLOUD_MAPS_API_KEY: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    FCM_SERVER_KEY: z.string().optional(),
    GOOGLE_OAUTH_CLIENT_ID: z.string().optional(),
    GOOGLE_OAUTH_CLIENT_SECRET: z.string().optional(),
    JWT_SECRET: z
        .string()
        .min(32, "JWT_SECRET must be at least 32 characters")
        .optional(),
});
const parsed = envSchema.safeParse(process.env);
if (!parsed.success && !isTest) {
    console.error("❌ Invalid environment configuration:", parsed.error.format());
    throw new Error("Invalid environment variables");
}
export const env = parsed.success ? parsed.data : {};
