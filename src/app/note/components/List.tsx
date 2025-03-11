import { twMerge } from 'tailwind-merge'
import { Blog } from '@/types/Blog'
import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  data: Blog[]
  className?: string
}

export const List = (props: Props) => {
  const { data, className } = props
  return (
    <ul
      className={twMerge(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30] md:gap-[40]',
        className
      )}
    >
      {data.map((d) => (
        <li key={d.id}>
          <Link href={`/note/${d.id}`} className="block">
            {d.thumbnail && (
              <Image
                src={d.thumbnail?.url}
                alt={d.title}
                width={d.thumbnail.width}
                height={d.thumbnail.height}
                className="w-full h-full object-cover align-bottom"
              />
            )}
            <h2 className="mt-2 text-lg font-bold">{d.title}</h2>
            <div className="text-xs mt-[2]">
              <span className="inline-block mr-[2] font-bold">公開日:</span>
              {formatDate(d.publishedAt)}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
