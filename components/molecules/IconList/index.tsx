import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

export { default as IconListItem } from './Item'

export const IconList = ({ children, className }: Props) => (
  <Wrap className={className}>{children}</Wrap>
)
