import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../../../../components/organisms/Layout'
import Seo from '../../../../components/seo'
import { BlogDetailContent } from '../../../../components/organisms/BlogDetailContent'

const BlogDetailPage: React.FC<PageProps<GatsbyTypes.Query>> = ({ data }) => {
  const meta = {
    path: 'blog',
  }

  return data.microcmsBlog ? (
    <Layout path={meta.path} disableLoading>
      <Seo
        title={data.microcmsBlog.title ? data.microcmsBlog.title : ''}
        description={
          data.microcmsBlog.description ? data.microcmsBlog.description : ''
        }
      />
      <BlogDetailContent data={data.microcmsBlog} />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default BlogDetailPage

export const query = graphql`
  query($slug: String!) {
    microcmsBlog(slug: { eq: $slug }) {
      id
      title
      content
      description
      category
      createdAt
      updatedAt
    }
  }
`
