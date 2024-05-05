import AboutUs from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import Process from '@/components/process/Process';
import Testimonial from '@/components/testimonial/Testimonial';
import React, { Fragment } from 'react';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';

function Home() {
	return (
		<Fragment>
			<Hero />
			<AboutUs />
			<Process />
			<Testimonial />
			<Contact />
			<button className='fixed bottom-4 left-auto right-4 top-auto rounded-md bg-blue-600 p-2'>
				<Link href='#nav'>
					<ChevronUp />
				</Link>
			</button>
		</Fragment>
	);
}

export default Home;
