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
} from './styles'

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
  </Container>
)
