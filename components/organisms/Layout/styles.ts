import styled from '@emotion/styled'
import media from '@/styles/media'
import { Navigation } from '@/components/organisms/Navigation'
import { Footer } from '../Footer'

export const Wrap = styled.div`
  display: flex;
`

export const StyledNavigation = styled(Navigation)`
  padding-left: 24px;
  width: 300px;
  box-sizing: border-box;
`

export const StyledMain = styled.main`
  flex: 1;
  margin-top: 80px;
  margin-right: 24px;
`

export const StyledFooter = styled(Footer)`
  margin: 180px 0 0;

  ${media.medium} {
    margin-top: 80px;
  }
`
