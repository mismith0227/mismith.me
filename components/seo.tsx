import Head from 'next/head'
import { GA_ID, existsGaId } from '@/libs/gtag'

interface Props {
  description: string
  title: string
  path: string
}

const Seo: React.FC<Props> = ({ description, title, path }) => {
  return (
    <Head>
      {existsGaId && (
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
                    page_path: window.location.pathname,
                  });`,
            }}
          />
        </>
      )}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content={path === 'home' ? 'website' : 'article'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@misumi_takuma" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="theme-color" content="#000" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="apple-touch-icon" href="/icon-192x192.png" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Seo
