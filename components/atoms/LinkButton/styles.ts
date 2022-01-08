import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  text-decoration: none;
  color: #fff;
  background: #000;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #000;
  transition: 0.2s;
  box-sizing: border-box;

  &:hover {
    color: #000;
    background: #fff;
  }
`
