import * as React from 'react'
import GlobalStyle from '../../styles/grobalStyle'
import Cursor from '../../components/atoms/Cursor'
import Navigation from '../../components/molecules/Navigation'

import { Wrap, StyledMenuButton } from './styles'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <Wrap>
      <GlobalStyle />
      <Cursor />
      <Navigation isOpen={isSidebarOpen} />

      <StyledMenuButton
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
      />

      {children}
    </Wrap>
  )
}

export default Layout
