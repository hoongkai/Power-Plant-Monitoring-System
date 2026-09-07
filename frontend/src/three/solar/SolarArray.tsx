import { SolarPanel } from './SolarPanel'

export function SolarArray() {
  const rows = 2
  const columns = 4

  return (
    <group position={[0, 0, -5]}>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, column) => (
          <SolarPanel
            key={`${row}-${column}`}
            position={[
              (column - (columns - 1) / 2) * 2.1,
              0,
              row * 1.5,
            ]}
            panelAngle={32}
          />
        )),
      )}
    </group>
  )
}