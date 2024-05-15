import Image from 'next/image'
import styled from '@emotion/styled'
import { Container } from '@/components/organisms/Container'
import Link from 'next/link'
import media from '@/styles/media'
import { Heading } from '@/components/atoms/Heading'

export const StyledContainer = styled(Container)``

export const StyledHeading = styled(Heading)`
  display: none;

  ${media.small} {
    display: block;
  }
`

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 160px 40px;
  max-width: 900px;

  ${media.small} {
    margin-top: 64px;
    gap: 80px 0;
  }
`

export const Content = styled.div``

export const StyledLink = styled(Link)`
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
  }

  &::after {
    content: 'View More';
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 4;
    color: #fff;
  }
`

export const Title = styled.h2`
  margin: 0;
`

export const ThumbnailWrap = styled.div`
  position: relative;
`

export const StyledThumbnail = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: bottom;
`
