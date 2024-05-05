import Image from 'next/image';
import heroBg from '@/public/assets/hero.webp';

export default function Hero() {
	return (
		<section
			className='relative flex h-screen flex-col items-center justify-center'
			id='hero'
		>
			<Image className='-z-10 blur-sm' fill src={heroBg} alt='' />
			<div className='flex w-[80%] flex-col justify-center gap-y-8 sm:w-[40%]'>
				<h1 className='w-[80%] text-5xl text-white md:w-[65%]'>
					WE HELP SMALL BUSINESSES AND CORPORATIONS
				</h1>
				<p className='rounded-sm bg-yellow-300 p-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
					laborum. Sit voluptas dolorum quod nobis architecto veniam doloremque
					odio distinctio!
				</p>
			</div>
		</section>
	);
}
