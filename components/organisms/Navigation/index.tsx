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
            <NavListItem>
              <StyledLink href="/" aria-label="Home" isActive={path === 'home'}>
                Home
              </StyledLink>
            </NavListItem>
            <NavListItem>
              <StyledLink
                href="/gallery"
                aria-label="Gallery"
                isActive={path === 'gallery'}
              >
                Gallery
              </StyledLink>
              {photoCategory.length > 0 && (
                <ChildList>
                  {photoCategory.map((item) => (
                    <ChildListItem key={item.id}>
                      <StyledLink
                        href={`/gallery/${item.id}`}
                        aria-label="Gallery"
                        isActive={path === `gallery/${item.id}`}
                      >
                        {item.category_name}
                      </StyledLink>
                    </ChildListItem>
                  ))}
                </ChildList>
              )}
            </NavListItem>
            <NavListItem>
              <StyledLink
                href="/blog"
                aria-label="Blog"
                isActive={path === 'blog'}
              >
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
