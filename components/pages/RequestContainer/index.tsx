import { Heading } from '@/components/atoms/Heading'
import {
  StyledContainer,
  Content,
  Section,
  Text,
  Email,
  StyledIconList,
  StyledIconListItem,
  ExternalLink,
} from './styles'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Instagram } from '@/components/atoms/Icon/Instagram'

export const RequestContainer = () => (
  <StyledContainer>
    <Heading>Request</Heading>
    <Text>
      web関係の仕事、撮影依頼、写真の使用許諾、メディア掲載など、
      <br />
      webや写真のことに関してなら何でもご相談・ご依頼ください。
      <br />
      写真に関してはプライベートの延長でもあり、必ずしも有償とは限らないので、お気軽にご連絡ください。
    </Text>

    <Content>
      <Section>
        <Heading level={2}>お問合せ先</Heading>

        <Text>お問合せは、以下のメールよりお問い合わせください。</Text>

        <Email>mismith2227@gmail.com</Email>

        <Text>もしくは下記SNSのDMでも大丈夫です。</Text>

        <StyledIconList>
          <StyledIconListItem>
            <ExternalLink
              href="https://twitter.com/misumi_takuma/"
              target="_blank"
              aria-label="X"
              rel="noopener"
            >
              <Xlogo />
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
        </StyledIconList>
      </Section>
    </Content>
  </StyledContainer>
)
