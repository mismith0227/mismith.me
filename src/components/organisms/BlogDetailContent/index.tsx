import * as React from 'react'
import moment from 'moment'
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
} from './styles'
import { GitHub } from '../../atoms/Icon/GitHub'
import { Twitter } from '../../atoms/Icon/Twitter'
import { Instagram } from '../../atoms/Icon/Instagram'
import { Fivehundredpx } from '../../atoms/Icon/Fivehundredpx'

type Props = {
  data: GatsbyTypes.MicrocmsBlog
}

export const BlogDetailContent = ({ data }: Props) => (
  <Container>
    <Category>{data.category}</Category>
    <Title>{data.title}</Title>
    <DateArea>
      <Date>
        <DateLabel>公開日:</DateLabel>
        {moment(data.createdAt).format('YYYY年M月D日')}
      </Date>
      <Date>
        <DateLabel>最終更新日:</DateLabel>
        {moment(data.updatedAt).format('YYYY年M月D日')}
      </Date>
    </DateArea>
    <Body
      dangerouslySetInnerHTML={{
        __html: `${data.content}`,
      }}
    />
    <WrittenBy>
      <WrittenByInner>
        <WrittenByTitle>About the author</WrittenByTitle>

        <WrittenByText>
          大阪でフロントエンドエンジニアをしています。写真を撮るのが趣味です。よかったら500pxに載せてる写真も見てくささい。
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
  </Container>
)
