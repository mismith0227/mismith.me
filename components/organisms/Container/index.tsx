import styled from '@emotion/styled'
import { css } from '@emotion/react'
import media from '@/styles/media'

type ContainerProps = {
  size?: 'full' | 'lg' | 'md' | 'sm'
}

const getContentStyles = ({ size = 'md' }: ContainerProps) => {
  switch (size) {
    case 'full':
      return css`
        max-width: 100%;
      `
    case 'lg':
      return css`
        padding-left: 240px;
      `
    case 'md':
      return css`
        padding-left: 240px;
      `
    case 'sm':
      return css`
        padding-left: 240px;
      `
  }
}

const Wrap = styled.div`
  display: block;
  ${getContentStyles};
  padding-top: 120px;
  padding-right: 40px;
  padding-bottom: 120px;

  ${media.medium} {
    padding-left: 200px;
  }

  ${media.small} {
    width: 96%;
    margin: 0 auto;
    padding-right: 0;
    padding-left: 0;
  }
`

type Props = {
  children: React.ReactNode
  className?: string
  size?: 'full' | 'lg' | 'md' | 'sm'
}

export const Container = ({ children, className, size = 'md' }: Props) => (
  <Wrap className={className} size={size}>
    {children}
  </Wrap>
)
