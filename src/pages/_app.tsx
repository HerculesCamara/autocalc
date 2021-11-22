import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { Footer } from '@components/Footer'

import { ResizeContextProvider } from '@contexts/ResizeContext'

import GlobalStyles from '@styles/global'
import lightTheme from '@styles/themes/lightTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResizeContextProvider>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </ResizeContextProvider>
  )
}
export default MyApp
