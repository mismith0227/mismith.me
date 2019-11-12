import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Wrap = styled.div``

export const StyledImg = styled(Img)``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  border: 4px solid #000;
  box-sizing: border-box;
  padding: 4px;
`

export const PreviewTitle = styled.h3`
  margin: 0;
  font-size: 24px;
`

export const Date = styled.div``

export const TagWrap = styled.div``

export const Tag = styled.div`
  display: inline-block;
  margin-right: 8px;
`
