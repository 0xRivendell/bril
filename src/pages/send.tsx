import { Stack, Text } from '@chakra-ui/react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// will be used for sending and signing transactions
const Send: NextPage = () => {
    
    const [isClient, setIsClient] = useState(false)
    const { user, isAuthenticated, primaryWallet } = useDynamicContext()
    const [txHash, setTxHash] = useState('') 
    
    // extract json tx object from the url params
    const router = useRouter()
    const tx = router.query.tx

    console.log(tx)

  	useEffect(() => {
    	setIsClient(true)
  	}, [])
    
    useEffect(() => {
        if(isClient){
            if(!isAuthenticated){
                window.location.href = '/'
            }
            else {
                // execute the transaction
                executeTransaction()
            }
        }
    },  [isAuthenticated])


    const executeTransaction = async () => {
        // sign and send the transaction
        const signer = await primaryWallet?.connector.ethers?.getSigner()
        const txHash = await signer?.sendTransaction(JSON.parse(tx as string))
        setTxHash(txHash?.hash as string)
    }

    if(isClient){
        return(
            <Stack bgColor={'black'} h={'100vh'} w={'100vw'}>
                You're authenticated too
                {
                    txHash && (
                        <Text>{txHash}</Text>
                    )
                }
            </Stack>
        )
    }

    return(
        <>Loading...</>
    )
}

export default Send