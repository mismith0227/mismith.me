export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.mismith.me'
    : 'http://localhost:3000'
export const BLOG_PER_PAGE = 10
export const NOTE_PER_PAGE = 36
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
