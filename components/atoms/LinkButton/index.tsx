import Link from 'next/link'
import { StyledLink } from './styles'
import { Props } from './types'

export const LinkButton = ({ className, children, href }: Props) => {
  return (
    <Link href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  )
}
