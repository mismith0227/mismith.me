import { client } from '@/libs/client'
import {
  InferGetStaticPropsType,
  GetStaticProps,
  NextPage,
  GetStaticPaths,
} from 'next'
import Link from 'next/link'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { BlogDetailContent } from '@/components/pages/BlogDetailContent'
import { toStringId } from '@/utils/toStringId'
import { isDraft } from '@/utils/isDraft'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { convertToHtml } from '@/utils/postUtils'

type StaticProps = {
  readonly blog: Blog
  readonly body: string
  readonly draftKey?: string
  readonly category: BlogCategory[]
  readonly currentCategory: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogDetailPage: NextPage<PageProps> = (props) => {
  const { blog, draftKey, body, category, currentCategory } = props

  const meta = {
    path: 'blog',
  }

  const ogpImageUrl = blog.thumbnail
    ? blog.thumbnail.url
    : `${process.env.NEXT_PUBLIC_WEB_URL}/api/blog/${currentCategory}/${blog.id}/ogp`

  return blog ? (
    <Layout path={meta.path} disableLoading>
      <Seo
        title={blog.title ? blog.title : ''}
        description={blog.description ? blog.description : ''}
        path={meta.path}
        ogpImageUrl={ogpImageUrl}
      />
      {draftKey && (
        <div>
          現在プレビューモードで閲覧中です。
          <Link href={`/api/exitPreview?id=${blog.id}`}>
            <a>プレビューを解除</a>
          </Link>
        </div>
      )}
      <BlogDetailContent
        data={blog}
        body={body}
        category={category}
        currentCategory={currentCategory}
      />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default BlogDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params, previewData } = context
  if (!params?.category || !params?.id) {
    throw new Error('Error: ID not found')
  }

  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {}

  try {
    const id = toStringId(params.id)
    const data = await client.get({
      endpoint: 'blog',
      contentId: id,
      queries: {
        ...draftKey,
      },
    })

    const body = convertToHtml(data.content)

    const category = await client.get({
      endpoint: 'blog-category',
    })

    return {
      props: {
        blog: data,
        body: body,
        category: category.contents,
        currentCategory: toStringId(params.category),
        ...draftKey,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
