export function Character() {
  return (
    <group position={[0, 0, 2.2]}>
      {/* Body */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <capsuleGeometry args={[0.35, 0.9, 8, 16]} />
        <meshStandardMaterial color="#3d4650" />
      </mesh>

      {/* Head */}
      <mesh position={[0, 2.05, 0]} castShadow>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#c98f6b" />
      </mesh>

      {/* Visor / face */}
      <mesh position={[0, 2.08, 0.27]} castShadow>
        <boxGeometry args={[0.42, 0.16, 0.04]} />
        <meshStandardMaterial
          color="#07141a"
          emissive="#062630"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Left arm */}
      <mesh
        position={[-0.48, 1.15, 0]}
        rotation={[0, 0, -0.15]}
        castShadow
      >
        <capsuleGeometry args={[0.12, 0.65, 8, 12]} />
        <meshStandardMaterial color="#343c44" />
      </mesh>

      {/* Right arm */}
      <mesh
        position={[0.48, 1.15, 0]}
        rotation={[0, 0, 0.15]}
        castShadow
      >
        <capsuleGeometry args={[0.12, 0.65, 8, 12]} />
        <meshStandardMaterial color="#343c44" />
      </mesh>

      {/* Left leg */}
      <mesh position={[-0.18, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
        <meshStandardMaterial color="#20262b" />
      </mesh>

      {/* Right leg */}
      <mesh position={[0.18, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
        <meshStandardMaterial color="#20262b" />
      </mesh>
    </group>
  )
}