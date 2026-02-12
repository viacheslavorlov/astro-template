import { PUBLIC_STRAPI_URL } from "astro:env/client";
import qs from "qs";
//@ts-ignore
import type { components, paths } from "#/types/strapi/strapi"; // create types by `npm run types:generate`

interface Query {
  /** @description Sort by attributes ascending (asc) or descending (desc) */
  sort?: string | string[];
  /** @description Return page/pageSize (default: true) */
  "pagination[withCount]"?: boolean;
  /** @description Page number (default: 0) */
  "pagination[page]"?: number;
  /** @description Page size (default: 25) */
  "pagination[pageSize]"?: number;
  /** @description Offset value (default: 0) */
  "pagination[start]"?: number;
  /** @description Number of entities to return (default: 25) */
  "pagination[limit]"?: number;
  /** @description Fields to return (ex: title,author) */
  fields?: string | string[];
  /** @description Relations to return */
  populate?: string | string[] | object;
  /** @description Filters to apply */
  filters?: {
    [key: string]: unknown;
  };
  /** @description Locale to apply */
  locale?: string;
  /** @description Publication state: live or preview */
  publicationState?: "live" | "preview";
}

interface Props<T> {
  endpoint: keyof paths | string;
  query?: Query;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  token?: string;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param token - if token exist Bearer authorization continues
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  token,
}: Props<T>): Promise<T> {
  if (typeof endpoint === "symbol")
    throw new Error("Endpoint is a symbol [Symbol]");
  if (typeof endpoint === "number") throw new Error("Endpoint is a Number");

  let cleanEndpoint = endpoint as string;
  if (cleanEndpoint.startsWith("/")) {
    cleanEndpoint = cleanEndpoint.slice(1);
  }

  const baseUrl = PUBLIC_STRAPI_URL || "";
  const url = new URL(`${baseUrl}/api/${cleanEndpoint}`);

  let fullUrl = url.toString();

  if (query) {
    const queryString = qs.stringify(query, {
      encodeValuesOnly: true,
      charset: "utf-8", // prettify URL
    });
    fullUrl = `${fullUrl}?${queryString}`;
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(fullUrl, { headers });

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
    }

    let data = await res.json();

    if (wrappedByKey && data) {
      data = data[wrappedByKey];
    }

    if (wrappedByList && Array.isArray(data) && data.length > 0) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.error(`Error fetching from Strapi (${endpoint}):`, error);
    throw error;
  }
}
