import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { OpenInNew } from '@/components/atoms/Icon/OpenInNew'
import { SiteTitle } from '@/components/atoms/SiteTitle'
import { ToggleButton } from '@/components/molecules/ToggleButton'
import media from '@/styles/media'

type NavProps = {
  isOpen: boolean
  isHome: boolean
}

const StyledSiteTitle = styled(SiteTitle)<NavProps>`
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
    font-size: 16px;
    color: ${({ isOpen, isHome }) =>
      isOpen ? '#000' : isHome ? '#fff' : '#000'};
  }
`

const Container = styled.nav<NavProps>`
  padding-left: 48px;
  box-sizing: border-box;
  color: ${({ isHome }) => (isHome ? '#fff' : '#000')};
  letter-spacing: 0.08em;

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
    background-color: ${({ isHome }) =>
      isHome ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)'};
    color: ${({ isOpen, isHome }) =>
      isOpen ? '#000' : isHome ? '#fff' : '#000'};
  }
`

const Inner = styled.div`
  ${media.small} {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`

const NavList = styled.ul`
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

const NavListItem = styled.li`
  position: relative;
  transition: 0.2s;
`

const NavListItemInner = styled.span<LinkProps>`
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

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: currentColor;

  ${media.small} {
    font-size: 20px;
    color: currentColor;
  }
`

const StyledToggleButton = styled(ToggleButton)<NavProps>`
  display: none;
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 100;
  font-size: 16px;

  ${media.small} {
    display: block;
    color: ${({ isOpen, isHome }) =>
      isOpen ? '#000' : isHome ? '#fff' : '#000'};
  }
`

const StyledOpenInNew = styled(OpenInNew)`
  margin-left: 4px;
  font-size: 14px;
`

type Props = {
  path: string
  className?: string
}

export const Navigation = ({ path, className }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', handleChangeRoute)

    return () => {
      router.events.off('routeChangeComplete', handleChangeRoute)
    }
  }, [])

  const handleChangeRoute = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <StyledSiteTitle isOpen={isMenuOpen} isHome={path === 'home'} />
      <Container
        className={className}
        id="navigation"
        isOpen={isMenuOpen}
        isHome={path === 'home'}
      >
        <Inner>
          <NavList>
            <NavListItem>
              <NavListItemInner isActive={path === 'home'}>
                <StyledLink href="/" aria-label="Home">
                  Home
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'series'}>
                <StyledLink href="/series" aria-label="Series">
                  Series
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'photos'}>
                <StyledLink href="/photos" aria-label="photos">
                  Photos
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'about'}>
                <StyledLink href="/about" aria-label="About">
                  About
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'blog'}>
                <StyledLink href="/blog" aria-label="Blog">
                  Blog
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'note'}>
                <StyledLink href="/note" aria-label="Note">
                  Note
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner isActive={path === 'request'}>
                <StyledLink href="/request" aria-label="Request">
                  Request
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <NavListItemInner>
                <StyledLink
                  href="https://shop.mismith.me/"
                  aria-label="Shop"
                  target="_blank"
                >
                  Shop
                  <StyledOpenInNew />
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
          </NavList>
        </Inner>
      </Container>
      <StyledToggleButton
        isOpen={isMenuOpen}
        isHome={path === 'home'}
        ariaControls="navigation"
        onToggleClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  )
}
