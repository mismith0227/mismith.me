import Link from 'next/link'
import dayjs from 'dayjs'
import { Portfolio } from '@/types/Portfolio'
import {
  StyledContainer,
  Title,
  ThumbnailWrap,
  Thumbnail,
  Works,
  WorkItem,
  Date,
  WorkTitle,
  StyledLink,
  Description,
  StyledTagList,
} from './styles'

type Props = {
  data: Portfolio[]
}

export const WorkContent = ({ data }: Props) => (
  <StyledContainer size="lg">
    <Title>Works</Title>
    <Works>
      {data.map((work) => (
        <WorkItem key={work.id}>
          {work.productionDate && (
            <Date>{dayjs(work.productionDate).format('YYYY年M月D日')}</Date>
          )}
          <WorkTitle>
            <Link href={`/works/${work.id}`} passHref>
              <StyledLink>{work.title}</StyledLink>
            </Link>
          </WorkTitle>

          {work.description && <Description>{work.description}</Description>}

          {work.tags && <StyledTagList items={work.tags} />}

          {work.thumbnail && (
            <Link href={`/works/${work.id}`} passHref>
              <ThumbnailWrap>
                <Thumbnail src={work.thumbnail.url} alt={work.title} />
              </ThumbnailWrap>
            </Link>
          )}
        </WorkItem>
      ))}
    </Works>
  </StyledContainer>
)
