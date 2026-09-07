import { Group } from 'three'

export function ControlDesk() {
  return (
    <group position={[0, 0, 0]}>
      {/* Desk top */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.2, 1.2]} />
        <meshStandardMaterial color="#343a40" />
      </mesh>

      {/* Left leg */}
      <mesh position={[-1.3, 0.55, 0]} castShadow>
        <boxGeometry args={[0.2, 1, 1]} />
        <meshStandardMaterial color="#202428" />
      </mesh>

      {/* Right leg */}
      <mesh position={[1.3, 0.55, 0]} castShadow>
        <boxGeometry args={[0.2, 1, 1]} />
        <meshStandardMaterial color="#202428" />
      </mesh>

      {/* Front control panel */}
      <mesh position={[0, 0.75, -0.5]} castShadow>
        <boxGeometry args={[2.6, 0.45, 0.15]} />
        <meshStandardMaterial color="#1c2226" />
      </mesh>
    </group>
  )
}