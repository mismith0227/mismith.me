import styled from '@emotion/styled'

export const Container = styled.div``

export const Title = styled.h3`
  font-size: 48px;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  margin: 0 16px;
`

interface LinkProps {
  isActive?: boolean
}

export const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  padding: 8px 12px;
  position: relative;
  font-size: 18px;
  text-decoration: none;
  color: #000;

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
`
