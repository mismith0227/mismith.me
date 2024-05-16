import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'
import { BASE_URL } from '@/settings/siteSettings'
import { Xlogo } from '@/components/atoms/Icon/Xlogo'
import { Hatena } from '@/components/atoms/Icon/Hatena'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.large} {
    display: flex;
    justify-content: flex-end;
    gap: 24px;
  }
`

const Item = styled.li`
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

const StyledLink = styled.a<LinkProps>`
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

const StyledXlogo = styled(Xlogo)`
  width: 24px;
  height: auto;
`

const StyledHatena = styled(Hatena)`
  width: 24px;
  height: auto;
`

type Props = {
  className?: string
  currentCategory: string
  title: string
  contentId: string
}

export const ShareButtons = ({
  className,
  currentCategory,
  title,
  contentId,
}: Props) => {
  const shareUrl = `${BASE_URL}/blog/${currentCategory}/${contentId}`
  const xLink = `https://twitter.com/intent/tweet?text=${title}&url=${shareUrl}`
  return (
    <List className={className}>
      <Item key="x">
        <StyledLink
          aria-label="x share"
          href={xLink}
          target="_blank"
          rel="noopener noreferrer"
          service="x"
        >
          <StyledXlogo />
        </StyledLink>
      </Item>
    </List>
  )
}
