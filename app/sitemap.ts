import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https:dasdesign.vercel.com',
			lastModified: new Date(),
		},
	];
}
