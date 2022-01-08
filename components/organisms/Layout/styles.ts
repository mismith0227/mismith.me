import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { Footer } from '../Footer'

interface MainProps {
  readonly path: string
}

const getContentStyles = () => {
  return css`
    margin-top: 180px;

    ${media.small} {
      margin-top: 80px;
    }
  `
}

export const StyledMain = styled.main<MainProps>`
  ${({ path }) => path !== 'home' && getContentStyles}
`

export const StyledFooter = styled(Footer)`
  margin: 180px 0 0;

  ${media.small} {
    margin-top: 80px;
  }
`
