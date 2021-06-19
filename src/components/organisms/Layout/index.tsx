import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/react'
import { globalStyle } from '../../../styles/globalStyles'
import { Header } from '../Header'
import { StyledFooter } from './styles'

type Props = {
  children: React.ReactNode
  path: string
}

export const Layout = ({ children, path }: Props) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyle} />
      <Header path={path} />
      <main>{children}</main>

      {path !== 'home' && <StyledFooter />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
