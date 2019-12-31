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
  ActivitiesList,
  ActivitiesListItem,
  ActivitiesListTitle,
  ActivitiesListLink,
} from './styles'

const AboutContent = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Nuxt(Vue)',
    'AngularJs(1.x)',
    'TypeScript',
    'WordPress',
    'Firebase',
    'Amplify',
  ]
  const activities = [
    {
      title: 'カンパイ本町を支える技術',
      link:
        'https://speakerdeck.com/mismith0227/kanpaiben-ting-wozhi-eruji-shu',
    },
    {
      title: 'WP REST APIとReact Nativeを使ってマガジンアプリを作る',
      link:
        'https://speakerdeck.com/mismith0227/wp-rest-apitoreact-nativewoshi-tutemakasinahuriwozuo-ru',
    },
    {
      title: 'Material - UI v1が 出そうなので使ってみた',
      link:
        'https://speakerdeck.com/mismith0227/material-ui-v1ga-chu-sounafalsedeshi-tutemita',
    },
    {
      title: 'なんか作ってサーバーレスに触れてみた',
      link:
        'https://speakerdeck.com/mismith0227/nankazuo-tutesabaresunihong-retemita',
    },
    {
      title: 'React Nativeが 楽しく感じるまでの話',
      link:
        'https://speakerdeck.com/mismith0227/react-nativega-le-sikugan-zirumadefalsehua',
    },
    {
      title: 'ブログ更新してますか？？ブログを続けていてよかったこと',
      link:
        'https://speakerdeck.com/mismith0227/burogugeng-xin-sitemasuka-buroguwosok-keteiteyokatutakoto?slide=15',
    },
    {
      title: 'PostCSSを導入してみた話と プラグインいろいろ',
      link:
        'https://speakerdeck.com/mismith0227/postcsswodao-ru-sitemitahua-to-puraguiniroiro',
    },
    {
      title: 'ハロウィンで使える CSSトリック',
      link: 'https://speakerdeck.com/mismith0227/harouindeshi-eru-csstorituku',
    },
    {
      title: 'CSSで変態的にイラストを描く',
      link:
        'https://speakerdeck.com/mismith0227/csstebian-tai-de-niirasutowomiao-ku',
    },
    {
      title:
        'これからWordPressを頑張りたい人へ。子テーマを作って公式テーマディレクトリに登録しよう！',
      link:
        'https://speakerdeck.com/mismith0227/korekarawordpresswowan-zhang-ritairen-he-zi-temawozuo-tutegong-shi-temadeirekutorinideng-lu-siyou',
    },
    {
      title:
        'WordPressでオリジナルサイト作り超入門。子テーマでテーマ作成・カスタマイズをやってみよう！',
      link:
        'https://speakerdeck.com/mismith0227/wordpressdeorizinarusaitozuo-richao-ru-men-zi-temadetemazuo-cheng-kasutamaizuwoyatutemiyou-1',
    },
  ]
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
          {skills.map(skill => {
            return <TagItem key={skill}>{skill}</TagItem>
          })}
        </TagList>
      </Section>

      <Section>
        <Title>Activities</Title>
        <ActivitiesList>
          {activities.map(activity => {
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
