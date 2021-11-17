import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
