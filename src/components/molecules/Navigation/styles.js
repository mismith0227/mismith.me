import styled from 'styled-components'
import media from '~/styles/media'
import { Link } from 'gatsby'
import OpenInNewIcon from '~/components/atoms/Icon/OpenInNew'

export const Wrap = styled.ul`
  position: fixed;
  padding: 10rem 2.4rem;
  margin: 0;
  background: #000;
  height: 100%;
  width: 30rem;
  top: 0;
  right: -30rem;
  transform: ${props =>
    props.isOpen ? 'translate3d(-100%, 0, 0)' : 'translate3d(0, 0, 0)'};
  transition: 0.3s;
  box-sizing: border-box;
  z-index: 10;

  ${media.large} {
    padding: 8rem 1.6rem;
  }
`

export const Item = styled.li`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  list-style: none;
  margin: 0.8rem 0;
  padding: 0;
  font-size: 4.8rem;

  ${media.large} {
    margin: 0.4rem 0;
    font-size: 4.2rem;
  }

  ${media.small} {
    font-size: 3.8rem;
  }

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

export const StyledOpenInNewIcon = styled(OpenInNewIcon)`
  margin: 0 0 0 0.8rem;
`
