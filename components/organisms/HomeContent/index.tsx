// import { Canvas, useFrame } from '@react-three/fiber'
// import { Tetrahedron } from '@react-three/drei'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MainVisual,
  MainVisualText,
  Scroll,
  ScrollInner,
  StyledContainer,
  Section,
  SectionInner,
  SectionTitle,
  Text,
  Biographies,
  BiographyItem,
  BiographyRight,
  BiographyDate,
  BiographyTitle,
  BiographyDetail,
  Activity,
  ActivityItem,
  ActivityTerm,
  ActivityDescription,
  ExternalLink,
  SubTitle,
  StyledTagList,
  StyledIconList,
  StyledIconListItem,
} from './styles'
import { skills, biographies, activities } from './data'
import { Biography } from './types'
import { GitHub } from '@/components/atoms/Icon/GitHub'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import { Fivehundredpx } from '@/components/atoms/Icon/Fivehundredpx'
import { Codepen } from '@/components/atoms/Icon/CodePen'

type Props = {
  onCreated: (value: boolean) => void
}

type queueItem = {
  char?: string
  end: number
  from: string
  start: number
  to: string
}

export const HomeContent = ({ onCreated }: Props) => {
  // React.useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   fadeInAnimation()
  // }, [])

  // const fadeInAnimation = () => {
  //   gsap.registerEffect({
  //     name: 'scrollSlideIn',
  //     defaults: { duration: 2 },
  //     effect: (targets: string[]) => {
  //       return gsap.from(targets, {
  //         scrollTrigger: { trigger: targets },
  //         y: 150,
  //         opacity: 0,
  //         duration: 1,
  //         delay: 0.2,
  //       })
  //     },
  //   })

  //   document.querySelectorAll('section').forEach((box) => {
  //     gsap.effects.scrollSlideIn(box)
  //   })
  // }

  return (
    <>
      <MainVisual>
        <MainVisualText>
          Web Developer based in Osaka. I deliver value with front-end
          technology.
        </MainVisualText>
        <Scroll>
          <ScrollInner></ScrollInner>
        </Scroll>
      </MainVisual>

      <StyledContainer>
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
                    {item.skills && <StyledTagList items={item.skills} />}
                  </BiographyRight>
                </BiographyItem>
              ))}
            </Biographies>
          </SectionInner>
        </Section>

        <Section>
          <SectionTitle>About me</SectionTitle>

          <SectionInner>
            <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
            <Text>
              情報整理や導線が考えられていて、ユーザーが意図した通りに操作できるようなユーザビリティの高いサイトやサービスが好きです。その上で、さりげなく実装されているアニメーションも好きです。
            </Text>
            <Text>
              コーディングをすることが多いですが、デザイナー経験もあることから使いやすさを考えたり、情報整理がされているかを考え、時には提案しつつ、コーディングすることが強みです。
            </Text>

            <SubTitle>Skill</SubTitle>

            <Text>
              以下は使用したことがある技術です。仕事では主にHTML、CSS、JavaScriptを使ったフロントエンド領域を担当することが多いです。趣味で開発する時にはReact、Firestoreを使ったりします。
            </Text>

            <StyledTagList items={skills} />

            <SubTitle>SNS</SubTitle>
            <Text>
              趣味は写真を撮ることで、休日や仕事の気分転換に写真を撮っています。ストリートフォトやポートレートを中心に撮影し、500pxやインスタグラムで写真を公開しています。
            </Text>
            <StyledIconList>
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
                  href="https://codepen.io/mismith0227"
                  target="_blank"
                  aria-label="codepen"
                  rel="noopener"
                >
                  <Codepen />
                </ExternalLink>
              </StyledIconListItem>
            </StyledIconList>
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
      </StyledContainer>
    </>
  )
}
