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
import { BlogDetailContent } from '@/components/organisms/BlogDetailContent'
import { toStringId } from '@/utils/toStringId'
import { Blog } from '@/types/Blog'

type StaticProps = {
  blog: Blog
  body: string
  draftKey?: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogDetailPage: NextPage<PageProps> = (props) => {
  const { blog, draftKey, body } = props

  const meta = {
    path: 'blog',
  }

  console.log(body)

  return blog ? (
    <Layout path={meta.path} disableLoading>
      <Seo
        title={blog.title ? blog.title : ''}
        description={blog.description ? blog.description : ''}
        path={meta.path}
      />
      <BlogDetailContent data={blog} body={body} />
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

    const bodyData = cheerio.load(data.contents[0].content)

    bodyData('pre code').each((_, elm) => {
      const result = hljs.highlightAuto(bodyData(elm).text())
      bodyData(elm).html(result.value)
      bodyData(elm).addClass('hljs')
    })

    return {
      props: {
        blog: data.contents[0],
        body: bodyData.html(),
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
