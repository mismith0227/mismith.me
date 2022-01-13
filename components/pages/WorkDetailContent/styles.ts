import styled from '@emotion/styled'
import media from '@/styles/media'
import { TagList } from '@/components/molecules/TagList'
import { Container } from '@/components/organisms/Container'

export const StyledContainer = styled(Container)``

export const Header = styled.div`
  display: grid;
  gap: 20px 0;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px auto auto 1fr;

  ${media.large} {
    display: block;
  }
`

export const Title = styled.h1`
  grid-column: 8 / 13;
  grid-row: 3 / 4;
  position: relative;
  z-index: 5;
  margin: 0;
  font-size: 48px;

  ${media.large} {
    font-size: 36px;
  }
`

export const Description = styled.p`
  grid-column: 8 / 13;
  grid-row: 4 / 5;
  margin: 0;

  ${media.large} {
    margin-top: 40px;
  }
`

export const StyledTagList = styled(TagList)`
  align-items: flex-start;
  grid-column: 8 / 13;
  grid-row: 2 / 3;
  position: relative;
  z-index: 5;

  ${media.large} {
    margin-top: 20px;
  }
`

export const MainVisualWrap = styled.div`
  grid-column: 1 / 9;
  grid-row: 1 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 2 / 1;
  background: #eee;

  ${media.large} {
    margin-top: 20px;
    padding: 24px 0;
  }
`

export const MainVisual = styled.img`
  max-height: 70%;
  max-width: 70%;
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${media.large} {
    max-height: 80%;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 0 60px;
  grid-template-columns: repeat(12, 1fr);
  margin: 120px auto 0;
  max-width: 1024px;

  ${media.small} {
    display: block;
    max-width: 100%;
    margin: 80px auto 0;
  }
`

export const Body = styled.div`
  grid-column: 5 / 13;
  grid-row: 1 / 2;

  h2,
  h3 {
    &:first-of-type {
      margin: 0;
    }
  }

  p {
    margin: 16px 0;
    word-wrap: break-word;
  }
`

export const Aside = styled.div`
  grid-column: 1 / 5;
  grid-row: 1 / 2;
`

export const AsideSection = styled.div`
  margin: 12px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

export const AsideSectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`

export const AsideText = styled.p`
  display: block;
  margin: 4px 0 0;
  font-size: 14px;
  word-wrap: break-word;
`

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`
