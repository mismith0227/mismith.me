import styled from '@emotion/styled'

type Props = {
  rotate?: number
}

export const StyledSvg = styled.svg<Props>`
  display: inline-block;
  font-size: 2.4rem;
  height: 1em;
  width: 1em;
  color: inherit;
  overflow: visible;
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
`
