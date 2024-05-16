import styled from '@emotion/styled'

import { Heading } from '@/components/atoms/Heading'
import { Container } from '@/components/organisms/Container'

const StyledContainer = styled(Container)`
  min-height: 30vh;
`

const Title = styled.h1`
  margin: 0;
  font-size: 64px;
`

export const NotFoundContainer = () => (
  <StyledContainer size="lg">
    <Heading>404 Not Found</Heading>
  </StyledContainer>
)
