import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'
import { Categories } from '@/components/molecules/Categories'
import { ReadNext } from '@/components/molecules/ReadNext'
import { ShareButtons } from '@/components/molecules/ShareButtons'
import { Tag } from '@/components/atoms/Tag'
import { IconList, IconListItem } from '@/components/molecules/IconList'
import { Heading } from '@/components/atoms/Heading'
import { Toc } from '@/components/molecules/Toc'

export const StyledContainer = styled(Container)``

export const Title = styled(Heading)`
  font-size: 48px;

  ${media.medium} {
    font-size: 36px;
  }
`

export const StyledTag = styled(Tag)``

export const DateArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;
`

export const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

export const BodyWrap = styled.div`
  position: relative;
  margin-top: 120px;

  ${media.medium} {
    margin-top: 60px;
  }
`

export const StyledToc = styled(Toc)`
  margin: 0 0 40px;
  max-width: 640px;
`

export const Body = styled.div`
  max-width: 640px;

  h2 {
    position: relative;
    margin: 84px 0 32px;
    font-size: 32px;

    ${media.medium} {
      margin: 42px 0 18px;
    }
  }

  h3 {
    margin: 32px 0;
    font-size: 24px;
  }

  h4 {
    margin: 24px 0;
    font-size: 18px;
  }

  a {
    color: #000;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin: 16px 0;
    word-wrap: break-word;
  }

  li {
    margin: 8px 0 0;
    word-wrap: break-word;

    &:first-of-type {
      margin: 0;
    }
  }

  p,
  li {
    code {
      background: #f5f5f5;
      font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
      background-color: #f6f6f6;
      color: #eb5757;
      font-weight: bold;
      padding: 4px;
      font-size: 14px;
    }
  }

  pre {
    code {
      font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
      font-size: 14px;

      ${media.medium} {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }

  blockquote {
    padding: 16px;
    margin-left: 0;
    margin-right: 0;
    border-left: 2px solid #000;
  }

  img {
    margin-top: 36px;
    width: 100%;
    height: auto;
  }

  iframe {
    width: 100%;
    overflow: hidden;
    height: 450px;
  }

  iframe[title='YouTube embed'] {
    aspect-ratio: 16 / 9;
    height: auto;
  }
`

export const WrittenBy = styled.div`
  position: relative;
  margin: 180px 0 0;
  max-width: 640px;

  ${media.medium} {
    margin: 80px 0 0;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    width: 80px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 80px;
  }
`

export const WrittenByInner = styled.div`
  padding: 24px;

  &::before,
  &::after {
    content: '';
    display: block;
    background-color: #000;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &::before {
    width: 80px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 80px;
  }
`

export const WrittenByTitle = styled.h2`
  margin: 0;
`

export const WrittenByText = styled.p`
  margin: 0;
`

export const StyledIconList = styled(IconList)`
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`

export const StyledCategories = styled(Categories)`
  margin: 120px 0 0;
  max-width: 640px;

  ${media.medium} {
    margin: 60px 0 0;
  }
`

export const StyledReadNext = styled(ReadNext)`
  margin: 120px 0 0;
  max-width: 640px;

  ${media.medium} {
    margin: 60px 0 0;
  }
`

export const ShareButtonsArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  ${media.large} {
    position: initial;
    margin: 120px auto 0;
    max-width: 640px;
  }

  ${media.medium} {
    margin: 60px auto 0;
  }
`

export const StyledShareButtons = styled(ShareButtons)`
  position: sticky;
  top: 200px;
  right: 0;
`
