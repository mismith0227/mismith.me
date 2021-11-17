import { client } from '@/libs/client'
import {
  InferGetStaticPropsType,
  GetStaticProps,
  NextPage,
  GetStaticPaths,
} from 'next'
import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { BlogDetailContent } from '@/components/organisms/BlogDetailContent'
import { toStringId } from '@/utils/toStringId'
import { Blog } from '@/types/Blog'

type StaticProps = {
  blog: Blog
  draftKey?: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogDetailPage: NextPage<PageProps> = (props) => {
  const { blog, draftKey } = props

  const meta = {
    path: 'blog',
  }

  return blog ? (
    <Layout path={meta.path} disableLoading>
      <Seo
        title={blog.title ? blog.title : ''}
        description={blog.description ? blog.description : ''}
      />
      <BlogDetailContent data={blog} />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default BlogDetailPage

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params, previewData } = context
  if (!params?.category || !params?.slug) {
    throw new Error('Error: ID not found')
  }

  try {
    const slug = toStringId(params.slug)
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        filters: `slug[equals]${slug}`,
      },
    })

    return {
      props: {
        blog: data.contents[0],
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
