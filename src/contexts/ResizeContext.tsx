import { createContext, ReactNode, useEffect, useState } from 'react'

interface ResizeContextData {
  isMobile: boolean
}

interface ResizeContextProps {
  children: ReactNode
}

export const ResizeContext = createContext({} as ResizeContextData)

export const ResizeContextProvider = ({ children }: ResizeContextProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    let currentIsMobile = false
    function resizeListener() {
      if (window.innerWidth <= 940 && !currentIsMobile) {
        currentIsMobile = true
      } else if (window.innerWidth >= 940 && currentIsMobile) {
        currentIsMobile = false
      }
      setIsMobile(currentIsMobile)
    }
    resizeListener()

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return (
    <ResizeContext.Provider value={{ isMobile }}>
      {children}
    </ResizeContext.Provider>
  )
}
