import Auth from './Auth';
import { SEO_OFF } from '@/constants/seo.constants';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Auth',
	...SEO_OFF
};

const AuthPage = async () => {
	return <Auth />;
};

export default AuthPage;
