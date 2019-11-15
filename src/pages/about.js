import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '~/components/Layout'
import AboutContent from '~/components/organisms/AboutContent'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <AboutContent />
      </Layout>
    )
  }
}

export default About
