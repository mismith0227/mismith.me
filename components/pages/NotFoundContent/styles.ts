import styled from '@emotion/styled'
import media from '@/styles/media'
import { Container } from '@/components/organisms/Container'
import { Search } from '@/components/organisms/Search'

export const StyledContainer = styled(Container)`
  min-height: 30vh;
`

export const Content = styled(Container)`
  margin-top: 180px;

  ${media.small} {
    margin-top: 80px;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 64px;
`

export const StyledSearch = styled(Search)``
