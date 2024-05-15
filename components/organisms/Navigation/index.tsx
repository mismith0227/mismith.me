import { useEffect, useState } from 'react'
import {
  Container,
  Inner,
  NavList,
  NavListItem,
  StyledLink,
  StyledToggleButton,
  NavListItemInner,
  StyledOpenInNew,
  StyledSiteTitle,
} from './styles'
import { Props } from './types'
import { useRouter } from 'next/router'

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
