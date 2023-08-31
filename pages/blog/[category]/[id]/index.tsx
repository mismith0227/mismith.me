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
import { BlogDetailContainer } from '@/components/pages/BlogDetailContainer'
import { toStringId } from '@/utils/toStringId'
import { isDraft } from '@/utils/isDraft'
import { convertToHtml } from '@/utils/postUtils'
import { convertToToc } from '@/utils/TocUtil'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { Toc } from '@/types/Toc'
import { PhotoCategory } from '@/types/PhotoCategory'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

declare global {
  interface Window {
    twttr: {
      widgets: {
        load(): void
      }
    }
  }
}

type StaticProps = {
  blog: Blog
  body: string
  toc: Toc[]
  draftKey?: string
  category: BlogCategory[]
  currentCategory: string
  photoCategory: PhotoCategory[]
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogDetailPage: NextPage<PageProps> = (props) => {
  const {
    blog,
    draftKey,
    body,
    toc,
    category,
    currentCategory,
    photoCategory,
  } = props
  const { asPath } = useRouter()

  const meta = {
    path: 'blog',
  }

  const ogpImageUrl = blog.thumbnail
    ? blog.thumbnail.url
    : `${process.env.NEXT_PUBLIC_WEB_URL}/api/blog/${currentCategory}/${blog.id}/ogp`

  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load()
    }
  }, [asPath])

  return blog ? (
    <Layout path={meta.path} photoCategory={photoCategory}>
      <Seo
        title={blog.title ? `${blog.title} | mismith` : ''}
        description={blog.description ? blog.description : ''}
        path={meta.path}
        ogpImageUrl={ogpImageUrl}
      />
      {draftKey && (
        <div>
          現在プレビューモードで閲覧中です。
          <Link href={`/api/exitPreview?id=${blog.id}`}>プレビューを解除</Link>
        </div>
      )}
      <BlogDetailContainer
        data={blog}
        body={body}
        toc={toc}
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
  const data = await client.get({ endpoint: 'blog' })

  const paths = data.contents.map(
    (content: { id: string; category: { id: string } }) =>
      `/blog/${content.category.id}/${content.id}`
  )

  return {
    fallback: false,
    paths,
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
    const toc = convertToToc(data.content)

    const category = await client.get({
      endpoint: 'blog-category',
    })

    const photoCategory = await client.get({
      endpoint: 'photo-category',
    })

    return {
      props: {
        blog: data,
        body: body,
        toc: toc,
        category: category.contents,
        currentCategory: toStringId(params.category),
        photoCategory: photoCategory.contents,
        ...draftKey,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
