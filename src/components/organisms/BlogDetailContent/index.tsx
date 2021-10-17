import * as React from 'react'
import moment from 'moment'
import { Container, Body } from './styles'

type Props = {
  data: GatsbyTypes.MicrocmsBlog
}

export const BlogDetailContent = ({ data }: Props) => (
  <Container>
    <h1>{data.title}</h1>
    <Body
      dangerouslySetInnerHTML={{
        __html: `${data.content}`,
      }}
    />
  </Container>
)
