import styled from '@emotion/styled'
import { Link } from 'gatsby'
import media from '../../../styles/media'
import { OpenInNew } from '../../atoms/Icon/OpenInNew'

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

export const ToggleMenu = styled.button<MenuProps>`
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: none;
  z-index: 100;
  background-color: transparent;
  transition: 0.2s;
  color: ${({ isMenuOpen }) => (isMenuOpen ? '#fff' : '#000')};

  ${media.medium} {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    position: absolute;
    left: 0;
    transition: transform 0.2s;
    margin: auto;
  }

  &::before {
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '5px')};
    ${({ isMenuOpen }) => isMenuOpen && 'bottom: 0;'}
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &::after {
    bottom: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '5px')};
    ${({ isMenuOpen }) => isMenuOpen && 'top: 0;'}
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`

export const ToggleBorder = styled.span<MenuProps>`
  display: block;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: 0.2s;
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
`

export const ScreenReaderText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`
