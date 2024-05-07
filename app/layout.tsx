import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import NavBar from '@/components/navbar/NavBar';
import { GoogleAnalytics } from '@next/third-parties/google';

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
			<head>
				<meta
					name='google-site-verification'
					content='8RzMhk9db5N4rCaNxpLlgPh2Ni8fNdxsYKdqzS6fPis'
				/>
			</head>
			<body className={inter.className}>
				<NavBar />
				<main>{children}</main>
			</body>
			<GoogleAnalytics gaId='G-9798VSMVNZ' />
		</html>
	);
}
