import { sampleVendors } from "../marketing";
import type { VendorSummary } from "../types";
import { ApiError, type ApiClientOptions, type VendorsResponse } from "./types";

const runtimeEnv: Record<string, string | undefined> =
  typeof process !== "undefined" && process.env ? process.env : {};

const DEFAULT_BASE_URL =
  runtimeEnv.EXPO_PUBLIC_API_BASE_URL ??
  runtimeEnv.NEXT_PUBLIC_API_BASE_URL ??
  runtimeEnv.APP_BASE_URL ??
  runtimeEnv.API_BASE_URL;

export function resolveApiBaseUrl(options?: ApiClientOptions) {
  return options?.baseUrl ?? DEFAULT_BASE_URL ?? null;
}

export async function fetchJson<TResponse>(
  path: string,
  { baseUrl, abortSignal, headers }: ApiClientOptions = {},
): Promise<TResponse> {
  const resolvedBaseUrl = resolveApiBaseUrl({ baseUrl });
  if (!resolvedBaseUrl) {
    throw new ApiError("API base URL is not configured");
  }

  const url = new URL(path, resolvedBaseUrl).toString();
  const response = await fetch(url, {
    method: "GET",
    signal: abortSignal,
    headers: {
      "Content-Type": "application/json",
      ...(headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}`, response.status);
  }

  return (await response.json()) as TResponse;
}

export async function getTrendingVendors(options?: ApiClientOptions): Promise<VendorSummary[]> {
  try {
    const payload = await fetchJson<VendorsResponse>("/vendors/trending", options);
    return payload.data;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Falling back to sample vendors:", error);
    }
    return sampleVendors;
  }
}
