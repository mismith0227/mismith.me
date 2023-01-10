import { Container, List } from './styles'
import { Props } from './types'

export const Tag = ({ className, children, isList = false }: Props) =>
  isList ? (
    <List className={className}>{children}</List>
  ) : (
    <Container className={className}>{children}</Container>
  )
