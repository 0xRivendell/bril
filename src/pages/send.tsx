import { Stack } from '@chakra-ui/react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// will be used for sending and signing transactions
const Send: NextPage = () => {
    
    const [isClient, setIsClient] = useState(false)
    const { user, isAuthenticated } = useDynamicContext()
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
        }
    },  [isAuthenticated])

    // extract json tx object from the url params

    if(isClient){
        return(
            <Stack>
                {
                    isAuthenticated ? (
                        <>
                        </>
                    ) : (
                        <>
                            hello world
                        </>
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