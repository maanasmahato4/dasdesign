import Link from 'next/link';
import { Home, Users, CandlestickChart, BookHeart, Phone } from 'lucide-react';

export default function NavBar() {
	return (
		<header
			className='flex w-full flex-row items-center justify-center px-8 py-4 md:justify-between'
			id='nav'
		>
			<h3 className='hidden italic md:block'>DasDesign</h3>
			<nav className='flex w-full flex-row justify-evenly sm:hidden'>
				<Link href='#hero' className='hover:text-cyan-600'>
					<Home />
				</Link>
				<Link href='#about' className='hover:text-cyan-600'>
					<Users />
				</Link>
				<Link href='#process' className='hover:text-cyan-600'>
					<CandlestickChart />
				</Link>
				<Link href='#testimonial' className='hover:text-cyan-600'>
					<BookHeart />
				</Link>
				<Link href='#contact' className='hover:text-cyan-600'>
					<Phone />
				</Link>
			</nav>
			<nav className='hidden flex-row gap-x-4 sm:flex'>
				<Link href='#hero' className='hover:text-cyan-600'>
					Home
				</Link>
				<Link href='#about' className='hover:text-cyan-600'>
					About us
				</Link>
				<Link href='#process' className='hover:text-cyan-600'>
					Process
				</Link>
				<Link href='#testimonial' className='hover:text-cyan-600'>
					Testimonials
				</Link>
				<Link href='#contact' className='hover:text-cyan-600'>
					Contact us
				</Link>
			</nav>
		</header>
	);
}
