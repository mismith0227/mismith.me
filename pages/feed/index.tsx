import RSS from 'rss'
import { GetServerSidePropsContext } from 'next'
import { client } from '@/libs/client'
import { Blog } from '@/types/Blog'

async function generateFeedXml() {
  const feed = new RSS({
    title: 'mismith.meのフィード',
    description: 'mismith.meのフィード',
    site_url: 'https://www.mismith.me/',
    feed_url: 'https://www.mismith.me/feed',
    language: 'ja',
  })

  const { contents } = await client.get({
    endpoint: 'blog',
  })

  contents?.forEach((post: Blog) => {
    feed.item({
      title: post.title,
      description: post.description,
      date: new Date(post.createdAt),
      url: `https://www.mismith.me/${post.category}/${post.id}`,
    })
  })

  // XML形式の文字列にする
  return feed.xml()
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {},
  }
}

const Page = () => null
export default Page
