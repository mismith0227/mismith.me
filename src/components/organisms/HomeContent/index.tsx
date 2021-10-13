import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Tetrahedron } from '@react-three/drei'
import { Container, Title } from './styles'

type Props = {
  onCreated: (value: boolean) => void
}

type queueItem = {
  char?: string
  end: number
  from: string
  start: number
  to: string
}

export const HomeContent = ({ onCreated }: Props) => {
  return (
    <Container>
      <Title>
        Web Developer based in Osaka. I deliver value with front-end technology.
      </Title>
    </Container>
  )
}
