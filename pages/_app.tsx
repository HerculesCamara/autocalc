import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import lightTheme from '@/styles/themes/lightTheme'
import { useCheckDevice } from '@/hooks/useCheckDevice'

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useCheckDevice()

  return (
    <ThemeProvider
      theme={isMobile !== undefined ? { ...lightTheme, isMobile } : lightTheme}
    >
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
