import { GetStaticProps, NextPage } from 'next'

import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { NoteContainer } from '@/components/pages/NoteContainer'
import { client } from '@/libs/client'
import { NOTE_PER_PAGE } from '@/settings/siteSettings'
import { Blog } from '@/types/Blog'

type Props = {
  note: Blog[]
  totalCount: number
}

const BlogPage: NextPage<Props> = ({ note, totalCount }) => {
  const meta = {
    title: 'Note | mismith.me',
    description: 'note',
    path: 'note',
  }

  return (
    <Layout path={meta.path}>
      <Seo title={meta.title} description={meta.description} path={meta.path} />
      <NoteContainer data={note} totalCount={totalCount} currentPage={1} />
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: NOTE_PER_PAGE,
      offset: 0,
      filters: `category[equals]note`,
    },
  })

  return {
    props: {
      note: data.contents,
      totalCount: data.totalCount,
    },
  }
}
