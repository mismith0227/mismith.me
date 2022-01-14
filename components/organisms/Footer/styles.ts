import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'

export const Wrap = styled.footer`
  padding: 64px 0;
  background-color: #000;
  box-sizing: border-box;
  color: #fff;

  ${media.small} {
    padding: 32px 20px;
  }
`

export const StyledContainer = styled(Container)``

export const CopyRight = styled.p`
  margin: 64px 0 0;
  font-size: 12px;
  color: #fff;
  text-align: center;
`

export const Content = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  gap: 0 120px;

  ${media.small} {
    display: grid;
    grid-template-columns: repeat(2, auto);
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
  padding: 0;
  margin: 8px 0 0;
  gap: 8px 0;
`

export const ListItem = styled.li``

export const StyledLink = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;
  padding-left: 16px;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 1px;
    background: #fff;
    position: absolute;
    top: 0.6em;
    left: 0;
    transform: scaleX(0);
    transition: 0.2s;
  }

  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }
`
