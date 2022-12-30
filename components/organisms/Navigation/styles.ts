import styled from '@emotion/styled'
import media from '@/styles/media'
import { ToggleButton } from '@/components/molecules/ToggleButton'
import Link from 'next/link'

type MenuProps = {
  isMenuOpen: boolean
}

export const Container = styled.nav<MenuProps>`
  position: fixed;
  top: 120px;
  left: 24px;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 12px 0;
`

type LinkProps = {
  isActive?: boolean
}

export const NavListItem = styled.li<LinkProps>`
  position: relative;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: 0.2s;
`

export const StyledLink = styled(Link)`
  display: block;
  padding: 0 16px;
  text-decoration: none;
  color: #000;
  transition: 0.2s;
`
