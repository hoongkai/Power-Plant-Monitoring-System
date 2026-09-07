interface SolarPanelProps {
  panelAngle?: number
  position?: [number, number, number]
}

export function SolarPanel({
  panelAngle = 32,
  position = [0, 0, 0],
}: SolarPanelProps) {
  const angle = (panelAngle * Math.PI) / 180

  return (
    <group position={position} rotation={[angle, 0, 0]}>
      {/* Panel */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.08, 1.1]} />
        <meshStandardMaterial
          color="#172b38"
          metalness={0.6}
          roughness={0.35}
        />
      </mesh>

      {/* Panel surface */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[1.65, 0.02, 0.95]} />
        <meshStandardMaterial
          color="#0b2638"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Support */}
      <mesh position={[0, -0.35, 0]} castShadow>
        <boxGeometry args={[0.12, 0.7, 0.12]} />
        <meshStandardMaterial color="#555d63" />
      </mesh>
    </group>
  )
}