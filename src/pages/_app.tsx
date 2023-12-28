import type { AppProps } from 'next/app'

import { DynamicContextProvider, EvmNetwork } from '@dynamic-labs/sdk-react-core'
import { EthersExtension } from '@dynamic-labs/ethers-v5'

import { ChakraProvider } from '@chakra-ui/react'

import '@fontsource/major-mono-display'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'

const evmNetworks: EvmNetwork[] = [
  {
    blockExplorerUrls: ['https://etherscan.io/'],
    chainId: 1,
    chainName: 'Ethereum Mainnet',
    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
    name: 'Ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    networkId: 1,
    
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    vanityName: 'ETH Mainnet',
  },
{
    blockExplorerUrls: ['https://etherscan.io/'],
    chainId: 5,
    chainName: 'Ethereum Goerli',
    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
    name: 'Ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    networkId: 5,
    rpcUrls: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    
    vanityName: 'Goerli',
  },
  {
    blockExplorerUrls: ['https://polygonscan.com/'],
    chainId: 137,
    chainName: 'Matic Mainnet',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/polygon.svg"],
    name: 'Polygon',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC',
    },
    networkId: 137,
    rpcUrls: ['https://polygon-rpc.com'],    
    vanityName: 'Polygon',
  },
  {
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    chainId: 80001,
    chainName: 'Matic Mumbai',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/polygon.svg"],
    name: 'Mumbai',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC',
    },
    networkId: 137,
    rpcUrls: ['https://polygon-mumbai-bor.publicnode.com'],    
    vanityName: 'Mumbai',
  },
  {
    blockExplorerUrls: ['https://basescan.com/'],
    chainId: 8453,
    chainName: 'Base',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/base.svg"],
    name: 'Base',
    nativeCurrency: {
      decimals: 18,
      name: 'BASE',
      symbol: 'BASE',
    },
    networkId: 8453,
    rpcUrls: ['https://base.publicnode.com'],    
    vanityName: 'Base',
  },
  {
    blockExplorerUrls: ['https://goerli.basescan.com/'],
    chainId: 84531,
    chainName: 'Base Goerli',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/base.svg"],
    name: 'Base Goerli',
    nativeCurrency: {
      decimals: 18,
      name: 'BASE',
      symbol: 'BASE',
    },
    networkId: 84531,
    rpcUrls: ['https://base-goerli.publicnode.com'],    
    vanityName: 'Base Goerli',
  },
  {
    blockExplorerUrls: ['https://sepolia.basescan.com/'],
    chainId: 84532,
    chainName: 'Base Sepolia',
    iconUrls: ["https://app.dynamic.xyz/assets/networks/base.svg"],
    name: 'Base Sepolia',
    nativeCurrency: {
      decimals: 18,
      name: 'BASE',
      symbol: 'BASE',
    },
    networkId: 84531,
    rpcUrls: ['https://sepolia.base.org'],    
    vanityName: 'Base Sepolia',
  },
  // {
  //   blockExpolorerUrls: ['https://mumbai.polygonscan.com/'],
  //   chainId: 80001,
  //   chainName: 'Mumbai',
  //   iconUrls: ["https://app.dynamic.xyz/assets/networks/polygon.svg"],
  //   name: 'Polygon Mumbai',
  //   nativeCurrency: {
  //     decimals: 18,
  //     name: 'MATIC',
  //     symbol: 'MATIC',
  //   },
  //   networkId: 80001,
  //   rpcUrls: ['https://polygon-mumbai-bor.publicnode.com'],
  //   vanityName: 'Mumbai',
  // }
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: `5229c94a-82e8-4fc6-b2ad-8afca1e656e4`,
        walletConnectors: [EthereumWalletConnectors],
        walletConnectorExtensions: [EthersExtension],
        // evmNetworks
      }}
    >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DynamicContextProvider>
  )
}
