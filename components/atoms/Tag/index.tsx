import { Container, List } from './styles'

type Props = {
  className?: string
  readonly children: React.ReactNode
  isList?: boolean
}

export const Tag = ({ className, children, isList = false }: Props) => {
  return isList ? (
    <List className={className}>{children}</List>
  ) : (
    <Container className={className}>{children}</Container>
  )
}
