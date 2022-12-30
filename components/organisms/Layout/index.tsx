import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/globalStyles'
import { Header } from '@/components/organisms/Header'
import { StyledFooter, StyledMain } from './styles'
import { Props } from './types'
import { Navigation } from '@/components/organisms/Navigation'

export const Layout = ({ children, path }: Props) => {
  return (
    <>
      <Global styles={globalStyle} />
      <Navigation path={path} />
      <StyledMain path={path}>{children}</StyledMain>
      <StyledFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
