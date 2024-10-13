import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import EvolvingWeb from './EvolvingWeb'
import FloatingSkills from './FloatingSkills'

export default function ThreeJSCanvas() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <EvolvingWeb />
      <FloatingSkills />
    </Canvas>
  )
}
