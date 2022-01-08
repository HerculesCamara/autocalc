import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/global'
import lightTheme from '@/styles/themes/lightTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
