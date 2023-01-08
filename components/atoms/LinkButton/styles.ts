import Link from 'next/link'
import styled from '@emotion/styled'

export const StyledLink = styled(Link)`
  position: relative;
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

  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: currentColor;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  &:hover {
    color: #000;
    background: #fff;
  }
`
