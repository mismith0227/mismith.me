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

class TextScramble {
  el: HTMLElement | null
  chars: string
  queue: queueItem[]
  frameRequest?: number
  frame: number
  resolve: (value?: any) => void

  constructor(el: HTMLElement | null) {
    this.el = el
    this.chars = '△⊆∴３________'
    this.update = this.update.bind(this)
    this.queue = []
    this.frameRequest = undefined
    this.frame = 0
    this.resolve = () => {}
  }
  setText(newText: string) {
    if (!this.el) {
      return
    }

    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => (this.resolve = resolve))

    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest)
    }

    this.frame = 0
    this.update()
    return promise
  }
  update() {
    if (!this.el) {
      return
    }

    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

export const HomeContent = ({ onCreated }: Props) => {
  const el = document.getElementById('text')
  const phrases = [
    '▲▲▲',
    'Hello ✋',
    'Web developer based in Osaka',
    'Born in February 1989',
  ]

  if (el) {
    const fx = new TextScramble(el)

    let counter = 0
    const next = async () => {
      await fx.setText(phrases[counter])
      setTimeout(next, 2000)
      counter = (counter + 1) % phrases.length
    }
    next()
  }

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
      <Canvas onCreated={() => onCreated(false)}>
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

      <Title id="text"></Title>
    </Container>
  )
}
