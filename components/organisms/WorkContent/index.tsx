import Link from 'next/link'
import dayjs from 'dayjs'
import { Portfolio } from '@/types/Portfolio'
import {
  Container,
  Title,
  ThumbnailWrap,
  Thumbnail,
  Works,
  WorkItem,
  Date,
  WorkTitle,
  StyledLink,
  Description,
  Tags,
  TagItem,
} from './styles'

type Props = {
  data: Portfolio[]
}

export const WorkContent = ({ data }: Props) => (
  <Container>
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

          {work.tags && (
            <Tags>
              {work.tags.map((item) => (
                <TagItem key={item}>{item}</TagItem>
              ))}
            </Tags>
          )}

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
  </Container>
)
