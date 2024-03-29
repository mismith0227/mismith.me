import { useEffect, useState } from 'react'
import {
  Container,
  Inner,
  NavList,
  NavListItem,
  StyledLink,
  ChildList,
  ChildListItem,
  StyledLogo,
  StyledToggleButton,
  NavListItemInner,
  StyledOpenInNew,
  ParentItem,
} from './styles'
import { Props } from './types'
import { useRouter } from 'next/router'

export const Navigation = ({ path, className, photoCategory }: Props) => {
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
      <Container className={className} id="navigation" isOpen={isMenuOpen}>
        <Inner>
          <StyledLogo />
          <NavList>
            <NavListItem>
              <NavListItemInner isActive={path === 'home'}>
                <StyledLink href="/" aria-label="Home">
                  Home
                </StyledLink>
              </NavListItemInner>
            </NavListItem>
            <NavListItem>
              <ParentItem aria-label="Series">Series</ParentItem>
              {photoCategory.length > 0 && (
                <ChildList>
                  {photoCategory.map((item) => (
                    <ChildListItem key={item.id}>
                      <NavListItemInner isActive={path === `series/${item.id}`}>
                        <StyledLink
                          href={`/series/${item.id}`}
                          aria-label="series"
                        >
                          {item.category_name}
                        </StyledLink>
                      </NavListItemInner>
                    </ChildListItem>
                  ))}
                </ChildList>
              )}
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
        ariaControls="navigation"
        onToggleClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </>
  )
}
