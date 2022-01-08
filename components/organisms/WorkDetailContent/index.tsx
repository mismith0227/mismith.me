import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  Date,
  MainVisualWrap,
  MainVisual,
  Body,
} from './styles'
import dayjs from 'dayjs'
import { Portfolio } from '@/types/Portfolio'

type Props = {
  data: Portfolio
}

export const WorkDetailContent = ({ data }: Props) => (
  <StyledContainer size="lg">
    <Date>{dayjs(data.productionDate).format('YYYY年M月D日')}</Date>
    <Heading>{data.title}</Heading>

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
  </StyledContainer>
)
