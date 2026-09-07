import type { ReactNode } from 'react'

interface DashboardAnchorProps {
  children?: ReactNode
}

export function DashboardAnchor({ children }: DashboardAnchorProps) {
  return (
    <group position={[0, 0, 0]}>
      {children}
    </group>
  )
}