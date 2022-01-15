import Link from 'next/link'
import { Container, Item, StyledLink, StyledChevron } from './styles'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'
import { Props } from './types'

export const Pagination = ({
  totalCount,
  currentPage,
  className,
  currentCategory,
}: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paginationPath = currentCategory
    ? `/blog/${currentCategory}/page`
    : `/blog/page`

  const lastPage = Math.ceil(totalCount / BLOG_PER_PAGE)

  return (
    <Container className={className}>
      {currentPage !== 1 && (
        <Item>
          <Link href={`${paginationPath}/${currentPage - 1}`} passHref>
            <StyledLink>
              <StyledChevron />
            </StyledLink>
          </Link>
        </Item>
      )}

      <Item key={1}>
        <Link href={`${paginationPath}/${1}`} passHref>
          <StyledLink isCurrent={currentPage === 1}>{1}</StyledLink>
        </Link>
      </Item>
      {range(2, lastPage - 1).map((number, index) => {
        return Math.abs(currentPage - number) < 3 ? (
          <Item key={index}>
            <Link href={`${paginationPath}/${number}`} passHref>
              <StyledLink isCurrent={currentPage === number}>
                {number}
              </StyledLink>
            </Link>
          </Item>
        ) : (
          Math.abs(currentPage - number) === 3 && <Item key={index}>...</Item>
        )
      })}
      <Item key={lastPage}>
        <Link href={`${paginationPath}/${lastPage}`} passHref>
          <StyledLink isCurrent={currentPage === lastPage}>
            {lastPage}
          </StyledLink>
        </Link>
      </Item>

      {currentPage !== lastPage && (
        <Item>
          <Link href={`${paginationPath}/${currentPage + 1}`} passHref>
            <StyledLink>
              <StyledChevron rotate={180} />
            </StyledLink>
          </Link>
        </Item>
      )}
    </Container>
  )
}
