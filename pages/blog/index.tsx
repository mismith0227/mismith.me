import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { BlogContent } from '@/components/pages/BlogContent'
import { Seo } from '@/components/organisms/Seo'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'

type Props = {
  readonly blog: Blog[]
  readonly totalCount: number
  readonly category: BlogCategory[]
}

const BlogPage: NextPage<Props> = ({ blog, totalCount, category }) => {
  const meta = {
    title: 'Blog',
    description: 'ブログです',
    path: 'blog',
  }

  return (
    <Layout path={meta.path} disableLoading>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <BlogContent
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
    queries: { limit: BLOG_PER_PAGE, offset: 0 },
  })

  const category = await client.get({
    endpoint: 'blog-category',
  })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: category.contents,
    },
  }
}
