import styled from 'styled-components'
import IconList from '../../molecules/IconList'

export const Wrap = styled.div`
  display: block;
  max-width: 1024px;
  margin: 0 auto;
`

export const LeadText = styled.p`
  font-size: 16px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  display: inline-block;
  margin: 0 5% 0 0;
  padding: 0;
  list-style: none;
  width: 30%;

  &:nth-child(3n) {
    margin: 0;
  }
`
