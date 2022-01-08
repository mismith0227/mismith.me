import styled from '@emotion/styled'
import media from '@/styles/media'
import { LinkButton } from '@/components/atoms/LinkButton'
import { TagList } from '@/components/molecules/TagList'
import { Container } from '@/components/organisms/Container'

export const StyledContainer = styled(Container)``

export const Content = styled.div`
  margin: 180px 0 0;

  ${media.small} {
    margin: 80px 0 0;
  }
`

export const Section = styled.section`
  margin: 80px 0 0;

  ${media.small} {
    margin: 40px 0 0;
  }
`

export const Lead = styled.p`
  margin-top: 20px;
`

export const Works = styled.ul`
  padding: 0;
  list-style: none;
  margin: 40px 0 0;

  ${media.small} {
    margin: 20px 0 0;
  }
`

export const WorkItem = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px auto auto 1fr 40px;
  margin: 120px 0 0;
  gap: 12px 0;

  &:first-of-type {
    margin: 0;
  }

  ${media.small} {
    display: block;
    margin: 60px 0 0;
  }
`

export const ThumbnailWrap = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eee;
  position: relative;

  ${media.small} {
    margin-top: 8px;
  }
`

export const Thumbnail = styled.img`
  max-height: 60%;
  max-width: 90%;
`

export const WorkTitle = styled.h3`
  grid-row: 3 / 4;
  grid-column: 7 / 13;
  margin: 0;
  font-size: 36px;
  position: relative;
  z-index: 5;

  ${media.small} {
    font-size: 24px;
  }
`

export const StyledLink = styled.a`
  color: #000;
  text-decoration: none;
`

export const StyledTagList = styled(TagList)`
  align-items: flex-start;
  grid-column: 7 / 13;
  grid-row: 2 / 3;

  position: relative;
  z-index: 5;
`

export const Description = styled.p`
  grid-column: 7 / 13;
  grid-row: 4 / 5;
  position: relative;
  margin: 0;
  z-index: 5;
  font-size: 14px;

  ${media.small} {
    margin-top: 8px;
    font-size: 12px;
  }
`

export const LinkArea = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 7 / 13;
  grid-row: 5 / 6;
`

export const ContactLink = styled(LinkButton)`
  width: 240px;

  ${media.small} {
    width: 100%;
  }
`

export const StyledLinkButton = styled(LinkButton)`
  height: 100%;

  ${media.small} {
    margin-top: 12px;
    width: 100%;
  }
`
