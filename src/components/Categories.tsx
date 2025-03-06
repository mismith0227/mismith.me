import { BlogCategory } from '@/types/BlogCategory'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export type Props = {
  className?: string
  category: BlogCategory[]
  currentCategory?: string
}

export const Categories = (props: Props) => {
  const { className, category, currentCategory } = props
  return (
    <div className={className}>
      <h3 className="text-[24px] md:text-[32px]">Category</h3>
      <ul className="flex gap-4 list-none mt-6 p-0">
        {category.map((item) => (
          <li key={item.id}>
            <span
              className={twMerge(
                'relative inline-block categoryItem',
                currentCategory === item.id && 'activeCategoryItem'
              )}
            >
              <Link
                href={`/blog/${item.id}/page/1`}
                className="inline-block py-2 px-3 text-[14px] no-underline text-black md:text-[18px]"
              >
                {item.category_name}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
