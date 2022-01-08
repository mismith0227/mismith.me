import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'

export const Wrap = styled.footer`
  padding: 64px 0;
  background-color: #000;
  box-sizing: border-box;
  color: #fff;
`

export const StyledContainer = styled(Container)``

export const CopyRight = styled.p`
  margin: 64px 0 0;
  font-size: 12px;
  color: #fff;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  gap: 0 120px;

  ${media.medium} {
    flex-direction: column;
    gap: 40px 0;
  }
`

export const ListWrap = styled.div``

export const ListTitle = styled.h4`
  font-size: 18px;
  margin: 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 8px 0 0;
  padding: 0 0 0 16px;
  gap: 8px 0;
`

export const ListItem = styled.li``

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
`
