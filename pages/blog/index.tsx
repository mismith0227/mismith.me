import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { BlogContent } from '@/components/organisms/BlogContent'
import Seo from '@/components/seo'

import { Blog } from '@/types/Blog'

interface Props {
  blog: Blog[]
}

const BlogPage: NextPage<Props> = ({ blog }) => {
  const meta = {
    title: 'Blog',
    description: 'ブログです',
    path: 'blog',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} />
      <BlogContent data={blog} />
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blog: data.contents,
    },
  }
}
