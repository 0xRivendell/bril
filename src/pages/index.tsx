import { NextPage } from 'next'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useState } from 'react'
import { HStack, Heading, Stack, VStack, Text, Input, Button } from '@chakra-ui/react'
import { Intents } from '@bytekode/intents'

const Home: NextPage = () => {
	
	const [isLoggedIntoWallet, setIsLoggedIntoWallet] = useState(false)
	const [currentResponseTime, setCurrentResponseTime] = useState(0)

	const [currPrompt, setCurrPrompt] = useState('')
	const [currAddress, setCurrAddress] = useState('')

	const { 
		connectedWallets, 
		isAuthenticated, 
		isFullyConnected, 
		primaryWallet,
		network,
		user
	} = useDynamicContext()

	const calculateResponseTime = async () : Promise<number> => {
		const startTime = performance.now()
		try {

		}
		catch (error) {

		}
		const endTime = performance.now()
		const responseTime = endTime - startTime
		setCurrentResponseTime(responseTime)
		return responseTime
	}

	const getTxObjects = async () => {
		
		const startTime = performance.now()
		const intents = new Intents('test-api-key')

		try {
			const txObjects = await intents.getTransaction(
				'0x01', 
				currPrompt, 
				`0x9e58a68dCE4AE01947FC568feECD1dDc7838DC69`
			)
			console.log(txObjects)
		}
		catch(err){
			console.log(err)
		}
		const endTime = performance.now()
		console.log(endTime - startTime)
	}

	if(user){
		return(
			<div className='bg-cover bg-center h-screen w-screen' style={{ backgroundImage: `url('/bril_background.svg')` }}>
				{/* horizontal stack */}
				<div className='flex justify-between px-8 py-8'>
					<div className='flex items-center space-x-4'>
						<h1 style={{ fontFamily: 'Major Mono Display'}} className='text-6xl'>
							R
						</h1>
						<p className='text-3xl font-mono'>0xRivendell</p>
					</div>
				</div>
				{/* body */}
				<div className='px-8 py-8 space-y-4'>
					<div className='flex items-center justify-center'>
						<h1 className='text-center font-mono text-9xl'>bril</h1>
					</div>
					<div className='flex items-center justify-center'>
						<DynamicWidget />
					</div>
				</div>
				<footer className="fixed inset-x-0 bottom-0 text-center py-16 font-mono">
					engineered by <span className='underline'>0xRivendell</span>
				</footer>
			</div>
		)
	}

	return (
		<div className='bg-cover bg-center h-screen w-screen font-mono' style={{ backgroundImage: `url('/bril_background.svg')` }}>
			<HStack px={[4,8,12]} py={[4]}>
				<Heading fontFamily={'monospace'} color={'white'}>bril.</Heading>
				<span>(powered by 0xRivendell)</span>
			</HStack>
			<Stack px={[4,8,12]} py={[4]} w="100vw">
				<HStack align={'baseline'} spacing={8}>
					<Stack w={'60%'} spacing={4}>
						<Heading>Compute</Heading>
						<Input 
							variant={'fill'} 
							bgColor={'black'} 
							opacity={'0.5'} 
							textColor={'white'}
							placeholder={'Enter your prompt here...'}
							value={currPrompt}
							onChange={(e) => setCurrPrompt(e.target.value)}
						/>
						<Button onClick={getTxObjects}>compute</Button>
					</Stack>
					<Stack>
						<Heading>History</Heading>
					</Stack>
				</HStack>
			</Stack>
		</div>
	)
}

export default Home