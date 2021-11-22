import { useContext } from 'react'

import { ResizeContext } from '@contexts/ResizeContext'

export function useResize() {
  const context = useContext(ResizeContext)

  return context
}
