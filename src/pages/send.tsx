import { Stack } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'

// will be used for sending and signing transactions
const Send: NextPage = () => {
    
    const [isClient, setIsClient] = useState(false)
 
  	useEffect(() => {
    	setIsClient(true)
  	}, [])
    
    if(isClient){
        return(
            <Stack></Stack>
        )
    }

    return(
        <>Loading...</>
    )
}

export default Send