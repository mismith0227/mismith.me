import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'

const getTagStyles = () => {
  return css`
    display: inline-block;
    padding: 4px 16px;
    background-color: #000;
    color: #fff;
    font-size: 12px;
    font-weight: bold;

    ${media.small} {
      font-size: 10px;
    }
  `
}

export const Container = styled.div`
  ${getTagStyles}
`

export const List = styled.li`
  ${getTagStyles}
`
