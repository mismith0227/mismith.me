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

export const NavListItem = styled.li`
  margin: 0 0 0 24px;
`

export const StyledLink = styled(Link)`
  position: relative;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #000;

  /* &::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
  } */
`

export const ExternalLink = styled.a`
  position: relative;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #000;
`

export const StyledOpenInNewIcon = styled(OpenInNew)`
  margin: 0 0 0 2px;
  font-size: 12px;
`
