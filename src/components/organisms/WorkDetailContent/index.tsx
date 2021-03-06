import * as React from 'react'
import {
  Container,
  Date,
  Title,
  MainVisualWrap,
  MainVisual,
  Body,
} from './styles'
import moment from 'moment'

type Props = {
  data: GatsbyTypes.MicrocmsPortfolio
}

export const WorkDetailContent = ({ data }: Props) => (
  <Container>
    <Date>{moment(data.productionDate).format('YYYY年M月D日')}</Date>
    <Title>{data.title}</Title>

    {data.thumbnail && (
      <MainVisualWrap>
        <MainVisual src={data.thumbnail.url} alt={data.title} />
      </MainVisualWrap>
    )}

    <Body
      dangerouslySetInnerHTML={{
        __html: `${data.body}`,
      }}
    />
  </Container>
)
