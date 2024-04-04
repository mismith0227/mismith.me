import styled from '@emotion/styled'
import media from '@/styles/media'
import { Navigation } from '@/components/organisms/Navigation'
import { Footer } from '../Footer'

export const Wrap = styled.div`
  position: relative;
`

export const StyledNavigation = styled(Navigation)`
  position: fixed;
  top: 96px;
  left: 0;
  z-index: 5;
`

export const StyledMain = styled.main``

export const StyledFooter = styled(Footer)`
  margin: 180px 0 0;

  ${media.medium} {
    margin-top: 80px;
  }
`
