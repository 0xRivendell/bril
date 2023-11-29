import { NextPage } from 'next'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useState } from 'react'

const Home: NextPage = () => {
	
	const [isLoggedIntoWallet, setIsLoggedIntoWallet] = useState(false)
	const [currentResponseTime, setCurrentResponseTime] = useState(0)

	const [currPrompt, setCurrPrompt] = useState('')

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
			<div className='px-8 py-4'>
				<h1>bril.</h1>
			</div>
			<div className='flex px-8'>
				{/* input box + api response goes here */}
				<div className='flex w-1/2 space-x-4'>
					<input type="text" className='bg-gray-700'/>
					<button className='bg-white text-black py-2 px-4'>send</button>
				</div>
				{/* user history goes here */}
				<div>

				</div>
			</div>
		</div>
	)
}

export default Home