import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Wrap = styled.div``

export const StyledImg = styled(Img)`
  border: 1px solid #ccc;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0 0;
`

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
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
