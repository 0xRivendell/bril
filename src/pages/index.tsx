import { NextPage } from 'next'
import { useDynamicContext, useEmbeddedWallet } from '@dynamic-labs/sdk-react-core'
import { use, useEffect, useState } from 'react'
import { HStack, Heading, Stack, VStack, Text, Input, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { supabase } from '@/config/supabase'
// import { Intents } from '@bytekode/intents'

const Home: NextPage = () => {
	
	// extract chatId from the url params
    const router = useRouter()
    const chatId = router.query.chatId

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
		setShowAuthFlow,
		handleLogOut
	} = useDynamicContext()

	const { createEmbeddedWallet, userHasEmbeddedWallet } = useEmbeddedWallet()

	const auth = async () => {
		const wallet = await createEmbeddedWallet()
		
		// hit api to add new user to supabase db
		const { data, error } = await supabase
  										.from('test')
  										.insert([
    										{ chat_id: parseInt(chatId as string), wallet_address: wallet?.address },
  										])
  										.select()
		console.log(data, error)
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
								<Button onClick={handleLogOut}>logout</Button>
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