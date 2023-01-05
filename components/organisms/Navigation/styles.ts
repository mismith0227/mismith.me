import styled from '@emotion/styled'
import Link from 'next/link'
import media from '@/styles/media'
import { Logo } from '@/components/atoms/Icon/Logo'
import { ToggleButton } from '@/components/molecules/ToggleButton'

type Props = {
  isOpen: boolean
}

export const Container = styled.nav<Props>`
  padding-left: 48px;
  width: 240px;
  box-sizing: border-box;

  ${media.medium} {
    padding-left: 32px;
    width: 200px;
  }

  ${media.small} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 16px 24px;
    z-index: ${({ isOpen }) => (isOpen ? 10 : -1)};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.2s;
    background-color: rgba(255, 255, 255, 0.8);
  }
`

export const Inner = styled.div`
  position: sticky;
  top: 24px;

  ${media.small} {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
  }
`

export const StyledLogo = styled(Logo)`
  font-size: 3rem;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
  padding: 0;
  list-style: none;
  gap: 12px 0;
`

type LinkProps = {
  isActive?: boolean
}

export const NavListItem = styled.li`
  position: relative;
  transition: 0.2s;
`

export const StyledLink = styled(Link)<LinkProps>`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #000;
  transition: 0.2s;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  &::before {
    content: '';
    display: block;
    width: 100%;
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

  ${media.small} {
    font-size: 18px;

    &:hover {
      &::before {
        transform: scaleX(0);
      }
    }
  }
`

export const ChildList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin: 12px 0 0;
  padding: 0 0 0 16px;
  list-style: none;
`

export const ChildListItem = styled.li<LinkProps>``

export const StyledToggleButton = styled(ToggleButton)`
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;

  ${media.small} {
    display: block;
  }
`
