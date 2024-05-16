import styled from '@emotion/styled'

const Wrap = styled.li`
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }
`

import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  className?: string
}

const ListItem = ({ children, className }: Props) => (
  <Wrap className={className}>{children}</Wrap>
)

export default ListItem
