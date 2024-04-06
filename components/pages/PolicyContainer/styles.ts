import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'

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
