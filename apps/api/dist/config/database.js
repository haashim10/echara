"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
exports.disconnectDatabase = disconnectDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("@echara/env");
const logger_1 = require("./logger");
async function connectToDatabase() {
    if (!env_1.env.MONGODB_URI) {
        logger_1.logger.warn("Skipping MongoDB connection - MONGODB_URI not configured");
        return;
    }
    if (mongoose_1.default.connection.readyState === 1) {
        return;
    }
    try {
        await mongoose_1.default.connect(env_1.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        logger_1.logger.info("MongoDB connected");
    }
    catch (error) {
        logger_1.logger.error({ error }, "Failed to connect to MongoDB");
        throw error;
    }
}
async function disconnectDatabase() {
    if (mongoose_1.default.connection.readyState !== 0) {
        await mongoose_1.default.disconnect();
    }
}
