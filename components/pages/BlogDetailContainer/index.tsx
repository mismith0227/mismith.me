import styled from '@emotion/styled'
import dayjs from 'dayjs'

import { Heading } from '@/components/atoms/Heading'
import { Tag } from '@/components/atoms/Tag'
import { Categories } from '@/components/molecules/Categories'
import { ReadNext } from '@/components/molecules/ReadNext'
import { ShareButtons } from '@/components/molecules/ShareButtons'
import { Toc } from '@/components/molecules/Toc'
import { Container } from '@/components/organisms/Container'
import media from '@/styles/media'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import { Toc as TocTypes } from '@/types/Toc'

import 'highlight.js/styles/stackoverflow-light.css'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`

const Inner = styled.div`
  margin-right: 200px;
  max-width: 640px;
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

const Title = styled(Heading)`
  font-size: 36px;

  ${media.medium} {
    font-size: 24px;
  }
`

const StyledTag = styled(Tag)``

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

const StyledToc = styled(Toc)`
  margin: 0 0 40px;
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

const StyledCategories = styled(Categories)`
  margin: 120px 0 0;

  ${media.medium} {
    margin: 60px 0 0;
  }
`

const StyledReadNext = styled(ReadNext)`
  margin: 120px 0 0;

  ${media.medium} {
    margin: 60px 0 0;
  }
`

const ShareButtonsArea = styled.div`
  position: absolute;
  top: 0;
  right: -120px;
  height: 100%;

  ${media.large} {
    position: initial;
    margin: 120px 0 0;
  }

  ${media.medium} {
    margin: 60px auto 0;
  }
`

const StyledShareButtons = styled(ShareButtons)`
  position: sticky;
  top: 200px;
  right: 0;
`

type Props = {
  data: Blog
  body: string
  toc: TocTypes[]
  category: BlogCategory[]
  currentCategory?: string
}

export const BlogDetailContainer = ({
  data,
  body,
  toc,
  category,
  currentCategory,
}: Props) => (
  <StyledContainer size="lg">
    <Inner>
      <StyledTag>{data.category.category_name}</StyledTag>
      <Title>{data.title}</Title>
      <DateArea>
        <Date>
          <DateLabel>公開日:</DateLabel>
          {dayjs(data.publishedAt).format('YYYY年M月D日')}
        </Date>
        <Date>
          <DateLabel>最終更新日:</DateLabel>
          {dayjs(data.updatedAt).format('YYYY年M月D日')}
        </Date>
      </DateArea>
      <BodyWrap>
        {toc.length > 0 && <StyledToc items={toc} />}

        <Body
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
        {currentCategory && (
          <ShareButtonsArea>
            <StyledShareButtons
              currentCategory={currentCategory}
              title={data.title}
              contentId={data.id}
            />
          </ShareButtonsArea>
        )}
      </BodyWrap>

      {data.related_post && data.related_post.length > 0 && (
        <StyledReadNext readNestPosts={data.related_post} />
      )}

      <StyledCategories category={category} currentCategory={currentCategory} />
    </Inner>
  </StyledContainer>
)
