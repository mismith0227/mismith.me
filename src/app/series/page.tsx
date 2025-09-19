import { Container } from '@/src/components/Container'
import { PageTitle } from '@/src/components/PageTitle'
import { getPhotoCategories } from './api/getPhotoCategory'
import { Heading } from '@/src/components/Heading'
import { Metadata } from 'next'
import { PhotoOverview } from '@/src/components/PhotoOverview'
import { LinkButton } from '@/src/components/LinkButton'

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
      <div className="mt-16 gap-x-0 gap-y-20 flex flex-col gap-x-0 gap-y-20 md:gap-y-40 md:max-w-[1200px]">
        {contents.map((c, index) => (
          <div key={c.id}>
            <PhotoOverview
              featureImage={c.feature_image}
              images={c.images}
              categoryId={c.id}
              isPriority={index < 2}
            />
            <div className="width-full mt-4">
              <Heading level={2} className="mt-4 text-[18px] md:text-[20px]">
                {c.category_name}
              </Heading>
              <p className="mt-2 whitespace-pre-wrap text-[16px]">{c.body}</p>
              <div className="flex justify-end mt-4">
                <LinkButton href={`/series/${c.id}`} className="inline-block">
                  Read more
                </LinkButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
