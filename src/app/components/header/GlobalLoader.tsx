'use client';

import Loader from '../ui/Loader';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import React from 'react';

const GlobalLoader = () => {
	const isMutating = useIsMutating();
	const isFetching = useIsFetching();
	return isFetching || isMutating ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null;
};

export default GlobalLoader;
