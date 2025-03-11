import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
}

export const Heading = (props: Props) => {
  const { className, children, level = 1 } = props

  switch (level) {
    case 1:
      return (
        <h1
          className={twMerge(
            'text-[32px] md:text-[64px] tracking-[0.04em] font-bold',
            className
          )}
        >
          {children}
        </h1>
      )
    case 2:
      return (
        <h2
          className={twMerge(
            'text-[24px] md:text-[42px] tracking-[0.04em] font-bold',
            className
          )}
        >
          {children}
        </h2>
      )
    case 3:
      return (
        <h3
          className={twMerge(
            'text-[16px] md:text-[24px] tracking-[0.04em] font-bold',
            className
          )}
        >
          {children}
        </h3>
      )
    case 4:
      return (
        <h4
          className={twMerge(
            'text-[16px] md:text-[18px] tracking-[0.04em] font-bold',
            className
          )}
        >
          {children}
        </h4>
      )
  }
}
