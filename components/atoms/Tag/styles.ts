import styled from '@emotion/styled'
import { css } from '@emotion/react'

const getTagStyles = () => {
  return css`
    display: inline-block;
    padding: 4px 16px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  `
}

export const Container = styled.div`
  ${getTagStyles}
`

export const List = styled.li`
  ${getTagStyles}
`
