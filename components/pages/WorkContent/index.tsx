import Link from 'next/link'
import Image from 'next/image'
import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  Section,
  Lead,
  ThumbnailWrap,
  Works,
  WorkItem,
  WorkTitle,
  StyledLink,
  Description,
  StyledTagList,
  LinkArea,
  ContactLink,
  StyledLinkButton,
} from './styles'
import { Props } from './types'

export const WorkContent = ({ data }: Props) => (
  <StyledContainer size="lg">
    <Heading>Works</Heading>

    <Section>
      <Heading level={2}>Client Work</Heading>

      <Lead>
        仕事では教育関連、採用サイト、コーポレートサイトなど様々なサイトの制作に携わっています。
        <br />
        ご連絡いただければ、詳細をお送りいたします。
      </Lead>

      <p>mail@mismith.me</p>
    </Section>

    <Section>
      <Heading level={2}>Personal Production</Heading>

      <Lead>個人の趣味で作ったものです。</Lead>

      <Works>
        {data.map((work) => (
          <WorkItem key={work.id}>
            <WorkTitle>
              <Link href={`/works/${work.id}`} passHref>
                <StyledLink>{work.title}</StyledLink>
              </Link>
            </WorkTitle>

            {work.tags && <StyledTagList items={work.tags} />}

            {work.thumbnail && (
              <ThumbnailWrap>
                <Image
                  src={work.thumbnail.url}
                  alt={work.title}
                  width={work.thumbnail.width}
                  height={work.thumbnail.height}
                />
              </ThumbnailWrap>
            )}

            {work.description && <Description>{work.description}</Description>}

            <LinkArea>
              <StyledLinkButton href={`/works/${work.id}`}>
                View Detail
              </StyledLinkButton>
            </LinkArea>
          </WorkItem>
        ))}
      </Works>
    </Section>
  </StyledContainer>
)
