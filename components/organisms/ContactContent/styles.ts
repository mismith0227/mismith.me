import styled from '@emotion/styled'
import media from '@/styles/media'
import { IconList, IconListItem } from '@/components/molecules/IconList'
import { Container } from '@/components/organisms/Container'

export const StyledContainer = styled(Container)``

export const Title = styled.h1`
  margin: 0;
  font-size: 64px;
`

export const Text = styled.p``

export const Content = styled(Container)`
  margin-top: 180px;

  ${media.small} {
    margin-top: 80px;
  }
`

export const Email = styled.p``

export const SnsList = styled.ul`
  display: flex;
  margin: 32px 0 0;
  padding: 0;
  gap: 16px;
  list-style: none;
`

export const SnsItem = styled.li``

export const StyledIconList = styled(IconList)`
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`
