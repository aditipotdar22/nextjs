import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, apitoken } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
