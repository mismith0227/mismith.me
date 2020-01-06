import * as React from 'react'

import { Wrap, Text } from './styles'
import { Props } from './types'

const MenuButton = React.memo(({ isOpen, onClick, className }: Props) => {
  return (
    <Wrap onClick={onClick} isOpen={isOpen} className={className}>
      <Text isOpen={isOpen}>Menu</Text>
    </Wrap>
  )
})

export default MenuButton
