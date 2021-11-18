import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import type { AppProps } from 'next/app'
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
