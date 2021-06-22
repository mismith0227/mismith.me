import * as React from 'react'
import { Container, Back, Triangle } from './styles'

type Props = {
  isLoading: boolean
}

export const Loading = ({ isLoading }: Props) => {
  return (
    <>
      <Container isLoading={isLoading} />
      <Triangle isLoading={isLoading} />
      <Back isLoading={isLoading} />
    </>
  )
}
