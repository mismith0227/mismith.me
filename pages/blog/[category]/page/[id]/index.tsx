import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { BlogContent } from '@/components/pages/BlogContent'
import { Seo } from '@/components/organisms/Seo'
import { toNumberId } from '@/utils/toNumberId'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { PhotoCategory } from '@/types/PhotoCategory'

type Props = {
  readonly blog: Blog[]
  readonly totalCount: number
  readonly currentPage: number
  readonly category: BlogCategory[]
  readonly currentCategory: string
  readonly photoCategory: PhotoCategory[]
}

const CategoryPage: NextPage<Props> = ({
  blog,
  totalCount,
  currentPage,
  category,
  currentCategory,
  photoCategory,
}) => {
  const meta = {
    title: `Blog: Page${currentPage} | mismith.me`,
    description: `ブログです: ページ${currentPage}`,
    path: 'blog',
  }

  return (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <BlogContent
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
  const { params, previewData } = context
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
  })

  const photoCategory = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      currentPage: id,
      category: category.contents,
      currentCategory: params.category,
      photoCategory: photoCategory.contents,
    },
  }
}
