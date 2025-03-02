import { useEffect } from 'react'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { NoteDetailContainer } from '@/components/pages/NoteDetailContainer'
import { client } from '@/libs/client'
import { Blog } from '@/types/Blog'
import { convertToHtml } from '@/utils/postUtils'
import { toStringId } from '@/utils/toStringId'

type StaticProps = {
  blog: Blog
  body: string
}

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const NoteDetailPage: NextPage<PageProps> = (props) => {
  const { blog, body } = props
  const { asPath } = useRouter()

  const meta = {
    path: 'note',
  }

  const ogpImageUrl = blog.thumbnail
    ? blog.thumbnail.url
    : `${process.env.NEXT_PUBLIC_WEB_URL}/api/note/${blog.id}/ogp`

  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load()
    }
  }, [asPath])

  return blog ? (
    <Layout path={meta.path}>
      <Seo
        title={blog.title ? `${blog.title} | mismith` : ''}
        description={blog.description ? blog.description : ''}
        path={meta.path}
        ogpImageUrl={ogpImageUrl}
      />

      <NoteDetailContainer data={blog} body={body} />
    </Layout>
  ) : (
    <div>no content</div>
  )
}

export default NoteDetailPage

export const getStaticPaths: GetStaticPaths = async () => {
  const contentIds = await client.getAllContentIds({ endpoint: 'blog' })

  const filteredData = contentIds.filter((item) => item.startsWith('note-'))

  const paths = filteredData.map((id) => `/note/${id}`)

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params } = context
  if (!params?.id) {
    throw new Error('Error: ID not found')
  }

  try {
    const id = toStringId(params.id)
    const data = await client.get({
      endpoint: 'blog',
      contentId: id,
      queries: {
        filters: `category[equals]note`,
      },
    })

    const body = convertToHtml(data.content)

    return {
      props: {
        blog: data,
        body: body,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
