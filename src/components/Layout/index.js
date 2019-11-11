import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Navigation from '../molecules/Navigation'
import MenuButton from '../atoms/MenuButton'

import { Wrap, StyledMenuButton } from './styles'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSidebarOpen: false,
    }
  }

  handleSidebarCtrl() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Wrap>
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
