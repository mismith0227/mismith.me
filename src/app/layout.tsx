import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'This is my app description',
  openGraph: {
    type: 'website',
    url: 'https://your-site.com',
  },
}

import '@/src/styles/globals.css'
import { Navigation } from '../components/Navigation'

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
        {children}
        <Navigation />
      </body>
    </html>
  )
}
