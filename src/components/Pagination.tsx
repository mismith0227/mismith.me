import Link from 'next/link'

type Props = {
  pageRoot: string
  totalCount: number
  currentPage: number
  className?: string
  currentCategory?: string
  perPage: number
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
    <ul className={className}>
      {currentPage !== 1 && (
        <li>
          <span>
            <Link
              href={
                currentPage - 1 === 1
                  ? pageRoot
                  : `${paginationPath}/${currentPage - 1}`
              }
            >
              前
            </Link>
          </span>
        </li>
      )}

      <li key={1}>
        <span>
          <Link href={pageRoot}>{1}</Link>
        </span>
      </li>
      {range(2, lastPage - 1).map((number, index) => {
        return Math.abs(currentPage - number) < 3 ? (
          <li key={index}>
            <span>
              <Link href={`${paginationPath}/${number}`}>{number}</Link>
            </span>
          </li>
        ) : (
          Math.abs(currentPage - number) === 3 && <li key={index}>...</li>
        )
      })}
      <li key={lastPage}>
        <span>
          <Link href={`${paginationPath}/${lastPage}`}>{lastPage}</Link>
        </span>
      </li>

      {currentPage !== lastPage && (
        <li>
          <span>
            <Link href={`${paginationPath}/${currentPage + 1}`} passHref>
              後
            </Link>
          </span>
        </li>
      )}
    </ul>
  )
}
