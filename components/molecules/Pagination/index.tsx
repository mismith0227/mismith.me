import { Container, Item, StyledLink, StyledChevron, ItemInner } from './styles'
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
          <ItemInner>
            <StyledLink href={`${paginationPath}/${currentPage - 1}`}>
              <StyledChevron />
            </StyledLink>
          </ItemInner>
        </Item>
      )}

      <Item key={1}>
        <ItemInner isCurrent={currentPage === 1}>
          <StyledLink href={`${paginationPath}/${1}`}>{1}</StyledLink>
        </ItemInner>
      </Item>
      {range(2, lastPage - 1).map((number, index) => {
        return Math.abs(currentPage - number) < 3 ? (
          <Item key={index}>
            <ItemInner isCurrent={currentPage === number}>
              <StyledLink href={`${paginationPath}/${number}`}>
                {number}
              </StyledLink>
            </ItemInner>
          </Item>
        ) : (
          Math.abs(currentPage - number) === 3 && <Item key={index}>...</Item>
        )
      })}
      <Item key={lastPage}>
        <ItemInner isCurrent={currentPage === lastPage}>
          <StyledLink href={`${paginationPath}/${lastPage}`}>
            {lastPage}
          </StyledLink>
        </ItemInner>
      </Item>

      {currentPage !== lastPage && (
        <Item>
          <ItemInner>
            <StyledLink href={`${paginationPath}/${currentPage + 1}`} passHref>
              <StyledChevron rotate={180} />
            </StyledLink>
          </ItemInner>
        </Item>
      )}
    </Container>
  )
}
