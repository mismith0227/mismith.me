import { getBlogPosts } from '../../api/getBlogPosts'
import { getBlogPost } from '../../api/getBlogPost'
import { Container } from '@/src/components/Container'
import { formatDate } from '@/utils/formatDate'
import { convertToToc, makeToc } from '@/utils/tocUtils'
import { Toc } from '@/src/components/Toc'

import '@/src/styles/blogBody.css'
import 'highlight.js/styles/stackoverflow-light.css'
import { convertToHtml } from '@/utils/postUtils'
import { ReadNext } from '@/src/components/ReadNext'
import { Categories } from '@/src/components/Categories'
import { toStringId } from '@/utils/toStringId'
import { getCategories } from '../../api/getCategories'

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>
}) {
  const { id } = await params
  const data = await getBlogPost(id)
  const categoryData = await getCategories({
    filters: `id[not_equals]note`,
  })

  const toc = convertToToc(data.content)
  const madeToc = makeToc(toc)
  const body = convertToHtml(data.content)

  return (
    <Container size="lg" className="flex justify-center">
      <div className="mr-0 md:mr-[80px] lg:mr-[200px] max-w-[640px] w-full">
        <div className="text-[10px] inline-block px-4 py-1 bg-black text-white md:text-[12px] font-bold">
          {data.category && data.category.category_name}
        </div>
        <h1 className="text-[24px] md:text-[36px] font-bold">{data.title}</h1>
        <div className="mt-[8px] text-[10px] md:text-[12px] md:flex md:gap-x-[24px]">
          <div>
            <span className="font-bold mr-[4px]">公開日:</span>
            {formatDate(data.publishedAt)}
          </div>
          <div>
            <span className="font-bold mr-[4px]">更新日:</span>
            {formatDate(data.updatedAt)}
          </div>
        </div>

        <div className="mt-[60px] md:mt-[80px]">
          {madeToc.length > 0 && <Toc items={madeToc} className="mb-[40px]" />}

          <div
            dangerouslySetInnerHTML={{ __html: body }}
            className="blogBody"
          />
        </div>

        {data.related_post && data.related_post.length > 0 && (
          <ReadNext
            readNestPosts={data.related_post}
            className="mt-[60px] md:mt-[120px]"
          />
        )}

        <Categories
          category={categoryData.contents}
          currentCategory={toStringId(data.category.id)}
          className="mt-[60px] md:mt-[120px]"
        />
      </div>
    </Container>
  )
}

export async function generateStaticParams() {
  const data = await getBlogPosts({
    filters: `category[not_equals]note`,
  })

  const paths = data.contents.map(
    (content: { id: string; category: { id: string } }) => ({
      id: content.id,
      category: content.category.id,
    })
  )

  return paths
}
