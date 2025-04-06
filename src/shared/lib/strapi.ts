import qs from "qs";
//@ts-ignore
import type { components, paths } from "#/types/strapi/strapi"; // create types by `npm run types:generate`

interface Query {
  /** @description Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
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
  fields?: string;
  /** @description Relations to return */
  populate?: string | string[];
  /** @description Filters to apply */
  filters?: {
    [key: string]: unknown;
  };
  /** @description Locale to apply */
  locale?: string;
}

interface Props {
  endpoint: keyof paths;
  query?: Query;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  token?: string;
}

type retu = ({} & keyof components["schemas"]) | components["schemas"];

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param token - if token exist Bearer authorization continues
 * @returns
 */
export default async function fetchApi<retu>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  token,
}: Props): Promise<retu> {
  if (typeof endpoint === "symbol")
    throw new Error("Endpoin is a simbol [Symbol]");
  if (typeof endpoint === "number") throw new Error("Endpoin is a Number");
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1) as Props["endpoint"];
  }

  const url = new URL(
    `${import.meta.env.PUBLIC_STRAPI_URL}/api/${endpoint as string}`,
  );
  let fullUrl: string | undefined;
  if (query) {
    fullUrl = `${url.toString()}?${qs.stringify(query, {
      encodeValuesOnly: true,
      charset: "utf-8", // prettify URL
    })}`;
    // Object.entries(query).forEach(([key, value]) => {
    //   url.searchParams.append(key, value);
    // });
  }
  const headers = {
    "Content-type": "application/json",
  };
  if (token) Object.assign(headers, { Authorization: `Bearer ${token}` });

  const res = await fetch((fullUrl || url).toString(), { headers });
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as retu;
}
