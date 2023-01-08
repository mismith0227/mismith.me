import { StyledLink } from './styles'
import { Props } from './types'

export const LinkButton = ({ className, children, href }: Props) => {
  return (
    <StyledLink href={href} className={className}>
      {children}
    </StyledLink>
  )
}
