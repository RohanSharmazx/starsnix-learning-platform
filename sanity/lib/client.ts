import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Server-side Sanity client for fetching content
// Keeps SANITY_API_READ_TOKEN strictly on the server
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure fresh data and bypass stale edge cache
  token: process.env.SANITY_API_READ_TOKEN, // Optional private read token for private datasets
})
