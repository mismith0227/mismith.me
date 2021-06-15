import * as React from "react"
import { Link } from "gatsby"
import { Canvas, useFrame } from "@react-three/fiber"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const Box = (props: JSX.IntrinsicElements["mesh"]) => {
    const mesh = React.useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = React.useState(false)
    const [active, setActive] = React.useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={event => setActive(!active)}
        onPointerOver={event => setHover(true)}
        onPointerOut={event => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    )
  }

  return (
    <Layout>
      <Seo title="Home" description="home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <p>
        <Link to="/works/">Works</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
