import { Container } from '@/src/components/Container'
import { Heading } from '@/src/components/Heading'
import { Instagram } from '@/src/components/Icon/Instagram'
import { Xlogo } from '@/src/components/Icon/Xlogo'
import { Metadata } from 'next'

const title = 'Request'
const description = 'Requestページ'

export const metadata: Metadata = {
  title: title,
  description: description,
}

export default async function Request() {
  return (
    <Container size="lg">
      <Heading>Request</Heading>
      <p className="mt-[24px]">
        web関係の仕事、撮影依頼、写真の使用許諾、メディア掲載など、
        <br />
        webや写真のことに関してなら何でもご相談・ご依頼ください。
        <br />
        写真に関してはプライベートワークでもあり、必ずしも有償とは限らないので、お気軽にご連絡ください。
      </p>

      <div className="mt-20 max-w-[650px]">
        <Heading level={2}>お問い合わせ先</Heading>

        <p className="mt-[24px]">
          お問合せは、以下のメールアドレスよりお問い合わせください。
        </p>

        <p>mismith2227@gmail.com</p>

        <p className="mt-[24px]">もしくは下記SNSのDMでも大丈夫です。</p>

        <ul className="flex mt-6 gap-4 p-0 list-none">
          <li className="transition duration-200 hover:opacity-60">
            <a
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="X"
              rel="noopener"
              className="block text-black"
            >
              <Xlogo />
            </a>
          </li>
          <li className="transition duration-200 hover:opacity-60">
            <a
              href="https://www.instagram.com/mismith0227/?hl=ja"
              target="_blank"
              aria-label="Instagram"
              rel="noopener"
              className="block text-black"
            >
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
