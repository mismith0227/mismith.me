import React from 'react'
import { Link } from 'gatsby'
import { Navigation, NavigationItem } from './styles'

export default () => (
  <nav role="navigation">
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/blog/">Blog</Link>
      </NavigationItem>
    </Navigation>
  </nav>
)
