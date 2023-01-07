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
                <StyledLink href="/">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/gallery">Gallery</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/about">About</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink href="/blog">Blog</StyledLink>
              </ListItem>
            </List>
          </ListWrap>

          <ListWrap>
            <ListTitle>Terms</ListTitle>
            <List>
              <ListItem>
                <StyledLink href="/policy">Policy</StyledLink>
              </ListItem>
            </List>
          </ListWrap>

          <ListWrap>
            <ListTitle>Links</ListTitle>
            <List>
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
                  href="https://github.com/mismith0227"
                  target="_blank"
                  aria-label="GitHub"
                  rel="noopener"
                >
                  GitHub
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
