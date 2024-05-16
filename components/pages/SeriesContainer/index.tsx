import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/atoms/Heading'
import { Container } from '@/components/organisms/Container'
import { useWindowSize } from '@/hooks/useWindowSize'
import media from '@/styles/media'
import { SeriesCategory } from '@/types/SeriesCategory'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px 0;
  max-width: 900px;

  ${media.small} {
    margin-top: 64px;
    gap: 80px 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const SubTitle = styled.span`
  display: inline-block;
  margin-left: 16px;
  font-size: 16px;

  ${media.small} {
    margin-left: 4px;
    font-size: 12px;
  }
`

const Description = styled.p`
  margin: 8px 0 0;
  white-space: pre-wrap;
`

const ThumbnailList = styled(Link)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-self: center;
  align-self: center;
  gap: 16px;
  width: 100%;
  margin: 24px 0 0;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;

    .more {
      color: #fff;
      background-color: #000;
    }
  }

  ${media.medium} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.small} {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    &:hover {
      opacity: 1;

      .more {
        color: #000;
        background-color: #fff;
      }
    }
  }
`

const ThumbnailWrap = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;
`

const StyledThumbnail = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  transition: 0.2s;

  &::after {
    display: inline-block;
    content: '→';
    margin-left: 8px;
  }
`

type Props = {
  data: SeriesCategory[]
}

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
