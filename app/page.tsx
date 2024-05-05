import AboutUs from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import Process from '@/components/process/Process';
import React, { Fragment } from 'react';

function Home() {
	return (
		<Fragment>
			<Hero />
			<AboutUs />
			<Process />
		</Fragment>
	);
}

export default Home;
