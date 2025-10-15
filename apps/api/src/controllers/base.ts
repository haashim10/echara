import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export function notImplementedHandler(feature: string): RequestHandler {
  return (_req, res) => {
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
      message: `${feature} not implemented`,
    });
  };
}
