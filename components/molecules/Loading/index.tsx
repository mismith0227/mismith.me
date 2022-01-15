import { Container, Back, Triangle } from './styles'
import { Props } from './types'

export const Loading = ({ isLoading }: Props) => {
  return (
    <>
      <Container isLoading={isLoading} />
      <Triangle isLoading={isLoading} />
      <Back isLoading={isLoading} />
    </>
  )
}
