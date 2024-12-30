import Heading from '../components/ui/Heading';
import Statistics from './Statistics';
import { SEO_OFF } from '@/constants/seo.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '',
	...SEO_OFF
};

export default function Home() {
	return (
		<div>
			<Heading title='Statics' />
			<Statistics />
		</div>
	);
}
