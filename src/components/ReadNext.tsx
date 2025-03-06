import { Blog } from '@/types/Blog'
import { formatDate } from '@/utils/formatDate'
import Link from 'next/link'

type Props = {
  readNestPosts: Blog[]
  className?: string
}

export const ReadNext = (props: Props) => {
  const { className, readNestPosts } = props
  return (
    <div className={className}>
      <h3 className="text-[24px] md:text-[32px]">Read next</h3>
      <ul>
        {readNestPosts.map((r) => {
          return (
            <li key={r.id} className="mt-[24px]">
              <span className="block text-xs font-bold">
                {formatDate(r.publishedAt)}
              </span>
              <Link
                href={`/blog/${r.category.id}/${r.id}`}
                className="font-bold text-black hover:no-underline"
              >
                {r.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
