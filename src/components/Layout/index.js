import * as React from 'react'
import base from './base.css'
import Cursor from '~/components/atoms/Cursor'
import Navigation from '~/components/molecules/Navigation'

import { Wrap, StyledMenuButton } from './styles'

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState('')

  return (
    <Wrap>
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
