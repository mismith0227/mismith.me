import { GetStaticProps, NextPage } from 'next'
import { client } from '@/libs/client'
import { Layout } from '@/components/organisms/Layout'
import { Seo } from '@/components/organisms/Seo'
import { Image } from '@/types/Photo'
import { SeriesCategory } from '@/types/SeriesCategory'
import { SeriesContainer } from '@/components/pages/SeriesContainer'

type Props = {
  seriesCategory: SeriesCategory[]
  currentCategoryDescription: string
  pickUpPhoto?: Image
}

const SeriesPage: NextPage<Props> = ({
  seriesCategory,
  pickUpPhoto,
  currentCategoryDescription,
}) => {
  const meta = {
    title: `Series | mismith`,
    description: currentCategoryDescription || 'シリーズ',
    path: `series`,
    ogpImageUrl: pickUpPhoto?.url,
  }

  return (
    <Layout path={meta.path}>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        ogpImageUrl={meta.ogpImageUrl}
      />
      <SeriesContainer data={seriesCategory} />
    </Layout>
  )
}
export default SeriesPage

export const getStaticProps: GetStaticProps = async (context) => {
  const category = await client.get({
    endpoint: 'photo-category',
  })

  return {
    props: {
      seriesCategory: category.contents,
    },
  }
}
