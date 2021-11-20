import Link from 'next/link'
import { Container } from './styles'

type Props = {
  totalCount: number
}

export const Pagination = ({ totalCount }: Props) => {
  const PER_PAGE = 5

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <Container>
      <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li key={index}>
            <Link href={`/blog/page/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
