import styled from 'styled-components'
import media from '../../../styles/media'
import { Link } from 'gatsby'
import OpenInNewIcon from '../../../components/atoms/Icon/OpenInNew'

export const Wrap = styled.ul`
  display: flex;
  position: fixed;
  top: 5rem;
  right: 4rem;
  margin: 0;
  padding: 0;
  line-height: 1;
  z-index: 10;

  ${media.small} {
    top: 5rem;
    right: 2rem;
  }
`

export const Item = styled.li`
  list-style: none;
  padding: 0;
  margin: 0 0 0 1.6rem;

  a {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    text-decoration: none;
    transition: 0.2s;
    font-weight: bold;

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
  margin: 0 0 0 0.2rem;
  font-size: 1.2rem;
`
