import compression from "compression";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler, notFoundHandler } from "./middleware/error-handler";
import { router } from "./routes";
export function createApp() {
    const app = express();
    app.use(rateLimit({
        windowMs: 60 * 1000,
        limit: 120,
        standardHeaders: "draft-7",
        legacyHeaders: false,
    }));
    app.use(cors({
        origin: process.env.APP_BASE_URL ?? true,
        credentials: true,
    }));
    app.use(helmet());
    app.use(compression());
    app.use(express.json({ limit: "1mb" }));
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
    app.get("/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));
    app.use("/api/v1", router);
    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
}
