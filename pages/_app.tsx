import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import type { AppProps } from 'next/app'
import { usePageView } from '@/hooks/usePageView'
import { useEffect } from 'react'

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
