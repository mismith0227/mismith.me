import { ReactNode } from 'react'
import styled from '@emotion/styled'

const Wrap = styled.ul`
  display: flex;
  margin: 32px 0 0;
  gap: 16px;
  padding: 0;
  list-style: none;
`

type ExternalProps = {
  children?: ReactNode
  className?: string
}

type Props = ExternalProps

export { default as IconListItem } from './Item'

export const IconList = ({ children, className }: Props) => (
  <Wrap className={className}>{children}</Wrap>
)
