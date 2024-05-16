import Link from 'next/link'
import styled from '@emotion/styled'
import { OpenInNew } from '../Icon/OpenInNew'

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  text-decoration: none;
  color: #fff;
  background: #000;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #000;
  transition: 0.2s;
  box-sizing: border-box;

  &:hover {
    color: #000;
    background: #fff;
  }
`

const StyledOpenInNew = styled(OpenInNew)`
  margin-left: 8px;
  font-size: 1em;
`

type Props = {
  className?: string
  children: React.ReactNode
  href: string
  isexternal?: boolean
}

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
