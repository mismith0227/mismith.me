import {
  Container,
  Title,
  Content,
  Section,
  SectionTitle,
  SectionTitleSecondary,
  Text,
} from './styles'

export const AboutContent = () => (
  <Container>
    <Title>About</Title>

    <Content>
      <Section>
        <SectionTitle>Privacy Policy</SectionTitle>
        <SectionTitleSecondary>
          アクセス解析ツールについて
        </SectionTitleSecondary>
        <Text>
          当ブログでは、アクセス解析ツールGoogle
          Analyticsを利用したトラフィックデータ収集のためにCookie（クッキー）を利用しています。
          この情報は匿名で収集され個人を特定するものではありません。このトラフィックデータ収集は、ブラウザ設定でCookieを無効にすることで拒否できます。
          詳しくは
          <a
            rel="noreferrer"
            href="https://policies.google.com/technologies/partner-sites?hl=ja"
            target="_blank"
          >
            こちら
          </a>
          をご確認ください。
        </Text>
      </Section>

      <Section>
        <SectionTitle>免責事項</SectionTitle>

        <Text>
          当サイトに掲載されている情報の正確さについて可能な限り努力をしていますが、
          その正確性や適切性に問題がある場合、告知無しに情報を変更・削除する事があります。
          <br />
          当ブログの情報を用いて行う一切の行為、被った損害・損失に対しては、一切の責任を負いかねます。ご了承ください。
          <br />
          必ず各リンク先、オフィシャルサイトなどをご参照頂き、ご自身の判断、責任にてご利用頂きますようお願い申し上げます。
          <br />
          本免責事項及び、当サイトに記載されている情報は予告なしに変更、または削除されることがあります。予めご了承下さい。
        </Text>
      </Section>
    </Content>
  </Container>
)
