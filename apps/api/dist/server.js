"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = require("./app");
const database_1 = require("./config/database");
const logger_1 = require("./config/logger");
const port = Number(process.env.PORT) || 4000;
async function bootstrap() {
    await (0, database_1.connectToDatabase)();
    const app = (0, app_1.createApp)();
    const server = (0, http_1.createServer)(app);
    server.listen(port, () => {
        logger_1.logger.info({ port }, "API server listening");
    });
    const signals = ["SIGINT", "SIGTERM"];
    signals.forEach((signal) => {
        process.on(signal, async () => {
            logger_1.logger.info({ signal }, "Shutting down gracefully");
            server.close();
            process.exit(0);
        });
    });
}
bootstrap().catch((error) => {
    logger_1.logger.fatal({ error }, "Failed to start server");
    process.exit(1);
});
