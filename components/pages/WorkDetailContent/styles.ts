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

  ${media.small} {
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

  ${media.medium} {
    font-size: 36px;
  }
`

export const StyledTagList = styled(TagList)`
  align-items: flex-start;
  grid-column: 8 / 13;
  grid-row: 2 / 3;
  position: relative;
  z-index: 5;

  ${media.small} {
    margin-top: 20px;
  }
`

export const Date = styled.p`
  margin: 0;
  font-weight: bold;
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

  ${media.small} {
    margin-top: 20px;
  }
`

export const MainVisual = styled.img`
  max-height: 70%;
  max-width: 90%;
`

export const Body = styled.div`
  margin: 120px auto 0;
  max-width: 600px;

  ${media.small} {
    margin: 40px auto 0;
  }

  p {
    margin: 16px 0;
    word-wrap: break-word;
  }
`
