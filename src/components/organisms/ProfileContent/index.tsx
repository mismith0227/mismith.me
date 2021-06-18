import * as React from 'react'
import {
  Container,
  Title,
  Section,
  SectionInner,
  SectionTitle,
  Text,
  Tags,
  TagItem,
  Biographies,
  BiographyItem,
  BiographyRight,
  BiographyDate,
  BiographyTitle,
  BiographyDetail,
  BiographySkills,
  BiographySkillItem,
  Activity,
  ActivityItem,
  ActivityTerm,
  ActivityDescription,
  SnsList,
  SnsItem,
  ExternalLink,
} from './styles'
import { skills, biographies, activities } from './data'
import { Biography } from './types'
import { GitHub } from '../../atoms/Icon/GitHub'
import { Twitter } from '../../atoms/Icon/Twitter'
import { Instagram } from '../../atoms/Icon/Instagram'
import { Fivehundredpx } from '../../atoms/Icon/Fivehundredpx'

type Props = {}

export const ProfileContent = ({}: Props) => (
  <Container>
    <Title>Profile</Title>

    <Section>
      <SectionTitle>About me</SectionTitle>

      <SectionInner>
        <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
        <Text>
          証券会社と広告媒体社で営業をした後に、webデザイナーの勉強をしweb業界に入りました。web業界では、サービス運営のデザイナー、web制作のコーダー、自社プロダクトのフロントエンドエンジニアを経験しています。
        </Text>
        <Text>
          情報整理や導線がしっかりと設計されていて、ユーザーが意図した通りに操作できるようなユーザビリティの高いサイトやサービスが好きです。その上で、さりげなく実装されているアニメーションも好きです。一方で、表現方法の一つとしてthree.js等を使った目を引くアニメーションの勉強しています。
        </Text>
        <Text>
          コーディングをすることが多いですが、一時期デザイナー経験もあることから使い勝手や情報整理がされているかなどを考えつつコーディングすることが強みです。時にはこっちの実装の方がいいのではと提案することもあります。
        </Text>
        <Text>
          趣味は写真を撮ることで、休日や仕事の気分転換に写真を撮っています。ストリートフォトやポートレートを中心に撮影し、500pxやインスタグラムで写真を公開しています。
        </Text>

        <SnsList>
          <SnsItem>
            <ExternalLink
              href="https://github.com/mismith0227"
              target="_blank"
              aria-label="GitHub"
              rel="noopener"
            >
              <GitHub />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener"
            >
              <Twitter />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
            >
              <Instagram />
            </ExternalLink>
          </SnsItem>
          <SnsItem>
            <ExternalLink
              href="https://500px.com/mismith2216"
              target="_blank"
              aria-label="500px"
              rel="noopener"
            >
              <Fivehundredpx />
            </ExternalLink>
          </SnsItem>
        </SnsList>
      </SectionInner>
    </Section>

    <Section>
      <SectionTitle>Skills</SectionTitle>
      <SectionInner>
        <Text>
          以下は使用したことがある技術です。仕事では主にHTML、CSS、JavaScriptを使ったフロントエンド領域を担当することが多いです。趣味で開発する時にはReact、Firestoreを使ったりします
        </Text>
        <Tags>
          {skills.map((item) => (
            <TagItem key={item}>{item}</TagItem>
          ))}
        </Tags>
      </SectionInner>
    </Section>

    <Section>
      <SectionTitle>Biography</SectionTitle>

      <SectionInner>
        <Biographies>
          {biographies.map((item: Biography) => (
            <BiographyItem key={item.date}>
              <BiographyDate>{item.date}</BiographyDate>
              <BiographyRight>
                <BiographyTitle>{item.title}</BiographyTitle>
                {BiographyDetail && (
                  <BiographyDetail>{item.detail}</BiographyDetail>
                )}
                {item.skills && (
                  <BiographySkills>
                    {item.skills.map((item) => (
                      <BiographySkillItem key={item}>{item}</BiographySkillItem>
                    ))}
                  </BiographySkills>
                )}
              </BiographyRight>
            </BiographyItem>
          ))}
        </Biographies>
      </SectionInner>
    </Section>

    <Section>
      <SectionTitle>Activities</SectionTitle>

      <SectionInner>
        <Activity>
          {activities.map((item) => (
            <ActivityItem key={item.title}>
              <ActivityTerm>{item.title}</ActivityTerm>
              <ActivityDescription>
                <ExternalLink
                  href={item.link}
                  target="_blank"
                  aria-label={item.title}
                  rel="noopener"
                >
                  {item.link}
                </ExternalLink>
              </ActivityDescription>
            </ActivityItem>
          ))}
        </Activity>
      </SectionInner>
    </Section>
  </Container>
)
