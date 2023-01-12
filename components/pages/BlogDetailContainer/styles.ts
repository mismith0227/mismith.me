import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'
import { Categories } from '@/components/molecules/Categories'
import { ReadNext } from '@/components/molecules/ReadNext'
import { ShareButtons } from '@/components/molecules/ShareButtons'
import { Tag } from '@/components/atoms/Tag'
import { Heading } from '@/components/atoms/Heading'
import { Toc } from '@/components/molecules/Toc'

export const StyledContainer = styled(Container)`
  padding-right: 216px;
  box-sizing: border-box;

  ${media.large} {
    padding-right: 0;
  }
`

export const Inner = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled(Heading)`
  font-size: 36px;

  ${media.medium} {
    font-size: 24px;
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
  margin-top: 80px;

  ${media.medium} {
    margin-top: 60px;
  }
`

export const StyledToc = styled(Toc)`
  margin: 0 0 40px;
`

export const Body = styled.div`
  margin: 0;

  h2 {
    position: relative;
    margin: 40px 0 16px;
    font-size: 26px;

    ${media.medium} {
      margin: 42px 0 18px;
    }
  }

  h3 {
    margin: 22px 0;
    font-size: 18px;
  }

  h4 {
    margin: 24px 0;
    font-size: 16px;
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
  right: -120px;
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
