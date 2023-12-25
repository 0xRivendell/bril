import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/major-mono-display'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider settings={{
      environmentId: `9e91d6fe-e7f0-4152-bd90-b88771f1b9d0`,
      walletConnectors: [EthereumWalletConnectors]
    }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DynamicContextProvider>
  )
}
