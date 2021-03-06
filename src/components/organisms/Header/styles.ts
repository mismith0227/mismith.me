import styled from '@emotion/styled'
import { Link } from 'gatsby'
import media from '../../../styles/media'
import { OpenInNew } from '../../atoms/Icon/OpenInNew'
import { ToggleButton } from '../../molecules/ToggleButton'

export const Container = styled.header`
  display: flex;
  padding: 0 16px;
`

interface MenuProps {
  isMenuOpen: boolean
}

export const Navigation = styled.nav<MenuProps>`
  margin: 0 0 0 auto;

  ${media.medium} {
    display: flex;
    align-items: center;
    position: fixed;
    top: -100%;
    right: 0;
    width: 100%;
    height: 100%;
    background: #000;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translate3d(0, 100%, 0)' : 'translate3d(0, 0, 0)'};
    transition: transform 0.2s;
    z-index: 99;
  }
`

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.medium} {
    flex-direction: column;
    width: 100%;
  }
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
    width: 70%;
    height: 2px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform-origin: top right;
    ${({ isActive }) => !isActive && 'transition: transform 0.3s;'};
    transform: ${({ isActive }) => (isActive ? 'scaleX(1)' : 'scaleX(0)')};
  }

  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: top left;
    }
  }

  ${media.medium} {
    margin: 32px 0 0;

    &::before {
      display: none;
    }
  }
`

export const StyledLink = styled(Link)`
  display: block;
  padding: 16px;
  text-decoration: none;
  color: #000;

  ${media.medium} {
    padding: 24px;
    color: #fff;
    font-size: 24px;
  }
`

export const ExternalLink = styled.a`
  position: relative;
  display: block;
  padding: 16px;
  text-decoration: none;
  color: #000;

  ${media.medium} {
    color: #fff;
    padding: 24px;
    font-size: 24px;
  }
`

export const StyledOpenInNewIcon = styled(OpenInNew)`
  margin: 0 0 0 2px;
  font-size: 12px;
`

export const StyledToggleButton = styled(ToggleButton)`
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;

  ${media.medium} {
    display: block;
  }
`
