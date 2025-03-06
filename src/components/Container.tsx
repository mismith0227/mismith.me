import { twMerge } from 'tailwind-merge'

type ContainerProps = {
  size?: 'full' | 'lg' | 'md' | 'sm'
}

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'full' | 'lg' | 'md' | 'sm'
}

const getContentStyles = ({ size = 'md' }: ContainerProps) => {
  switch (size) {
    case 'full':
      return `max-w-full`
    case 'lg':
      return `pl-200px`
    case 'md':
    case 'sm':
    default:
      return `pl-240px`
  }
}

export const Container = ({ children, className, size }: Props) => (
  <main
    className={twMerge(
      'w-[96%] mx-auto pr-0 pl-0 md:pl-[200px] lg:pt-[120px] lg:pr-[40px] pb-[120px] pt-[120px]',
      getContentStyles({ size: size }),
      className
    )}
  >
    {children}
  </main>
)
