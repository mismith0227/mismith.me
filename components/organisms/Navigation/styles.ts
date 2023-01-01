import styled from '@emotion/styled'
import media from '@/styles/media'
import { ToggleButton } from '@/components/molecules/ToggleButton'
import Link from 'next/link'

export const Container = styled.nav``

export const NavList = styled.ul`
  display: flex;
  position: sticky;
  top: 80px;
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
  display: inline-block;
  padding: 0 16px;
  text-decoration: none;
  color: #000;
  transition: 0.2s;
`

export const ChildList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin: 12px 0 0;
  padding: 0 0 0 16px;
  list-style: none;
`

export const ChildListItem = styled.li<LinkProps>`
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`
