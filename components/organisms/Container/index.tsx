import { Wrap } from './styles'

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'full' | 'lg' | 'md' | 'sm'
}

export const Container = ({ children, className, size = 'md' }: Props) => {
  return (
    <Wrap className={className} size={size}>
      {children}
    </Wrap>
  )
}
