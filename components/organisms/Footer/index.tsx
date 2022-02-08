import Link from 'next/link'
import {
  Wrap,
  StyledContainer,
  CopyRight,
  StyledLink,
  Content,
  ListWrap,
  ListTitle,
  List,
  ListItem,
} from './styles'
import { Props } from './types'

export const Footer = ({ className }: Props) => {
  return (
    <Wrap className={className}>
      <StyledContainer size="lg">
        <Content>
          <ListWrap>
            <ListTitle>Pages</ListTitle>
            <List>
              <ListItem>
                <Link href="/" passHref>
                  <StyledLink>Home</StyledLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/works" passHref>
                  <StyledLink>Works</StyledLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/blog" passHref>
                  <StyledLink>Blog</StyledLink>
                </Link>
              </ListItem>
            </List>
          </ListWrap>

          <ListWrap>
            <ListTitle>Terms</ListTitle>
            <List>
              <ListItem>
                <Link href="/policy" passHref>
                  <StyledLink>Policy</StyledLink>
                </Link>
              </ListItem>
            </List>
          </ListWrap>

          <ListWrap>
            <ListTitle>Links</ListTitle>
            <List>
              <ListItem>
                <StyledLink
                  href="https://github.com/mismith0227"
                  target="_blank"
                  aria-label="GitHub"
                  rel="noopener"
                >
                  GitHub
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://zenn.dev/misumith"
                  target="_blank"
                  aria-label="Zenn"
                  rel="noopener"
                >
                  Zenn
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://twitter.com/misumi_takuma/"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener"
                >
                  Twitter
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://www.instagram.com/mismith0227/?hl=ja"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener"
                >
                  Instagram
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://500px.com/mismith2216"
                  target="_blank"
                  aria-label="500px"
                  rel="noopener"
                >
                  500px
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://codepen.io/mismith0227"
                  target="_blank"
                  aria-label="codepen"
                  rel="noopener"
                >
                  Codepen
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink
                  href="https://www.mismith.me/feed"
                  target="_blank"
                  aria-label="rss"
                  rel="noopener"
                >
                  RSS
                </StyledLink>
              </ListItem>
            </List>
          </ListWrap>
        </Content>

        <CopyRight>© {new Date().getFullYear()}, misumi_takuma</CopyRight>
      </StyledContainer>
    </Wrap>
  )
}
