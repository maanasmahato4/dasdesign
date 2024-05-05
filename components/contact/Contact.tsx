import Image from 'next/image';
import ConfidentWoman from '@/public/assets/confident-young.webp';

export default function Contact() {
	return (
		<section className='grid grid-rows-7 lg:h-screen' id='contact'>
			<div className='row-span-6 my-4 flex flex-col items-center justify-center gap-y-8 sm:row-span-3 md:my-0'>
				<h3 className='w-[90%] text-center text-4xl font-bold md:w-[70%]'>
					WE COLLABORATE WITH BRANDS AND AGENCIES TO CREATE MEMORABLE
					EXPERIENCES
				</h3>
				<form className='flex flex-col gap-x-4 gap-y-4 md:flex-row md:gap-y-0'>
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
			<div className='row-span-3 hidden flex-col items-center justify-center sm:flex'>
				<div className='absolute -z-50 rounded-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 sm:h-[25rem] sm:w-[25rem]'></div>
				<Image src={ConfidentWoman} alt='' height={350} width={350} />
			</div>
			<footer className='row-span-1 flex h-full items-center justify-center bg-zinc-700 text-center text-white'>
				Copyright DasDesign &copy; 2024 AD
			</footer>
		</section>
	);
}
