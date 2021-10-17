import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #000;
  height: 300px;
  box-sizing: border-box;
`

export const CopyRight = styled.p`
  margin: 36px 0 0;
  font-size: 12px;
  color: #fff;
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FooterListItem = styled.li``

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
