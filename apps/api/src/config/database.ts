import mongoose from "mongoose";

import { env } from "@echara/env";

import { logger } from "./logger";

export async function connectToDatabase() {
  if (!env.MONGODB_URI) {
    logger.warn("Skipping MongoDB connection - MONGODB_URI not configured");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error({ error }, "Failed to connect to MongoDB");
    throw error;
  }
}

export async function disconnectDatabase() {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
}
