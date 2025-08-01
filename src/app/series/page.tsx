import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { getPhotoCategories } from './api/getPhotoCategory'
import { Heading } from '@/src/components/Heading'
import { Metadata } from 'next'
import { PhotoOverview } from '@/src/components/PhotoOverview'

const title = 'Series'
const description = 'Series一覧ページ'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function Series() {
  const { contents } = await getPhotoCategories({})

  return (
    <Container size="lg">
      <PageTitle text="Series" />
      <div className="mt-16 gap-x-0 gap-y-20 flex flex-col gap-x-0 gap-y-20 md:gap-y-40 md:max-w-[900px]">
        {contents.map((c, index) => (
          <div key={c.id}>
            <Heading level={2}>{c.category_name}</Heading>
            <div className="mt-2 whitespace-pre-wrap">{c.description}</div>
            <PhotoOverview
              images={c.images}
              categoryId={c.id}
              isPriority={index < 2}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
