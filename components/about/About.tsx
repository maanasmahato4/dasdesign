import Link from 'next/link';

export default function AboutUs() {
	return (
		<section className='relative grid h-screen grid-rows-4 px-8' id='about'>
			<div className='row-span-3 grid grid-cols-1 items-center gap-x-16 sm:grid-cols-2'>
				<div className='flex h-[10rem] flex-col text-right'>
					<h2 className='text-5xl font-bold'>01</h2>
					<h3 className='text-2xl'>Design Services</h3>
					<p className='text-md'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
						voluptatibus et provident perspiciatis porro sed alias deserunt ipsa
						nulla, asperiores eveniet veritatis distinctio. Ipsa, fuga. Lorem
						ipsum dolor, sit amet consectetur adipisicing elit. Magni cumque
						velit quis aliquid ex numquam? Sequi alias aut fuga exercitationem
						voluptate dolorem inventore molestias quisquam!
					</p>
				</div>
				<div className='flex h-[10rem] flex-col text-left'>
					<h2 className='text-5xl font-bold'>02</h2>
					<h3 className='text-2xl'>Our Services</h3>
					<p className='text-md'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
						in distinctio cumque ad odio fugit alias, suscipit amet sed quod
						neque quae, assumenda minima. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Ipsa molestiae quo, rerum reiciendis
						unde eligendi, molestias debitis, corrupti voluptatibus vel quod
						soluta sit voluptatem animi!
					</p>
				</div>
			</div>
			<div className='row-span-1 flex items-end justify-center sm:items-center md:items-start'>
				<Link href='#contact'>
					<button className='rounded-lg bg-yellow-400 p-4 px-12 hover:bg-yellow-300'>
						Contact Us
					</button>
				</Link>
			</div>
		</section>
	);
}
