import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import { Header } from '@/components/organisms/Header'
import { Loading } from '@/components/molecules/Loading'
import { StyledFooter, StyledMain } from './styles'

type Props = {
  children: React.ReactNode
  path: string
  isCanvasLoading?: boolean
  disableLoading?: boolean
}

export const Layout = ({
  children,
  path,
  isCanvasLoading,
  disableLoading,
}: Props) => {
  const [isLoadingTime, setIsLoadingTime] = useState<boolean>(true)

  // const isLoading = isCanvasLoading === undefined ? false : isCanvasLoading

  useEffect(() => {
    let unmounted = false

    setTimeout(() => {
      if (!unmounted) {
        setIsLoadingTime(false)
      }
    }, 1000)

    // clean up
    return () => {
      unmounted = true
    }
  })

  return (
    <>
      <Global styles={globalStyle} />
      <Header path={path} />
      <StyledMain path={path}>{children}</StyledMain>

      <StyledFooter />
      {!disableLoading && <Loading isLoading={isLoadingTime} />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
