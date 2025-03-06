import { twMerge } from 'tailwind-merge'
import { Blog } from '@/types/Blog'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  data: Blog[]
  className: string
}

export const List = (props: Props) => {
  const { data, className } = props
  return (
    <ul
      className={twMerge(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20] md:gap-[40]',
        className
      )}
    >
      {data.map((post) => (
        <li key={post.id}>
          <Link href={`/note/${post.id}`} className="block">
            {post.thumbnail && (
              <Image
                src={post.thumbnail?.url}
                alt={post.title}
                width={post.thumbnail.width}
                height={post.thumbnail.height}
                className="w-full h-full object-cover align-bottom"
              />
            )}
            <h2 className="mt-4 text-lg font-bold">{post.title}</h2>
            <div className="text-xs mt-[2]">
              <span className="inline-block mr-[2] font-bold">公開日:</span>
              {formatDate(post.publishedAt)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
