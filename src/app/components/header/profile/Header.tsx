import GlobalLoader from '../GlobalLoader';
import Profile from './Profile';
import React from 'react';

const Header = () => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	);
};

export default Header;
