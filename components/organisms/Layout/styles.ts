import styled from '@emotion/styled'
import media from '@/styles/media'
import { Navigation } from '@/components/organisms/Navigation'
import { Footer } from '../Footer'

export const Wrap = styled.div`
  display: flex;
`

export const StyledNavigation = styled(Navigation)``

export const StyledMain = styled.main`
  width: calc(100% - 264px);
  margin-top: 120px;
  margin-right: 24px;

  ${media.medium} {
    margin-top: 80px;
    margin-right: 12px;
    width: calc(100% - 212px);
  }

  ${media.small} {
    margin: 64px auto;
    width: 100%;
  }
`

export const StyledFooter = styled(Footer)`
  margin: 180px 0 0;

  ${media.medium} {
    margin-top: 80px;
  }
`
