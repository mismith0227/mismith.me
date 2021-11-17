import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import type { AppProps } from 'next/app'
import { existsGaId, pageview } from '@/libs/gtag'
import { usePageView } from '@/hooks/usePageView'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
