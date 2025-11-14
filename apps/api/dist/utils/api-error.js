import { StatusCodes, getReasonPhrase } from "http-status-codes";
export class ApiError extends Error {
    constructor(statusCode, message = getReasonPhrase(statusCode), details) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
export function isApiError(error) {
    return error instanceof ApiError;
}
export function createNotFoundError(message = "Resource not found") {
    return new ApiError(StatusCodes.NOT_FOUND, message);
}
