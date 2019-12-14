import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Cursor from '~/components/atoms/Cursor'
import Navigation from '~/components/molecules/Navigation'

import { Wrap, StyledMenuButton } from './styles'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSidebarOpen: false,
      clientX: 0,
      clientY: 0,
    }
  }

  handleSidebarCtrl() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  // handleMousemove(e) {
  //   this.setState({ clientX: e.clientX, clientY: e.clientY })
  // }

  render() {
    const { children } = this.props

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Wrap>
        <Cursor />
        <Navigation isOpen={this.state.isSidebarOpen} />

        {this.state.isSidebarOpen}

        <StyledMenuButton
          onClick={this.handleSidebarCtrl.bind(this)}
          isOpen={this.state.isSidebarOpen}
        />

        {children}
      </Wrap>
    )
  }
}

export default Layout
