import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Chevron } from './Icon/Chevron'

type Props = {
  pageRoot: string
  totalCount: number
  currentPage: number
  className?: string
  currentCategory?: string
  perPage: number
}

const Item = ({ children }: { children: React.ReactNode }) => {
  return <li className="flex items-center">{children}</li>
}

const ItemInner = ({
  children,
  isCurrent,
}: {
  children: React.ReactNode
  isCurrent?: boolean
}) => {
  return (
    <span
      className={twMerge(
        'flex items-center justify-center w-[28px] h-[46px] md:w-[42px] md:h-[56px] border border-black transition-all duration-200',
        `${isCurrent && 'pointer-events-none'}`
      )}
    >
      {children}
    </span>
  )
}

const StyledLink = ({
  href,
  children,
  isCurrent,
}: {
  href: string
  children: React.ReactNode
  isCurrent?: boolean
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex items-center justify-center w-full h-full no-underline hover:bg-black hover:text-white',
        `${isCurrent && 'bg-black text-white'}`
      )}
    >
      {children}
    </Link>
  )
}

export const Pagination = ({
  pageRoot,
  totalCount,
  currentPage,
  className,
  currentCategory,
  perPage,
}: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  const paginationPath = currentCategory
    ? `${pageRoot}/${currentCategory}/page`
    : `${pageRoot}/page`

  const lastPage = Math.ceil(totalCount / perPage)

  return (
    <ul className={twMerge('flex justify-center list-none gap-4', className)}>
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
              <Chevron />
            </StyledLink>
          </ItemInner>
        </Item>
      )}

      <Item key={1}>
        <ItemInner isCurrent={currentPage === 1}>
          <StyledLink href={pageRoot} isCurrent={currentPage === 1}>
            {1}
          </StyledLink>
        </ItemInner>
      </Item>
      {range(2, lastPage - 1).map((number, index) => {
        return Math.abs(currentPage - number) < 3 ? (
          <Item key={index}>
            <ItemInner isCurrent={currentPage === number}>
              <StyledLink
                href={`${paginationPath}/${number}`}
                isCurrent={currentPage === number}
              >
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
          <StyledLink
            href={`${paginationPath}/${lastPage}`}
            isCurrent={currentPage === lastPage}
          >
            {lastPage}
          </StyledLink>
        </ItemInner>
      </Item>

      {currentPage !== lastPage && (
        <Item>
          <ItemInner>
            <StyledLink href={`${paginationPath}/${currentPage + 1}`}>
              <Chevron rotate={180} />
            </StyledLink>
          </ItemInner>
        </Item>
      )}
    </ul>
  )
}
