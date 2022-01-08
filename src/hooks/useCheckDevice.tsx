import { useEffect, useState } from 'react'

export const useCheckDevice = () => {
  const [isMobile, setIsMobile] = useState<boolean>()
  const [isDesktop, setIsDesktop] = useState<boolean>()

  useEffect(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/Iphone/i)
    ) {
      setIsMobile(true)
      setIsDesktop(false)
    } else {
      setIsMobile(false)
      setIsDesktop(true)
    }
  }, [])

  return {
    isMobile,
    isDesktop
  }
}
