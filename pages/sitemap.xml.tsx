import { GetServerSidePropsContext } from 'next'
import { client } from '@/libs/client'
import { Blog } from '@/types/Blog'

async function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const { contents } = await client.get({
    endpoint: 'blog',
  })

  contents.forEach((post: Blog) => {
    xml += `
      <url>
        <loc>https://www.mismith.me/blog/${post.category.id}/${post.id}</loc>
        <lastmod>${post.updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  xml += `</urlset>`
  return xml
}

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml()

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
