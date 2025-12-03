"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const error_handler_1 = require("./middleware/error-handler");
const routes_1 = require("./routes");
function createApp() {
    const app = (0, express_1.default)();
    app.use((0, express_rate_limit_1.default)({
        windowMs: 60 * 1000,
        limit: 120,
        standardHeaders: "draft-7",
        legacyHeaders: false,
    }));
    app.use((0, cors_1.default)({
        origin: process.env.APP_BASE_URL ?? true,
        credentials: true,
    }));
    app.use((0, helmet_1.default)());
    app.use((0, compression_1.default)());
    app.use(express_1.default.json({ limit: "1mb" }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, morgan_1.default)(process.env.NODE_ENV === "production" ? "combined" : "dev"));
    app.get("/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));
    app.use("/api/v1", routes_1.router);
    app.use(error_handler_1.notFoundHandler);
    app.use(error_handler_1.errorHandler);
    return app;
}
