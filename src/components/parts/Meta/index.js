import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const Meta = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const { title, description, author, siteUrl } = site.siteMetadata
  const { pageTitle, pageDescription, pageLocation } = props

  const metaTitle = pageTitle || title
  const metaDescription = pageDescription || description
  return (
    <Helmet title={metaTitle}>
      <html lang="ja" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content={metaDescription} />
      <meta property="og:locale" content="ja" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={`${siteUrl}${pageLocation}`} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

export default Meta
