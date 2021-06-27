import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../components/organisms/Layout'
import { GuideLineContent } from '../../components/organisms/GuideLineContent'
import Seo from '../../components/seo'

const GuideLinesPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    title: 'GuideLines',
    description: '制作実績一覧です',
    path: 'guidelines',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} />

      <GuideLineContent data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}
export default GuideLinesPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___order }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
          html
        }
      }
    }
  }
`
