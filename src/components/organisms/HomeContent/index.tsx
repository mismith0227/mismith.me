import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Tetrahedron } from '@react-three/drei'
import { Container, Title, Loading } from './styles'

type Props = {}

export const HomeContent = ({}: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const Circle = () => {
    const ref = React.useRef<THREE.Mesh>(null!)
    const [rotation, setRotation] = React.useState<number>(
      Math.random() * Math.PI * 2
    )
    const [distance, setDistance] = React.useState<number>(
      2.5 + Math.random() / 5
    )
    const [speed, setSpeed] = React.useState<number>(Math.random() / 200)

    useFrame(() => {
      ref.current.position.y = Math.sin(rotation) * distance
      ref.current.position.x = Math.cos(rotation) * distance

      ref.current.rotation.z += Math.random() * 0.1
      ref.current.rotation.x += Math.random() * 0.05

      setRotation(rotation - speed)
    })
    // Set receiveShadow on any mesh that should be in shadow,
    // and castShadow on any mesh that should create a shadow.
    return (
      <Tetrahedron
        castShadow
        receiveShadow
        ref={ref}
        position={[0, 0, 0]}
        args={[0.2, 0]}
      >
        <meshStandardMaterial attach="material" color="#888" />
      </Tetrahedron>
    )
  }

  return (
    <Container>
      <Canvas onCreated={() => setIsLoading(false)}>
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        {[...Array(24)].map((item, index) => (
          <Circle key={index} />
        ))}
      </Canvas>

      <Title>Web developer based in Osaka.</Title>

      {isLoading && <Loading>Loading...</Loading>}
    </Container>
  )
}
