import * as React from 'react'
import { Skills, Activities, Biographies } from './info'
import LoadingLogo from '../../molecules/LoadingLogo'

import {
  Wrap,
  Main,
  Section,
  Title,
  Name,
  SubTitle,
  Text,
  List,
  Item,
  TagList,
  TagItem,
  StyledIconList,
  ActivitiesList,
  ActivitiesListItem,
  ActivitiesListTitle,
  ActivitiesListLink,
} from './styles'

const AboutContent = () => {
  return (
    <Wrap>
      <LoadingLogo isloading={true} />
      <Main>
        <SubTitle>Web engineer</SubTitle>
        <Name>Misumi Takuma</Name>
      </Main>
      <Section>
        <Title>Profile</Title>
        <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
        <Text>
          大阪在住のwebエンジニアです。証券会社と広告媒体者で営業をした後に、webデザイナーの勉強をしweb業界に入りました。web業界では、サービス運営のデザイナー、web制作のコーダー、自社プロダクトのフロントエンドエンジニアを経験しています。
        </Text>
        <Text>
          情報整理や導線がしっかりと設計されていて、ユーザーが意図した通りに操作できるようなユーザビリティの高いサイトやサービスが好きです。その上で、さりげなく実装されているアニメーションも好きです。
        </Text>
        <Text>
          一方で、表現方法の一つとしてCanvasやthree.js等を使った目を引くアニメーションの勉強もしていこうと思っています。
        </Text>
        <Text>
          趣味は写真を撮ることで、休日や仕事の気分転換に写真を撮っています。ストリートフォトやポートレートを中心に撮影し、500pxやインスタグラムで写真を公開しています。
        </Text>
      </Section>

      <Section>
        <Title>Skills</Title>
        <Text>学習中のものもありますが、以下を使用したことがあります。</Text>
        <TagList>
          {Skills.map(skill => {
            return <TagItem key={skill}>{skill}</TagItem>
          })}
        </TagList>
      </Section>

      <Section>
        <Title>Activities</Title>
        <ActivitiesList>
          {Activities.map(activity => {
            return (
              <ActivitiesListItem key={activity.title}>
                <ActivitiesListTitle>{activity.title}</ActivitiesListTitle>
                <ActivitiesListLink href={activity.link}>
                  {activity.link}
                </ActivitiesListLink>
              </ActivitiesListItem>
            )
          })}
        </ActivitiesList>
      </Section>

      <Section>
        <Title>SNS</Title>
        <StyledIconList />
      </Section>

      <Section>
        <Title>Biography</Title>
        <List>
          {Biographies.map(biography => {
            return <Item>{biography}</Item>
          })}
        </List>
      </Section>
    </Wrap>
  )
}

export default AboutContent
