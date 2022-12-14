import Link from 'next/link'
import styled from '@emotion/styled'
import { PoweredBy } from './PowerdBy'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  margin-top: 24px;

  &:first-of-type {
    margin: 0;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: #777;
    cursor: pointer;
  }
`

export const Description = styled.p`
  margin: 8px 0 0;
  padding-left: 24px;
  font-size: 14px;
`

export const EmptyContent = styled.div``

export const EmptyContentText = styled.p``

export const StyledPoweredBy = styled(PoweredBy)`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 48px;
`
