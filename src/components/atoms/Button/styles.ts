import styled, { css } from 'styled-components'

interface ContainerProps {
  readonly level?: 1 | 2 | 3
}

export const Wrap = styled.button<ContainerProps>`
  width: 100%;
  box-sizing: border-box;
  border: none;
  background: #000;
  color: #fff;
  padding: 1.6rem 2.4rem;
  transition: 0.2s;
  font-size: 1.8rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    box-shadow: none;
  }
`
