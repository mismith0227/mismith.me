import {
  StyledContainer,
  Section,
  SectionInner,
  Text,
  Biographies,
  BiographyItem,
  BiographyDate,
  BiographyProfession,
  BiographyRole,
  BiographyDetail,
  ExternalLink,
  StyledTagList,
  StyledIconList,
  StyledIconListItem,
  Email,
  StyledHeading,
} from './styles'
import { biographies } from './data'
import { Heading } from '@/components/atoms/Heading'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Biography } from './types'

export const AboutContainer = () => (
  <StyledContainer size="lg">
    <StyledHeading>About</StyledHeading>

    <Section>
      <Heading level={2}>Profile</Heading>
      <SectionInner>
        <Text>
          1989年2月27日生まれ。大阪在住のwebエンジニア。
          <br />
          現在は個人で主にフロントエンド業務の仕事をしています。
        </Text>
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Career</Heading>
      <SectionInner>
        <Biographies>
          {biographies.map((item: Biography) => (
            <BiographyItem key={item.id}>
              <BiographyRole>{item.role}</BiographyRole>
              <BiographyProfession>{item.belongs}</BiographyProfession>
              <BiographyDate>
                {item.startDate} ~ {item.endDate && item.endDate}
              </BiographyDate>

              {item.detail && <BiographyDetail>{item.detail}</BiographyDetail>}
              {item.skills && <StyledTagList items={item.skills} />}
            </BiographyItem>
          ))}
        </Biographies>
      </SectionInner>
    </Section>

    <Section>
      <Heading level={2}>Contact</Heading>
      <SectionInner>
        <Text>
          お仕事の相談、ブログに関するご意見は、以下のメールよりお問い合わせください。
          <br />
          もしくは下記SNSのDMでも大丈夫です。
        </Text>
        <Email>mismith2227@gmail.com</Email>

        <StyledIconList>
          <StyledIconListItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="X"
              rel="noopener"
            >
              <Xlogo />
            </ExternalLink>
          </StyledIconListItem>
          <StyledIconListItem>
            <ExternalLink
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
            >
              <Instagram />
            </ExternalLink>
          </StyledIconListItem>
        </StyledIconList>
      </SectionInner>
    </Section>
  </StyledContainer>
)
