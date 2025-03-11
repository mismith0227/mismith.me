import { twMerge } from 'tailwind-merge'

type ContainerProps = {
  size?: 'full' | 'lg' | 'md' | 'sm'
}

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'full' | 'lg' | 'md' | 'sm'
  id?: string
}

const getContentStyles = ({ size = 'md' }: ContainerProps) => {
  switch (size) {
    case 'full':
      return `lg:max-w-full`
    case 'lg':
      return `lg:pl-200px`
    case 'md':
    case 'sm':
    default:
      return `lg:pl-240px`
  }
}

export const Container = ({ children, className, size, id }: Props) => (
  <main
    className={twMerge(
      'w-[96%] mx-auto pr-0 pl-0 sm:pl-[200px] md:pt-[120px] lg:pr-[40px] pb-[120px] pt-[120px]',
      getContentStyles({ size: size }),
      className
    )}
    id={id}
  >
    {children}
  </main>
)
