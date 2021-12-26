import styled from '@emotion/styled'
import media from '@/styles/media'
import { Categories } from '@/components/molecules/Categories'
import { ReadNext } from '@/components/molecules/ReadNext'
import { ShareButtons } from '@/components/molecules/ShareButtons'

export const Container = styled.div`
  display: block;
  max-width: 1024px;
  width: 96%;
  margin: 180px auto 0;

  ${media.small} {
    margin: 80px auto 0;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 48px;

  ${media.medium} {
    font-size: 36px;
  }
`

export const Category = styled.span`
  display: inline-block;
  padding: 4px 16px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`

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
  margin-top: 180px;

  ${media.medium} {
    margin-top: 80px;
  }
`

export const Body = styled.div`
  margin: 0 auto;
  max-width: 640px;

  h2 {
    position: relative;
    margin: 84px 0 32px;
    font-size: 32px;

    ${media.medium} {
      margin: 42px 0 18px;
    }

    &::before {
      content: '';
      display: block;
      width: 80px;
      height: 6px;
      background-color: #000;
      position: absolute;
      top: 26px;
      left: -96px;
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
  }

  p {
    margin: 16px 0;
    word-wrap: break-word;
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
      margin-left: -20px;
      margin-right: -20px;

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
    width: calc(100% + 200px);
    margin: 0 -100px;
    margin-top: 36px;

    ${media.medium} {
      width: 100vw;
      margin: 0 calc(50% - 50vw);
    }
  }

  iframe {
    width: 100%;
    overflow: hidden;
    height: 450px;
  }
`

export const WrittenBy = styled.div`
  position: relative;
  margin: 180px auto 0;
  max-width: 640px;

  ${media.medium} {
    margin: 80px auto 0;
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

export const WrittenByText = styled.p``

export const SnsList = styled.ul`
  display: flex;
  margin: 32px 0 0;
  padding: 0;
  gap: 16px;
  list-style: none;
`

export const SnsItem = styled.li``

export const ExternalLink = styled.a`
  color: #000;
`

export const StyledCategories = styled(Categories)`
  margin: 120px auto 0;
  max-width: 640px;

  ${media.medium} {
    margin: 60px auto 0;
  }
`

export const StyledReadNext = styled(ReadNext)`
  margin: 120px auto 0;
  max-width: 640px;

  ${media.medium} {
    margin: 60px auto 0;
  }
`

export const ShareButtonsArea = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
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
