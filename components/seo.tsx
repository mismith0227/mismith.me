import Head from 'next/head'

interface Props {
  description: string
  title: string
}

const Seo: React.FC<Props> = ({ description, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Seo
