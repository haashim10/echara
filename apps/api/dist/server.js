import { createServer } from "http";
import { createApp } from "./app";
import { connectToDatabase } from "./config/database";
import { logger } from "./config/logger";
const port = Number(process.env.PORT) || 4000;
async function bootstrap() {
    await connectToDatabase();
    const app = createApp();
    const server = createServer(app);
    server.listen(port, () => {
        logger.info({ port }, "API server listening");
    });
    const signals = ["SIGINT", "SIGTERM"];
    signals.forEach((signal) => {
        process.on(signal, async () => {
            logger.info({ signal }, "Shutting down gracefully");
            server.close();
            process.exit(0);
        });
    });
}
bootstrap().catch((error) => {
    logger.fatal({ error }, "Failed to start server");
    process.exit(1);
});
