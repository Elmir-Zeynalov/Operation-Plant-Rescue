import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'zcmn8w05',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2025-02-06',
})
