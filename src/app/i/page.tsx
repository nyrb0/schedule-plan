import { SEO_OFF } from '@/constants/seo.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dasboard',
	...SEO_OFF
};

const Page = async () => {
	return <div></div>;
};

export default Page;
