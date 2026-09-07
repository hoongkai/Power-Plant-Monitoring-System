export function Monitor() {
  return (
    <group position={[0, 2.05, -0.35]}>
      {/* Monitor body */}
      <mesh castShadow>
        <boxGeometry args={[2.5, 1.6, 0.18]} />
        <meshStandardMaterial color="#171b1e" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[2.25, 1.35, 0.02]} />
        <meshStandardMaterial
          color="#07141a"
          emissive="#062630"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Monitor stand */}
      <mesh position={[0, -1.0, 0]} castShadow>
        <boxGeometry args={[0.18, 0.6, 0.18]} />
        <meshStandardMaterial color="#202428" />
      </mesh>

      {/* Monitor base */}
      <mesh position={[0, -1.3, 0]} castShadow>
        <boxGeometry args={[1.0, 0.12, 0.6]} />
        <meshStandardMaterial color="#202428" />
      </mesh>
    </group>
  )
}