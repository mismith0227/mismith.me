import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrap = styled.ul`
  position: fixed;
  padding: 120px 24px;
  margin: 0;
  background: #000;
  height: 100%;
  width: 300px;
  top: 0;
  right: -300px;
  transform: ${props =>
    props.isOpen ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)'};
  transition: 0.3s;
  box-sizing: border-box;
  z-index: 10;
`

export const Item = styled.li`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  list-style: none;
  margin: 8px 0;
  padding: 0;
  font-size: 50px;

  a {
    text-decoration: none;
    color: #fff;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const StyledLink = styled(Link)`
  display: block;
`

export const ExternalLink = styled.a`
  display: block;
`
