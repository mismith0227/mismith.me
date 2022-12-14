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
          <StyledLink href={`${paginationPath}/${currentPage - 1}`}>
            <StyledChevron />
          </StyledLink>
        </Item>
      )}

      <Item key={1}>
        <StyledLink
          href={`${paginationPath}/${1}`}
          isCurrent={currentPage === 1}
        >
          {1}
        </StyledLink>
      </Item>
      {range(2, lastPage - 1).map((number, index) => {
        return Math.abs(currentPage - number) < 3 ? (
          <Item key={index}>
            <StyledLink
              href={`${paginationPath}/${number}`}
              isCurrent={currentPage === number}
            >
              {number}
            </StyledLink>
          </Item>
        ) : (
          Math.abs(currentPage - number) === 3 && <Item key={index}>...</Item>
        )
      })}
      <Item key={lastPage}>
        <StyledLink
          href={`${paginationPath}/${lastPage}`}
          isCurrent={currentPage === lastPage}
        >
          {lastPage}
        </StyledLink>
      </Item>

      {currentPage !== lastPage && (
        <Item>
          <StyledLink href={`${paginationPath}/${currentPage + 1}`} passHref>
            <StyledChevron rotate={180} />
          </StyledLink>
        </Item>
      )}
    </Container>
  )
}
