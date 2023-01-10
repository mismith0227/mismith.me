import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Details = styled.details`
  padding: 8px;
  background-color: #f5f8fa;
`

export const Summary = styled.summary`
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`

export const Title = styled.h2``

export const List = styled.ul`
  margin: 0;
  padding: 8px 16px 8px;
  list-style: none;
  font-size: 14px;
`

type ItemProps = {
  name: string
}

const getItemStyles = ({ name = 'H1' }: ItemProps) => {
  switch (name) {
    case 'H1':
      return css`
        padding-left: 0;
      `
    case 'H2':
      return css`
        padding-left: 16px;
        position: relative;
        font-weight: bold;
        margin-top: 8px;

        &:first-of-type {
          margin-top: 0;
        }

        &:before {
          content: '';
          display: before;
          height: 1px;
          width: 8px;
          background: #000;
          position: absolute;
          left: 0;
          top: 0.9em;
        }
      `
    case 'H3':
      return css`
        padding-left: 16px;

        &:before {
          content: '・';
        }
      `
    case 'H4':
    case 'H5':
    case 'H6':
      return css`
        padding-left: 48px;
      `
  }
}

export const Item = styled.li<ItemProps>`
  ${getItemStyles};
`

export const Link = styled.a`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
