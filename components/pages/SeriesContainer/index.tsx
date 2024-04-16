import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  Inner,
  ThumbnailList,
  ThumbnailWrap,
  StyledThumbnail,
  Content,
  More,
  SubTitle,
  StyledHeading,
  Description,
} from './styles'
import { Props } from './types'
import { useWindowSize } from '@/hooks/useWindowSize'

export const SeriesContainer = ({ data }: Props) => {
  const [width] = useWindowSize()

  const renderImages = (
    images?: { url: string; width: number; height: number }[],
    categoryId?: string
  ) => {
    if (!images) {
      return null
    }
    let filteredImages

    if (width > 899) {
      filteredImages = images.slice(0, 7)
    } else {
      filteredImages = images.slice(0, 5)
    }

    return (
      <ThumbnailList href={`/series/${categoryId}`}>
        {filteredImages.map((image) => (
          <ThumbnailWrap key={image.url}>
            <StyledThumbnail
              src={`${image.url}?fit=clip&w=500&h=500?fm=webp`}
              alt=""
              width={image.width}
              height={image.height}
            />
          </ThumbnailWrap>
        ))}
        <ThumbnailWrap>
          <More className="more">続きを見る</More>
        </ThumbnailWrap>
      </ThumbnailList>
    )
  }
  return (
    <StyledContainer size="lg">
      <StyledHeading>Series</StyledHeading>
      <Inner>
        {data.map((item) => (
          <Content key={item.id}>
            <Heading level={2}>
              {item.category_name}
              <SubTitle>{item.sub_title}</SubTitle>
            </Heading>
            <Description>{item.description}</Description>

            {renderImages(item.images, item.id)}
          </Content>
        ))}
      </Inner>
    </StyledContainer>
  )
}