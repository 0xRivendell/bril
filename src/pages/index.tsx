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

export default Home