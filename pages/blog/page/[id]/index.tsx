import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { BlogContainer } from '@/components/pages/BlogContainer'
import { Seo } from '@/components/organisms/Seo'
import { toNumberId } from '@/utils/toNumberId'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { PhotoCategory } from '@/types/PhotoCategory'

type Props = {
  blog: Blog[]
  totalCount: number
  currentPage: number
  category: BlogCategory[]
  photoCategory: PhotoCategory[]
}

const BlogPage: NextPage<Props> = ({
  blog,
  totalCount,
  currentPage,
  category,
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
      <BlogContainer
        data={blog}
        totalCount={totalCount}
        currentPage={currentPage}
        category={category}
      />
    </Layout>
  )
}
export default BlogPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get({
    endpoint: 'blog',
  })

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(res.totalCount / BLOG_PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  )

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, previewData } = context
  if (!params?.id) {
    throw new Error('Error: ID not found')
  }

  const id = toNumberId(params.id)

  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: BLOG_PER_PAGE, offset: (id - 1) * BLOG_PER_PAGE },
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
      photoCategory: photoCategory.contents,
    },
  }
}
