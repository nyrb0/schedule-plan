import Settings from './Settings';
import Heading from '@/app/components/ui/Heading';
import { SEO_OFF } from '@/constants/seo.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Settings',
	...SEO_OFF
};

const page = async () => {
	return (
		<div>
			<Heading title='Settings' />
			<Settings />
		</div>
	);
};

export default page;
