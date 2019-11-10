import * as React from 'react'

import { Wrap, Text } from './styles'

const MenuButton = React.memo(({ isOpen, onClick }) => {
  return (
    <Wrap onClick={onClick} isOpen={isOpen}>
      <Text isOpen={isOpen}>Menu</Text>
    </Wrap>
  )
})

export default MenuButton
