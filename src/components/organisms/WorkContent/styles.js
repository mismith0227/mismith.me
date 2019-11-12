import styled from 'styled-components'
import IconList from '../../molecules/IconList'

export const Wrap = styled.div`
  display: block;
  width: 100%;
  max-width: 1024px;
  margin: 120px auto;
`

export const Title = styled.h2`
  font-family: 'Teko', Arial, Helvetica, sans-serif;
  font-size: 80px;
  margin: 0;
  text-align: center;
`

export const LeadText = styled.p`
  font-size: 16px;
  margin: 24px 0 0;
  text-align: center;
`

export const List = styled.ul`
  margin: 80px 0 0;
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
