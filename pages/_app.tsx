import { useEffect } from 'react'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'

import { usePageView } from '@/hooks/usePageView'
import { globalStyle } from '@/styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()

  useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    s.setAttribute('async', 'true')
    document.head.appendChild(s)
  }, [])

  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
