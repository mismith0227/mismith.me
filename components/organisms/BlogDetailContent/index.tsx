import dayjs from 'dayjs'
import {
  Container,
  Title,
  Body,
  DateArea,
  Date,
  DateLabel,
  Category,
  WrittenBy,
  WrittenByInner,
  WrittenByTitle,
  WrittenByText,
  SnsList,
  SnsItem,
  ExternalLink,
  StyledCategories,
} from './styles'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Fivehundredpx } from '@/components/atoms/Icon/Fivehundredpx'
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
  <Container>
    <Category>{data.category.category_name}</Category>
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
    <Body
      dangerouslySetInnerHTML={{
        __html: body,
      }}
    />
    <WrittenBy>
      <WrittenByInner>
        <WrittenByTitle>About the author</WrittenByTitle>

        <WrittenByText>
          大阪でフロントエンドエンジニアをしています。写真を撮るのが趣味です。よかったら500pxに載せてる写真も見てください。
          <br />
          web上に公開しているので、正確さに可能な限り努力してますが、個人の備忘録程度に書いてるので、寛容にお願いします。
          <br />
          間違いやご意見があれば、コンタクトやSNSに気軽にご連絡ください。
        </WrittenByText>
        <SnsList>
          <SnsItem>
            <ExternalLink
              href="https://github.com/mismith0227"
              target="_blank"
              aria-label="GitHub"
              rel="noopener"
            >
              <GitHub />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              <Twitter />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
            >
              <Instagram />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://500px.com/mismith2216"
              target="_blank"
              aria-label="500px"
              rel="noopener"
            >
              <Fivehundredpx />
            </ExternalLink>
          </SnsItem>
        </SnsList>
      </WrittenByInner>
    </WrittenBy>

    <StyledCategories category={category} currentCategory={currentCategory} />
  </Container>
)
