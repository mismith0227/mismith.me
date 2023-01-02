import styled from '@emotion/styled'
import media from '@/styles/media'
import { Navigation } from '@/components/organisms/Navigation'
import { Footer } from '../Footer'

export const Wrap = styled.div`
  display: flex;
`

export const StyledNavigation = styled(Navigation)``

export const StyledMain = styled.main`
  flex: 1;
  margin-top: 120px;
  margin-right: 24px;

  ${media.medium} {
    margin: 80px auto 0;
    padding: 0 16px;
  }
`

export const StyledFooter = styled(Footer)`
  margin: 180px 0 0;

  ${media.medium} {
    margin-top: 80px;
  }
`
