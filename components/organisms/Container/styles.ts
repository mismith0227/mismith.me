import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ContainerProps {
  readonly size?: 'lg' | 'md' | 'sm'
}

const getContentStyles = ({ size = 'md' }: ContainerProps) => {
  switch (size) {
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
  width: 96%;
  margin-left: auto;
  margin-right: auto;
`
