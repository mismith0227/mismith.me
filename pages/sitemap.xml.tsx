import { GetServerSidePropsContext } from 'next'
import { getAllContents } from '@/libs/getAllContents'
import { getAllPortfolio } from '@/libs/getAllPortfolio'
import { Blog } from '@/types/Blog'
import { Portfolio } from '@/types/Portfolio'

async function generateSitemapXml() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const posts = await getAllContents()
  const works = await getAllPortfolio()

  const contents = [
    {
      path: '',
    },
    {
      path: 'works',
    },
    {
      path: 'contact',
    },
    {
      path: 'policy',
    },
  ]

  contents.forEach((content) => {
    xml += `
      <url>
        <loc>https://www.mismith.me/${content.path}</loc>
      </url>
    `
  })

  posts.forEach((post: Blog) => {
    xml += `
      <url>
        <loc>https://www.mismith.me/blog/${post.category.id}/${post.id}</loc>
        <lastmod>${post.updatedAt}</lastmod>
        <changefreq>weekly</changefreq>
      </url>
    `
  })

  works.forEach((work: Portfolio) => {
    xml += `
      <url>
        <loc>https://www.mismith.me/works/${work.id}</loc>
        <lastmod>${work.productionDate}</lastmod>
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
