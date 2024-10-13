import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingSkills() {
  const skills = ['Python', 'SQL', 'React', 'Node.js', 'AWS', 'Docker']
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={group}>
      {skills.map((skill, index) => (
        <Text
          key={skill}
          position={[
            Math.sin(index / skills.length * Math.PI * 2) * 5,
            (Math.random() - 0.5) * 2,
            Math.cos(index / skills.length * Math.PI * 2) * 5
          ]}
          fontSize={0.5}
          color="#8b0000"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </group>
  )
}
