import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { BlogContent } from '@/components/organisms/BlogContent'
import Seo from '@/components/seo'

import { Blog } from '@/types/Blog'

interface Props {
  blog: Blog[]
  totalCount: number
}

const BlogPage: NextPage<Props> = ({ blog, totalCount }) => {
  const meta = {
    title: 'Blog',
    description: 'ブログです',
    path: 'blog',
  }

  console.log(totalCount)

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <BlogContent data={blog} totalCount={totalCount} />
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: 5, offset: 0 },
  })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  }
}
