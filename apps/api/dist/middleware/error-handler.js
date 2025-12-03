"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = notFoundHandler;
exports.errorHandler = errorHandler;
const http_status_codes_1 = require("http-status-codes");
const logger_1 = require("../config/logger");
const api_error_1 = require("../utils/api-error");
function notFoundHandler(req, res, next) {
    if (!res.headersSent) {
        next(new api_error_1.ApiError(http_status_codes_1.StatusCodes.NOT_FOUND, `Route ${req.method} ${req.originalUrl} not found`));
    }
    else {
        next();
    }
}
function errorHandler(err, req, res, _next) {
    const error = (0, api_error_1.isApiError)(err)
        ? err
        : new api_error_1.ApiError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Unexpected error");
    logger_1.logger.error({ err, path: req.originalUrl }, "API error");
    res.status(error.statusCode).json({
        error: {
            message: error.message,
            details: error.details,
        },
    });
}
