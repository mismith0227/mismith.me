import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Image from 'next/image'

import { Heading } from '@/components/atoms/Heading'
import { LinkButton } from '@/components/atoms/LinkButton'
import { ReadNext } from '@/components/molecules/ReadNext'
import { Container } from '@/components/organisms/Container'
import media from '@/styles/media'
import { Blog } from '@/types/Blog'

import 'highlight.js/styles/stackoverflow-light.css'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const Inner = styled.div`
  margin-right: 200px;
  max-width: 960px;
  width: 100%;

  ${media.large} {
    margin-right: 80px;
  }

  ${media.medium} {
    margin-right: 40px;
  }

  ${media.small} {
    margin-right: 0;
  }
`

const MainVisual = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: bottom;
  margin: 24px 0 0;
`

const Title = styled(Heading)`
  font-size: 36px;

  ${media.medium} {
    font-size: 24px;
  }
`

const DateArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Date = styled.div`
  margin: 0 24px 0 0;
  font-size: 12px;
`

const DateLabel = styled.span`
  display: inline-block;
  margin: 0 4px 0 0;
  font-weight: bold;
`

const BodyWrap = styled.div`
  position: relative;
  margin-top: 80px;

  ${media.medium} {
    margin-top: 60px;
  }
`

const Body = styled.div`
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

const StyledReadNext = styled(ReadNext)`
  margin: 120px 0 0;

  ${media.medium} {
    margin: 60px 0 0;
  }
`

const BackLink = styled(LinkButton)`
  margin: 80px auto 0;
  width: min(100%, 300px);
`

type Props = {
  data: Blog
  body: string
}

export const NoteDetailContainer = ({ data, body }: Props) => (
  <StyledContainer size="lg">
    <Inner>
      <DateArea>
        <Date>
          <DateLabel>公開日:</DateLabel>
          {dayjs(data.publishedAt).format('YYYY年M月D日')}
        </Date>
      </DateArea>
      <Title>{data.title}</Title>
      {data.thumbnail && (
        <MainVisual
          src={data.thumbnail.url}
          alt={data.title}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
          loading={'eager'}
        />
      )}
      <BodyWrap>
        <Body
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </BodyWrap>
      {data.related_post && data.related_post.length > 0 && (
        <StyledReadNext readNestPosts={data.related_post} />
      )}

      <BackLink href="/note">note一覧へ</BackLink>
    </Inner>
  </StyledContainer>
)
