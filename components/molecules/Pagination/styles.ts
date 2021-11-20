import styled from '@emotion/styled'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  margin: 0 8px;
`

interface Props {
  isCurrent: boolean
}

export const StyledLink = styled.a<Props>`
  display: block;
  padding: 8px 16px;
  border: 1px solid #000;
  text-decoration: none;
  color: ${({ isCurrent }) => (isCurrent ? `#fff` : `#000`)};
  background-color: ${({ isCurrent }) => (isCurrent ? `#000` : `#fff`)};
  transition: 0.2s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`
