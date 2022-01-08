import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

export { default as IconListItem } from './Item'

export const IconList: React.FC<Props> = ({ children, className }) => {
  return <Wrap className={className}>{children}</Wrap>
}
