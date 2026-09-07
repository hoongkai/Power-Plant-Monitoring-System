import { Canvas } from '@react-three/fiber'
import { Ground } from './environment/Ground'
import { ControlDesk } from './environment/ControlDesk'
import { Character } from './character/Character'
import { SolarArray } from './solar/SolarArray'

export function World() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 3, 7],
        fov: 60,
      }}
    >
      <color attach="background" args={['#101820']} />

      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
        castShadow
      />

      <Ground />
      <ControlDesk />
      <Character />
      <SolarArray />
    </Canvas>
  )
}