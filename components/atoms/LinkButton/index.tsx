import { StyledLink, StyledOpenInNew } from './styles'
import { Props } from './types'

export const LinkButton = ({
  className,
  children,
  href,
  isexternal,
}: Props) => (
  <StyledLink
    href={href}
    className={className}
    target={isexternal ? '_blank' : undefined}
  >
    {children}
    {isexternal && <StyledOpenInNew />}
  </StyledLink>
)
