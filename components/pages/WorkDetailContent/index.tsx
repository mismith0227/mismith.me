import dayjs from 'dayjs'
import {
  StyledContainer,
  Header,
  Title,
  StyledTagList,
  Description,
  MainVisualWrap,
  MainVisual,
  Content,
  Body,
  Aside,
  AsideSection,
  AsideSectionTitle,
  ExternalLink,
  AsideText,
} from './styles'
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
      <Description>{data.description}</Description>
    </Header>

    <Content>
      <Body
        dangerouslySetInnerHTML={{
          __html: `${data.body}`,
        }}
      />

      <Aside>
        <AsideSection>
          <AsideSectionTitle>Date</AsideSectionTitle>
          <AsideText>
            {dayjs(data.productionDate).format('YYYY年M月')}
          </AsideText>
        </AsideSection>

        {data.url && (
          <AsideSection>
            <AsideSectionTitle>URL</AsideSectionTitle>
            <AsideText>
              <ExternalLink href={data.url} target="_blank" rel="noopener">
                {data.url}
              </ExternalLink>
            </AsideText>
          </AsideSection>
        )}

        {data.github && (
          <AsideSection>
            <AsideSectionTitle>GitHub</AsideSectionTitle>
            <AsideText>
              <ExternalLink href={data.github} target="_blank" rel="noopener">
                {data.github}
              </ExternalLink>
            </AsideText>
          </AsideSection>
        )}
      </Aside>
    </Content>
  </StyledContainer>
)
