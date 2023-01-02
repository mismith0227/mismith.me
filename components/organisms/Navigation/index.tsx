import { useState } from 'react'
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
} from './styles'
import { Props } from './types'

export const Navigation = ({ path, className, photoCategory }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <Container className={className} id="navigation" isOpen={isMenuOpen}>
        <Inner>
          <StyledLogo />
          <NavList>
            <NavListItem isActive={path === 'home'}>
              <StyledLink href="/" aria-label="Home">
                Home
              </StyledLink>
            </NavListItem>
            <NavListItem isActive={path === 'gallery'}>
              <StyledLink href="/gallery" aria-label="Gallery">
                Gallery
              </StyledLink>
              {photoCategory.length > 0 && (
                <ChildList>
                  {photoCategory.map((item) => (
                    <ChildListItem
                      key={item.id}
                      isActive={path === `gallery/${item.id}`}
                    >
                      <StyledLink
                        href={`/gallery/${item.id}`}
                        aria-label="Gallery"
                      >
                        {item.category_name}
                      </StyledLink>
                    </ChildListItem>
                  ))}
                </ChildList>
              )}
            </NavListItem>
            <NavListItem isActive={path === 'blog'}>
              <StyledLink href="/blog" aria-label="Blog">
                Blog
              </StyledLink>
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
