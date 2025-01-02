import { TasksView } from './TasksView';
import Heading from '@/app/components/ui/Heading';
import { SEO_OFF } from '@/constants/seo.constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tasks',
	...SEO_OFF
};

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	);
}
