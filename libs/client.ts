import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'mismith',
  apiKey: process.env.API_KEY ?? '',
})
