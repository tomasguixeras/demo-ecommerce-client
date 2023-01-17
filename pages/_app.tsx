import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { Provider} from 'react-redux'
import { store } from '../app/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <ChakraProvider resetCSS={false} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </Provider>
  )
}
