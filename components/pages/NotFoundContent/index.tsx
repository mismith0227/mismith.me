import { Content, StyledContainer, StyledSearch } from './styles'
import { Heading } from '@/components/atoms/Heading'

export const NotFoundContent = () => (
  <StyledContainer size="lg">
    <Heading>404 Not Found</Heading>

    <Content>
      <StyledSearch />
    </Content>
  </StyledContainer>
)
