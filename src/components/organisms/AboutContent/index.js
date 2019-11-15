import * as React from 'react'

import {
  Wrap,
  ProfileWrap,
  IconWrap,
  ProfileImg,
  Section,
  Title,
  Name,
  Text,
  List,
  Item,
  TagList,
  TagItem,
  StyledIconList,
} from './styles'

const AboutContent = props => {
  return (
    <Wrap>
      <ProfileWrap>
        <IconWrap>
          <ProfileImg src="https://pbs.twimg.com/profile_images/1176903104442142720/UO3wHvoE.jpg" />
        </IconWrap>
        <Name>Misumi Takuma</Name>
      </ProfileWrap>
      <Section>
        <Title>Profile</Title>
        <Text>1989年2月27日生まれ。大阪在住のwebエンジニア</Text>
        <Text>
          HTML,CSS,JavaScriptといったフロントエンドの領域が主な領域です。リモートワークで東京の会社に勤めており、会社のタスクやスキルアップに力を注いでいますが、余力があれば個人の仕事も受けています。
        </Text>
        <Text>
          趣味は写真を撮ることで、休日や仕事の気分転換に写真を撮っています。ストリートフォトやポートレートを中心に撮影し、500pxやインスタグラムで写真を公開しています。
        </Text>
      </Section>

      <Section>
        <Title>Skills</Title>
        <Text>学習中のものもありますが、以下を使用したことがあります。</Text>
        <TagList>
          <TagItem>HTML</TagItem>
          <TagItem>CSS</TagItem>
          <TagItem>JavaScript</TagItem>
          <TagItem>React</TagItem>
          <TagItem>Nuxt(Vue)</TagItem>
          <TagItem>AngularJs(1.x)</TagItem>
          <TagItem>TypeScript</TagItem>
          <TagItem>WordPress</TagItem>
          <TagItem>FIrebase</TagItem>
          <TagItem>Amplify</TagItem>
        </TagList>
      </Section>

      <Section>
        <Title>SNS</Title>
        <StyledIconList />
      </Section>

      <Section>
        <Title>Biography</Title>
        <List>
          <Item>2011年3月 大学卒業</Item>
          <Item>2011年4月 証券会社で営業</Item>
          <Item>2013年3月 媒体社で広告営業</Item>
          <Item>2013年10月 webデザイナーの勉強</Item>
          <Item>2014年6月 サービス運用会社のwebデザイナー</Item>
          <Item>2015年8月 制作会社でマークアップエンジニア</Item>
          <Item>2016年10月 現在の会社</Item>
        </List>
      </Section>
    </Wrap>
  )
}

export default AboutContent
