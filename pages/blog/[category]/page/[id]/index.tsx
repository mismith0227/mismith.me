import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { BlogContainer } from '@/components/pages/BlogContainer'
import { client } from '@/libs/client'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { toNumberId } from '@/utils/toNumberId'

type Props = {
  blog: Blog[]
  totalCount: number
  currentPage: number
  category: BlogCategory[]
  currentCategory: string
}

const CategoryPage: NextPage<Props> = ({
  blog,
  totalCount,
  currentPage,
  category,
  currentCategory,
}) => {
  const meta = {
    title: `Blog: Page${currentPage} | mismith`,
    description: `ブログです: ページ${currentPage}`,
    path: 'blog',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <BlogContainer
        data={blog}
        totalCount={totalCount}
        currentPage={currentPage}
        category={category}
        currentCategory={currentCategory}
      />
    </Layout>
  )
}
export default CategoryPage

export const getAllCategoryPagePaths = async () => {
  const resCategory = await client.get({
    endpoint: 'blog-category',
  })

  const paths: string[] = await Promise.all(
    resCategory.contents.map((item: BlogCategory) => {
      const result = client
        .get({
          endpoint: 'blog',
          queries: {
            filters: `category[equals]${item.id}`,
          },
        })
        .then(({ totalCount }) => {
          const range = (start: number, end: number) =>
            [...Array(end - start + 1)].map((_, i) => start + i)

          return range(1, Math.ceil(totalCount / BLOG_PER_PAGE)).map(
            (repo) => `/blog/${item.id}/page/${repo}`
          )
        })
      return result
    })
  )

  return paths.flat()
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCategoryPagePaths()

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  if (!params?.category || !params?.id) {
    throw new Error('Error: ID not found')
  }

  const id = toNumberId(params.id)

  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: BLOG_PER_PAGE,
      offset: (id - 1) * BLOG_PER_PAGE,
      filters: `category[equals]${params.category}`,
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
      currentPage: id,
      category: category.contents,
      currentCategory: params.category,
    },
  }
}
