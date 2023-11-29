import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/major-mono-display'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider settings={{
      environmentId: `846dbf00-bb60-4cf1-9797-58b6a1208028`,
      walletConnectors: [EthereumWalletConnectors]
    }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DynamicContextProvider>
  )
}
