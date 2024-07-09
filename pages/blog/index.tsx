import { GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { BlogContainer } from '@/components/pages/BlogContainer'
import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'

type Props = {
  blog: Blog[]
  totalCount: number
  category: BlogCategory[]
}

const BlogPage: NextPage<Props> = ({ blog, totalCount, category }) => {
  const meta = {
    title: 'Blog | mismith.me',
    description: 'ブログです',
    path: 'blog',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <BlogContainer
        data={blog}
        totalCount={totalCount}
        currentPage={1}
        category={category}
      />
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: BLOG_PER_PAGE,
      offset: 0,
      filters: `category[not_equals]note`,
    },
  })

  const category = await client.get({
    endpoint: 'blog-category',
    queries: {
      filters: `id[not_equals]note`,
    },
  })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: category.contents,
    },
  }
}
