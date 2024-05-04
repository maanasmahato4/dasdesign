import Link from 'next/link';

export default function NavBar() {
	return (
		<header className='flex w-full flex-row items-center justify-between px-8 py-4 shadow-sm shadow-zinc-300'>
			<h3 className='italic'>DasDesign</h3>
			<nav className='flex flex-row gap-x-4'>
				<Link href='#hero' className='hover:text-cyan-600'>
					Home
				</Link>
				<Link href='#hero' className='hover:text-cyan-600'>
					About us
				</Link>
				<Link href='#hero' className='hover:text-cyan-600'>
					Process
				</Link>
				<Link href='#hero' className='hover:text-cyan-600'>
					Testimonials
				</Link>
				<Link href='#hero' className='hover:text-cyan-600'>
					Contact us
				</Link>
			</nav>
		</header>
	);
}
