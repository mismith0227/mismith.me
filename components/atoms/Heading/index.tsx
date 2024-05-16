import { css } from '@emotion/react'
import styled from '@emotion/styled'

import media from '@/styles/media'

const getHeadingCommonStyles = () => {
  return css`
    margin: 0;
    letter-spacing: 0.04em;
  `
}

const Heading1 = styled.h1`
  ${getHeadingCommonStyles}
  font-size: 64px;

  ${media.medium} {
    font-size: 32px;
  }
`

const Heading2 = styled.h2`
  ${getHeadingCommonStyles}
  font-size: 42px;

  ${media.medium} {
    font-size: 24px;
  }
`

const Heading3 = styled.h3`
  ${getHeadingCommonStyles}
  font-size: 24px;

  ${media.medium} {
    font-size: 16px;
  }
`

const Heading4 = styled.h4`
  ${getHeadingCommonStyles}
  font-size: 18px;

  ${media.medium} {
    font-size: 16px;
  }
`

type Props = {
  className?: string
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4
}

export const Heading = ({ className, children, level = 1 }: Props) => {
  switch (level) {
    case 1:
      return <Heading1 className={className}>{children}</Heading1>
    case 2:
      return <Heading2 className={className}>{children}</Heading2>
    case 3:
      return <Heading3 className={className}>{children}</Heading3>
    case 4:
      return <Heading4 className={className}>{children}</Heading4>
  }
}
