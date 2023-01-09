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
  SubTitle,
  StyledTagList,
  StyledIconList,
  StyledIconListItem,
  Email,
} from './styles'
import { biographies } from './data'
import { Heading } from '@/components/atoms/Heading'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Biography } from './types'

export const AboutContent = () => (
  <StyledContainer>
    <Section>
      <Heading level={2}>About me</Heading>
      <SectionInner>
        <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
        <Text>
          情報整理や導線が考えられていて、ユーザーが意図した通りに操作できるようなユーザビリティの高いサイトやサービスが好きです。
        </Text>
        <Text>
          フロントエンドの中でも、画面制作や使いやすいUIを考慮しつつ開発することが得意です。
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
          お仕事の相談、ブログに関するご意見、趣味の写真に関するお誘いは、以下のメールよりお問い合わせください。
          <br />
          もしくは下記SNSのDMでも大丈夫です。
        </Text>
        <Email>mismith2227@gmail.com</Email>

        <StyledIconList>
          <StyledIconListItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              <Twitter />
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
