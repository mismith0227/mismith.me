import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Hatena } from '@/components/atoms/Icon/Hatena'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.large} {
    display: flex;
    justify-content: flex-end;
    gap: 24px;
  }
`

export const Item = styled.li`
  margin-top: 24px;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.large} {
    margin-top: 0;
  }
`

type LinkProps = {
  service?: 'x' | 'hatena'
}

const getContentStyles = ({ service = 'x' }: LinkProps) => {
  switch (service) {
    case 'x':
      return css`
        background: #000;
      `
    case 'hatena':
      return css`
        background: #00a4de;
      `
  }
}

export const StyledLink = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  font-size: 18px;
  text-decoration: none;
  ${getContentStyles};
  color: #fff;
  transition: 0.4s;

  &:hover {
    border-radius: 50%;
  }
`

export const StyledXlogo = styled(Xlogo)`
  width: 24px;
  height: auto;
`

export const StyledHatena = styled(Hatena)`
  width: 24px;
  height: auto;
`
