import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/atoms/Heading'
import { Container } from '@/components/organisms/Container'
import media from '@/styles/media'
import { PhotosCategory } from '@/types/PhotosCategory'

const StyledContainer = styled(Container)``

const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 80px 40px;
  max-width: 900px;

  ${media.medium} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 80px 0;
  }
`

const Content = styled.div``

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  &::after {
    content: 'View More';
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 4;
    color: #fff;
    font-size: 14px;
  }

  &:hover {
    &::before {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`

const Title = styled.h2`
  margin: 0;
`

const ThumbnailWrap = styled.div`
  position: relative;
`

const StyledThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
`

type Props = {
  data: PhotosCategory[]
}

export const PhotosContainer = ({ data }: Props) => {
  return (
    <StyledContainer size="lg">
      <StyledHeading>Photos</StyledHeading>
      <Inner>
        {data.map((item, index) => (
          <Content key={item.id}>
            <Title>{item.title}</Title>
            <StyledLink href={`/photos/${item.id}`}>
              <ThumbnailWrap>
                <StyledThumbnail
                  src={item.feature_image.url}
                  alt={item.title}
                  width={item.feature_image.width}
                  height={item.feature_image.height}
                  loading={index > 5 ? 'lazy' : 'eager'}
                />
              </ThumbnailWrap>
            </StyledLink>
          </Content>
        ))}
      </Inner>
    </StyledContainer>
  )
}
