export declare const env: {
    NODE_ENV: "test" | "production" | "development";
    APP_BASE_URL?: string | undefined;
    MONGODB_URI?: string | undefined;
    FIREBASE_PROJECT_ID?: string | undefined;
    FIREBASE_CLIENT_EMAIL?: string | undefined;
    FIREBASE_PRIVATE_KEY?: string | undefined;
    NEXT_PUBLIC_FIREBASE_API_KEY?: string | undefined;
    GCLOUD_MAPS_API_KEY?: string | undefined;
    RESEND_API_KEY?: string | undefined;
    FCM_SERVER_KEY?: string | undefined;
    GOOGLE_OAUTH_CLIENT_ID?: string | undefined;
    GOOGLE_OAUTH_CLIENT_SECRET?: string | undefined;
    JWT_SECRET?: string | undefined;
};
export type Env = typeof env;
