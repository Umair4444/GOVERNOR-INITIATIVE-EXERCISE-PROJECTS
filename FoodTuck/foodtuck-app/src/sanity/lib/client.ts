import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
    // typeof window === "undefined" ? process.env.SANITY_API_TOKEN : undefined, // ✅ Token only for server-side

  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
