import { StatusCodes, getReasonPhrase } from "http-status-codes";

export class ApiError extends Error {
  statusCode: number;
  details?: unknown;

  constructor(
    statusCode: number,
    message = getReasonPhrase(statusCode),
    details?: unknown,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

export function createNotFoundError(message = "Resource not found") {
  return new ApiError(StatusCodes.NOT_FOUND, message);
}
