import * as React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyles'
import { Header } from '../Header'
import { Loading } from '../../molecules/Loading'
import { StyledFooter } from './styles'

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
  const [isLoadingTime, setIsLoadingTime] = React.useState<boolean>(true)

  // const isLoading = isCanvasLoading === undefined ? false : isCanvasLoading

  React.useEffect(() => {
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
      <main>{children}</main>

      <StyledFooter />
      {!disableLoading && <Loading isLoading={isLoadingTime} />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
