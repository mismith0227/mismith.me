import styled from '@emotion/styled'
import { Navigation } from '@/components/organisms/Navigation'

export const Wrap = styled.div`
  position: relative;
`

export const StyledNavigation = styled(Navigation)`
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 5;
`
