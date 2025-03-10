import type { Metadata } from 'next'
import '@/src/styles/globals.css'
import { Navigation } from '../components/Navigation'
import { TwitterWidgets } from '../components/TwitterWidgets'
import { BASE_URL } from '@/settings/siteSettings'

const title = 'Home'
const description = 'トップページ'
const images = 'https://www.mismith.me/img/ogp.jpg'

export const metadata: Metadata = {
  title: {
    template: '%s | mismith',
    default: title,
  },
  description: description,
  openGraph: {
    type: 'website',
    url: BASE_URL,
    images: images,
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | mismith',
      default: title,
    },
    description: description,
    images: images,
    site: 'misumi_takuma',
    creator: 'misumi_takuma',
  },
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" prefix="og: https://ogp.me/ns#">
      <head>
        {/* {existsGaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: '${pathname}',
                  });`,
              }}
            />
          </>
        )} */}
      </head>
      <body id="main">
        <TwitterWidgets />
        {children}
        <Navigation />
      </body>
    </html>
  )
}
