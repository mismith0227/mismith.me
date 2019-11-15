import styled from 'styled-components'
import MenuButton from '~/components/atoms/MenuButton'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledMenuButton = styled(MenuButton)`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 20;
`
