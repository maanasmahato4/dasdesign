import AboutUs from '@/components/about/About';
import Hero from '@/components/hero/Hero';
import React, { Fragment } from 'react';

function Home() {
	return (
		<Fragment>
			<Hero />
			<AboutUs />
		</Fragment>
	);
}

export default Home;
