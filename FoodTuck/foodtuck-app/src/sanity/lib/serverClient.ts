import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // No caching for writes
  token, // Only use the token on the server
});
