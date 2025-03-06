import { Blog } from '@/types/Blog'
import { formatDate } from '@/utils/formatDate'
import Link from 'next/link'

type Props = {
  data: Blog[]
  className?: string
}

export const List = (props: Props) => {
  const { data, className } = props
  return (
    <ul className={className}>
      {data.map((d) => (
        <li key={d.id} className="mt-[120px] first:mt-0">
          <Link
            href={`/blog/${d.category.id}/${d.id}`}
            className="block hover:text-[rgb(119,119,119)]"
          >
            <span className="text-[10px] inline-block px-4 py-1 bg-black text-white md:text-xs font-bold">
              {d.category.category_name}
            </span>
            <h2 className="text-[24px] md:text-[36px] font-bold mt-[16px]">
              {d.title}
            </h2>
            <div className="mt-[8px] text-[10px] md:text-[12px] md:flex md:gap-x-[24px]">
              <div>
                <span className="font-bold mr-[4px]">公開日:</span>
                {formatDate(d.publishedAt)}
              </div>
              <div>
                <span className="font-bold mr-[4px]">更新日:</span>
                {formatDate(d.updatedAt)}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
