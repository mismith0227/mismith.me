import * as React from 'react'
import { Props } from './types'
import { Wrap } from './styles'

const ListItem: React.FC<Props> = ({ children, className }) => {
  return <Wrap className={className}>{children}</Wrap>
}

export default ListItem
