import Header from '../header/profile/Header';
import Sidebar from '../sidebar/Sidebar';
import React, { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren<unknown>) => {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
