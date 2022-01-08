import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  Header,
  Title,
  StyledTagList,
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
  <StyledContainer size="full">
    <Header>
      <Title>{data.title}</Title>

      <StyledTagList items={data.tags} />

      {data.thumbnail && (
        <MainVisualWrap>
          <MainVisual src={data.thumbnail.url} alt={data.title} />
        </MainVisualWrap>
      )}
    </Header>

    <Body
      dangerouslySetInnerHTML={{
        __html: `${data.body}`,
      }}
    />
  </StyledContainer>
)
