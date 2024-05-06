import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import NavBar from '@/components/navbar/NavBar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://dasdesign.vercel.com'),
	title: {
		default: 'The DasDesign',
		template: '%s - DasDesign',
	},
	description:
		'We at the dasdesign create the best looking websites for your business',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<Head>
				<meta
					name='google-site-verification'
					content='Aoqh9TJe1jzE-lGdHdsCz03d6YLQm5R-mOSf74ZDJY0'
				/>
			</Head>
			<body className={inter.className}>
				<NavBar />
				<main>{children}</main>
			</body>
		</html>
	);
}
