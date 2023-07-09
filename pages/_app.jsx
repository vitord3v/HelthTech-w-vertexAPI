// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Header } from "../components/Header";

const colors = {
  brand: {
    900: '#7AEB80',
    800: '#153e75',
    700: '#2a69ac',
  },
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Header />
        
        <Component {...pageProps} />
      
    </ChakraProvider>
  )
}

export default MyApp