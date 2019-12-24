import * as React from 'react'

import { Wrap, Text } from './styles'

const MenuButton = React.memo(({ isOpen, onClick, className }) => {
  return (
    <Wrap onClick={onClick} isOpen={isOpen} className={className}>
      <Text isOpen={isOpen}>Menu</Text>
    </Wrap>
  )
})

export default MenuButton
