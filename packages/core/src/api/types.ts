import type { VendorSummary } from "../types";

export interface ApiClientOptions {
  baseUrl?: string;
  abortSignal?: AbortSignal;
  headers?: Record<string, string>;
}

export interface VendorsResponse {
  data: VendorSummary[];
}

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}
