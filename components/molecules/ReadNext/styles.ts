import Link from 'next/link'
import styled from '@emotion/styled'
import media from '@/styles/media'

export const Container = styled.div``

export const Title = styled.h3`
  font-size: 32px;

  ${media.small} {
    font-size: 24px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  margin-top: 24px;
`

export const Date = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
`

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: #000;

  &:hover {
    text-decoration: none;
  }
`
