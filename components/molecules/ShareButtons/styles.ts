import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { Twitter } from '@/components/atoms/Icon/Twitter'
import { Hatena } from '@/components/atoms/Icon/Hatena'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.large} {
    display: flex;
    justify-content: flex-end;
  }
`

export const Item = styled.li`
  margin-top: 24px;

  &:first-of-type {
    margin-top: 0;
  }

  ${media.large} {
    margin-top: 0;
    margin-right: 24px;
  }
`

interface LinkProps {
  readonly service?: 'twitter' | 'hatena'
}

const getContentStyles = ({ service = 'twitter' }: LinkProps) => {
  switch (service) {
    case 'twitter':
      return css`
        background: #1d9bf0;
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

export const StyledTwitter = styled(Twitter)`
  width: 24px;
  height: auto;
`

export const StyledHatena = styled(Hatena)`
  width: 24px;
  height: auto;
`
