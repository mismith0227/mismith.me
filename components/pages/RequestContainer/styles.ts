import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'
import { IconList, IconListItem } from '@/components/molecules/IconList'

export const StyledContainer = styled(Container)``

export const Content = styled.div`
  margin: 80px 0 0;
  max-width: 650px;

  ${media.small} {
    margin-top: 80px;
  }
`

export const Section = styled.section`
  margin: 160px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

export const SectionTitleSecondary = styled.h4`
  font-size: 24px;
`

export const Text = styled.p``

export const Email = styled.p``

export const StyledIconList = styled(IconList)`
  margin: 32px 0 0;
`

export const StyledIconListItem = styled(IconListItem)``

export const ExternalLink = styled.a`
  display: block;
  color: #000;
`
