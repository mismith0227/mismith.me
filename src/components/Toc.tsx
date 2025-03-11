import { Toc as TocTypes } from '@/types/Toc'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  items: TocTypes[]
}

export const Toc = ({ className, items }: Props) => (
  <details className={twMerge('p-2 bg-[#f5f8fa]', className)} open>
    <summary className="text-[16px] font-bold hover:cursor-pointer">
      目次
    </summary>
    <ul className="m-0 px-4 py-2 list-none text-[14px]">
      {items.map((item, index) => (
        <li
          key={`${item.id}-${index}`}
          className="pl-4 relative font-bold mt-2 first-of-type:mt-0 before:content-[''] before:block before:h-px before:w-2 before:bg-black before:absolute before:left-0 before:top-[0.9em]"
        >
          <a href={`#${item.id}`} className="text-black hover:underline">
            {item.text}
          </a>
          {item.childs.length > 0 && (
            <ul className="m-0 py-2">
              {item.childs.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="pl-4 relative font-bold mt-2 first-of-type:mt-0 before:content-[''] before:block before:h-px before:w-2 before:bg-black before:absolute before:left-0 before:top-[0.9em]"
                >
                  <a
                    href={`#${item.id}`}
                    className="text-black hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </details>
)
