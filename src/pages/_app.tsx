import type { AppProps } from 'next/app'

import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthersExtension } from '@dynamic-labs/ethers-v5'

import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/major-mono-display'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: `5229c94a-82e8-4fc6-b2ad-8afca1e656e4`,
        walletConnectors: [EthereumWalletConnectors],
        walletConnectorExtensions: [EthersExtension]
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DynamicContextProvider>
  )
}
