import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'

type ContainerProps = {
  readonly size?: 'full' | 'lg' | 'md' | 'sm'
}

const getContentStyles = ({ size = 'md' }: ContainerProps) => {
  switch (size) {
    case 'full':
      return css`
        max-width: 100%;
      `
    case 'lg':
      return css`
        max-width: 1024px;
      `
    case 'md':
      return css`
        max-width: 800px;
      `
    case 'sm':
      return css`
        max-width: 650px;
      `
  }
}

export const Wrap = styled.div`
  display: block;
  ${getContentStyles};
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${media.small} {
    width: 96%;
  }
`
