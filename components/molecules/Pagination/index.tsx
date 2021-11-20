import Link from 'next/link'
import { Container, Item, StyledLink } from './styles'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'

type Props = {
  totalCount: number
  currentPage: number
  className?: string
}

export const Pagination = ({ totalCount, currentPage, className }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <Container className={className}>
      {range(1, Math.ceil(totalCount / BLOG_PER_PAGE)).map((number, index) => (
        <Item key={index}>
          <Link href={`/blog/page/${number}`} passHref>
            <StyledLink isCurrent={currentPage === number}>{number}</StyledLink>
          </Link>
        </Item>
      ))}
    </Container>
  )
}
