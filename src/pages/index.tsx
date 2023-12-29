import { NextPage } from 'next'
import { useDynamicContext, useEmbeddedWallet } from '@dynamic-labs/sdk-react-core'
import { use, useEffect, useState } from 'react'
import { HStack, Heading, Stack, VStack, Text, Input, Button } from '@chakra-ui/react'
// import { Intents } from '@bytekode/intents'

const Home: NextPage = () => {
	
	const [isClient, setIsClient] = useState(false)
 
  	useEffect(() => {
    	setIsClient(true)
  	}, [])
	

	const {  
		isAuthenticated, 
		isFullyConnected, 
		primaryWallet,
		network,
		user,
		setShowAuthFlow
	} = useDynamicContext()

	const { createEmbeddedWallet, userHasEmbeddedWallet } = useEmbeddedWallet()

	const auth = async () => {
		const wallet = await createEmbeddedWallet()
		console.log(wallet)
	}

	useEffect(() => {
		if(isAuthenticated){
			if(!userHasEmbeddedWallet()){
				auth()
			}
		}
	}, [isAuthenticated])

	if(isClient){
		return (
			<Stack w={'100vw'} h={'100vh'} bgColor={'black'} align={'center'} justify={'center'}>
				<Stack>
					<Heading color={'white'} fontFamily={'Major Mono Display'} fontSize={'6xl'}>R</Heading>
					<Text color={'white'} fontFamily={'monospace'}>Welcome to 0xRivendell</Text>
					{
						user ? (
							<Stack>
								<Text>Welcome {user.email}</Text>
							</Stack>
						) : 
						(
							<>
								<Button onClick={() => setShowAuthFlow(true)}>
										Get Started
								</Button>
							</>
						)
					}
					
				</Stack>
			</Stack>
		)
	}

	return (<>Loading...</>)
}

export default Home