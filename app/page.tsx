import AboutUs from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import Process from '@/components/process/Process';
import Testimonial from '@/components/testimonial/Testimonial';
import React, { Fragment } from 'react';

function Home() {
	return (
		<Fragment>
			<Hero />
			<AboutUs />
			<Process />
			<Testimonial />
			<Contact />
		</Fragment>
	);
}

export default Home;
