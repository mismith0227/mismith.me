import {
  StyledContainer,
  Title,
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
  StyledLogo,
  Email,
} from './styles'
import { biographies } from './data'
import { Heading } from '@/components/atoms/Heading'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Fivehundredpx } from '@/components/atoms/Icon/Fivehundredpx'
import { Biography } from './types'

export const AboutContent = () => {
  return (
    <>
      <StyledContainer>
        <Heading level={2}>About me</Heading>
        <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
        <Text>
          情報整理や導線が考えられていて、ユーザーが意図した通りに操作できるようなユーザビリティの高いサイトやサービスが好きです。その上で、さりげなく実装されているアニメーションも好きです。
        </Text>
        <Text>
          フロントエンドの中でも、画面制作や使いやすいUIを考慮しつつコードを書くことが得意です。
        </Text>

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

        <Section>
          <SectionInner>
            <SubTitle level={3}>Contact</SubTitle>
            <Text>
              お仕事の相談、ブログに関するご意見、趣味の写真に関するお誘いは、以下のメールよりお問い合わせください。
              <br />
              もしくはSNSのDMでも大丈夫です。
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
              <StyledIconListItem>
                <ExternalLink
                  href="https://500px.com/mismith2216"
                  target="_blank"
                  aria-label="500px"
                  rel="noopener"
                >
                  <Fivehundredpx />
                </ExternalLink>
              </StyledIconListItem>
              <StyledIconListItem>
                <ExternalLink
                  href="https://github.com/mismith0227"
                  target="_blank"
                  aria-label="GitHub"
                  rel="noopener"
                >
                  <GitHub />
                </ExternalLink>
              </StyledIconListItem>
            </StyledIconList>
          </SectionInner>
        </Section>
      </StyledContainer>
    </>
  )
}
