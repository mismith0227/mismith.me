import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'

const getHeadingCommonStyles = () => {
  return css`
    margin: 0;
    letter-spacing: 0.04em;
  `
}

export const Heading1 = styled.h1`
  ${getHeadingCommonStyles}
  font-size: 64px;

  ${media.medium} {
    font-size: 32px;
  }
`

export const Heading2 = styled.h2`
  ${getHeadingCommonStyles}
  font-size: 42px;

  ${media.medium} {
    font-size: 24px;
  }
`

export const Heading3 = styled.h3`
  ${getHeadingCommonStyles}
  font-size: 24px;

  ${media.medium} {
    font-size: 16px;
  }
`

export const Heading4 = styled.h4`
  ${getHeadingCommonStyles}
  font-size: 18px;

  ${media.medium} {
    font-size: 16px;
  }
`
