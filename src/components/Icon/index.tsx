import { twMerge } from 'tailwind-merge'

export type ParentProps = {
  className?: string
  role?: string
}

type Props = ParentProps & {
  viewBox: string
  children: React.ReactNode
}

export const Icon = ({ className, children, role = 'img', viewBox }: Props) => (
  <svg
    className={twMerge(
      'inline-block text-[2.4rem] h-[1em] w-[1em] text-inherit overflow-visible',
      className
    )}
    width="100%"
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    role={role}
    viewBox={viewBox}
  >
    {children}
  </svg>
)
