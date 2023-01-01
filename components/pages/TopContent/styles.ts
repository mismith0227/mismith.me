import Image from 'next/image'
import styled from '@emotion/styled'

export const Wrap = styled.div``

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  &:not(:first-of-type) {
    margin-top: 40px;
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
