import { NextPage } from 'next'
import { DynamicWidget } from '@dynamic-labs/sdk-react-core'

const Home: NextPage = () => {
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
			<div>
				
			</div>
		</div>
	)
}

export default Home