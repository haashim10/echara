"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.isApiError = isApiError;
exports.createNotFoundError = createNotFoundError;
const http_status_codes_1 = require("http-status-codes");
class ApiError extends Error {
    constructor(statusCode, message = (0, http_status_codes_1.getReasonPhrase)(statusCode), details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.ApiError = ApiError;
function isApiError(error) {
    return error instanceof ApiError;
}
function createNotFoundError(message = "Resource not found") {
    return new ApiError(http_status_codes_1.StatusCodes.NOT_FOUND, message);
}
