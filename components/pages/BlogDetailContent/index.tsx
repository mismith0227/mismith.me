import dayjs from 'dayjs'
import {
  StyledContainer,
  BodyWrap,
  Body,
  Title,
  DateArea,
  Date,
  DateLabel,
  StyledTag,
  WrittenBy,
  WrittenByInner,
  WrittenByTitle,
  WrittenByText,
  ExternalLink,
  StyledCategories,
  StyledReadNext,
  ShareButtonsArea,
  StyledShareButtons,
  StyledIconList,
  StyledIconListItem,
} from './styles'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Fivehundredpx } from '@/components/atoms/Icon/Fivehundredpx'
import { Rss } from '@/components/atoms/Icon/Rss'
import { Blog } from '@/types/Blog'
import { BlogCategory } from '@/types/BlogCategory'
import 'highlight.js/styles/stackoverflow-light.css'

type Props = {
  data: Blog
  body: string
  category: BlogCategory[]
  currentCategory?: string
}

export const BlogDetailContent = ({
  data,
  body,
  category,
  currentCategory,
}: Props) => (
  <StyledContainer size="lg">
    <StyledTag>{data.category.category_name}</StyledTag>
    <Title>{data.title}</Title>
    <DateArea>
      <Date>
        <DateLabel>公開日:</DateLabel>
        {dayjs(data.createdAt).format('YYYY年M月D日')}
      </Date>
      <Date>
        <DateLabel>最終更新日:</DateLabel>
        {dayjs(data.updatedAt).format('YYYY年M月D日')}
      </Date>
    </DateArea>
    <BodyWrap>
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
    <WrittenBy>
      <WrittenByInner>
        <WrittenByTitle>About the author</WrittenByTitle>

        <WrittenByText>
          大阪でフロントエンドエンジニアをしています。写真を撮るのが趣味です。よかったら500pxに載せてる写真も見てください。
          <br />
          web上に公開しているので、正確さに可能な限り努力してますが、個人の備忘録程度に書いてるので、ご自身の判断で参考程度に読んでください。
          <br />
          間違いやご意見があれば、コンタクトやSNSに気軽にご連絡ください。
        </WrittenByText>
        <StyledIconList>
          <StyledIconListItem>
            <ExternalLink
              href="https://github.com/mismith0227"
              target="_blank"
              aria-label="GitHub"
              rel="noopener"
            >
              <GitHub />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              <Twitter />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
            >
              <Instagram />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://500px.com/mismith2216"
              target="_blank"
              aria-label="500px"
              rel="noopener"
            >
              <Fivehundredpx />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://www.mismith.me/feed"
              target="_blank"
              aria-label="rss"
              rel="noopener"
            >
              <Rss />
            </ExternalLink>
          </StyledIconListItem>
        </StyledIconList>
      </WrittenByInner>
    </WrittenBy>

    {data.related_post && <StyledReadNext readNestPosts={data.related_post} />}

    <StyledCategories category={category} currentCategory={currentCategory} />
  </StyledContainer>
)
