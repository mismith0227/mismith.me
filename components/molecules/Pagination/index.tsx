import Link from 'next/link'
import media from '@/styles/media'
import styled from '@emotion/styled'
import { Chevron } from '@/components/atoms/Icon/Chevron'
import { BLOG_PER_PAGE } from '@/settings/siteSettings'

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 16px;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  align-items: center;
`

type ItemInnerProps = {
  isCurrent?: boolean
}

const ItemInner = styled.span<ItemInnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 56px;
  box-sizing: border-box;
  border: 1px solid #000;
  transition: 0.2s;
  ${({ isCurrent }) => isCurrent && `pointer-events: none;`}

  ${media.small} {
    width: 28px;
    height: 46px;
  }

  a {
    color: ${({ isCurrent }) => (isCurrent ? `#fff` : `#000`)};
    background-color: ${({ isCurrent }) => (isCurrent ? `#000` : `#fff`)};
  }
`

const StyledLink = styled(Link)<ItemInnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const StyledChevron = styled(Chevron)`
  font-size: 18px;
`

type Props = {
  pageRoot: string
  totalCount: number
  currentPage: number
  className?: string
  currentCategory?: string
}

export const Pagination = ({
  pageRoot,
  totalCount,
  currentPage,
  className,
  currentCategory,
}: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paginationPath = currentCategory
    ? `${pageRoot}/${currentCategory}/page`
    : `${pageRoot}/page`

  const lastPage = Math.ceil(totalCount / BLOG_PER_PAGE)

  return (
    <Container className={className}>
      {currentPage !== 1 && (
        <Item>
          <ItemInner>
            <StyledLink
              href={
                currentPage - 1 === 1
                  ? pageRoot
                  : `${paginationPath}/${currentPage - 1}`
              }
            >
              <StyledChevron />
            </StyledLink>
          </ItemInner>
        </Item>
      )}

      <Item key={1}>
        <ItemInner isCurrent={currentPage === 1}>
          <StyledLink href={pageRoot}>{1}</StyledLink>
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
