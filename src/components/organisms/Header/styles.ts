import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { OpenInNew } from '../../atoms/Icon/OpenInNew'

export const Container = styled.header`
  display: block;
`

export const Navigation = styled.nav``

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

interface LinkProps {
  isActive?: boolean
}

export const NavListItem = styled.li<LinkProps>`
  position: relative;
  margin: 0 0 0 24px;

  &::before {
    content: '';
    display: block;
    width: ${({ isActive }) => (isActive ? '70%' : 0)};
    height: 2px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transition: width 0.3s;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }

  &:hover {
    &::before {
      width: 70%;
      opacity: 1;
    }
  }
`

export const StyledLink = styled(Link)`
  display: block;
  padding: 16px 16px;
  text-decoration: none;
  color: #000;
`

export const ExternalLink = styled.a`
  position: relative;
  display: block;
  padding: 16px 16px;
  text-decoration: none;
  color: #000;
`

export const StyledOpenInNewIcon = styled(OpenInNew)`
  margin: 0 0 0 2px;
  font-size: 12px;
`
