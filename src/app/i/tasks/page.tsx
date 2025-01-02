import TasksView from './TasksView';
import Heading from '@/app/components/ui/Heading';
import { SEO_OFF } from '@/constants/seo.constants';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Tasks',
	...SEO_OFF
};

const TasksPage = () => {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	);
};

export default TasksPage;
