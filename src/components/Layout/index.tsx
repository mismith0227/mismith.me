import * as React from 'react'
import GlobalStyle from '../../styles/grobalStyle'
import Navigation from '../../components/molecules/Navigation'

import { Wrap } from './styles'

import { Props } from './types'

const Layout = ({ children }: Props) => {
  return (
    <Wrap>
      <GlobalStyle />
      <Navigation />
      {children}
    </Wrap>
  )
}

export default Layout
