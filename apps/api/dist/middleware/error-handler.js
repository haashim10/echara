import { StatusCodes } from "http-status-codes";
import { logger } from "../config/logger";
import { ApiError, isApiError } from "../utils/api-error";
export function notFoundHandler(req, res, next) {
    if (!res.headersSent) {
        next(new ApiError(StatusCodes.NOT_FOUND, `Route ${req.method} ${req.originalUrl} not found`));
    }
    else {
        next();
    }
}
export function errorHandler(err, req, res, _next) {
    const error = isApiError(err)
        ? err
        : new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Unexpected error");
    logger.error({ err, path: req.originalUrl }, "API error");
    res.status(error.statusCode).json({
        error: {
            message: error.message,
            details: error.details,
        },
    });
}
