import { client } from '@/libs/client'
import {
  InferGetStaticPropsType,
  GetStaticProps,
  NextPage,
  GetStaticPaths,
} from 'next'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import { Layout } from '@/components/organisms/Layout'
import Seo from '@/components/seo'
import { BlogDetailContent } from '@/components/pages/BlogDetailContent'
import { toStringId } from '@/utils/toStringId'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'

type StaticProps = {
  blog: Blog
  body: string
  draftKey?: string
  category: BlogCategory[]
  currentCategory: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogDetailPage: NextPage<PageProps> = (props) => {
  const { blog, draftKey, body, category, currentCategory } = props

  const meta = {
    path: 'blog',
  }

  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/api/blog/${currentCategory}/${blog.id}/ogp`

  return blog ? (
    <Layout path={meta.path} disableLoading>
      <Seo
        title={blog.title ? blog.title : ''}
        description={blog.description ? blog.description : ''}
        path={meta.path}
        ogpImageUrl={ogpImageUrl}
      />
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

  try {
    const id = toStringId(params.id)
    const data = await client.get({
      endpoint: 'blog',
      contentId: id,
    })

    const bodyData = cheerio.load(data.content)

    bodyData('pre code').each((_, elm) => {
      const result = hljs.highlightAuto(bodyData(elm).text())
      bodyData(elm).html(result.value)
      bodyData(elm).addClass('hljs')
    })

    const category = await client.get({
      endpoint: 'blog-category',
    })

    return {
      props: {
        blog: data,
        body: bodyData.html(),
        category: category.contents,
        currentCategory: toStringId(params.category),
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
