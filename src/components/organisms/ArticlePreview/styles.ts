import styled from 'styled-components'
import media from '../../../styles/media'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Wrap = styled.div``

export const StyledImg = styled(Img)`
  width: ${props => (props.display === 'grid' ? '100%' : '40%')};
  margin-right: ${props => (props.display === 'grid' ? '0' : '1.6rem')};
  border: 0.1rem solid #ccc;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0 0;
`

export const StyledLink = styled(Link)`
  display: ${props => (props.display === 'grid' ? 'block' : 'flex')};
  text-decoration: none;
  box-sizing: border-box;
  padding: 0.4rem;
`

export const PreviewTitle = styled.h3`
  margin: 0;
  font-size: 2.4rem;

  ${media.small} {
    font-size: 1.8rem;
  }
`

export const Date = styled.div``

export const TagWrap = styled.div``

export const Tag = styled.div`
  display: inline-block;
  margin-right: 0.8rem;
`