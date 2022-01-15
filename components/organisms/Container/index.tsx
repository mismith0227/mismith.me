import { Wrap } from './styles'
import { Props } from './types'

export const Container = ({ children, className, size = 'md' }: Props) => {
  return (
    <Wrap className={className} size={size}>
      {children}
    </Wrap>
  )
}
