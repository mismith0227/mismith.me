import Link from 'next/link'
import media from '@/styles/media'
import styled from '@emotion/styled'
import { Chevron } from '@/components/atoms/Icon/Chevron'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 16px;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
`

type Props = {
  isCurrent?: boolean
}

export const ItemInner = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 56px;
  box-sizing: border-box;
  border: 1px solid #000;
  transition: 0.2s;
  ${({ isCurrent }) => isCurrent && `pointer-events: none;`}

  ${media.small} {
    width: 28px;
    height: 46px;
  }

  a {
    color: ${({ isCurrent }) => (isCurrent ? `#fff` : `#000`)};
    background-color: ${({ isCurrent }) => (isCurrent ? `#000` : `#fff`)};
  }
`

export const StyledLink = styled(Link)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const StyledChevron = styled(Chevron)`
  font-size: 18px;
`
