import Link from 'next/link'
import { StyledLink } from './styles'

type Props = {
  className?: string
  readonly children: React.ReactNode
  href: string
}

export const LinkButton = ({ className, children, href }: Props) => {
  return (
    <Link href={href} passHref>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  )
}
