import * as React from 'react'
import moment from 'moment'
import { Container } from './styles'

type Props = {
  data: GatsbyTypes.MicrocmsBlog
}

export const BlogDetailContent = ({ data }: Props) => (
  <Container>
    <h1>{data.title}</h1>
  </Container>
)
