import { GlobalStyle } from '../assets/styles/globals'
import type { AppProps } from 'next/app'
import { theme, themeMui } from '../assets/styles/theme'
import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import { ThemeProvider } from 'styled-components'
import RouterLoader from '../components/UI/RouterLoader'
import 'react-toastify/dist/ReactToastify.css'
import { wrapper } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ThemeProviderMui theme={themeMui}>
          <RouterLoader />
          <Component {...pageProps} />
        </ThemeProviderMui>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)