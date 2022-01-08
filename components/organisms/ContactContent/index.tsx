import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Instagram } from '@/components/atoms/Icon/Instagram'
import {
  Container,
  Title,
  Text,
  Content,
  Email,
  SnsList,
  SnsItem,
  ExternalLink,
  StyledIconList,
  StyledIconListItem,
} from './styles'

export const ContactContent = () => (
  <Container>
    <Title>Contact</Title>

    <Content>
      <Text>
        お仕事の相談、ブログに関するご意見、趣味の写真に関するお誘いは、以下のメールよりお問い合わせください。
        <br />
        もしくはSNSのDMでも大丈夫です。
      </Text>
      <Email>doraepon2216@gmail.com</Email>
      <StyledIconList>
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
      </StyledIconList>
    </Content>
  </Container>
)
