import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: '640px', // Small devices (phones, 640px and up)
				md: '768px', // Medium devices (tablets, 768px and up)
				lg: '1024px', // Large devices (desktops, 1024px and up)
				xl: '1280px', // Extra large devices (large desktops, 1280px and up)
				'2xl': '1536px', // 2X large devices (larger desktops, 1536px and up)
			},
		},
	},
	plugins: [],
};

export default config;
