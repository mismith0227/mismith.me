import styled from '@emotion/styled'
import Link from 'next/link'
import media from '@/styles/media'
import { SiteTitle } from '@/components/atoms/SiteTitle'
import { ToggleButton } from '@/components/molecules/ToggleButton'
import { OpenInNew } from '@/components/atoms/Icon/OpenInNew'

type Props = {
  isOpen: boolean
  isHome: boolean
}

export const StyledSiteTitle = styled(SiteTitle)<Props>`
  position: fixed;
  top: 24px;
  left: 48px;
  z-index: 100;
  font-size: 24px;
  color: ${({ isHome }) => (isHome ? '#fff' : '#000')};

  ${media.medium} {
    left: 32px;
  }

  ${media.small} {
    top: 16px;
    left: 16px;
    font-size: 14px;
    color: ${({ isOpen, isHome }) =>
      isOpen ? '#000' : isHome ? '#fff' : '#000'};
  }
`

export const Container = styled.nav<Props>`
  padding-left: 48px;
  box-sizing: border-box;
  color: ${({ isHome }) => (isHome ? '#fff' : '#000')};

  ${media.medium} {
    padding-left: 32px;
  }

  ${media.small} {
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: ${({ isOpen, isHome }) =>
      isOpen ? '#000' : isHome ? '#fff' : '#000'};
  }
`

export const Inner = styled.div`
  ${media.small} {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 12px 0;

  ${media.small} {
    gap: 8px 0;
  }
`

type LinkProps = {
  isActive?: boolean
}

export const NavListItem = styled.li`
  position: relative;
  transition: 0.2s;
`

export const NavListItemInner = styled.span<LinkProps>`
  position: relative;
  display: inline-block;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  transition: 0.2s;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: currentColor;
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
    &:hover {
      &::before {
        transform: scaleX(0);
      }
    }
  }
`

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: currentColor;

  ${media.small} {
    font-size: 20px;
    color: currentColor;
  }
`

export const ParentItem = styled.div`
  color: currentColor;

  ${media.small} {
    font-size: 20px;
    color: currentColor;
  }

  &::after {
    content: '';
    display: inline-block;
    margin-left: 8px;
    width: 12px;
    height: 8px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    background-color: currentColor;
  }
`

export const ChildList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  margin: 12px 0 0;
  padding: 0 0 0 16px;
  list-style: none;

  ${media.small} {
    padding: 0 0 0 16px;
  }
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

export const StyledOpenInNew = styled(OpenInNew)`
  margin-left: 4px;
  font-size: 14px;
`
