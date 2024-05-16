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

const Container = styled.div`
  ${getTagStyles}
`

const List = styled.li`
  ${getTagStyles}
`

type Props = {
  className?: string
  children: React.ReactNode
  isList?: boolean
}

export const Tag = ({ className, children, isList = false }: Props) =>
  isList ? (
    <List className={className}>{children}</List>
  ) : (
    <Container className={className}>{children}</Container>
  )
