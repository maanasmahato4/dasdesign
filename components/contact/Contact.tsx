import Image from 'next/image';
import ConfidentWoman from '@/public/assets/confident-young.webp';

export default function Contact() {
	return (
		<section className='grid h-screen grid-rows-7' id='contact'>
			<div className='row-span-3 flex flex-col items-center justify-center gap-y-8'>
				<h3 className='w-[70%] text-center text-4xl font-bold'>
					WE COLLABORATE WITH BRANDS AND AGENCIES TO CREATE MEMORABLE
					EXPERIENCES
				</h3>
				<form className='flex flex-row gap-x-4'>
					<input
						type='text'
						placeholder='Enter your Name'
						className='border-2 border-zinc-400 p-2'
					/>
					<input
						type='email'
						placeholder='Enter a Valid Email Address'
						className='border-2 border-zinc-400 p-2'
					/>
					<button className='rounded-lg bg-yellow-400 p-2 px-8 hover:bg-yellow-300'>
						Submit
					</button>
				</form>
			</div>
			<div className='row-span-3 flex flex-col items-center justify-center'>
				<div className='absolute -z-50 h-[25rem] w-[25rem] rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500'></div>
				<Image src={ConfidentWoman} alt='' height={350} width={350} />
			</div>
			<footer className='row-span-1 flex h-full items-center justify-center bg-zinc-700 text-center text-white'>
				Copyright DasDesign &copy; 2024 AD
			</footer>
		</section>
	);
}
