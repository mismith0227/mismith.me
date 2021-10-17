import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../components/organisms/Layout'
import { BlogContent } from '../../components/organisms/BlogContent'
import Seo from '../../components/seo'

const BlogPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    title: 'Blog',
    description: 'ブログです',
    path: 'blog',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} />
      <BlogContent data={data.allMicrocmsBlog.edges} />
    </Layout>
  )
}
export default BlogPage

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          category
          slug
          createdAt
          updatedAt
        }
      }
    }
  }
`
