import Head from 'next/head'
import { Props } from './types'

export const Seo: React.FC<Props> = ({
  description,
  title,
  path,
  ogpImageUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content="#000" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={path === 'home' ? 'website' : 'article'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@misumi_takuma" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="og:image"
        key="ogImage"
        content={
          ogpImageUrl
            ? ogpImageUrl
            : `${process.env.NEXT_PUBLIC_WEB_URL}/ogp.png`
        }
      />
      <meta
        name="twitter:card"
        key="twitterCard"
        content="summary_large_image"
      />
      <meta
        name="twitter:image"
        key="twitterImage"
        content={
          ogpImageUrl
            ? ogpImageUrl
            : `${process.env.NEXT_PUBLIC_WEB_URL}/ogp.png`
        }
      />
      <link rel="apple-touch-icon" href="/icon-192x192.png" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
