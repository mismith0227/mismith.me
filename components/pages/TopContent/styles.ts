import Image from 'next/image'
import styled from '@emotion/styled'

export const Wrap = styled.div`
  margin-left: auto;
  width: 70%;
  margin-right: 40px;
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  margin-top: 40px;
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
