import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children: React.ReactNode
  href: string
  isexternal?: boolean
}

export const LinkButton = ({
  children,
  href,
  isexternal,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      target={isexternal ? '_blank' : undefined}
      className={twMerge(
        'relative flex items-center justify-center px-6 py-2 text-white bg-black text-center text-sm font-bold border-2 border-black transition duration-200 hover:text-black hover:bg-white box-border rounded-md',
        className
      )}
    >
      {children}
    </Link>
  )
}
