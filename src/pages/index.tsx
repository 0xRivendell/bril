import { NextPage } from 'next'
import { DynamicWidget } from '@dynamic-labs/sdk-react-core'

const Home: NextPage = () => {
	return(
		<div className='bg-[#0E0D0D, #0E0D0DCC] h-screen w-screen'>
			<div className='flex justify-between px-8 py-8'>
				<h1>0xRivendell x Dynamic</h1>
				<div>
					<DynamicWidget/>
				</div>
			</div>
		</div>
	)
}

export default Home