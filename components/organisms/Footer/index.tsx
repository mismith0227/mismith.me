import Link from 'next/link'
import {
  Container,
  CopyRight,
  StyledLink,
  FooterList,
  FooterListItem,
} from './styles'

type Props = {
  className?: string
}

export const Footer = ({ className }: Props) => {
  return (
    <Container className={className}>
      <FooterList>
        <FooterListItem>
          <Link href="/about" passHref>
            <StyledLink>このサイトについて</StyledLink>
          </Link>
        </FooterListItem>
      </FooterList>

      <CopyRight>© {new Date().getFullYear()}, misumi_takuma</CopyRight>
    </Container>
  )
}
