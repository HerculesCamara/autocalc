import { ReactNode } from 'react'

import { CardContainer } from './styles'

interface MaindCardProps {
  children: ReactNode
}

export function MainCard({ children }: MaindCardProps) {
  return <CardContainer>{children}</CardContainer>
}
