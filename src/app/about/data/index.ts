export const links = [
  {
    href: 'https://twitter.com/misumi_takuma/',
    label: 'X',
    id: 'x',
  },
  {
    href: 'https://www.instagram.com/mismith0227/?hl=ja',
    label: 'Instagram',
    id: 'instagram',
  },
  {
    href: 'https://note.com/mismith',
    label: 'Note',
    id: 'note',
  },
  {
    href: 'https://github.com/mismith0227',
    label: 'Github',
    id: 'github',
  },
]

export const biographies = [
  {
    id: '2022-02',
    startDate: '2022.02',
    belongs: 'フリーランス',
    role: 'フロントエンドエンジニア',
    detail: 'webアプリやwebサービスの制作に携わっています。',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Git', 'Shopify'],
  },
  {
    id: '2021-09',
    startDate: '2021.09',
    endDate: '2022.01',
    belongs: '制作会社',
    role: 'フロントエンドエンジニア',
    detail:
      'コーディングだけでなく、フロントエンド業務全般の管理、技術ディレクション、技術サポートなどを行いました。\n案件としては、コーポレート、教育機関、リクルート、キャンペーンなどのwebサイトや社内システムなどのwebアプリの制作に携わりました。',
    skills: [
      'EJS',
      'Pug',
      'Sass',
      'JavaScript',
      'React',
      'gulp',
      'webpack',
      'Storybook',
      'Git',
    ],
  },
  {
    id: '2020-04',
    startDate: '2020.4',
    endDate: '2021.08',
    belongs: '制作会社',
    role: 'フロントエンドエンジニア',
    detail:
      '受託開発で業務支援ツールの開発や、コーポレートサイトやアーティストサイトのコーディングをしました。',
    skills: [
      'React',
      'EJS',
      'Sass',
      'JavaScript',
      'TypeScript',
      'gulp',
      'webpack',
      'Git',
      'リモートワーク',
      'API設計',
    ],
  },
  {
    id: '2016-10',
    startDate: '2016.10',
    endDate: '2020.03',
    belongs: 'スタートアップ',
    role: 'フロントエンドエンジニア',
    detail:
      '自社開発の業務支援ツールのフロントエンド開発やプロダクトサイトのコーディングをしました。',
    skills: [
      'Angular(1.x)',
      'React',
      'Sass',
      'jQuery',
      'WordPress',
      'gulp',
      'webpack',
      'Git',
      'リモートワーク',
    ],
  },
  {
    id: '2015-08',
    startDate: '2015.07',
    endDate: '2016.09',
    belongs: '制作会社',
    role: 'マークアップエンジニア',
    detail:
      '大手のコーポレートサイトや会員制サービスサイトから、大学入試サイト、ECサイト、スマホゲームなど幅広い案件のコーディングを経験しました。',
    skills: ['HTML', 'EJS', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'gulp'],
  },
  {
    id: '2014-06',
    startDate: '2014.06',
    endDate: '2015.06',
    belongs: 'webサービス会社',
    role: 'デザイナー',
    detail:
      'サービスの新規会員やアクティブユーザーの獲得、有料会員への誘導方法などを考えるなどの、サービスの改善に携わりました。\n業務内容はデザイナーというよりディレクションに近いです。',
    skills: ['画面設計', '解析', 'HTML', 'CSS', 'Sass'],
  },
  {
    id: '2013-03',
    startDate: '2013.03',
    endDate: '2013.10',
    belongs: '広告媒体社',
    role: '営業',
  },
  {
    id: '2011-04',
    startDate: '2011.04',
    endDate: '2013.02',
    belongs: '証券会社',
    role: '営業',
  },
]

export const booksData = [
  {
    id: 'zine',
    heading: 'Zine',
    items: [
      {
        id: '2025-06-tread-on-snow',
        date: '2025.06',
        name: 'Tread on snow',
        link: 'https://shop.mismith.me/items/108666474',
      },
      {
        id: '2024-06-what-i-saw',
        date: '2024.06',
        name: 'What I Saw',
        link: 'https://shop.mismith.me/items/94783433',
      },
      {
        id: '2023-06-one',
        date: '2023.06',
        name: 'ONE',
        link: 'https://shop.mismith.me/items/75504256',
      },
    ],
  },
]

export const exhibitionsData = [
  {
    id: 'solo',
    heading: '個展',
    items: [
      {
        id: '2024-03-saien',
        date: '2024.03',
        name: '「祭縁」',
        link: 'https://note.com/mismith/n/n31cfecb99fae',
      },
    ],
  },
]

export const worksData = [
  {
    id: '2022-07-tacica',
    date: '2022.07',
    name: 'tacica「singularity」歌詞カード',
    link: '/blog/other/tacica-singularity',
    isExternal: false,
  },
]

type AwardItem = {
  id: string
  date: string
  name: string
  rank: string
  link?: string
  country?: string
}

export const featuredInData = [
  {
    id: '2024-04-cizucu',
    date: '2024.4',
    name: 'cizucu Magazine',
    link: 'https://www.cizucu.com/magazines/2024-04-mismith',
  },
]

export const awardData = [
  {
    id: 'domestic',
    heading: '国内',
    items: [
      {
        id: '2025-2-apa-award',
        date: '2025',
        name: 'APA AWARD 2025 写真作品部門',
        rank: '入選',
        link: 'https://apa.or.jp/award-gallery/ph/2025/',
      },
      {
        id: '2024-9-sagamihara',
        date: '2024',
        name: 'フォトシティさがみはら2024 アマチュアの部',
        rank: '入選',
        link: 'https://www.city.sagamihara.kanagawa.jp/_res/projects/default_project/_page_/001/031/272/ichiran2.pdf',
      },
    ],
  },
  {
    id: 'overseas',
    heading: '海外',
    items: [
      {
        id: '2025-critical-mass',
        date: '2025',
        name: 'Critical Mass 2025',
        rank: 'Top 200',
        link: 'https://www.photolucida.org/announcing-critical-mass-2025-top-200',
      },
      {
        id: '2025-dummy-award',
        date: '2025',
        name: 'Dummy Award 2025',
        rank: 'Shortlist',
        country: 'Germany',
        link: 'https://dummyaward.org/dummy-award-2025',
      },
    ],
  },
] satisfies { id: string; heading: string; items: AwardItem[] }[]
